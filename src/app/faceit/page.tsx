"use client"
import Link from "next/link";
import Image from "next/image";
import CardCarousel from "@/components/universal/CardCarousel";

const Card = ({
  name,
  image,
  content,
  href,
}: {
  name: string;
  image: string;
  content: string;
  href?: string;
}) => {
  return (
    <a href={href}>
      <div className="max-w-sm overflow-hidden rounded shadow-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt="latest news image"
          className="max-h-80 rounded-lg object-cover"
        />
        <div className="px-6 py-4 text-center">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="font-medium text-secondary">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Faceit() {
  return (
    <div className="rounded-lg bg-darkgray text-center text-white shadow-lg py-10 " >
      <h1 className="poppins text-5xl font-semibold">FACEIT</h1>
      <p className="montserrat m-10 mx-auto w-[70%] text-xl">
        Sharpen your aim and dominate Counter-Strike 2 in our FACEIT Hub! Join
        the community for skilled matches and climb the leaderboards.
      </p>
      <div>
      <CardCarousel />
      </div>
    </div>
  );
}
