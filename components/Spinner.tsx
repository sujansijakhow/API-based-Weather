import React from "react";
import Image from "next/image";
import spinner from '../public/spinner.gif';

type Props = {
};

const Spinner: React.FC<Props> = ({  }) => {
  return <div>
    <Image className="w-[200px] m-auto block" src={spinner} alt="Spinner Image"/>
  </div>;
};

export default Spinner;
