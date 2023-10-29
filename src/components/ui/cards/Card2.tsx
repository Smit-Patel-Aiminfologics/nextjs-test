import React from "react";

function Card2({
  cardNum,
  className,
}: {
  cardNum: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`h-48 xl:h-52 w-full md:w-52 xl:w-56 px-5 bg-white shadow-xl relative grid place-items-center`}
      >
        <p className="text-6xl xl:text-7xl text-gray font-semibold absolute top-2 right-3 w-fit">
          {cardNum}
        </p>
        <p className="text-xs md:text-sm font-medium mt-10">
          Nam tempor gravida aliquam. Aenean aliquet nunc vel ultimperdiet leo
          odio, id finibus metus dapibus
        </p>
      </div>
    </div>
  );
}

export default Card2;
