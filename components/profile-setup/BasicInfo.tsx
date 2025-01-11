import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function BasicInfo() {
  const { formData, handleProfileInfoChange } = useAppContext() || {};

  return (
    <div>
      <div className="mt-4 w-[90vw] space-y-4">
        <h1 className="text-balance text-2xl font-medium md:text-3xl">
          Complete profile setup{" "}
        </h1>

        <p className="text-wrap text-sm text-slate-500 md:text-xl">
          Connect your socials for quick setup{" "}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-zinc-100">
          <Image
            src="/assets/icons/Group 692.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-zinc-100">
          <Image
            src="/assets/icons/Tik Tok.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-zinc-100">
          <Image
            src="/assets/icons/Google.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <p className="mt-4 text-wrap text-sm text-slate-500">
        Or enter manually{" "}
      </p>{" "}
      <div className="mt-4 space-y-4">
        <Input
          placeholder="Full name"
          className="rounded-xl"
          name="fullname"
          value={formData.profileInfo.fullname}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Username"
          className="rounded-xl"
          name="username"
          value={formData.profileInfo.username}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Phone number"
          className="rounded-xl"
          name="phone_number"
          value={formData.profileInfo.phone_number}
          onChange={handleProfileInfoChange}
        />
        <Input
          placeholder="Email"
          className="rounded-xl"
          name="email"
          value={formData.profileInfo.email}
          onChange={handleProfileInfoChange}
        />
      </div>
    </div>
  );
}
