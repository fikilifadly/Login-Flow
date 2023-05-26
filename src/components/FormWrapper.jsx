/* eslint-disable react/prop-types */
const FormWrapper = ({ title, children, data, isValidate, onSubmit }) => {
  return (
    <div className="md:w-auto w-full flex flex-col gap-3 md:p-10 p-5 backdrop-blur-md bg-[#ffffff6e] shadow-lg rounded-md">
      <h1 className="font-bold text-[#151515] text-2xl text-center">
        {title || "Title"}
      </h1>
      <div className="flex md:flex-row flex-col justify-between md:gap-10 gap-5">
        <form onSubmit={onSubmit}>{children}</form>
        {isValidate && (
          <ul className="flex flex-col justify-center">
            <li>
              {data.hasNumber
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password Contains Number
            </li>
            <li>
              {data.hasUpperCase
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password Contains UpperCase
            </li>
            <li>
              {data.hasLowerCase
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password Contains LowerCase
            </li>
            <li>
              {data.hasSymbol
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password Contains Symbol
            </li>
            <li>
              {data.hasValidLength
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password At Least 8 Character
            </li>
            <li>
              {data.hasMatch
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              Password Match
            </li>
            <li>
              {!data.hasSpace
                ? String.fromCharCode(0x00002713)
                : String.fromCharCode(0x0000274c)}
              No Space on Password
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FormWrapper;
