import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import TabularData from "../../../components/Table";

import PaymentColumn from "../../../components/Table/PaymentColumn";
import { StatusColumn } from "../../../components/Table/StatusColumn";

function sortDates(v1, v2) {
  const date1 = new Date(v1);
  const date2 = new Date(v2);

  return date2 - date1;
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "User", headerName: "User", width: 130, flex: null },
  {
    field: "Date",
    headerName: "Date",
    align: "center",
    headerAlign: "center",
    flex: null,
    sortComparator: (v1, v2) => sortDates(v1, v2),
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
    renderCell: (cellValues) => {
      return StatusColumn(cellValues);
    },
  },
  {
    field: "paymentVerify",
    headerName: "Payment",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: null,
    renderCell: (cellValues) => {
      return PaymentColumn(cellValues);
    },
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

export const Dispatched = (props) => {
  let orders = [];
  props.orders.forEach((user) => {
    user.orders.forEach((order) => {
      const temp = {
        User: `${user.firstName} ${user.lastName}`,
        Amount: order.payment.amount,
        orderId: order.orderId,
        Date: order.CreatedAt,
        status: order.status,
        paymentVerify: order.payment.status,
      };
      orders.push(temp);
    });
  });
  const datarows = orders.filter((row) => {
    return row.status === "DISPATCHED";
  });
  return (
    <>
      <TabularData rows={datarows} columns={columns} height={550} />
    </>
  );
};

Dispatched.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  orders: state.Order.orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dispatched);
