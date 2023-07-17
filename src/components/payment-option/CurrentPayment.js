import { useSelector } from "react-redux";

export const CurrentPayment = () => {
  const { paymentOptions } = useSelector((state) => state.paymentOptions);
  //   const paymentOptionsArray = Object.values(paymentOptions);
  //changing object into array format to loop
  const paymentOptionsArray = Object.entries(paymentOptions);
  //   console.log(paymentOptions);
  //   console.log(paymentOptionsArray);

  return (
    <div className="border p-1 shadow-lg rounded mt-3">
      <h5>Payment Methods In Use</h5>
      <hr />
      <ul>
        {paymentOptionsArray.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
