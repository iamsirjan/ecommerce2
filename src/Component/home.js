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
import { Fade } from "react-slideshow-image";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useStateValue } from "./StateProvider";
import FontSizeChanger from "react-font-size-changer";
function Home() {
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
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <img src="https://mikarose.com/pub/media/slideshow/cache/1920x760/slideshow/newarrivalsbanner1.jpg" />
          </div>
          <div className="each-fade">
            <img src="https://img.mensxp.com/media/shop/template/2020/oct/electronics-inner-banner-desktop-1602088844.jpeg" />
          </div>
          <div className="each-fade">
            <img src="https://thumbs.dreamstime.com/b/man-s-right-hand-went-yellow-paper-wall-holding-black-shoe-suitable-as-banner-design-mock-up-composition-210903363.jpg" />
          </div>
          <div className="each-fade">
            <img src="https://roycollections.com/wp-content/uploads/2019/09/Bata-shoes-sale-collection.png" />
          </div>
          <div className="each-fade">
            <img src="http://ipcbags.com/wp-content/uploads/2016/07/bags-banner-lb090-1.jpg" />
          </div>
        </Fade>
      </div>
      <div className="deal__page">
        <div className="deal__header">
          <div className="container">
            <h1 id="headline">offers for following items end in:</h1>
            <div id="countdown">
              <ul>
                <li>
                  <span id="days"></span>10 days
                </li>
                <li>
                  <span id="hours"></span>10 Hours
                </li>
                <li>
                  <span id="minutes"></span>10 Minutes
                </li>
                <li>
                  <span id="seconds"></span>10 Seconds
                </li>
              </ul>
            </div>
          </div>
          <div className="offerproducts">
            <div className="offeritems">
              <img src="https://staticimg.titan.co.in/Titan/Catalog/1802SL10_1.jpg?impolicy=pqmed&imwidth=320" />
            </div>
            <div className="offeritems">
              <img src="https://images.ctfassets.net/od02wyo8cgm5/3EfoQCOVEYhdsiLUv3t2O9/23b02d79f25e28186b6704d9eabb5aca/cloud_x-fw20-white_black-m-g1.png" />
            </div>
            <div className="offeritems">
              <img src="https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.large" />
            </div>
            <div className="offeritems">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfPE7D1baLpp2BQQTyF27KzldoxTA3uyFzw&usqp=CAU" />
            </div>
            <div className="offeritems">
              <img src="data:image/jpeg;base64,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" />
            </div>
            <div className="offeritems">
              <img src="https://www.studds.com/Adminpanel/uploads/SHIFTER_D3_MATT_GREY_N22.png" />
            </div>
            <div className="offeritems">
              <img src="https://cdn.shopify.com/s/files/1/1973/4425/products/A080-4900_800x.jpg?v=1531858881" />
            </div>
            <div className="offeritems">
              <img src="https://www.mcjordanshoess.com/wp-content/uploads/2019/01/Cheap-Jordan-8-Retro-WhiteTurbo-Green-Mens-Shoe-cheapest-air-jordan-shoes-online-Q0303-324x324.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 container">
        <h1 id="headline">New Products</h1>
      </div>
      <div className="offerproducts">
        <div className="offeritems">
          <img src="https://target.scene7.com/is/image/Target/GUEST_9c2a3793-30c8-4b85-af99-5a1806facf25?wid=488&hei=488&fmt=pjpeg" />
        </div>
        <div className="offeritems">
          <img src="https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwcfe950b0/images/1100000/1106997.jpg" />
        </div>
        <div className="offeritems">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="offeritems">
          <img src="https://i.pinimg.com/originals/ae/31/d5/ae31d58cbdc9efd32c3f5ae931bc4247.png" />
        </div>
        <div className="offeritems">
          <img src="https://cdn.shopify.com/s/files/1/0549/2681/products/glorious_gaming_mouse_model_o_22.png?v=1599677029" />
        </div>
        <div className="offeritems">
          <img src="https://canary.contestimg.wish.com/api/webimage/598fbdfd787e7b56cdde893a-large.jpg?cache_buster=5de8e39d28291ea965e19bcb7de574c4" />
        </div>
        <div className="offeritems">
          <img src="https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/w/3/w32bts-alpine.jpg" />
        </div>
        <div className="offeritems">
          <img src="https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/m/9/m900xxl_05_1.jpg" />
        </div>
      </div>
      <div className="mt-5 footer__image">
        <div className="image">
          <img src="https://img.freepik.com/free-vector/special-offer-sale-template-banner-sale_151987-264.jpg?size=626&ext=jpg&ga=GA1.2.1351576937.1617580800g" />
        </div>

        <div className="image">
          <img src="https://i1.wp.com/blog.daraz.com.np/wp-content/uploads/2021/03/samsFeature.png?fit=1200%2C450&ssl=1" />
        </div>
      </div>
      <div className="mt-5 mb-5 container">
        <h1 id="headline">New Year Offer</h1>
      </div>
      <div className="offerproducts">
        <div className="offeritems">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44X7-lMcIaS0eZz5zJvXAGixEzAiZRd7zaA&usqp=CAU" />
        </div>
        <div className="offeritems">
          <img src="https://rukminim1.flixcart.com/image/416/416/k8ytaq80/mixer-grinder-juicer/t/r/m/bajaj-classic-750-watts-mixer-grinder-with-3-jars-high-quality-original-imafqvf9vqqynbv2.jpeg?q=70" />
        </div>
        <div className="offeritems">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="offeritems">
          <img src="https://www.istore.co.za/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_se_red_2-up_us_en_screen_1_2.jpg" />
        </div>
        <div className="offeritems">
          <img src="https://5.imimg.com/data5/TL/GS/TS/SELLER-33042755/polar-induction-cooktop-500x500.jpg" />
        </div>
        <div className="offeritems">
          <img src="https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-07-21-14-25/ps5_pre_order_header.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" />
        </div>
        <div className="offeritems">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div className="offeritems">
          <img src="https://www.cgdigital.com.np/api/images/products/dso5bq_1616319633-Knight-front.webp" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
