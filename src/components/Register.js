import React from 'react'

export const Register = () => {
  return (
    <div>
    <center>
      <div class="header">
        <nav>
          <a href="index.html">e-Exam</a>
          <a href="openform.html">Openforum</a>
          <a href="">e-Repository</a>
          <a href="">MyWall</a>
        </nav>
        <div class="form-input">
          <input type="text" class="search_bar" />
          <button type="submit" class="search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div class="login">
          <nav class="login">
            <a href="register.html">SIGNUP</a>
          </nav>
        </div>
      </div>
      <div
        style="
          text-align: center;
          margin-top: 70px;
          margin-bottom: 70px;
          border-radius: 10px;
          background-color: rgba(52, 70, 143, 0.103);
          width: 35%;
          padding-bottom: 40px;
        "
      >
        <h1 style="padding-top: 30px">Register</h1>
        <table>
          <tr>
            <th>
              <div
                style="padding: 20px 10px 0px 40px; text-align: left"
                id="name"
              >
                <label for="fname">First Name : </label>
                <input type="text" class="form-control" placeholder="Prajosh" />
              </div>
            </th>
            <th>
              <div
                style="padding: 20px 40px 0px 10px; text-align: left"
                id="name"
              >
                <label for="fname">Last Name : </label>
                <input type="text" class="form-control" placeholder="Sahoo" />
              </div>
            </th>
          </tr>
        </table>
        <div style="padding: 20px 40px 0px 40px; text-align: left">
          <label for="email">Email : </label>
          <input type="email" class="form-control" placeholder="abc@xyz.com" />
        </div>
        <div style="padding: 20px 40px 0px 40px; text-align: left">
          <label for="username">Contact : </label>
          <table>
            <tr>
              <th>
                <label style="font-weight: 400;margin-right: 15px"">+91</label>
              </th>
              <th style="width: 130%;"">
                <input
                  type="text"
                  class="form-control"
                  placeholder="123456789"
                />
              </th>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 40px 0px 40px; text-align: left">
          <label for="username">Organization : </label>
          <input type="text" class="form-control" placeholder="SIT, BBSR" />
        </div>
        <div style="padding: 20px 40px 40px 40px; text-align: left">
          <label for="username">Password : </label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button
          type="button"
          class="btn btn-dark"
          onclick="location.href ='index1.html';"
          style="width: 84%"
        >
          Register
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </center>
    </div>
  )
}