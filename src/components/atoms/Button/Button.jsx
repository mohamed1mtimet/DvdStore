import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={[
        "bg-red-600 rounded-xl px-4 py-2 text-white font-semibold outline outline-offset-2 outline-2 hover:bg-red-700 focus:outline-4 ",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
