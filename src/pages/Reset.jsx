import { useContext } from "react";
import { usePasswordStrengh } from "../hook/usePasswordStrengh";
import { Context } from "../components/Hoc";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";

const Reset = () => {
  const { handleSubmit, errors, watch } = useContext(Context);

  const password = {
    mainPassword: watch("mainpassword") || "",
    rePassword: watch("repassword") || "",
  };

  const [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSymbol,
    hasValidLength,
    hasMatch,
    hasSpace,
  ] = usePasswordStrengh(password);

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <FormWrapper
        onSubmit={handleSubmit(onSubmitHandler)}
        isValidate
        title="Reset Password"
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
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Input
              type="password"
              name="mainpassword"
              placeholder="Main Password"
              label="Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="password"
              name="repassword"
              placeholder="Second Password"
              label="Confirm Password"
            />
          </div>
        </div>
      </FormWrapper>
    </>
  );
};

export default Reset;
