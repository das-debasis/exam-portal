import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export const Register = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    org: "",
    password: "",
    confirmPassword: "",
  });

  const [err, setErr] = useState({
    isError: false,
    message: "",
  });

  const FirstNameHandler = (event) => {
    console.log(formInput.fname);
    setFormInput((prevState) => {
      return {
        ...prevState,
        fname: event.target.value,
      };
    });
  };

  const LastNameHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        lname: event.target.value,
      };
    });
  };

  const EmailHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };
  const ContactHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        contact: event.target.value,
      };
    });
  };
  const OrgHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        org: event.target.value,
      };
    });
  };
  const PasswordHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        password: event.target.value,
      };
    });
  };
  const ConfirmPasswordHandler = (event) => {
    setFormInput((prevState) => {
      return {
        ...prevState,
        confirmPassword: event.target.value,
      };
    });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (formInput.fname == "") {
      setErr({
        isError: true,
        message: "Enter first name",
      });
    } else if (formInput.lname == "") {
      setErr({
        isError: true,
        message: "Enter last name",
      });
    } else if (
      formInput.email == "" ||
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(formInput.email) ==
        false
    ) {
      setErr({
        isError: true,
        message: "Email not valid",
      });
    } else if (
      formInput.contact == "" ||
      formInput.contact.length != 10 ||
      /^[0-9]*$/.test(formInput.contact) == false
    ) {
      setErr({
        isError: true,
        message: "Contact is not valid",
      });
    } else if (formInput.org == "") {
      setErr({
        isError: true,
        message: "Enter organization",
      });
    } else if (
      formInput.password == "" ||
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        formInput.password
      ) == false
    ) {
      setErr({
        isError: true,
        message: "Password is not valid  ",
      });
    } else if (formInput.confirmPassword == "") {
      setErr({
        isError: true,
        message: "Confirm your password",
      });
    } else if (formInput.confirmPassword != formInput.password) {
      setErr({
        isError: true,
        message: "Passwords do not match",
      });
    } else {
      setErr({
        isError: true,
        message: "User added successfully",
      });
      console.log(formInput);
      console.log(err.message);
      await saveUserData(formInput);
      navigate("/login");
    }
  };
  const saveUserData = async (FormData) => {
    // const product = {
    //   fullName: FormData.fullName,
    //   email: FormData.email,
    //   password: FormData.password,
    // };
    const message = await axios.post(
      "http://localhost:1000/user/add",
      FormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div
      style={{
        margin: "70px auto",
        fontFamily: "Poppins",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(52, 70, 143, 0.103)",
        width: "40%",
      }}
    >
      <h1 style={{ paddingTop: "40px" }}>Register</h1>
      {err.isError ? <div className="errorMessage">{err.message}</div> : null}
      <div
        style={{
          padding: "20px 40px 0px 40px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <label htmlFor="email">First Name : </label>
        <input
          type="text"
          className="form-control"
          placeholder="Prajosh"
          onChange={FirstNameHandler}
        />
      </div>
      <div
        style={{
          padding: "20px 40px 0px 40px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <label htmlFor="email">Last Name : </label>
        <input
          type="text"
          className="form-control"
          placeholder="Sahoo"
          onChange={LastNameHandler}
        />
      </div>
      <div
        style={{
          padding: "20px 40px 0px 40px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          className="form-control"
          placeholder="abc@xyz.com"
          onChange={EmailHandler}
        />
      </div>
      <div
        style={{
          padding: "20px 40px 0px 40px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <label htmlFor="email">Contact : </label>
        <input
          type="tel"
          className="form-control"
          placeholder="123456789"
          onChange={ContactHandler}
        />
      </div>
      <div
        style={{
          padding: "20px 40px 0px 40px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        {/* <label htmlFor="username">Contact : </label>
        <table>
          <tr>
            <th>
              <label style={{ marginRight: "15px", fontWeight: "normal" }}>
                +91
              </label>
            </th>
            <th style={{ width: "130%" }}>
              <input
                type="text"
                className="form-control"
                placeholder="123456789"
                onChange={ContactHandler}
              />
            </th>
          </tr>
        </table> */}
        <div
          style={{
            padding: "0px 0px 0px 0px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          <label htmlFor="username">Organization : </label>
          <input
            type="text"
            className="form-control"
            placeholder="SIT, BBSR"
            onChange={OrgHandler}
          />
        </div>
        <div
          style={{
            padding: "20px 0px 0px 0px",
            textlign: "left",
            fontWeight: "bold",
          }}
        >
          <label htmlFor="username">Password : </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={PasswordHandler}
          />
        </div>
        <div
          style={{
            padding: "20px 0px 40px 0px",
            textlign: "left",
            fontWeight: "bold",
          }}
        >
          <label htmlFor="username">Confirm Password : </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={ConfirmPasswordHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark"
          style={{ width: "100%", marginBottom: "40px" }}
          onClick={formSubmitHandler}
        >
          Register
        </button>
      </div>
    </div>
  );
};
