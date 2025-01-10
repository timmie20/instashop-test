import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

export default function StepThree() {
  return (
    <div className="mt-4">
      <div className="flex h-[140px] w-full items-center justify-center rounded-xl border">
        <div className="relative flex size-20 items-center justify-center">
          <Image
            src="/assets/images/test.webp"
            alt="image preview"
            fill
            className="rounded-full"
          />
          <Image
            src="/assets/icons/add_a_photo.svg"
            alt="image preview"
            width={24}
            height={24}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <Input placeholder="Store name " className="rounded-xl" />
        <Input placeholder="Store tag name" className="rounded-xl" />
        <Input placeholder="Store phone number" className="rounded-xl" />
        <Input placeholder="Store email" className="rounded-xl" />
        <Input placeholder="Category" className="rounded-xl" />
      </div>
    </div>
  );
}
