import { Box, Typography, Stack, Button, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { connect, useSelector } from "react-redux";
import Image from "../../components/image/Image";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { bindActionCreators } from "redux";
import { addToCartAction, clearCartAction } from "../../redux/Cart/Action";
import { useEffect } from "react";
import {
  getProductByIdReqAction,
  updateProductReqAction,
} from "../../redux/Product/ProductAction";
import { updateOrderReqAction } from "../../redux/Order/OrderAction";

function incOrderObject(originalOrder, productToUpdate) {
  const updatedOrder = { ...originalOrder };

  if (
    updatedOrder &&
    updatedOrder.productList &&
    Array.isArray(updatedOrder.productList)
  ) {
    const matchedProduct = updatedOrder.productList.find(
      (product) => product._id === productToUpdate._id
    );

    if (matchedProduct) {
      matchedProduct.quantity += 1;
    }
  }

  return updatedOrder;
}
function decOrderObject(originalOrder, productToUpdate) {
  const updatedOrder = { ...originalOrder };

  if (
    updatedOrder &&
    updatedOrder.productList &&
    Array.isArray(updatedOrder.productList)
  ) {
    const matchedProduct = updatedOrder.productList.find(
      (product) => product._id === productToUpdate._id
    );

    if (matchedProduct) {
      matchedProduct.quantity -= 1;
    }
  }

  return updatedOrder;
}

export const ProductForm = (props) => {
  const productList = props.products;
  useEffect(() => {
    let productIds = [];
    props.order[0].productList.forEach((element) => {
      productIds.push(element.productId);
    });
    props.getProductById({ productIds }, () => {});
  }, [props.order]);

  const handleDecrement = (element) => {
    const obj = decOrderObject(props.order[0], element, 1);
    obj.payment.amount=parseInt(obj.payment.amount)-parseInt(element.price)
    obj.payment.remaining=parseInt(obj.payment.remaining)-parseInt(element.price)
    props.updateOrder(obj, () => {});
  };
  const handleIncrement = (element) => {
    const obj = incOrderObject(props.order[0], element, 1);
    obj.payment.amount=parseInt(obj.payment.amount)+parseInt(element.price)
    obj.payment.remaining=parseInt(obj.payment.remaining)+parseInt(element.price)
    props.updateOrder(obj, () => {});
  };
  const handleProductClick = (element) => {};
  const handleQuantity = (element) => {
    const product = props.order[0].productList.find(
      (ele) => ele.productId === element.productId
    );
    return product?.quantity;
  };
  const handleColor = (element) => {
    const product = props.order[0].productList.find(
      (ele) => ele.productId === element.productId
    );
    return product?.color;
  };
  const handlSubmitStatus = () => {
    props.order[0]["status"] = futureStatus[props.order[0].status].value;
    props.updateOrder(props.order[0], () => {});
    props.setActionValue(props.order[0].status);
  };
  const futureStatus = {
    ACCEPTED: {
      value: "DISPATCHED",
      label: "Dispatch",
    },
    DISPATCHED: {
      value: "COMPLETE",
      label: "COMPLETED",
    },
    PENDING: {
      value: "ACCEPTED",
      label: "Accept",
    },
    REJECTED: {
      value: "ACCEPTED",
      label: "Accept",
    },
  };
  const list=[]
  if (productList.length>0) {
    props.order[0].productList.forEach(element => {
      const index=productList.findIndex((e)=>e.productId==element.productId)
      const temp={
        image_link:productList[index]?.image_link,
        name:productList[index]?.name,
        color:element.color,
        price:productList[index]?.price,
        quantity:element.quantity,
        productId:productList[index]?.productId,
        _id:element?._id
      }
      list.push(temp)
    });
  }

  return (
    <>
      <Box sx={{ height: "550px", overflow: "scroll" }}>
        {list.map((element, index) => (
          <Box
            onClick={() => {
              handleProductClick(element);
            }}
            key={index}
            sx={{ display: "flex", flexDirection: "row" }}
            m={0.5}
            mb={1}
          >
            <Image url={element.image_link} height={60} width={60} />
            <Stack
              direction={"column"}
              sx={{
                flexGrow: 1,
              }}
              marginLeft={1}
              marginRight={1}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  overflow: "",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {element.name}
              </Typography>
              {element.color && (
                <Typography sx={{ fontSize: "12px" }}>
                  {element.color}
                </Typography>
              )}
              <Typography sx={{ fontWeight: "bold" }}>
                ₹ {element.price}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0.5}
            >
              <Stack
                sx={{ border: 1 }}
                direction="row"
                pr={1}
                pl={1}
                spacing={0.5}
              >
                <Box>
                  <GrFormAdd
                    onClick={() => {
                      handleIncrement(element);
                    }}
                  />
                </Box>
                <Box>{element.quantity}</Box>
                <Box>
                  <GrFormSubtract
                    onClick={() => {
                      handleDecrement(element);
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Box>
      <Stack justifyContent={"end"} direction={"column"}>
        {props.order[0].status == "DISPATCHED" ? (
          <Button
            variant="outlined"
            color="success"
            disabled={props.order.length == 0}
          >
            {futureStatus[props.order[0].status].label}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            sx={{ margin: 1, bgcolor: "green" }}
            disabled={props.order.length == 0}
            onClick={handlSubmitStatus}
          >
            {futureStatus[props.order[0].status].label}
          </Button>
        )}
      </Stack>
    </>
  );
};

ProductForm.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({
  order: state.Order.allOrder,
  products: state.Product.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProductById: bindActionCreators(getProductByIdReqAction, dispatch),
  updateOrder: bindActionCreators(updateOrderReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
