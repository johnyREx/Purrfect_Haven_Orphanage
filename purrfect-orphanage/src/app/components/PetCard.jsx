"use client";
import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";
import NavBar from "./core/NavBar";
import { SearchNormal1 } from "iconsax-react";
import Link from "next/link";

export default function PetCard({image, name, url, id}) {
  return (
    <>
      <Card
        className="max-w-[316px] border-none gap-2"
        renderImage={() => (
          <Link href={`/pets/details/${id}`}>
          <Image
          className="rounded-xl max-w-full min-h-[300px] max-h-[300px] object-cover"
            width={500}
            height={500}
            src={image}
            alt={name}
          />
          </Link>
        )}
      >
        <p className="font-bold text-dark hover:text-accent  dark:text-gray-400">
          {name}
        </p>
      </Card>
    </>
  );
}