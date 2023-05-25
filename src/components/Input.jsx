/* eslint-disable react/prop-types */
import { useState } from "react";

const Input = ({ type, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {type.toLowerCase() === "password" ? (
        <div className="flex flex-col gap-2">
          <input
            {...props}
            type={showPassword ? "text" : "password"}
            onChange={onChange}
            className="md:w-[250px] w-full py-2 pl-3 text-[12px] shadow-md shadow-[#000333] rounded-sm outline-none"
          />
          <div className="flex gap-2">
            <input type="checkbox" onChange={togglePassword} />
            Show Password
          </div>
        </div>
      ) : (
        <input
          type={type}
          onChange={onChange}
          {...props}
          className="md:w-[250px] w-full py-2 pl-3 text-[12px] shadow-md shadow-[#000333] rounded-sm outline-none"
        />
      )}
    </>
  );
};

export default Input;
