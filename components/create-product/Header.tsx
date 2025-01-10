import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 h-fit bg-white px-4 pb-2 pt-6">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <Image
            src="/assets/icons/arrow_back.svg"
            alt="arrow back"
            width={20}
            height={20}
          />{" "}
          <span className="text-base font-medium">Create a product</span>
        </button>

        <Image
          src="/assets/icons/more_vert.svg"
          alt="more icon"
          width={20}
          height={20}
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border px-1 py-[2px]">
          <span className="text-xs text-gray-500">Draft</span>
          <Image
            src="/assets/icons/icon.svg"
            alt="check mark icon"
            width={12}
            height={12}
          />
        </div>
        <span className="text-sm font-medium text-app-primary">
          Preview product
        </span>
      </div>
    </header>
  );
}
