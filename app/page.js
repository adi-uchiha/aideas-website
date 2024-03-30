import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute h-fit w-full">

      <div className="relative h-[100vh] w-full bg-[url('/assets/bg_cover.png')] bg-cover bg-top grid place-items-center">
        <div className="h-full w-full bg-black bg-opacity-60 absolute"></div>
        <div className="flex flex-col items-center gap-8   w-[70%] z-10 capitalize">
          <p className="text-center font-semibold text-5xl text-[#08fcff] pb-8">PVG’S COLLEGE OF ENGINEERING AND TECHNOLOGY & G. K. PATE (WANI) INSTITUTE OF MANAGEMENT</p>
          <p className="text-center text-4xl font">Artificial Intelligence and Data Science Engineering Association of Students </p>
          <p className="text-center text-3xl text-[#08fcff]">(AIDEAS)</p>
          <Image src="/assets/logo.png" height={150} width={150} />
        </div>
      </div>

    </div>
  );
}
