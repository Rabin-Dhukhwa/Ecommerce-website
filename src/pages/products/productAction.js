import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { TB_PRODUCT } from "../../utils/constant";
import { setProductList, setSelectedProduct } from "./productSlice";
import { db } from "../../config/config";

export const addProductAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const pending = setDoc(doc(db, TB_PRODUCT, slug), rest, { merge: true });
      toast.promise(pending, {
        pending: "please wait",
        success: "Product database has been updated",
        error: "Unable to process your request, Pelase try again later",
      });
      dispatch(fetchAllProductAction());
      dispatch(fetchSingleProductAction(slug));
    } catch (error) {
      toast.error(error.message);
    }
  };

export const fetchAllProductAction = () => async (dispatch) => {
  try {
    //read all data from the TB_PRODUCT
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

export const fetchSingleProductAction = (id) => async (dispatch) => {
  try {
    //     //read single data from the TB_PRODUCT

    const productSanp = await getDoc(doc(db, TB_PRODUCT, id));
    // console.log(productSanp);

    const data = productSanp.data();
    console.log(data);
    dispatch(setSelectedProduct({ ...data, slug: id }));
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteProduct = (slug) => async (dispatch) => {
  try {
    const pending = deleteDoc(doc(db, TB_PRODUCT, slug));

    toast.promise(pending, {
      pending: "Please wait while deleting..",
      success: "Product has been deleted",
      error:
        "Unable to delete the product, please try again later or contact admin",
    });

    await pending;

    dispatch(fetchAllProductAction());

    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
