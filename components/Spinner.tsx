import React from "react";
import Image from "next/image";
import spinner from '../public/spinner.gif';

const Spinner: React.FC = () => { 
  return (
    <div>
      <Image className="w-[200px] m-auto block" src={spinner} alt="Spinner Image" />
    </div>
  );
};

export default Spinner;
