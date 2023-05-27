import { useContext, useState } from "react";
import { Context } from "./Hoc";
/* eslint-disable react/prop-types */
const Input = ({ type, onChange, label, name, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useContext(Context);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {type.toLowerCase() === "password" ? (
        <div className="flex flex-col gap-2">
          <label className="text-[#151515] font-semibold text-lg">
            {label}
          </label>
          <input
            {...props}
            {...register(name)}
            type={showPassword ? "text" : "password"}
            onChange={onChange}
            className="md:w-[250px] w-full py-2 pl-3 text-[12px] shadow-md shadow-[#000333] rounded-sm outline-none transition-all duration-150 focus:bg-slate-500 focus:text-white"
          />
          <div className="flex gap-2">
            <input type="checkbox" onChange={togglePassword} />
            Show Password
          </div>
        </div>
      ) : (
        <>
          <label className="text-[#151515] font-semibold text-lg">
            {label}
          </label>
          <input
            {...props}
            {...register(name)}
            type={type}
            onChange={onChange}
            className="md:w-[250px] w-full py-2 pl-3 text-[12px] shadow-md shadow-[#000333] rounded-sm outline-none focus:bg-slate-500 focus:text-white"
          />
        </>
      )}
    </>
  );
};

export default Input;
