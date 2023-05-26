import FormWrapper from "../components/FormWrapper";
import Input from "../components/Input";
import { Context } from "../components/Hoc";
import { useContext } from "react";
import { DevTool } from "@hookform/devtools";

const Login = () => {
  const { handleSubmit, errors, control } = useContext(Context);

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <FormWrapper title="Login" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="email"
              placeholder="example@example.com"
              label="Email Address"
              requiredText="Email Harus Diisi"
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
              name="password"
              placeholder="******"
              label="Password"
            />
            {errors.password && (
              <p className="text-white bg-[#ff000075] w-fit text-xs font-thin">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className="py-2 px-5 rounded-md bg-[#dbd7d7] text-black font-bold">
            Submit
          </button>
        </div>
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
};

export default Login;
