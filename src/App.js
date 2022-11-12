import "./App.css";
import { React, useState } from "react";
import { TextField } from "@mui/material";

function App() {
  const [inputs, setInput] = useState({});

  const field = { width: "100%", margin: "10px" };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
    fetch('localhost:8080/userDto/{id}',requestOptions);
  };

  const handleClear = (event) => {
    setInput((values) => ({
      FirstName: "",
      LastName: "",
      Street: "",
      City: "",
      Country: "",
      Email: "",
      Phone: "",
    }));
  };

  
  const requestOptions = {
    method: "POST",
    headers: { contentType: "application/json" },
    body: JSON.stringify(inputs),
  };

  

  


  return (
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form class="cont" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-6">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="First Name"
                  value={inputs.FirstName}
                  name="FirstName"
                  onChange={handleChange}
                />
              </div>
              <div class="col-6 ">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="Last Name"
                  name="LastName"
                  value={inputs.LastName}
                  onChange={handleChange}
                />
              </div>

              <div class="col-12 ">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="Street"
                  name="Street"
                  value={inputs.Street}
                  onChange={handleChange}
                />
              </div>
              <div class="col-12 ">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="City"
                  name="City"
                  value={inputs.City}
                  onChange={handleChange}
                />
              </div>
              <div class="col-12 ">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="Country"
                  name="Country"
                  value={inputs.Country}
                  onChange={handleChange}
                />
              </div>

              <div class="col-12 ">
                <TextField
                  style={field}
                  type="email"
                  variant="outlined"
                  label="Email"
                  name="Email"
                  value={inputs.Email}
                  onChange={handleChange}
                />
              </div>

              <div class="col-12 ">
                <TextField
                  style={field}
                  type="text"
                  variant="outlined"
                  label="Phone"
                  name="Phone"
                  value={inputs.Phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-10"></div>
              <div class="col-1">
                <button type="submit" class="btn btn-primary tlacitko">
                  Submit
                </button>
              </div>
              <div class="col-1">
                <button
                  type="button"
                  class="btn btn-secondary tlacitko"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>

          <div class="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
