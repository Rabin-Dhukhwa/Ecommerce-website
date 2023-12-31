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

//addCategoryAction for add and update category
export const addCategoryAction =
  ({ slug, ...rest }) =>
  (dispatch) => {
    try {
      //merge true will merge the updated data instead of replacing  new data only
      // console.log(rest);
      const pending = setDoc(doc(db, TB_CATEGORY, slug), rest, { merge: true });
      // if (rest.update) {
      //   slug = rest.name;
      //   dispatch(deleteCat(slug));
      // }
      // const pending = setDoc(doc(db, TB_CATEGORY, slug), rest, { merge: true });

      // console.log(pending);

      toast.promise(pending, {
        pending: "please wait",
        success: "Category database has been updated",
        error: "Unable to process your request, please try again later",
      });
      dispatch(fetchAllCategoryAction());
      dispatch(setModalShow(false));
    } catch (error) {
      toast.error(error.message);
    }
  };
export const fetchAllCategoryAction = () => async (dispatch) => {
  try {
    //read all data from the TB_CATEGORY
    const q = query(collection(db, TB_CATEGORY));
    const catSnap = await getDocs(q);
    // console.log(catSnap);

    const catList = [];
    //can use forEach() in catSnap, predefined in catSnap object return by firebase
    catSnap.forEach((doc) => {
      // console.log(doc);
      const slug = doc.id;
      const data = doc.data();
      // console.log(data);
      catList.push({ ...data, slug });
      // console.log(catList);
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
