import Image from "next/image";

export default function Footer() {
    const current_year = new Date();
  return (
    <footer className="text-dark text-sm p-4 border-t border-gray-400 flex flex-col lg:justify-between lg:items-baseline lg:flex-row lg:px-16 gap-8">
      <div className=" flex flex-col gap-2 items-start">
        <Image alt={'logo'} width={48} height={48} src="/logo.svg" />
        <p className="font-medium">
          PurrFect Orphanage is one of my projects in<br /> my QUEST to make this world a better place.
        </p>
      </div>
      <div>
        <p className>Built with love ❤️. © {current_year.getFullYear()} Johny Rex</p>
      </div>
      <div>
        <ul className="flex flex-col gap-3 lg:flex-row lg:gap-8">
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://www.linkedin.com/in/john-kwofie-731960101/">LINKEDIN</a></li>
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://www.github.com/johnyREx/">GITHUB</a></li>
            <li><a className="underline lg:no-underline lg:hover:underline" href="https://x.com/TheJohnyRex/">TWITTER</a></li>
        </ul>
      </div>
    </footer>
  );
}