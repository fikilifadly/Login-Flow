/* eslint-disable react/prop-types */
import { createContext } from "react";
import { ErrorMessage, Formik, Form } from "formik";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Context = createContext();

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be Valid Email")
    .required("Email Should not Empty"),
  mainpassword: yup
    .string()
    .required("Password Should not Empty")
    .min(8, "Password Atleast 8 Character"),
  repassword: yup
    .string()
    .required("Confirm Password Should not Empty")
    .oneOf([yup.ref("mainpassword")], "Password Not Match"),
  name: yup.string().required("Name Should not Empty"),
});

const Hoc = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  return (
    <Context.Provider
      value={{
        Schema,
        Formik,
        Form,
        ErrorMessage,
        register,
        handleSubmit,
        watch,
        errors,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Hoc;
