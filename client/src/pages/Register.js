import React from "react";
import { Row, Col, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userRegister } from "../redux/actions/userActions";
import Spinner from "../components/Spinner";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  const onFinish = (values) => {
    if (
      values.username === undefined ||
      "" ||
      values.password === undefined ||
      "" ||
      values.cpassword === undefined ||
      ""
    ) {
      message.error("Please fill all the fields");
    } else if (values.password !== values.cpassword) {
      message.error("Passwords do not match");
    } else {
      dispatch(userRegister(values));
    }
  };

  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            data-aos="slide-left"
            data-aos-duration="1500"
            alt="logo"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          />
          <h1 className="login-logo">RentCars</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item name="username" label="Username">
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password" >
              <Input />
            </Form.Item>

            <Form.Item name="cpassword" label="Confirm Password">
              <Input />
            </Form.Item>

            <button className="button1 mt-2">Register</button>

            <hr />

            <Link to="/login">Already registered ? click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
