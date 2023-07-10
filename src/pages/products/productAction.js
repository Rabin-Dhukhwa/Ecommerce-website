import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { TB_PRODUCT } from "../../utils/constant";
import { setProductList } from "./productSlice";
import { setModalShow } from "../../system-state/systemSlice";
import { db } from "../../config/config";

export const addProductAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const pending = setDoc(doc(db, TB_PRODUCT, slug), rest, { merge: true });
      toast.promise(pending, {
        pending: "please wait",
        success: "Product database has been upadated",
        error: "Unable to process your request, Pelase try again later",
      });
      dispatch(fetchAllProductAction());
    } catch (error) {
      toast.error(error.message);
    }
  };

export const fetchAllProductAction = () => async (dispatch) => {
  try {
    //read all data from the TBL_PRODUCT
    const q = query(collection(db, TB_PRODUCT));
    const productSanp = await getDocs(q);

    const productList = [];

    productSanp.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();

      productList.push({ ...data, slug });
    });
    dispatch(setProductList(productList));
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteCat = (slug) => (dispatch) => {
  try {
    const pending = deleteDoc(doc(db, TB_PRODUCT, slug));

    toast.promise(pending, {
      pending: "Please wait while deleting..",
      success: "Product has been deleted",
      error:
        "Unable to delete the product, please try again later or contact admin",
    });

    dispatch(setModalShow(false));
    dispatch(fetchAllProductAction());
  } catch (error) {
    toast.error(error.message);
  }
};
