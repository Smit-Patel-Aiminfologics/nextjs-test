import Wrapper from "../Wrapper";
import Card2 from "../ui/cards/Card2";

export default async function ProductFeatures2() {
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 md:gap-y-5 justify-between max-w-xs md:max-w-2xl lg:max-w-[900px] xl:max-w-6xl mx-auto xl:px-0 py-10 lg:py-0">
        {/* left side */}
        <div className="lg:max-w-xs xl:max-w-sm">
          <h1 className="font-semibold text-3xl lg:text-4xl mb-3 md:mb-5 lg:mb-10">
            Title Goes Here
          </h1>
          <p className="text-xs lg:text-sm font-medium  lg:max-w-6xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            lorem velit, mattis molestie dapibus eu, tempor eget nulla.
            Pellentesque consectetur lorem sit amet ex pellentesque maximus. Nam
            tempor gravida aliquam. Aenean aliquet nunc vel ultrices faucibus.
            Maecenas ut lorem risus. Etiam imperdiet leo odio, id finibus metus
            dapibus at. Curabitur at scelerisque orci.
          </p>
        </div>
        {/* right side  */}
        <div className="relative md:h-[400px] xl:h-[450px] md:w-[450px] xl:w-[500px]">
          <div className="flex flex-col gap-y-8 md:absolute top-0 lg:top-10 left-0">
            <Card2 cardNum={1} />
            <Card2 cardNum={2} className="md:hidden" />
            <Card2 cardNum={3} className="hidden md:block" />
          </div>
          <div className="flex flex-col gap-y-8 md:absolute top-0 lg:top-5 right-0 mt-8 md:mt-0">
            <Card2 cardNum={2} className="hidden md:block" />
            <Card2 cardNum={3} className="md:hidden" />
            <Card2 cardNum={4} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
