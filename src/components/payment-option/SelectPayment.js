import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPaymentAction } from "../../pages/payment-option/PaymentAction";
// import { FaCcVisa } from "react-icons/fa";

export const SelectPayment = () => {
  const dispatch = useDispatch();
  const [selectedPayments, setSelectedPayments] = useState([]);

  const handlePaymentChange = (event) => {
    const { value } = event.target;

    // Check if the payment option is already selected
    const isSelected = selectedPayments.includes(value);

    // Update the selectedPayments state based on checkbox selection
    if (isSelected) {
      setSelectedPayments(
        selectedPayments.filter((payment) => payment !== value)
      );
    } else {
      setSelectedPayments([...selectedPayments, value]);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(selectedPayments);
    dispatch(addPaymentAction(selectedPayments));
  };

  //   console.log(selectedPayments);
  return (
    <Form
      className="border p-3 shadow-lg rounded mt-3 "
      onSubmit={handleOnSubmit}
    >
      <h5>Update Payment Methods</h5>
      <hr />

      <Form.Group className="mb-2">
        <Form.Check
          type="checkbox"
          id="radioSelect1"
          label="Visa/Mastercard"
          value="Visa/Mastercard"
          // checked={selectedPayments.includes("visa/mastercard")}
          onChange={handlePaymentChange}
        />
      </Form.Group>
      <div className="mb-5">
        <i className="fa-brands fa-cc-visa fa-2xl"></i>
        <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
      </div>
      <Form.Group className="mb-2">
        <Form.Check
          type="checkbox"
          id="radioSelect2"
          label="Paypal"
          value="Paypal"
          // checked={selectedPayments.includes("paypal")}
          onChange={handlePaymentChange}
        />
      </Form.Group>
      <div className="mb-5">
        <i className="fa-brands fa-cc-paypal fa-2xl"></i>
      </div>
      <Form.Group className="mb-2">
        <Form.Check
          type="checkbox"
          id="radioSelect3"
          label="Google Pay"
          value="Google-Pay"
          // checked={selectedPayments.includes("googlepay")}
          onChange={handlePaymentChange}
        />
      </Form.Group>
      <div className="mb-5">
        <i className="fa-brands fa-google-pay fa-2xl"></i>
      </div>
      <Form.Group className="mb-2">
        <Form.Check
          type="checkbox"
          id="radioSelect4"
          label="Apple Pay"
          value="Apple-Pay"
          onChange={handlePaymentChange}
        />
      </Form.Group>
      <div className="mb-5">
        <i className="fa-brands fa-cc-apple-pay fa-2xl"></i>
      </div>
      <div className="d-grid">
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
