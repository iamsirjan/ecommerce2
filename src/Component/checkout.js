import React from "react";
import "../Style/checkout.css";
import Subtotal from "./subtotal";
import FlipMove from "react-flip-move";
import Cart from "./cart";
import { useStateValue } from "./StateProvider";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import FontSizeChanger from "react-font-size-changer";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__nav">
        <Navbar bg="light" navbar="dark" expand="lg">
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
              <Nav.Link className="navlink">
                <Link to="/home"> Home </Link>
              </Nav.Link>

              <Nav.Link className="navlink">
                <Link to="/product"> Products </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link className="navlink">
                {" "}
                <Link to="/checkout"> Cart </Link>{" "}
                <FaShoppingCart className="mb-1" />
                <span className=" product__basketcount">{basket?.length}</span>
              </Nav.Link>

              <Nav.Link className="navlink">
                {" "}
                <Link to="/"> Logout </Link> <FaUserAlt className="mb-1" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          />

          {basket?.length === 0 ? (
            <div>
              <div className="checkout__userinfo">
                <h2>HELLO,</h2>
                <h4>{user?.email} </h4>
              </div>
              <div className="checkout__usermessage">
                <h2> Your Shooping list is empty</h2>
                <p>
                  Currently you do have no items in your basket. To add items in
                  the basket go and click the add to items button to add them in
                  your shooping list
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title"> Your Shooping list </h2>
              <div className="checkout__items">
                <FlipMove>
                  {basket.map((item) => (
                    <Cart
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}
                </FlipMove>
              </div>
            </div>
          )}
        </div>
        <div className="checkout__right ">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
