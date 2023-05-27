import { useContext } from "react";
import { usePasswordStrengh } from "../hook/usePasswordStrengh";
import { Context } from "../components/Hoc";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";

const Reset = () => {
  const { handleSubmit, errors, watch, register } = useContext(Context);

  const password = {
    mainPassword: watch("mainpassword") || "",
    rePassword: watch("repassword") || "",
  };

  const [hasLowerCase, hasUpperCase, hasNumber, hasSymbol] =
    usePasswordStrengh(password);

  const onSubmitHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <FormWrapper
        isValidate
        title="Reset Password"
        data={{
          hasLowerCase,
          hasUpperCase,
          hasNumber,
          hasSymbol,
        }}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Input
                type="password"
                name="mainpassword"
                placeholder="Main Password"
                label="Password"
                {...register("mainpassword")}
              />
              {errors.mainpassword && (
                <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                  {errors.mainpassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="password"
                name="repassword"
                placeholder="Second Password"
                label="Confirm Password"
                {...register("repassword")}
              />
              {errors.repassword && (
                <p className="text-white bg-[#ff000075] w-fit text-xs font-thin mb-3">
                  {errors.repassword.message}
                </p>
              )}
            </div>
          </div>
          <button className="py-2 px-5 rounded-md bg-[#ddd9d8] text-[#332c2a] font-bold transition-all duration-300 hover:bg-[#332c2a] hover:text-[#ddd9d8] mt-3 w-full">
            Submit
          </button>
        </form>
      </FormWrapper>
    </>
  );
};

export default Reset;
