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
        <div>
          <input
            {...props}
            type={showPassword ? "text" : "password"}
            onChange={onChange}
          />
          <div>
            <input type="checkbox" onChange={togglePassword} />
            Show Password
          </div>
        </div>
      ) : (
        <input type={type} onChange={onChange} {...props} />
      )}
    </>
  );
};

export default Input;
