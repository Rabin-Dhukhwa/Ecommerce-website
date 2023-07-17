import { useSelector } from "react-redux";

export const CurrentPayment = () => {
  const { paymentOptions } = useSelector((state) => state.paymentOptions);
  const paymentOptionsArray = Object.entries(paymentOptions);
  //   console.log(paymentOptions);
  //   console.log(paymentOptionsArray);

  return (
    <div className="border p-1 shadow-lg rounded mt-3">
      <h1>Payment Methods</h1>
      <ul>
        {paymentOptionsArray.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
