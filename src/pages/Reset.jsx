import { useState } from "react";
import { usePasswordStrengh } from "../hook/usePasswordStrengh";
import Input from "../components/Input";

// eslint-disable-next-line react/prop-types
const Reset = () => {
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

  const mainInputHandler = (e) => {
    setPassword({ ...password, mainPassword: e.target.value });
  };
  const secondInputHandler = (e) => {
    setPassword({ ...password, rePassword: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:p-10 p-5 backdrop-blur-md bg-[#ffffff6e] shadow-lg rounded-md">
        <h1 className="font-bold text-[#151515] text-2xl text-center">
          Reset Password
        </h1>
        <div className="flex md:flex-row flex-col justify-between md:gap-10 gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mainpassword"
                className="text-[#151515] font-semibold text-lg"
              >
                Password
              </label>
              <Input
                type="password"
                name="mainpassword"
                onChange={mainInputHandler}
                placeholder="Main Password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="repassword"
                className="text-[#151515] font-semibold text-lg"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                name="repassword"
                onChange={secondInputHandler}
                placeholder="Second Password"
              />
            </div>
          </div>
          <ul className="flex flex-col justify-center">
            <li>
              {!hasNumber
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password Contains Number
            </li>
            <li>
              {!hasUpperCase
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password Contains UpperCase
            </li>
            <li>
              {!hasLowerCase
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password Contains LowerCase
            </li>
            <li>
              {!hasSymbol
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password Contains Symbol
            </li>
            <li>
              {!hasValidLength
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password At Least 8 Character
            </li>
            <li>
              {!hasMatch
                ? String.fromCharCode(0x0000274c)
                : String.fromCharCode(0x00002713)}
              Password Match
            </li>
            <li>
              {!hasSpace
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              No Space on Password
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reset;
