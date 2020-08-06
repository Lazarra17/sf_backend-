import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";

import StyleWrapper from "./styles";

import { signInRequest } from "../../store/modules/auth/actions";
import { useDispatch } from "react-redux";

const SignIn = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signInRequest(data.email, data.password));
  };

  return (
    <Fragment>
      <Helmet>
        <title>Login | Super Flix</title>
      </Helmet>
      <StyleWrapper>
        <div className="login-form">
          <div className="login-title">Login</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail"
                required
                name="email"
                ref={register}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                ref={register}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </div>
      </StyleWrapper>
    </Fragment>
  );
};

export default SignIn;
