/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const usePasswordStrengh = ({ mainPassword, rePassword }) => {
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [hasValidLength, setHasValidLength] = useState(false);
  const [hasMatch, setHasMatch] = useState(false);
  const [hasSpace, setHasSpace] = useState(false);

  useEffect(() => {
    setHasLowerCase(mainPassword.toLowerCase() !== mainPassword);
    setHasUpperCase(mainPassword.toUpperCase() !== mainPassword);
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
