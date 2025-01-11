"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";

export const Preview = () => {
  const { formData } = useAppContext();
  return (
    <div className="mx-auto max-w-screen-lg">
      <header className="sticky top-0 z-10 h-fit bg-white px-4 pb-2 pt-6">
        <div className="flex items-center justify-between">
          <Link href="/create-product">
            <button className="flex items-center gap-2">
              <Image
                src="/assets/icons/arrow_back.svg"
                alt="arrow back"
                width={20}
                height={20}
              />{" "}
              <span className="text-base font-medium">Preview product</span>
            </button>
          </Link>

          <Image
            src="/assets/icons/more_vert.svg"
            alt="more icon"
            width={20}
            height={20}
          />
        </div>
      </header>

      <div>
        <div className="relative h-[360px] w-full">
          <Image
            src="/assets/images/PRODUCT PAGE IMAGE.png"
            alt="more icon"
            fill
          />
        </div>

        <div className="mt-4 border-b px-4 pb-3">
          <div className="flex items-center justify-between">
            <h3 className="text-wrap text-sm font-medium md:text-2xl">
              {formData.productDetails.product_title?.trim()
                ? formData.productDetails.product_title
                : "Gucci bag – the epitome of luxury and sophistication"}
            </h3>

            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-zinc-200">
                <Image
                  src="/assets/icons/forward.svg"
                  alt="share icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="flex size-9 items-center justify-center rounded-full bg-zinc-200">
                <Image
                  src="/assets/icons/heart.svg"
                  alt="share icon"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <h2 className="text-xl md:text-2xl">
                {`
                ₦
                ${
                  formData.productDetails.price?.trim()
                    ? formData.productDetails.price
                    : "18.0"
                } `}
              </h2>
              <span className="text-xs text-slate-500 md:text-sm">
                {`
                ₦
                ${
                  formData.productDetails.old_price?.trim()
                    ? formData.productDetails.old_price
                    : "25.0"
                } `}
              </span>
              <span className="rounded-full bg-app-primary px-1 py-[2px] text-xs text-white md:text-sm">
                25% OFF
              </span>
            </div>

            <div className="inline-flex items-center gap-1">
              <div className="inline-flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    <Image
                      src="/assets/icons/Star 1.svg"
                      alt="star icon"
                      width={15}
                      height={15}
                    />
                  </span>
                ))}
              </div>

              <span className="text-sm text-slate-500">(5 sold)</span>
            </div>
          </div>
        </div>

        <div className="border-b px-4 pb-3 pt-4">
          <h3 className="text-sm font-medium md:text-xl">Select variants</h3>

          {Array.from({ length: 2 }, (_, i) => (
            <div className="mt-2" key={i}>
              <small className="font-medium">Size: SMALL</small>

              <div className="mt-2 flex flex-wrap items-center justify-between md:justify-normal md:gap-3">
                {Array.from({ length: 6 }, (_, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-zinc-100 px-2 py-[2px] text-center text-sm"
                  >
                    Filter
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-b px-4 pb-3 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium md:text-xl">
              Product Description
            </h3>
            <Image
              src="/assets/icons/arrow_down.svg"
              alt="arrow down"
              width={14}
              height={14}
            />
          </div>

          <h4 className="text-wrap text-xs md:text-base">
            {formData.productDetails.product_desc?.trim()
              ? formData.productDetails.product_desc
              : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil maxime consequatur fugiat, et repellat animi ea delectus eveniet aspernatur eaque veritatis nam provident sit saepe, ratione quos repellendus excepturi"}
          </h4>

          <span className="text-xs font-medium text-app-primary">
            Read more
          </span>
        </div>

        <div className="space-y-2 border-b px-4 pb-3 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium md:text-xl">
              About this vendor
            </h3>
            <Image
              src="/assets/icons/arrow_down.svg"
              alt="arrow down"
              width={14}
              height={14}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex size-[52px] shrink-0 items-center justify-center">
              <Image
                src="/assets/images/test.webp"
                alt="image preview"
                fill
                className="rounded-full"
              />
            </div>

            <div className="flex w-full items-center justify-between">
              <div>
                <span className="text-xs font-medium md:text-base">
                  {formData.profileInfo.store_name?.trim()
                    ? formData.profileInfo.store_name
                    : "Gucci store"}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">Fashion</span>
                  <span className="inline-flex items-center gap-[2px] text-xs text-slate-400">
                    <Image
                      src="/assets/icons/black_star.svg"
                      alt="star icon"
                      width={15}
                      height={15}
                    />
                    5.4
                  </span>
                  <span className="inline-flex items-center gap-[2px] text-xs text-slate-400">
                    <Image
                      src="/assets/icons/group.svg"
                      alt="star icon"
                      width={15}
                      height={15}
                    />
                    100k
                  </span>
                </div>
              </div>

              <span className="text-xs text-app-primary md:text-base">
                Follow
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from({ length: 6 }, (_, j) => (
              <span
                key={j}
                className="rounded-full bg-zinc-100 px-2 py-[2px] text-center text-xs"
              >
                Quality goods
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer className="sticky bottom-0 left-0 flex w-full items-center gap-4 border-t bg-white p-4 pb-6">
        <Link href="/" className="w-full">
          <Button className="w-full rounded-full">Publish</Button>
        </Link>
      </footer>
    </div>
  );
};
