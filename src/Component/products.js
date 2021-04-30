import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/home.css";
import Footer from "./footer";
import Product from "./product";
import "../Style/products.css";
import { Fade } from "react-slideshow-image";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useStateValue } from "./StateProvider";
import FontSizeChanger from "react-font-size-changer";
function Products() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__nav">
        <Navbar bg="light" navbar="dark" fixed="top" expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            <AiOutlineShopping className="mb-1" /> nepshop
          </Navbar.Brand>
          <FontSizeChanger
            targets={[" .home"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 3,
            }}
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/home"> Home </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/product"> Products </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link>
                {" "}
                <Link to="/checkout"> Cart </Link>{" "}
                <FaShoppingCart className="mb-1" />
                <span className=" product__basketcount">{basket?.length}</span>
              </Nav.Link>

              <Nav.Link href="#link">
                {" "}
                <Link to="/"> Logout </Link> <FaUserAlt className="mb-1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="products_row">
        <Product
          id={9}
          title="Axe Purfume "
          price={5}
          image="https://market.thulo.com/uploads/ads/2017/02/tem_500.jpg"
          rating={4}
        />
        <Product
          id={15}
          title="POLO SHIRT FOR WOMEN"
          price={15}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvlkvOz_w3fr54fHg92o3UOvrO-3MT2_nfaw&usqp=CAU"
          rating={5}
        />
        <Product
          id={14}
          title=" POLO WHITE SHIRT FOR MEN "
          price={15}
          image="https://i.pinimg.com/originals/bd/63/f0/bd63f0e11ab4b8a4fbc92b092348d502.jpg "
          rating={5}
        />
        <Product
          id={10}
          title=" Men's Watch   "
          price={10}
          image="https://rukminim1.flixcart.com/image/332/398/jwzabgw0/watch/c/h/g/ls2821-limestone-original-imafhjcr3xkxgqaz.jpeg?q=50"
          rating={5}
        />
        <Product
          id={11}
          title="Plastic white cup"
          price={3}
          image="https://www.huhtamaki.com/globalassets/north-america/retail/catalog-images/10oz_clearcup.jpg?width=320"
          rating={4}
        />
      </div>
      <div className="products_row">
        <Product
          id={3}
          title="IPHONE XR 128GB INTERNAL"
          price={1000}
          image="https://www.cricketwireless.com/uiassets/DAPW4127-detail-front.jpg"
          rating={5}
        />
        <Product
          id={12}
          title="WATERCOOLING GAMING CPU"
          price={50}
          image="https://hothardware.com/newsimages/Item12940/cyberpower-pc-1.jpg"
          rating={5}
        />
        <Product
          id={13}
          title="LOGICTECH GAMING MOUSE"
          price={30}
          image="https://www.ebuyer.com/blog/wp-content/uploads/2014/07/gaming-mouse-header.jpg"
          rating={5}
        />
        <Product
          id={4}
          title="Combatwing Gaming Headset"
          price={40}
          image="https://images-na.ssl-images-amazon.com/images/I/71HFFgckuFL._AC_SL1267_.jpg"
          rating={5}
        />
        <Product
          id={5}
          title="Elgato Game Capture HD60 S Full HD "
          price={30}
          image="https://www.scan.co.uk/images/products/3061843-a.jpg"
          rating={4}
        />
      </div>
      <div className="products_row">
        <Product
          id={6}
          title="LETHER JACKET FOR MEN"
          price={20}
          image="https://img.tradees.com/file/upload/2020/07/20/Low-Price-Guaranteed-Quality-Black-Genuine-Leather-Jacket-short-slim-Leather-Jacket-Women-2.jpg"
          rating={4}
        />
        <Product
          id={7}
          title="COTTON PANT FOR MEN"
          price={28}
          image="https://images-na.ssl-images-amazon.com/images/I/81SPeUXqBsL._UL1500_.jpg"
          rating={5}
        />
        <Product
          id={8}
          title="WHITE FILA SHOES FOR MEN"
          price={20}
          image="https://images.journeys.com/images/products/1_502268_ZM_WHITE.JPG"
          rating={5}
        />

        <Product
          id={15}
          title="POLO SHIRT FOR WOMEN"
          price={15}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvlkvOz_w3fr54fHg92o3UOvrO-3MT2_nfaw&usqp=CAU"
          rating={5}
        />
        <Product
          id={14}
          title=" POLO WHITE SHIRT FOR MEN "
          price={15}
          image="https://i.pinimg.com/originals/bd/63/f0/bd63f0e11ab4b8a4fbc92b092348d502.jpg "
          rating={5}
        />
      </div>
    </div>
  );
}

export default Products;
