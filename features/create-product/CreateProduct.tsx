import React from "react";
import BasicDetails from "@/components/create-product/BasicDetails";
import Header from "@/components/create-product/Header";
import ProductImages from "@/components/create-product/ProductImages";
import InventoryVariations from "@/components/create-product/InventoryVariations";
import { Button } from "@/components/ui/button";
import Shipping from "@/components/create-product/Shipping";
import Link from "next/link";

export const CreateProduct = () => {
  return (
    <>
      <Header />
      <div className="space-y-4 pb-6">
        <BasicDetails />

        <ProductImages />

        <InventoryVariations />

        <Shipping />
      </div>

      <footer className="sticky bottom-0 left-0 flex w-full items-center gap-4 border-t bg-white p-4 pb-6">
        <Button className="w-full rounded-full border border-app-primary bg-transparent text-black hover:bg-transparent">
          Cancel
        </Button>

        <Link href="/product-preview" className="w-full">
          <Button className="w-full rounded-full">Save</Button>
        </Link>
      </footer>
    </>
  );
};
