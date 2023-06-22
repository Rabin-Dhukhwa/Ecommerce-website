import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/config";

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
