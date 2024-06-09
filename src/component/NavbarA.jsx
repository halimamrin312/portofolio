import React from 'react';

const CustomLink = ({href,children}) => {
  return (
    <a href={href} className="py-2 px-2 focus:bg-yellow-400 focus:text-slate-800">
        {children}
    </a>
  )
}

export default CustomLink;