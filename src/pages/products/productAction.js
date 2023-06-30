import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "../../config/config";
import { toast } from "react-toastify";
import { setProduct } from "./productSlic";

export const fethProductsAction = () => async (dispatch) => {
  try {
    //get all categories from firstore and mount in the redux
    const q = query(collection(db, "products"));
    const prodSnapshot = await getDocs(q);

    console.log(prodSnapshot);

    let prods = [];

    prodSnapshot.forEach((doc) => {
      const prod = { ...doc.data() };
      prods.push(prod);
    });

    dispatch(setProduct(prods));
  } catch (error) {
    console.log(error);
  }
};

export const addNewProductAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      await setDoc(doc(db, "products", slug), rest);

      toast.success("New product has been added");
    } catch (error) {
      console.log(error);
    }
  };
