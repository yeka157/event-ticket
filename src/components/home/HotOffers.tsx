import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HotOffers = () => {
  const imageSrc = ["/offer-1.png", "/offer-2.png"];
  return (
    <section className="container mx-auto mt-6 mb-10 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-secondary-100 font-bold text-3xl">Hot Offers</h4>
        <span className="text-primary-100 hover:underline font-medium text-sm flex items-center gap-x-2">
          View All <ArrowRight size={18} />
        </span>
      </div>
      <div className="flex items-center gap-x-5">
        {imageSrc.map((src, index) => (
          <Image
            src={src}
            key={index}
            alt={`image-${index}`}
            width={0}
            height={0}
            sizes="50vw"
            className="h-auto w-[calc(50%-10px)] rounded-sm"
          />
        ))}
      </div>
    </section>
  );
};

export default HotOffers;
