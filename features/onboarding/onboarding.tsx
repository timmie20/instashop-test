import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Onboarding = () => {
  const features = [
    {
      id: 1,
      label: "Reach Millons Of Shoppers",
    },
    {
      id: 2,
      label: "Easy Product Listing",
    },
    {
      id: 3,
      label: "Secure and Fast Payments",
    },
    {
      id: 4,
      label: "Boost Your Visibility",
    },
  ];

  return (
    <>
      <div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col-reverse items-center justify-center px-6 py-4 md:py-0 lg:flex-row-reverse lg:justify-between">
        <div>
          <h1 className="mt-6 text-center text-[36px] font-bold md:text-5xl/normal lg:text-[64px]/normal">
            Welcome
          </h1>
          <p className="mb-6 text-wrap text-center text-sm md:text-base lg:text-lg">
            The safest platform to shop from social media vendors
          </p>
          <div className="mb-7 rounded-lg border border-app-primary bg-[#FFEAFA] px-4 py-3">
            <ul className="flex flex-col gap-3">
              {features.map((item) => (
                <li key={item.id} className="inline-flex items-center gap-2">
                  <span>
                    <Image
                      src="/assets/icons/check_circle.svg"
                      alt="check icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button size="lg" className="mt-14 w-full rounded-full">
            Get started
          </Button>
        </div>

        <div>
          <Image
            src="/assets/images/Shopping Sale.svg"
            alt="Responsive sizes example"
            width={550}
            height={600}
          />
        </div>
      </div>
    </>
  );
};
