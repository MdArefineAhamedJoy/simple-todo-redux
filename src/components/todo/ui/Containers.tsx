import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Containers = ({ children }: TContainerProps) => {
  return <div className=" h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Containers;
