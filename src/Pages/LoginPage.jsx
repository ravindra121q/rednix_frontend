import { Button, FormGroup, FormLabel, Input } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../BaseUrl";
import axios from "axios";
import { Store } from "react-notifications-component";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post(`${BaseUrl}/users/login`, data)
      .then((res) => {
        console.log(res);
        if (res.data.message === "Login successful") {
          Store.addNotification({
            title: "Success",
            message: res.data.message,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
            },
          });
          navigate("/dashboard");
        } else {
          Store.addNotification({
            title: "Error",
            message: res.data.message,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Store.addNotification({
          title: "Error",
          message: err.response.data.message,
          type: "error",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      });
  };
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div
        style={{
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
          height: "350px",
          width: "30%",
        }}
      >
        <h1>Login Page</h1>
        <p>Please login to continue</p>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <FormGroup>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </FormGroup>
          <Button variant="contained" onClick={submitHandler}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
