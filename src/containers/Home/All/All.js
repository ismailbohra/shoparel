import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TabularData from "../../../components/Table";
import PaymentColumn from "../../../components/Table/PaymentColumn";
import { StatusColumn } from "../../../components/Table/StatusColumn";
import { getOrderReqAction } from "../../../redux/Order/OrderAction";
import Auth from "../../../utils/Auth";

function sortDates(v1, v2) {
  const date1 = new Date(v1);
  const date2 = new Date(v2);

  return date2 - date1;
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "User", headerName: "User", width: 130, flex: 1 },
  {
    field: "Date",
    headerName: "Date",
    align: "center",
    headerAlign: "center",
    flex: 1,
    sortComparator: (v1, v2) => sortDates(v1, v2),
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "number",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    headerAlign: "center",
    align: "center",
    flex: 1,
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
    flex: 1,
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
    flex: 1,
  },
];

export const All = (props) => {
  useEffect(() => {
    if (Auth.getRoles().some((obj) => obj.user_type == "admin")) {
      props.getOrderReq({}, () => {});
    } else {
      props.getOrderReq({userId:Auth.getData().userId}, () => {});
    }
  }, []);
  return (
    <>
      <TabularData rows={props.orders} columns={columns} height={550} />
    </>
  );
};

All.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  orders: state.Order.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderReq: bindActionCreators(getOrderReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(All);
