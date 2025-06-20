import Image from "next/image";
import { InfiniteSlider } from ".";

const InfiniteSliderBasic = () => {
  return (
        <div className="relative w-full my-7 md:my-10">
      {/* Left fog */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 md:w-40 z-10 bg-gradient-to-r from-white to-white/10" />
      {/* Right fog */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 md:w-40 z-10 bg-gradient-to-l from-white to-white/10 " />

    <InfiniteSlider direction="horizontal" gap={60} className="w-full h-full ">
      <Image
        src="/svgs/680bc458cd332b3f455fe319_doit.svg"
        alt="Apple Music logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/680bc475b8840aa3a1327c82_cdw.svg"
        alt="Chrome logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093db47d156386de8b4117_aws.svg"
        alt="Strava logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093dc872e8e2e140204e43_adobe.svg"
        alt="Nintendo logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093dd713547870ba46ca01_amplitude.svg"
        alt="Jquery logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093df4b3c47947c8a929d7_braze.svg"
        alt="Braze logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093e0f0dc652cde819b171_crowdstrike.svg"
        alt="Crowdstrike logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093e5da05dbe4d4937a298_google-cloud.svg"
        alt="Google Cloud logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
      <Image
        src="/svgs/68093df4b3c47947c8a929d7_braze.svg"
        alt="Braze logo"
        width={120}
        height={120}
        className="h-[50px] w-auto"
      />
    </InfiniteSlider>
    </div>
  );
};

export default InfiniteSliderBasic;
