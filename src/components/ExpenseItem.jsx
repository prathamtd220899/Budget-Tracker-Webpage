import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between  align-items-center text-info fs-5">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3 text-white fs-6 text-bg-primary rounded-4">₹{props.cost}</span>
        <TiDelete size="1.5em" className="text-danger" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
