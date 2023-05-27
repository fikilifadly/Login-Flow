/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const usePasswordStrengh = ({ mainPassword, rePassword }) => {
  const [hasLowerCase, setHasLowerCase] = useState(null);
  const [hasUpperCase, setHasUpperCase] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [hasSymbol, setHasSymbol] = useState(null);

  //const [hasValidLength, setHasValidLength] = useState(null);
  // const [hasMatch, setHasMatch] = useState(null);
  // const [hasSpace, setHasSpace] = useState(null);

  useEffect(() => {
    setHasLowerCase(mainPassword.toUpperCase() !== mainPassword);
    setHasUpperCase(mainPassword.toLowerCase() !== mainPassword);
    setHasNumber(/\d/.test(mainPassword));
    setHasSymbol(/[`!@#$%^&*()_+\-=\]{};':"]/.test(mainPassword));

    //setHasValidLength(/.{8,}/.test(mainPassword));
    // setHasMatch(mainPassword && mainPassword === rePassword);
    // setHasSpace(/\u0020/.test(mainPassword));
  }, [mainPassword, rePassword]);

  return [
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSymbol,
    // hasValidLength,
    // hasMatch,
    // hasSpace,
  ];
};
