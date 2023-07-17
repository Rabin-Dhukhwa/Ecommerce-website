import { toast } from "react-toastify";
import { TB_PAYMENT } from "../../utils/constant";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/config";
import { setSelectedPaymentOptions } from "./paymentSlice";

export const addPaymentAction = (data) => (dispatch) => {
  try {
    const pending = setDoc(doc(db, TB_PAYMENT, "payment-options"), { ...data });

    toast.promise(pending, {
      pending: "please wait",
      success: "Payment option database has been updated",
      error: "Unable to process your request, please try again later",
    });

    dispatch(fetchPaymentAction("payment-options"));
  } catch (error) {
    toast.error(error.message);
  }
};

export const fetchPaymentAction = (id) => async (dispatch) => {
  try {
    //read single data from the TB_PAYMENT

    const paymentSanp = await getDoc(doc(db, TB_PAYMENT, "payment-options"));

    const data = paymentSanp.data();
    console.log(data);

    dispatch(setSelectedPaymentOptions(data));
  } catch (error) {
    toast.error(error.message);
  }
};
