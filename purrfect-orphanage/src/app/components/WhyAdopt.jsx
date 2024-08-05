"use client"
import { merriweather } from "@/app/fonts";
import { ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WhyAdopt() {
  const router = useRouter();
  return (
    <>
      <section
        className="bg-white text-dark py-12 px-4 flex flex-col gap-14 lg:px-16 lg:flex-row"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716221277/paws-bg_nkyk44.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-start gap-3 md:pt-24">
          <p className="text-accent font-bold text-sm">Why Adopt?</p>
          <p className={`${merriweather.className} leading-10 text-3xl`}>
            Ready to add a dose of<br /> <span className="text-accent">purr-fection</span> to your life?
          </p>
          <p>
            Inspired by our lovely Boer Boel, Teddy, we created Furry Friends
            with one goal in mind: to make pet parenting as joyful and
            hassle-free as possible. Here at PurrFect Orphanage, we know pets aren&apos;t
            just animals—they&apos;re family members with fur, feathers, and fins!
          </p>
          <button
              type="button"
              className="text-white bg-accent flex flex-row items-center justify-between gap-4 hover:bg-accentdeep font-medium rounded-full text-sm px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000000] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => router.push('/why-adopt')}
            >
              Sniff out more{" "}
              <ArrowRight2 size="16" color="#ffffff" variant="Outline" />
            </button>
        </div>
        <div>
          <Image width={2000} height={2000} alt={'woman washing a dog'} className="rounded-3xl lg:w-[2000px] lg:h-auto" src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716688770/smiley-woman-washing-dog-full-shot_2_3_yz7anj.png" />
        </div>
      </section>
    </>
  );
}