/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be Valid Email")
    .required("Email Should not Empty"),
  password: yup.string().required("Password Should not Empty"),
});

export const Context = createContext();

const Hoc = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  return (
    <Context.Provider
      value={{ register, handleSubmit, watch, getValues, errors, control }}
    >
      {children}
    </Context.Provider>
  );
};

export default Hoc;
