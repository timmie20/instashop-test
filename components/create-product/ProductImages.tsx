import Image from "next/image";
import React from "react";

export default function ProductImages() {
  return (
    <div className="border-b px-4 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Product images</h2>
        <Image
          src="/assets/icons/arrow_down.svg"
          alt="arrow down"
          width={18}
          height={18}
        />
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 rounded-full bg-zinc-100 p-4">
        <span className="ml-2 text-app-primary">Add image</span>
        <Image
          src="/assets/icons/add_image.svg"
          alt="arrow down"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
