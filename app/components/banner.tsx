import Link from "next/link";
import React from "react";

type Props = {};

export default function banner({}: Props) {
  return (
    <>
      <div>
        <span>✨Discover Your Dream Property with Estatein</span>
        <Link href="/" className="underline">Learn More</Link>
      </div>
      <div className="absolute top-0 right-8">
        
      </div>
    </>
  );
}
