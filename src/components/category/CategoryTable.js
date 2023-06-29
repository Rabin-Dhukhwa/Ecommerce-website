import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { EditCatForm } from "./EditCatForm";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCat } from "../../pages/category/catSlice";
import { setModalShow } from "../../system-state/systemSlice";
import { CustomModal } from "../customModal/CustomModal";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const [display, setDisplay] = useState([]);
  const { catList } = useSelector((state) => state.category);

  useEffect(() => {
    setDisplay(catList);
  }, [catList]);

  const handleOnEdit = (item) => {
    dispatch(setSelectedCat(item));
    dispatch(setModalShow(true));
  };
  const handleOnSearch = (e) => {
    const { value } = e.target;

    setDisplay(
      catList.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    // <div>
    //   <CustomModal title="Update Category">
    //     <EditCatForm />
    //   </CustomModal>
    //   <Table striped bordered hover>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Status</th>
    //         <th>Name</th>
    //         <th>Slug</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {display.map((item, i) => (
    //         <tr key={item.slug}>
    //           <td>{i + 1}</td>
    //           <td>
    //             <span className={item.status}>{item.status}</span>
    //           </td>
    //           <td>{item.name}</td>
    //           <td>{item.slug}</td>
    //           <td>
    //             <Button variant="warning" onClick={() => handleOnEdit(item)}>
    //               Edit
    //             </Button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </div>

    // -------------
    <div className="mt-5">
      <CustomModal title="Update Category">
        <EditCatForm />
      </CustomModal>
      <div className="w-25 mb-3">
        <Form.Control onChange={handleOnSearch} placeholder="Search by name" />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Status</th>
            <th> Name</th>
            <th>Slug </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {display.map((item, i) => (
            <tr key={item.slug}>
              <td>{i + 1}</td>
              <td>
                <span className={item.status}>{item.status}</span>
              </td>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
