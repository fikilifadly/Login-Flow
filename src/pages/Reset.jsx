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
      <div className="w-10/12 mx-auto flex">
        <Input
          type="password"
          onChange={mainInputHandler}
          placeholder="Main Password"
        />
        <Input
          type="password"
          onChange={secondInputHandler}
          placeholder="Second Password"
        />

        <ul>
          <li>
            Password Contains Number
            {!hasNumber
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password Contains UpperCase
            {!hasUpperCase
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password Contains LowerCase
            {!hasLowerCase
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password Contains Symbol
            {!hasSymbol
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password At Least 8 Character
            {!hasValidLength
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password Match
            {!hasMatch
              ? String.fromCharCode(0x0000274c)
              : String.fromCharCode(0x00002713)}
          </li>
          <li>
            Password not have space
            {!hasSpace
              ? String.fromCharCode(0x00002713)
              : String.fromCharCode(0x0000274c)}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Reset;
