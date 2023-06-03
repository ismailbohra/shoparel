import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image from "../../assets/images/iesblurr.jpg";

import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCartAction } from "../../redux/Cart/Action";
import ColorStack from "../ColorStack/ColorStack";
import { useState } from "react";

export const ProductCard = (props) => {
  const product = props.element;
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedColorValue, setSelectedColorValue] = useState(product?.product_colors?.[0]?.colour_name || null);
  const [quantity, setQuantity] = useState(1);
  const handleSelectColor = (index, element) => {
    setSelectedColor(index);
    setSelectedColorValue(element.colour_name);
  };
  const handleAddToCart = (product) => {
    const temp = {
      productId: product.productId,
      quantity: quantity,
      color: selectedColorValue,
      price: product.price,
      name: product.name,
      image_link: product.image_link,
    };
    props.addToCartReq(temp, () => {});
  };
  return (
    <Card elevation={0}>
      <CardActionArea
        onClick={() => {
          props.handleShowMoreClick(product);
        }}
        sx={{height:'100%',width:'100%'}}
      >
        <CardMedia
          component="img"
          height="150"
          image={product.image_link}
          alt="product image"
          sx={{objectFit:'fill'}}
        />
        <CardContent sx={{ textAlign: "start" }}>
          <Typography
            gutterBottom
            fontSize={{ xs: 15, md: 20 }}
            component="div"
          >
            ₹ {product.price}
          </Typography>
          <Typography
            gutterBottom
            fontSize={{ xs: 15, md: 20 }}
            component="div"
          >
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid container>
        <Grid item xs={12}>
          {(product.product_colors != null) ? (
            <Stack direction={"row"} m={1} flexWrap={"wrap"}>
              <ColorStack
                colorList={product.product_colors}
                selectedColor={selectedColor}
                handleSelectColor={handleSelectColor}
                numbers={3}
              />
            </Stack>
          ):<Typography sx={{fontSize:38}}> 
            &nbsp;
            </Typography>}
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="quantity"
            name="quantity"
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            size="small"
            type="number"
            sx={{ marginRight: 1 }}
          />
        </Grid>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={() => {
            handleAddToCart(product);
          }}
        >
          Buy
        </Button>
      </Grid>
    </Card>
  );
};

ProductCard.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartReq: bindActionCreators(addToCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
