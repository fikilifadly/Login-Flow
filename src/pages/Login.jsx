import FormWrapper from "../components/FormWrapper";
import Input from "../components/Input";

import { Link } from "react-router-dom";

import { Context } from "../components/Hoc";
import { useContext } from "react";
import { ErrorMessage } from "formik";

//import { connect } from "react-redux";

const Login = () => {
  const { Schema, Formik, Form } = useContext(Context);

  const handleMainPassword = (e) => {
    console.log(e);
  };

  return (
    <>
      <FormWrapper title="Login">
        <Formik
          initialValues={{
            email: "",
            mainpassword: "",
          }}
          validationSchema={Schema}
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {() => (
            <Form className="flex flex-col gap-3">
              <Input
                name="email"
                type="text"
                label="Email Address"
                placeholder="example@example.com"
                onChange={handleMainPassword}
              />
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                    {msg}
                  </p>
                )}
              />
              <Input
                name="mainpassword"
                type="password"
                label="Password"
                placeholder="********"
              />
              <div>{}</div>
              <ErrorMessage
                name="mainpassword"
                render={(msg) => (
                  <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                    {msg}
                  </p>
                )}
              />
              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="py-2 px-5 rounded-md bg-[#ddd9d8] text-[#332c2a] font-bold transition-all duration-300 hover:bg-[#332c2a] hover:text-[#ddd9d8]"
                >
                  Submit
                </button>
                <div className="grid place-items-center">
                  <Link
                    to="/signup"
                    className="text-xs text-center mt-3 underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </Form>
          )}
          {/* <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                name="email"
                {...register("email")}
                placeholder="example@example.com"
                label="Email Address"
              />
              <ErrorMessage
                name="email"
                className="text-white bg-[#ff000075] w-fit text-xs font-thin"
              />
              {errors.email && (
                <p className="text-white bg-[#ff000075] w-fit text-xs font-thin">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="password"
                name="mainpassword"
                {...register("mainpassword")}
                placeholder="******"
                label="Password"
              />
              {errors.mainpassword && (
                <p className="text-white bg-[#ff000075] w-fit text-xs font-thin">
                  {errors.mainpassword.message}
                </p>
              )}
            </div>
            <button className="py-2 px-5 rounded-md bg-[#ddd9d8] text-[#332c2a] font-bold transition-all duration-300 hover:bg-[#332c2a] hover:text-[#ddd9d8]">
              Submit
            </button>
            <div className="grid place-items-center">
              <Link to="/signup" className="text-xs text-center mt-3 underline">
                Sign Up
              </Link>
            </div>
          </div> */}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default Login;
