import FormWrapper from "../components/FormWrapper";
import Input from "../components/Input";
import { Context } from "../components/Hoc";
import { useContext, useState, useEffect } from "react";
import { DevTool } from "@hookform/devtools";
import { usePasswordStrengh } from "../hook/usePasswordStrengh";

const SignUp = () => {
  const { Formik, Form, ErrorMessage } = useContext(Context);

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  const [password, setPassword] = useState({
    mainPassword: "",
    rePassword: "",
  });

  const [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSymbol,
    hasValidLength,
    hasMatch,
    hasSpace,
  ] = usePasswordStrengh(password);

  return (
    <>
      <FormWrapper
        title="Sign Up"
        isValidate
        data={{
          hasLowerCase,
          hasUpperCase,
          hasNumber,
          hasSymbol,
          hasValidLength,
          hasMatch,
          hasSpace,
        }}
      >
        <Formik>
          <Form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  name="email"
                  placeholder="example@example.com"
                  label="Email Address"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                      {msg}
                    </p>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="password"
                  name="mainpassword"
                  placeholder="******"
                  label="Password"
                />
                <ErrorMessage
                  name="mainpassword"
                  render={(msg) => (
                    <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                      {msg}
                    </p>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="password"
                  name="repassword"
                  placeholder="******"
                  label="Confirm Password"
                />
                <ErrorMessage
                  name="repassword"
                  render={(msg) => (
                    <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                      {msg}
                    </p>
                  )}
                />
              </div>
              <button className="py-2 px-5 rounded-md bg-[#ddd9d8] text-[#332c2a] font-bold transition-all duration-300 hover:bg-[#332c2a] hover:text-[#ddd9d8]">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </FormWrapper>
    </>
  );
};

export default SignUp;
