import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import style from "../Property.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";

const CommercialBuy = () => {
  const [list, setList] = useState([]);
  const [serchParam, setSearchParam] = useSearchParams();
  const paramBhk = serchParam.getAll("bhk");
  const paramProperty = serchParam.getAll("propertyType");
  const paramFurnish = serchParam.getAll("furnished");
  const [bhk, setBhk] = useState(paramBhk || []);
  const [propertyType, setPropertyType] = useState(paramProperty || []);
  const [furnished, setfurnish] = useState(paramFurnish || []);
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const residentialfun = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_URL}/property/${location.search}`
        )
        .then((e) => {
          setList(e.data.data);
          // console.log(e.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let param = {};

    bhk && (param.bedroom = bhk);
    propertyType && (param.propertyType = propertyType);
    furnished && (param.furnished = furnished);
    // adding 
    param.lookingFor = "Buy"
    param.propertyGroup = "Commercial"
    setSearchParam(param);

    if (location.search) {
      residentialfun();
    }

  }, [location.search]);

  // const ProductDetail = async () => {
  //     let obj = {}
  //     bhk.length && (obj.bedroom = bhk)
  //     propertyType.length && (obj.propertyType = propertyType)
  //     furnished.length && (obj.furnished = furnished)

  //     await axios.get(`${process.env.REACT_APP_URL}/property/buy/commercial`, { params: obj }).then((e) => {
  //         setData(e.data);
  //     }).catch((e) => {
  //         console.log(e);
  //     });
  // };

  const handlePropertyType = (value) => {
    console.log(value);
    setPropertyType((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleFurnished = (value) => {
    console.log(value);
    setfurnish((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  useEffect(() => {
    let param = {};

    bhk && (param.bedroom = bhk);
    propertyType && (param.propertyType = propertyType);
    furnished && (param.furnished = furnished);
    // adding   
    param.lookingFor = "Buy"
    param.propertyGroup = "Commercial"
    setSearchParam(param);
  }, [bhk, propertyType, furnished]);

  const handlepagechange = (page) => {
    navigate(`/${page}`); 
  }

  return (
    <Box margin={0} paddingTop={4}> 
      <Box paddingLeft={"20px"} w={"98%"} margin={"0"} >
        <Heading size={"lg"}> Property Posted </Heading>
        <Box margin={"10px auto 20px auto"}>
          <Select width={"260px"} onChange={(e) => handlepagechange(e.target.value)}>
            <option value="residential_Buy">Residential Buy</option>
            <option value="residential_Rent">Residential Rent</option>
            <option value="commercial_Buy"> Commercial Buy</option>
            <option value="commercial_Rent"> Commercial Rent </option>
          </Select>
        </Box>
      </Box>
      <Box>
        {/* mobile bar */}
        <Box
          width={"100%"}
          display={{ base: "flex", md: "none" }}
          position={"sticky"}
          top={50}
          zIndex={10}
          backgroundColor={"white"}
          left={0}
          right={0}
        >
          <Box flex={1} border={"1px solid rgb(199, 199, 199)"}>
            <Button
              w={"100%"}
              borderRadius={0}
              variant={"unstyled"}
              fontWeight={500}
              ref={btnRef}
              colorScheme="teal"
              onClick={onOpen}
            >
              Filter
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader> ASSETORIX </DrawerHeader>
                <DrawerBody>
                  <Box
                    flex={2}
                    padding={5}
                    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                  >
                    <Heading size={{ base: "sm", lg: "md" }}>
                      {" "}
                      Sorting Property{" "}
                    </Heading>
                    <Divider
                      backgroundColor={"rgb(227, 226, 226)"}
                      marginTop={"2px"}
                      padding={"1px"}
                      borderRadius={"4px"}
                    />
                    <Box margin={"15px auto"}>
                      <Heading textAlign={"left"} size={"sm"}>
                        {" "}
                        Property Type{" "}
                      </Heading>
                      <Box
                        display={"flex"}
                        justifyContent={"left"}
                        alignItems={"baseline"}
                        flexWrap={"wrap"}
                        gap={3}
                        margin={"10px auto"}
                      >
                        <button
                          className={
                            propertyType.includes("Flat / Apartment")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Flat / Apartment"}
                        >
                          {" "}
                          {propertyType.includes("Flat / Apartment") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Flat Appartment{" "}
                        </button>
                        <button
                          className={
                            propertyType.includes("Independent House / Villa")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Independent House / Villa"}
                        >
                          {" "}
                          {propertyType.includes("Independent House / Villa") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Independent House/Villa{" "}
                        </button>
                        <button
                          className={
                            propertyType.includes("Residential Apartment")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Residential Apartment"}
                        >
                          {" "}
                          {propertyType.includes("Residential Apartment") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Residential Apartment{" "}
                        </button>
                        <button
                          className={
                            propertyType.includes("Independent / Builder Floor")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Independent / Builder Floor"}
                        >
                          {" "}
                          {propertyType.includes(
                            "Independent / Builder Floor"
                          ) ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Independent/Builder Floor{" "}
                        </button>
                        <button
                          className={
                            propertyType.includes("Farmhouse")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Farmhouse"}
                        >
                          {" "}
                          {propertyType.includes("Farmhouse") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Farm House{" "}
                        </button>
                        <button
                          className={
                            propertyType.includes("Serviced Apartment")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handlePropertyType(e.target.value)}
                          value={"Serviced Apartment"}
                        >
                          {" "}
                          {propertyType.includes("Serviced Apartment") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Serviced Apartments{" "}
                        </button>
                      </Box>
                    </Box>
                    <Box margin={"15px auto"}>
                      <Heading textAlign={"left"} size={"sm"}>
                        {" "}
                        Furnishing Status{" "}
                      </Heading>
                      <Box
                        display={"flex"}
                        justifyContent={"left"}
                        alignItems={"baseline"}
                        flexWrap={"wrap"}
                        gap={3}
                        margin={"10px auto"}
                      >
                        <button
                          className={
                            furnished.includes("Semi-Furnished")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handleFurnished(e.target.value)}
                          value={"Semi-Furnished"}
                        >
                          {" "}
                          {furnished.includes("Semi-Furnished") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Semi-Furnished{" "}
                        </button>
                        <button
                          className={
                            furnished.includes("Un-furnished")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handleFurnished(e.target.value)}
                          value={"Un-furnished"}
                        >
                          {" "}
                          {furnished.includes("Un-furnished") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Un-Furnished{" "}
                        </button>
                        <button
                          className={
                            furnished.includes("Furnished")
                              ? style.bhkbtn
                              : style.selectedbtn
                          }
                          onClick={(e) => handleFurnished(e.target.value)}
                          value={"Furnished"}
                        >
                          {" "}
                          {furnished.includes("Furnished") ? (
                            <BsCheckLg />
                          ) : (
                            <BiPlus />
                          )}{" "}
                          Furnished{" "}
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <Box flex={1} borderY={"1px solid rgb(199, 199, 199)"}>
            <Select backgroundColor={"unset"} borderRadius={0} border={0}>
              <option value="desc"> High to Low </option>
              <option value="inc"> Low to High </option>
            </Select>
          </Box>
        </Box>

        {/* Property box */}
        <Flex
          display={"flex"}
          marginTop={2}
          marginX={"auto"}
          w={"100%"}
          alignItems={"flex-start"}
          gap={4}
        >
          {/* ===================================  Property Sorting ================================= */}
          <Box
            flex={2}
            padding={5}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            className={style.side_box_sort}
          >
            <Heading size={{ base: "sm", lg: "md" }}> Sorting Property </Heading>
            <Divider
              backgroundColor={"rgb(227, 226, 226)"}
              marginTop={"2px"}
              padding={"1px"}
              borderRadius={"4px"}
            />
            <Box margin={"15px auto"}>
              <Heading textAlign={"left"} size={"sm"}>
                {" "}
                Property Type{" "}
              </Heading>
              <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"baseline"}
                flexWrap={"wrap"}
                gap={3}
                margin={"10px auto"}
              >
                <button
                  className={
                    propertyType.includes("Flat / Apartment")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Flat / Apartment"}
                >
                  {" "}
                  {propertyType.includes("Flat / Apartment") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Flat Appartment{" "}
                </button>
                <button
                  className={
                    propertyType.includes("Independent House / Villa")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Independent House / Villa"}
                >
                  {" "}
                  {propertyType.includes("Independent House / Villa") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Independent House/Villa{" "}
                </button>
                <button
                  className={
                    propertyType.includes("Residential Apartment")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Residential Apartment"}
                >
                  {" "}
                  {propertyType.includes("Residential Apartment") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Residential Apartment{" "}
                </button>
                <button
                  className={
                    propertyType.includes("Independent / Builder Floor")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Independent / Builder Floor"}
                >
                  {" "}
                  {propertyType.includes("Independent / Builder Floor") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Independent/Builder Floor{" "}
                </button>
                <button
                  className={
                    propertyType.includes("Farmhouse")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Farmhouse"}
                >
                  {" "}
                  {propertyType.includes("Farmhouse") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Farm House{" "}
                </button>
                <button
                  className={
                    propertyType.includes("Serviced Apartment")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handlePropertyType(e.target.value)}
                  value={"Serviced Apartment"}
                >
                  {" "}
                  {propertyType.includes("Serviced Apartment") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Serviced Apartments{" "}
                </button>
              </Box>
            </Box>
            <Box margin={"15px auto"}>
              <Heading textAlign={"left"} size={"sm"}>
                {" "}
                Furnishing Status{" "}
              </Heading>
              <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"baseline"}
                flexWrap={"wrap"}
                gap={3}
                margin={"10px auto"}
              >
                <button
                  className={
                    furnished.includes("Semi-Furnished")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handleFurnished(e.target.value)}
                  value={"Semi-Furnished"}
                >
                  {" "}
                  {furnished.includes("Semi-Furnished") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Semi-Furnished{" "}
                </button>
                <button
                  className={
                    furnished.includes("Un-furnished")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handleFurnished(e.target.value)}
                  value={"Un-furnished"}
                >
                  {" "}
                  {furnished.includes("Un-furnished") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Un-Furnished{" "}
                </button>
                <button
                  className={
                    furnished.includes("Furnished")
                      ? style.bhkbtn
                      : style.selectedbtn
                  }
                  onClick={(e) => handleFurnished(e.target.value)}
                  value={"Furnished"}
                >
                  {" "}
                  {furnished.includes("Furnished") ? (
                    <BsCheckLg />
                  ) : (
                    <BiPlus />
                  )}{" "}
                  Furnished{" "}
                </button>
              </Box>
            </Box>
          </Box>

          {/* =========================== product List ====================== */}
          <Box flex={6}>
            <Box
              w={"100%"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              textAlign={"left"}
              paddingX={3}
              paddingY={2}
              display={"grid"}
              gridTemplateRows={"auto"}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap={4}
            >
              {list?.map((e, index) => {
                const colorstate =
                  wishlist &&
                  Array.isArray(wishlist) &&
                  wishlist.includes(`${e._id}`);
                return (
                  <Box position={"relative"} key={index}>
                    {/* <Link to={`/residential_buy/${e._id}`} > */}
                    <Box className={style.property_box}>
                      <Box position={"relative"}>
                        <Image
                          src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg"
                          w={"100%"}
                          alt="property image"
                        />
                      </Box>
                      <Heading
                        className={style.head_line}
                        size={{ base: "xs", md: "sm" }}
                        textAlign={"left"}
                      >
                        {" "}
                        {e.address.houseNumber && e.address.houseNumber}{" "}
                        {e.address.apartmentName && e.address.apartmentName}{" "}
                        {e.address.locality && e.address.locality}{" "}
                      </Heading>
                      <Text fontSize={{ base: "xs", md: "sm" }}>
                        {" "}
                        Price: {e.countryCurrency}
                        {e.price?.toLocaleString("en-IN")}{" "}
                      </Text>
                    </Box>
                    {/* </Link> */}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CommercialBuy;
