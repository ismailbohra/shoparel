import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  Tooltip,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import Image from "../../components/image/Image";
import imgurl from "../../assets/images/lorealshampoo.png";
import ColorStack from "../../components/ColorStack/ColorStack";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../../redux/Order/Action";
export const ProductDetails = (props) => {
  const { state } = useLocation();
  const { element } = state;
  const product = element;
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedColorValue, setSelectedColorValue] = useState(product?.product_colors?.[0]?.colourName || null);

  const handleSelectColor = (index, element) => {
    setSelectedColor(index);
    setSelectedColorValue(element.productColors);
  };

  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    const temp = {
      productId:product.id,
      quantity:quantity,
      color:selectedColorValue,
      price:product.price,
      name:product.name,
      image_link:product.image_link
    };
    props.addToCartReq(temp);
  };
  const [flagForProccedTocheckoutButton, setFlagForProccedTocheckoutButton] =
    useState(false);
  return (
    <Grid container>
      <Grid item xs={12} md={5} p={3}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Image
            url={product.image_link}
            height={400}
            width={400}
            borderRadius={5}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={7} p={2}>
        <Stack direction={"column"}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography pt={1} sx={{ color: "grey" }}>
            {product.category} {product.productType}
          </Typography>
          <Typography sx={{ fontWeight: "#1A2027", fontSize: "25px" }}>
            ₹ {product.price}
          </Typography>
          {product.product_colors > 0 && (
            <>
              <Typography pt={1} sx={{ fontSize: "20px" }}>
                Select Color
              </Typography>
              <Stack direction={"row"} m={1} flexWrap={"wrap"}>
                <ColorStack
                  colorList={product.product_colors}
                  selectedColor={selectedColor}
                  handleSelectColor={handleSelectColor}
                  numbers={5}
                />
              </Stack>
            </>
          )}
          <Grid container direction={"row"} spacing={1} alignItems={"center"}>
            <Grid item xs={6} lg={2}>
              <TextField
                id="quantity"
                name="quantity"
                label="Quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                sx={{ margin: 1 }}
                size="small"
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <Button
                // size=""
                onClick={handleAddToCart}
                variant="contained"
                // sx={{ width: 200, height: 40, marginTop: 5 }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6} lg={6} >
            <Button
              // size="small"
              variant="contained"
              sx={{
                backgroundColor: "green",
                ":hover": {
                  bgcolor: "green",
                  color: "white",
                },
                margin: 1,
                width:'67%'
              }}
            >
              checkout
            </Button>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Box pl={2} pr={2}>
          <Typography variant="h5">Description</Typography>
          <Typography xs={{ fontSize: "1px" }} pt={1}>
            {product.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

ProductDetails.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartReq: bindActionCreators(addToCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
