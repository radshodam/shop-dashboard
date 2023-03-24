import React, { useState } from "react";
import { userRows } from "../../data/data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

import "./userList.css";

function Users() {
  const [userData, setUserData] = useState(userRows);
  const userDelete = (userID) => {
    setUserData(userData.filter((user) => user.id !== userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "user",
      headerName: "User",
      width: 240,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                title={params.row.username}
                className="userListImg"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 240,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        // console.log("params", params);
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <MdOutlineDelete
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default Users;
