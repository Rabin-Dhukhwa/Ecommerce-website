import React from "react";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-dark p-5 text-light text-center mt-4">
      Copy right &copy; {date}. All right Reserved
    </div>
  );
};
