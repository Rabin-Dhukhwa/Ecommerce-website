import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/config";
import { TB_ADMIN } from "../../utils/constant";
import { toast } from "react-toastify";
import { setAdminList } from "./adminSlice";

export const getAllAdminAction = () => async (dispatch) => {
  try {
    //read all data from the TB_ADMIN
    const q = query(collection(db, TB_ADMIN));
    const adminSnap = await getDocs(q);
    console.log(adminSnap);

    const adminList = [];
    //can use forEach() in adminSnap, predefined in adminSnap object return by firebase
    adminSnap.forEach((doc) => {
      // console.log(doc);
      const slug = doc.id;
      const data = doc.data();
      const { password, ...rest } = data;
      // console.log(data);
      adminList.push({ ...rest, slug });
      // console.log(adminList);
    });
    console.log(adminList);
    dispatch(setAdminList(adminList));
  } catch (error) {
    toast.error(error.message);
  }
};
