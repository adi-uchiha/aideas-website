import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute h-fit w-full">

      <div className="relative h-[800px] w-full bg-[url('/assets/bg_cover.jpg')] backdrop-brightness-10 bg-cover bg-top grid place-items-center">
        <div className="h-full w-full bg-black bg-opacity-60 absolute"></div>
        <div className="flex flex-col items-center gap-6 w-[70%] z-10 capitalize">
          <p className="text-center font-bold text-4xl text-[#08fcff]">PVG’S COLLEGE OF ENGINEERING AND TECHNOLOGY & G. K. PATE (WANI) INSTITUTE OF MANAGEMENT</p>
          <p className="text-center text-3xl font-bold">Association Of Artificial Intelligence & Data Science</p>
          <p className="text-center text-3xl">(AIDEAS)</p>
          <Image src="/assets/logo.png" height={100} width={100} />
        </div>
      </div>

    </div>
  );
}
