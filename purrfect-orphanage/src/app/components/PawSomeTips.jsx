import { merriweather } from "../fonts";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";

export default function PawsomeTips() {
  const router = useRouter();
  return (
    <section className="my-12 mx-4 md:mx-16">
      <div
        className="relative rounded-3xl px-4 md:px-16 py-12 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716734770/man-with-his-adorable-pet-cat_1_1_jb0dkp.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        ></div>

        <div className="relative z-10 text-white flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-3">

          <p className={`${merriweather.className} text-3xl md:text-5xl`}>
            Purr-Fect tips for pet parents
          </p>
          <p className="md:max-w-[460px]">
            Ready to become a pet pro? From training tricks to grooming hacks,
            we’ve got all the tips you need to keep your PurrFect friend happy and
            healthy.
          </p>
            </div>
          <button
            type="button"
            className="text-white bg-accent flex flex-row items-center justify-between hover:bg-accentdeep gap-4 font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => router.push('/tips')}
          >
            Sniff out more{" "}
            <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
          </button>
        </div>
      </div>
    </section>
  );
}