import React from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { Input } from "../ui/input";

export default function Shipping() {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium">Shipping</h2>
        <Image
          src="/assets/icons/arrow_down.svg"
          alt="arrow down"
          width={18}
          height={18}
        />
      </div>{" "}
      <div className="mt-4 space-y-4">
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-sm">Self shipping</span>
          <Checkbox id="terms1" />
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-sm">InstaShop shipping</span>
          <Checkbox id="terms1" />
        </div>
        <Input
          type="text"
          placeholder="Inventory stocks"
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
    </div>
  );
}
