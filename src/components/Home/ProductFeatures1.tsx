import Wrapper from "../Wrapper";
import Card1 from "../ui/cards/Card1";

export default async function ProductFeatures1() {
  return (
    <Wrapper>
      <div className="relative pt-20 pb-20 lg:pb-40 xl:pb-48">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-5 lg:mb-10">
          Title Goes Here
        </h2>
        <p className="text-xs lg:text-sm font-medium max-w-xs md:max-w-2xl lg:max-w-[900px] xl:max-w-[1110px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>

        <div className="w-80 md:w-[672px] lg:w-[900px] xl:w-[1152px] max-w-6xl mx-auto flex flex-wrap items-center justify-between md:absolute md:-bottom-28 md:left-1/2 md:-translate-x-1/2 mt-10 md:mt-0 gap-y-5">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Card1 key={index} />
            ))}
        </div>
      </div>
    </Wrapper>
  );
}
