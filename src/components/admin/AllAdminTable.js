import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const AllAdminTable = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState([]);
  const { allAdminsList } = useSelector((state) => state.allAdmins);

  useEffect(() => {
    setDisplay(allAdminsList);
  }, [allAdminsList, dispatch]);

  // console.log(allAdminsList);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {display.map((item, i) => (
          <tr key={item.slug}>
            <td>{i + 1}</td>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
