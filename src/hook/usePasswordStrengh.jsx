/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Context } from "../components/Hoc";

export const usePasswordStrengh = ({ mainPassword, rePassword }) => {
  console.log("main: ", mainPassword, "second: ", rePassword);
  const [hasLowerCase, setHasLowerCase] = useState(null);
  const [hasUpperCase, setHasUpperCase] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [hasSymbol, setHasSymbol] = useState(null);
  const [hasValidLength, setHasValidLength] = useState(null);
  const [hasMatch, setHasMatch] = useState(null);
  const [hasSpace, setHasSpace] = useState(null);

  useEffect(() => {
    setHasLowerCase(mainPassword.toUpperCase() !== mainPassword);
    setHasUpperCase(mainPassword.toLowerCase() !== mainPassword);
    setHasNumber(/\d/.test(mainPassword));
    setHasSymbol(/[`!@#$%^&*()_+\-=\]{};':"]/.test(mainPassword));
    setHasValidLength(/.{8,}/.test(mainPassword));
    setHasMatch(mainPassword && mainPassword === rePassword);
    setHasSpace(/\u0020/.test(mainPassword));
  }, [mainPassword, rePassword]);

  return [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSymbol,
    hasValidLength,
    hasMatch,
    hasSpace,
  ];
};
