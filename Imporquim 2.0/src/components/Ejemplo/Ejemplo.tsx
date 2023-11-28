import React from "react";

type Props = {
  children: React.ReactNode;
  title: String;
  autor: String;
};


const Ejemplo: React.FC<Props> = (props) => {
  return (
    <div className="grid max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-10 hover:-translate-y-1 duration-150">
      <div className="flex justify-center md:justify-end -mt-8">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-ice_verde-950"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-600">{props.children}</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {props.autor}
        </a>
      </div>
    </div>
  );
};

export default Ejemplo;
