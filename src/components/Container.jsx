/* eslint-disable react/prop-types */
import Header from "./Header";
const Container = ({ children }) => {
  return (
    <>
      <div className="w-10/12 mx-auto grid place-items-center h-screen">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Container;
