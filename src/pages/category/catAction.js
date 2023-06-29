import { toast } from "react-toastify";
import { TB_CATEGORY } from "../../utils/constant";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/config";
import { setCatList } from "./catSlice";
import { setModalShow } from "../../system-state/systemSlice";

export const addCategoryAction =
  ({ slug, ...rest }) =>
  (dispatch) => {
    try {
      const pending = setDoc(doc(db, TB_CATEGORY, slug), rest, { merge: true });

      toast.promise(pending, {
        pending: "please wait",
        success: "Category database has been updated",
        error: "Unable to process your request, please try again later",
      });
      dispatch(fetchAllCategoryAction());
    } catch (error) {
      toast.error(error.message);
    }
  };
export const fetchAllCategoryAction = () => async (dispatch) => {
  try {
    //read all data from the TB_CATEGORY
    const q = query(collection(db, TB_CATEGORY));
    const catSnap = await getDocs(q);
    console.log(catSnap);

    const catList = [];
    catSnap.forEach((doc) => {
      // console.log(doc);
      const slug = doc.id;
      const data = doc.data();
      catList.push({ ...data, slug });
      console.log(catList);
    });
    dispatch(setCatList(catList));
  } catch (error) {
    toast.error(error.message);
  }
};
export const deleteCat = (slug) => (dispatch) => {
  try {
    const pending = deleteDoc(doc(db, TB_CATEGORY, slug));

    toast.promise(pending, {
      pending: "Please wait while deleting..",
      success: "Category has been deleted",
      error:
        "Unable to delete the category, please try again later or contact admin",
    });

    dispatch(setModalShow(false));
    dispatch(fetchAllCategoryAction());
  } catch (error) {
    toast.error(error.message);
  }
};
