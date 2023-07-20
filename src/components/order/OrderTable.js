import React from "react";
import { Table } from "react-bootstrap";

export const OrderTable = () => {
  const OrderCustomer = [
    {
      name: "Harry",
      email: "harry.kite@gmail.com",
      phone: 424521568,
      address: "2 Ross road,Crestwood NSW 2620",
      product: "Google TV",
      quantity: 2,
      price: 1200,
    },
    {
      name: "John",
      email: "john23@gmail.com",
      phone: 424521526,
      address: "4 Railway parade,Hurstville NSW 2020",
      product: "Canon EOS Rebel",
      quantity: 1,
      price: 3000,
    },
    {
      name: "Garry",
      email: "garry1920@gmail.com",
      phone: 453521568,
      address: "67 Derrima Road,Crestwood, NSW 2020",
      product: "Hisense Ultimate",
      quantity: 2,
      price: 200,
    },
  ];

  // console.log(allAdminsList);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {OrderCustomer.map((item, i) => (
          <tr key={item.slug}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.product}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
