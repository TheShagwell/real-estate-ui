import { DoorClosed } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Banner({}: Props) {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center gap-[.625rem]">
          <span>✨Discover Your Dream Property with Estatein</span>
          <Link href="/" className="underline">
            Learn More
          </Link>
        </div>
        <div className="flex items-center justify-center absolute top-0 right-8 border border-solid border-red-50 rounded-full w-8 h-8">
            <DoorClosed/>
        </div>
      </div>
    </>
  );
}
