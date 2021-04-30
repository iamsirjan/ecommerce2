import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Style/login.css";
import { Link } from "react-router-dom";
function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login__form">
      <Row lg="12">
        <Col lg="8">
          {/* image in Register form */}
          <div className="login__image">
            <img src="https://www.stackma.ca/images/services/website/ecommerce/ecommerce-website-design.png" />
          </div>
        </Col>
        <Col>
          <div className="login_formbox">
            <div className="login__box">
              <Col lg="6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="login__form">
                    <h2>Welcome</h2>
                    <label for="example">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      {...register("email")}
                    />
                    <label className="mt-1" for="password">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      {...register("password")}
                    />
                    <Link
                      className=" mt-2 btn btn-primary"
                      role="button"
                      to="/home"
                    >
                      Login
                    </Link>

                    <Link
                      className=" mt-2 btn btn-secondary"
                      role="button"
                      to="/register"
                    >
                      Create a new account
                    </Link>
                  </div>
                </form>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
