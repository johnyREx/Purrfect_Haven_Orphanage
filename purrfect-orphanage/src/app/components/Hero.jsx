"use client"
import { merriweather } from "@/app/fonts";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Hero() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/pets');
  }
  return (
    <>
      <header
        className=" px-4 hero-pattern w-full hero-bg text-dark"
        style={{
          backgroundColor: "#FFCDD2",
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221277/paws-bg_nkyk44.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="lg:flex flex-row justify-between md:ms-16">
          <div className="mb-20 ">
            <p
              className={`text-[40px] pt-14 md:pt-24 font-bold leading-none md:text-6xl ${merriweather.className}`}
            >
              WELCOME TO
            </p>
            <br />
            <p className="text-stroke text-[40px] font-extrabold leading-none md:text-6xl">
              PurrFecT OrPHanage
            </p>
            <p className="text-xl font-bold leading-8 my-6">
              Your New Best Friend Awaits!
            </p>
            <button
              type="button"
              className="text-white bg-accent flex flex-row items-center gap-4  hover: font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              Fetch your new friend{" "}
              <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
            </button>
          </div>
          <Image
              alt={'person with their pet'}
              className="md:h-[600px] w-auto"
              width={1000}
              height={1000}
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221190/person-creating-online-content-with-their-pets-removebg_1_pw0x9h.png"
          />
        </div>
      </header>
    </>
  );
}