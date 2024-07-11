import React from "react";

const Textarea = ({ className, ...rest }) => {
  return (
    <textarea
      placeholder="Movies Name ..."
      className={[
        "bg-slate-200 rounded-xl px-4 py-2  font-semibold hover:bg-slate-300 focus:outline-4 outline outline-offset-2 outline-2 ",
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default Textarea;
