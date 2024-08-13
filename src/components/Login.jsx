import { Button, TextField } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section class="">
        {/* <!-- Jumbotron --> */}
        <div class="px-4 py-5 px-md-5 text-center h-100 text-lg-start">
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  Gluco Guide <br />
                  <span class="text-primary">
                    Your personal health assistant
                  </span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Gluco Guide is a digital health companion designed to help you
                  manage your health effectively. By tracking your blood
                  pressure, sugar levels, and other vital information, it
                  provides personalized insights and dietary recommendations.
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card shadow">
                  <div class="card-body py-5 px-md-5">
                    <form>
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div class="row">
                        <h1 className="display-5 fw-bold ls-tight text-center text-primary">
                          Login
                        </h1>
                        <p className="text-center fw-bold">
                          Enter Your Credentials
                        </p>
                      </div>
                      {/* <!-- Email input --> */}
                      <div data-mdb-input-init class="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                        />
                      </div>
                      {/* <!-- Password input --> */}
                      <div data-mdb-input-init class="form-outline mb-4">
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                        />
                      </div>
                      {/* <!-- Submit button --> */}
                      <Button
                        variant="contained"
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-primary btn-block mb-4"
                      >
                        Sign up
                      </Button>
                    </form>
                    <div>
                      <p>
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-primary text-decoration-none"
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* //Footer Component */}
      <Footer />
    </>
  );
};

export default Login;
