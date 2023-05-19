import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import TabularData from "../../../components/Table";
import {rows} from '../../../components/Table/demoData'
function sortDates(v1, v2) {
  
  const date1 = new Date(v1);
  const date2 = new Date(v2);

    return date2 - date1; 
  
}


const columns = [
  { field: "id", headerName: "ID", width: 70, },
  { field: "User", headerName: "User", width: 130, flex: null },
  {
    field: "Date",
    headerName: "Date",
    align: "center",
    headerAlign: "center",
    flex: null,
    sortComparator: (v1, v2) => sortDates(v1, v2)
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "number",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: null,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: null,
  },
  {
    field: "paymentVerify",
    headerName: "Payment",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: null,
  },
  {
    field: "orderid",
    headerName: "Order Id",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.orderId || ""}`,
    headerAlign: "center",
    align: "center",
    flex: null,
  },
];


const datarows = rows.filter((row) => {
    return row.status === "Accepted";
  });

export const Accepted = (props) => {
  return (
    <>
      <TabularData rows={datarows} columns={columns} height={550} />
    </>
  );
};

Accepted.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Accepted);
