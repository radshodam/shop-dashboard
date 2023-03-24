import React, { useState } from "react";
import { products, userRows } from "../../data/data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

import "./productList.css";

function Products() {
  const [productData, setProductData] = useState(products);
  const productDelete = (productID) => {
    setProductData(productData.filter((product) => product.id !== productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "title",
      headerName: "title",
      width: 240,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img
                src={params.row.avatar}
                title={params.row.title}
                className="userListImg"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "price",
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
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <MdOutlineDelete
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={productData}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default Products;
