import React from 'react'

export const Register = () => {
  return (
      <div style={{
        margin: "70px auto",
        fontFamily: "Poppins",
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgba(52, 70, 143, 0.103)',
        width: "40%",}}>
        <h1 style={{paddingTop: "40px"}}>Register</h1>
        <table>
          <tr>
            <th>
              <div
                style={{padding: "40px 0px 0px 40px", textAlign: "left", fontWeight: "bold"}}
              >
                <label for="fname">First Name : </label>
                <input type="text" className="form-control" placeholder="Prajuice" style={{width:"110%"}} />
              </div>
            </th>
            <th>
              <div
                style={{padding: "40px 0px 0px 0px", textAlign: "left", fontWeight: "bold", marginLeft:"45px"}}
                
              >
                <label for="fname">Last Name : </label>
                <input type="text" className="form-control" placeholder="Sahoo" style={{width:"110%"}} />
              </div>
            </th>
          </tr>
        </table>
        <div style={{padding: "20px 40px 0px 40px", textAlign: "left", fontWeight: "bold"}}>
          <label for="email">Email : </label>
          <input type="email" className="form-control" placeholder="abc@xyz.com" />
        </div>
        <div style={{padding: "20px 40px 0px 40px", textAlign: "left", fontWeight: "bold"}}>
          <label for="username">Contact : </label>
          <table>
            <tr>
              <th>
                <label style={{marginRight: "15px", fontWeight: "normal"}}>+91</label>
              </th>
              <th style={{width: "130%"}}>
                <input type="text" className="form-control" placeholder="123456789"/>
              </th>
            </tr>
          </table>
          <div style={{padding: "20px 0px 0px 0px", textAlign: "left", fontWeight: "bold"}}>
            <label for="username">Organization : </label>
            <input type="text" className="form-control" placeholder="SIT, BBSR" />
          </div>
          <div style={{padding: "20px 0px 40px 0px", textlign: "left", fontWeight: "bold"}}>
            <label for="username">Password : </label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-dark" style={{width: "100%", marginBottom: "40px"}}>Register</button>
        </div>
      </div>
  );
}