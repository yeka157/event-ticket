import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopSelling = () => {
  const imageSrc = [
    "/top-selling-1.png",
    "/top-selling-2.png",
    "/top-selling-3.png",
  ];
  return (
    <section className="container mx-auto mt-6 mb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-secondary-100 font-bold text-3xl">Top Selling</h4>
        <span className="text-primary-100 hover:underline font-medium text-sm flex items-center gap-x-2">
          View All <ArrowRight size={18} />
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        {imageSrc.map((src, index) => (
          <Image
            src={src}
            key={index}
            height={0}
            width={0}
            alt={`image-${index}`}
            sizes="33vw"
            className="w-1/3 h-auto rounded-sm"
          />
        ))}
      </div>
    </section>
  );
};

export default TopSelling;
