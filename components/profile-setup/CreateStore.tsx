import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function CreateStore() {
  const { formData, handleProfileInfoChange } = useAppContext() || {};
  return (
    <div className="mt-4">
      <div className="flex h-[140px] w-full flex-col items-center justify-center rounded-xl border">
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
        <span className="mt-1">Upload store logo</span>
      </div>
      <div className="mt-4 space-y-4">
        <Input
          placeholder="Store name "
          className="rounded-xl"
          name="store_name"
          value={formData.profileInfo.store_name}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Store tag name"
          className="rounded-xl"
          name="store_tag"
          value={formData.profileInfo.store_tag}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Store phone number"
          className="rounded-xl"
          name="store_number"
          value={formData.profileInfo.store_number}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Store email"
          className="rounded-xl"
          name="store_email"
          value={formData.profileInfo.store_email}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Category"
          className="rounded-xl"
          name="category"
          value={formData.profileInfo.category}
          onChange={handleProfileInfoChange}
        />
      </div>
    </div>
  );
}
