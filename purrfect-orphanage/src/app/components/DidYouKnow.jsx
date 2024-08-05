import { Merriweather } from "../fonts";
import Image from "next/image";

export default function DidYouKnow() {
    return (
        <>
      <section
        className="bg-brown flex flex-col gap-4 justify-between md:flex-row text-dark px-4 md:px-16 bg-blend-overlay py-12"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716724548/question-marks_sauaie.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="md:w-1/2 p-4 flex flex-col flex-grow gap-3 border border-secondarydeepest bg-secondarypalest"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716726033/noise_gttper.png')",
              backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-2 items-center text-center">
            <Image
                alt={'bulb'}
                width={28}
                height={28}
              className="w-[28px] h-[28px]"
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716734291/light-bulb_1_i0nejh.svg"
            />
            <div className={`${merriweather.className} leading-7 font-bold`}>
              Did you <span className="text-light">know?</span>
            </div>
          </div>
            <div>
              <p className="font-semibold">Dogs have a unique nose print?</p>
              <p>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                Yep, each dog's nose print is unique, much like a human fingerprint, The
                patterns of ridges and creases can be used to identify individual dogs.
              </p>
            </div>
        </div>
        <video className="flex-grow" autoPlay loop muted>
          <source src="https://res.cloudinary.com/dn5ks1ljf/video/upload/v1716727483/cat-with-glasses_oehan5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
    )
}