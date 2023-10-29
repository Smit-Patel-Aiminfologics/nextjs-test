import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  return (
    <section
      className={`w-full mx-auto max-w-[2040px] ${
        props.className ? props.className : ""
      }`}
    >
      {/* Main wrapper */}
      <div className="w-full mx-auto max-w-[1440px]">
        {/* Screen size container */}
        {props.children}
      </div>
    </section>
  );
};

export default Wrapper;
