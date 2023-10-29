import Wrapper from "../Wrapper";

export default async function ProductHero() {
  return (
    <Wrapper>
      <div className="text-center py-20 md:py-24 lg:py-32 xl:py-36">
        <h1 className="text-beige font-semibold text-3xl lg:text-4xl mb-3 md:mb-5 lg:mb-10">
          Next JS Test
        </h1>
        <p className="text-xs lg:text-sm font-medium max-w-xs md:max-w-2xl lg:max-w-[900px] xl:max-w-6xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </Wrapper>
  );
}
