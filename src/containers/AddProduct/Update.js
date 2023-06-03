import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import ColorStack from "../../components/ColorStack/ColorStack";
import {
  createProductReqAction,
  getProductReqAction,
  updateProductReqAction,
} from "../../redux/Product/ProductAction";
import { bindActionCreators } from "redux";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, child } from "firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Add = (props) => {
  const { state } = useLocation();
  useEffect(() => {
    props.getProductReq({ productId: state.productId }, () => {});
  }, []);
  useEffect(() => {
    if (props.product.productId == state.productId) {
      setColorList(props.product.product_colors);
      setProductImg(props.product.image_link);
    }
  }, [props.product]);

  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
    category: "",
    product_type: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const uploadImage = (values) => {
    const imageRef = ref(storage, product.name || `${Date.now().toString()}`);
    uploadBytes(imageRef, productImgForReq)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            const temp = {
              ...values,
              product_colors: [...colorList],
              image_link: url,
              productId: state.productId,
            };
            delete temp.color;
            delete temp.colorName;
            console.log(temp);
            props.updateProductReq(temp, () => {
              navigate("../AddProduct");
            });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleUpdateProduct = (values) => {
    uploadImage(values);
  };
  const [colorList, setColorList] = useState([]);
  const [dialog, setdialog] = useState(false);
  const [color, setColor] = useState("#FF5733");
  const [colorName, setColorName] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [productImg, setProductImg] = useState(null);
  const [productImgForReq, setProductImgForReq] = useState(null);
  const handleProductImg = (e) => {
    setProductImg(URL.createObjectURL(e.target.files[0]));
    setProductImgForReq(e.target.files[0]);
  };
  const handleAddColor = () => {
    setdialog(true);
  };
  const handleSelectColor = (index, element) => {
    setColorList((e) => e.filter((e) => e.hex_value != element.hex_value));
  };
  const handleAddColorInList = () => {
    setColorList((e) => [...e, { hex_value: color, colour_name: colorName }]);
  };

  const formik = useFormik({
    initialValues: {
      name: props.product?.name || "",
      price: props.product?.price || null,
      description: props.product?.description || "",
      category: props.product?.category || "",
      product_type: props.product?.product_type || "",
      productImg: null,
      color: "#FF5733",
      colorName: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
      product_type: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      handleUpdateProduct(values);
    },
    enableReinitialize: true,
  });

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Typography variant="h5">Update Product</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginTop: 3 }}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    label="Product Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    size="small"
                    error={formik.touched.name && formik.errors.name}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Product Price"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    size="small"
                    error={formik.touched.price && formik.errors.price}
                    helperText={formik.touched.price && formik.errors.price}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    size="small"
                    error={formik.touched.category && formik.errors.category}
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Product Type"
                    name="product_type"
                    value={formik.values.product_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    margin="normal"
                    size="small"
                    error={
                      formik.touched.product_type && formik.errors.product_type
                    }
                    helperText={
                      formik.touched.product_type && formik.errors.product_type
                    }
                  />
                </Grid>
                <Grid item xs={12} mt={2} mb={2}>
                  <Input type="file" id="upload" onChange={handleProductImg} />
                </Grid>
                <Grid item xs={12}>
                  Colors
                  <Stack direction={"row"}>
                    {colorList.length > 0 && (
                      <ColorStack
                        colorList={colorList}
                        selectedColor={selectedColor}
                        handleSelectColor={handleSelectColor}
                        numbers={15}
                        size={30}
                      ></ColorStack>
                    )}
                    <Avatar
                      onClick={handleAddColor}
                      sx={{
                        width: 30,
                        height: 30,
                        marginTop: 0.5,
                        marginInline: 0.5,
                      }}
                    >
                      +
                    </Avatar>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Product Description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    size="small"
                    error={
                      formik.touched.description && formik.errors.description
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ paddingInline: 5 }}>
              <Box
                sx={{
                  border: 1,
                  borderRadius: 5,
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  overflow: "hidden", // Add overflow hidden
                }}
              >
                {productImg && (
                  <Image
                    src={productImg}
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "fill" }} // Add objectFit cover
                  />
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "end", margin: 2 }}>
            <Button variant="contained" type="submit">
              Update Product
            </Button>
          </Grid>
        </form>
      </Box>
      <Dialog
        open={dialog}
        onClose={() => {
          setdialog(false);
        }}
      >
        <DialogTitle>Pick The Color</DialogTitle>
        <DialogContent>
          <Typography sx={{ textAlign: "end" }}>
            click color to remove
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Box sx={{ margin: 2, height: 100, bgcolor: color }}></Box>
            </Grid>
            <Grid sx={{ margin: 2 }} item xs={6}>
              <Grid container columns={{ xs: 4 }}>
                {colorList.length > 0 && (
                  <ColorStack
                    colorList={colorList}
                    selectedColor={selectedColor}
                    handleSelectColor={handleSelectColor}
                    numbers={15}
                    size={30}
                  ></ColorStack>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Box>
            <TextField
              sx={{ margin: 1 }}
              label="Hex Value"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              size="small"
            ></TextField>
            <TextField
              sx={{ margin: 1 }}
              label="Colour Name"
              value={colorName}
              onChange={(e) => {
                setColorName(e.target.value);
              }}
              size="small"
            ></TextField>
            <Button onClick={handleAddColorInList}>
              <Avatar sx={{ width: 30, height: 30, marginTop: 0.5 }}>+</Avatar>
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setdialog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.Product.products[0],
});

const mapDispatchToProps = (dispatch) => ({
  productReq: bindActionCreators(createProductReqAction, dispatch),
  getProductReq: bindActionCreators(getProductReqAction, dispatch),
  updateProductReq: bindActionCreators(updateProductReqAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
