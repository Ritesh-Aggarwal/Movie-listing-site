import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe")
    : "";

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem("userId", response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem("rememberMe", values.id);
                } else {
                  localStorage.removeItem("rememberMe");
                }
                props.history.push("/");
              } else {
                setFormErrorMessage("Check out your Account or Password again");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Check out your Account or Password again");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Log In</h2>
            {formErrorMessage && (
              <label>
                <p
                  style={{
                    color: "#ff0000bf",
                    fontSize: "0.7rem",
                    border: "1px solid",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  {formErrorMessage}
                </p>
              </label>
            )}
            <Form onSubmit={handleSubmit} style={{ width: "350px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail" required>
                <Form.Control
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email address"
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <Form.Text className="input-feedback">
                    {errors.email}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.password && touched.password && (
                  <Form.Text className="input-feedback">
                    {errors.password}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                  type="checkbox"
                  label="Remember Me"
                />
              </Form.Group>
              <a
                className="login-form-forgot"
                href="/reset_user"
                style={{ float: "right" }}
              >
                forgot password?
              </a>
              <Button
                disabled={isSubmitting}
                onSubmit={handleSubmit}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
              <br />
              <div className="mt-4">
                Or <a href="/register">register now!</a>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(LoginPage);
