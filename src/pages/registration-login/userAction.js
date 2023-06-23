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
      createAdminUser({ ...obj, id: user.uid });
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const createAdminUser = async ({ id, ...userInfo }) => {
  try {
    //addDoc
    await setDoc(doc(db, "users", id), userInfo);
    toast.success("New admin user has been created. You may login now!");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const getUserAction = (uid) => async (dispatch) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const user = userSnap.data();

      dispatch(setUser({ ...user, uid }));
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export const signInUserAction =
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

      user.uid && dispatch(getUserAction(user.uid));
    } catch (error) {
      toast.error(error.message);
    }
  };
