import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Style/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => axios.post("http://127.0.0.1:8080/register/");

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
                    <label for="example">Username</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      {...register("username")}
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

                    <Button type="submit" className="mt-3 btn btn-primary">
                      Register
                    </Button>
                    <p className="mt-1">
                      Already a user?? Login from <Link to="/login">here</Link>
                    </p>
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

export default Register;
