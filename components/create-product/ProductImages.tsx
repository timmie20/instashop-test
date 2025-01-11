"use client";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Switch } from "../ui/switch";

type ImageData = {
  file: File;
  include: boolean;
  previewUrl: string;
};

export default function ProductImages() {
  const { setFormData } = useAppContext();
  const [images, setImages] = useState<ImageData[]>([]);
  // const [formData, setFormData] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => ({
      file,
      include: true, // Automatically include the image in formData
      previewUrl: URL.createObjectURL(file), // Generate a preview URL
    }));

    setImages((prev) => [...prev, ...newImages]);

    // Add included images to formData
    setFormData((prev) => ({
      ...prev,
      productDetails: {
        ...prev.productDetails,
        product_images: [
          ...prev.productDetails.product_images,
          ...newImages.filter((img) => img.include).map((img) => img.file),
        ],
      },
    }));
  };

  const handleToggleInclude = (index: number) => {
    setImages((prev) =>
      prev.map((img, i) =>
        i === index ? { ...img, include: !img.include } : img,
      ),
    );

    setFormData((prev) => ({
      ...prev,
      productDetails: {
        ...prev.productDetails,
        product_images: images
          .map((img, i) =>
            i === index ? { ...img, include: !img.include } : img,
          )
          .filter((img) => img.include)
          .map((img) => img.file),
      },
    }));
  };

  const handleAddImageClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  const handleDeleteImage = (index: number) => {
    const imageToDelete = images[index];
    setImages((prev) => prev.filter((_, i) => i !== index));

    setFormData((prev) => ({
      ...prev,
      productDetails: {
        ...prev.productDetails,
        product_images: prev.productDetails.product_images.filter(
          (img) => img !== imageToDelete.file,
        ),
      },
    }));
  };
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

      <div className="mt-4 flex flex-col space-y-3">
        {images.map((img, index) => (
          <div key={index} className="flex items-center justify-between">
            <Image
              src={img.previewUrl}
              alt={`Preview ${index}`}
              width={60}
              height={60}
              className="rounded-md"
            />
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleDeleteImage(index)}
                className="ml-2 text-base text-red-500"
              >
                x
              </button>

              <Switch
                checked={img.include}
                onCheckedChange={() => handleToggleInclude(index)}
                aria-readonly
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="hidden"
        />

        <button
          onClick={handleAddImageClick}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-100 p-4 text-app-primary"
        >
          Add New Image
          <Image
            src="/assets/icons/add_image.svg"
            alt="arrow down"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
