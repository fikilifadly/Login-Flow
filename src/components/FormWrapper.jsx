/* eslint-disable react/prop-types */
const FormWrapper = ({ title, children, data, isValidate }) => {
  let totalTrue;

  if (data) {
    totalTrue = Object.values(data).reduce((acc, e) => acc + e, 0);
  }

  let strengh;
  if (totalTrue == 1) {
    strengh = "Poor";
  } else if (totalTrue > 1 && totalTrue < 4) {
    strengh = "Good";
  } else if (totalTrue > 3) {
    strengh = "Strong";
  }

  return (
    <div className="md:w-auto w-full flex flex-col gap-3 md:p-10 p-5 backdrop-blur-md bg-[#ffffff6e] shadow-lg rounded-md">
      <h1 className="font-bold text-[#151515] text-2xl text-center">
        {title || "Title"}
      </h1>
      <div className="flex md:flex-row flex-col justify-between md:gap-10 gap-5">
        {children}
        {isValidate && (
          <>
            <div className="self-center flex flex-col gap-3">
              {totalTrue !== 0 && (
                <h3 className="underline text-[#ddd9d8] font-bold">
                  Password Strengh: {strengh}
                </h3>
              )}
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
                {/* <li>
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
              </li> */}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FormWrapper;
