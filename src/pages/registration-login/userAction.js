import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, db } from "../../config/config";
import { setUser } from "./userSlice";

export const createNewAdminAuth = async (obj) => {
  try {
    //create user auth in frirebase
    const respPending = createUserWithEmailAndPassword(
      auth,
      obj.email,
      obj.password
    );

    toast.promise(respPending, {
      pending: "Please wait ... ",
    });

    const { user } = await respPending;

    if (user?.uid) {
      //store user info in firstore db
      createAdminUser(user.uid, obj);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const createAdminUser = async (id, adminUserInfo) => {
  try {
    //addDoc
    await setDoc(doc(db, "adminUsers", id), adminUserInfo);
    toast.success("New admin user has been created. You may login now!");
  } catch (error) {
    // console.log(error);
    toast.error(error.message);
  }
};

export const loginAdminUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const pendingLoging = signInWithEmailAndPassword(auth, email, password);
      toast.promise(pendingLoging, {
        pending: "Please wait...",
        success: "successfully signin",
      });

      const { user } = await pendingLoging;
      console.log(user);

      //get user data from the database and add to the redux
      user?.uid && dispatch(getUserProfile(user.uid));
    } catch (error) {
      toast.error(error.message);
    }
  };

export const getUserProfile = (uid) => async (dispatch) => {
  try {
    //get user from firebase database
    const userSnap = await getDoc(doc(db, "adminUsers", uid));

    if (userSnap.exists()) {
      const user = userSnap.data();

      dispatch(setUser({ ...user, uid }));
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
