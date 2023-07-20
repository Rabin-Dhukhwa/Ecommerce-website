// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";

// export const OrderTable = () => {
//   const dispatch = useDispatch();
//   const [display, setDisplay] = useState([]);
//   const { productList } = useSelector((state) => state.products);
//   const dummyOrderCustomer = ["Harry Richard", "Robin Tiger", "Sujan khan"];

//   console.log(productList);
//   //   const updatedProductList = productList.filter(
//   //     (productInfo) => productInfo.parent
//   //   );
//   const updatedThreeList = productList.filter((product, i) => {
//     return i < 3;
//   });
//   console.log(updatedThreeList);

//   useEffect(() => {
//     setDisplay(productList);
//   }, [productList, dispatch]);

//   // console.log(allAdminsList);
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Address</th>
//           <th>Price</th>
//           <th>Product</th>
//         </tr>
//       </thead>
//       <tbody>
//         {display.map((item, i) => (
//           <tr key={item.slug}>
//             <td>{i + 1}</td>
//             <td>{item.fName}</td>
//             <td>{item.lName}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td>{item.address}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };
