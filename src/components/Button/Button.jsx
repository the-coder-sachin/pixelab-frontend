import React from 'react'

const Button = ({children}) => {
  return (
    <button className="py-2 px-4 text-white rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105">{children}</button>
  );
}

export default Button