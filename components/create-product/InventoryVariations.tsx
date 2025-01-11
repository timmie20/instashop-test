"use client";
import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from "../ui/checkbox";
import { useAppContext } from "@/context/AppContext";
import { CheckedState } from "@radix-ui/react-checkbox";

type Variant = {
  id: number;
  label: string;
};

interface VariationBlockProps {
  block: {
    id: number;
    variantType: string;
    variants: Variant[];
  };
  onUpdateBlock: (
    id: number,
    data: Partial<{
      variantType: string;
      variants: Variant[];
    }>,
  ) => void;
  onRemoveBlock: (id: number) => void;
}

export default function InventoryVariations() {
  const { formData, setFormData } = useAppContext() || {};
  const [variantBlocks, setVariantBlocks] = useState<
    {
      id: number;
      variantType: string;
      variants: Variant[];
    }[]
  >([]);

  const handleAddBlock = () => {
    setVariantBlocks((prev) => {
      const newBlock = {
        id: Math.floor(Math.random() * 1000), // Generate a unique ID
        variantType: "",
        variants: [],
      };
      const updatedBlocks = [...prev, newBlock];

      // Update form data
      setFormData((prevFormData) => ({
        ...prevFormData,
        productDetails: {
          ...prevFormData.productDetails,
          variations: updatedBlocks.map((block) => ({
            type: block.variantType,
            variants: block.variants.map((v) => v.label),
          })),
        },
      }));

      return updatedBlocks;
    });
  };

  const handleRemoveBlock = (id: number) => {
    setVariantBlocks((prev) => {
      const updatedBlocks = prev.filter((block) => block.id !== id);

      // Update form data
      setFormData((prevFormData) => ({
        ...prevFormData,
        productDetails: {
          ...prevFormData.productDetails,
          variations: updatedBlocks.map((block) => ({
            type: block.variantType,
            variants: block.variants.map((v) => v.label),
          })),
        },
      }));

      return updatedBlocks;
    });
  };

  const handleUpdateBlock = (
    id: number,
    data: Partial<{
      variantType: string;
      variants: Variant[];
    }>,
  ) => {
    setVariantBlocks((prev) => {
      const updatedBlocks = prev.map((block) =>
        block.id === id ? { ...block, ...data } : block,
      );

      // Update form data
      setFormData((prevFormData) => ({
        ...prevFormData,
        productDetails: {
          ...prevFormData.productDetails,
          variations: updatedBlocks.map((block) => ({
            type: block.variantType,
            variants: block.variants.map((v) => v.label),
          })),
        },
      }));

      return updatedBlocks;
    });
  };

  const handleToggle = (checked: CheckedState) => {
    setFormData?.((prev) => ({
      ...prev,
      productDetails: {
        ...prev.productDetails,
        has_variations: checked === "indeterminate" ? false : !!checked,
      },
    }));
  };

  return (
    <div className="border-b px-4 pb-6">
      <h2 className="text-sm font-medium">Inventory Variations</h2>
      <div className="mt-2 flex items-center gap-2">
        <Checkbox
          id="has_variation"
          name="has_variations"
          onCheckedChange={handleToggle}
        />
        <span className="text-balance text-sm">
          This product is variable; has different colors, sizes, weight,
          materials, etc.
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {formData.productDetails.has_variations &&
          variantBlocks.map((block) => (
            <VariationBlock
              key={block.id}
              block={block}
              onUpdateBlock={handleUpdateBlock}
              onRemoveBlock={handleRemoveBlock}
            />
          ))}
      </div>

      <button
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-zinc-100 p-4 text-app-primary"
        onClick={handleAddBlock}
      >
        <span className="text-2xl">+</span>
        <span className="text-app-primary">Add new option</span>
      </button>
    </div>
  );
}

const VariationBlock: React.FC<VariationBlockProps> = ({
  block,
  onUpdateBlock,
  onRemoveBlock,
}) => {
  const [variant, setVariant] = useState("");
  const variantInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && variant.trim()) {
        onUpdateBlock(block.id, {
          variants: [
            ...block.variants,
            { id: Math.floor(Math.random() * 1000), label: variant },
          ],
        });
        setVariant("");
        e.preventDefault();
      }
    };

    const currentInput = variantInputRef.current;
    const keyDownHandler = (e: Event) =>
      handleKeyDown(e as unknown as KeyboardEvent);
    currentInput?.addEventListener("keydown", keyDownHandler);
    return () => currentInput?.removeEventListener("keydown", keyDownHandler);
  }, [variant, block, onUpdateBlock]);

  return (
    <div className="max-h-[100px] min-h-[68px] overflow-scroll rounded-xl border px-4 py-2">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="E.g Size"
          className="w-full rounded-xl border-none bg-transparent text-sm font-medium placeholder:text-xs focus:outline-none md:text-base md:placeholder:text-base"
          value={block.variantType}
          onChange={(e) =>
            onUpdateBlock(block.id, { variantType: e.target.value })
          }
        />
        <button
          onClick={() => onRemoveBlock(block.id)}
          className="ml-2 text-base text-red-500 md:text-xl"
        >
          x
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1">
        {block.variants.map((variant) => (
          <span
            key={variant.id}
            className="flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-2 py-[2px] text-xs md:text-base"
          >
            {variant.label}
            <svg
              width="8"
              height="8"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                onUpdateBlock(block.id, {
                  variants: block.variants.filter((v) => v.id !== variant.id),
                })
              }
              className="cursor-pointer"
            >
              <path
                d="M9.72517 0.2825C9.65578 0.212972 9.57337 0.157812 9.48264 0.120175C9.3919 0.0825394 9.29464 0.0631667 9.19642 0.0631667C9.09819 0.0631667 9.00093 0.0825394 8.9102 0.120175C8.81947 0.157812 8.73705 0.212972 8.66767 0.2825L5.00017 3.9425L1.33267 0.275C1.26323 0.205563 1.1808 0.150483 1.09008 0.112905C0.999352 0.0753258 0.902116 0.0559845 0.803918 0.0559845C0.70572 0.0559845 0.608483 0.0753258 0.51776 0.112905C0.427037 0.150483 0.344604 0.205563 0.275168 0.275C0.205731 0.344436 0.150651 0.426869 0.113072 0.517592C0.0754937 0.608315 0.0561523 0.705552 0.0561523 0.80375C0.0561523 0.901948 0.0754937 0.999184 0.113072 1.08991C0.150651 1.18063 0.205731 1.26306 0.275168 1.3325L3.94267 5L0.275168 8.6675C0.205731 8.73694 0.150651 8.81937 0.113072 8.91009C0.0754937 9.00082 0.0561523 9.09805 0.0561523 9.19625C0.0561523 9.29445 0.0754937 9.39168 0.113072 9.48241C0.150651 9.57313 0.205731 9.65556 0.275168 9.725C0.344604 9.79444 0.427037 9.84952 0.51776 9.88709C0.608483 9.92467 0.70572 9.94401 0.803918 9.94401C0.902116 9.94401 0.999352 9.92467 1.09008 9.88709C1.1808 9.84952 1.26323 9.79444 1.33267 9.725L5.00017 6.0575L8.66767 9.725C8.7371 9.79444 8.81954 9.84952 8.91026 9.88709C9.00098 9.92467 9.09822 9.94401 9.19642 9.94401C9.29461 9.94401 9.39185 9.92467 9.48257 9.88709C9.5733 9.84952 9.65573 9.79444 9.72517 9.725C9.7946 9.65556 9.84968 9.57313 9.88726 9.48241C9.92484 9.39168 9.94418 9.29445 9.94418 9.19625C9.94418 9.09805 9.92484 9.00082 9.88726 8.91009C9.84968 8.81937 9.7946 8.73694 9.72517 8.6675L6.05767 5L9.72517 1.3325C10.0102 1.0475 10.0102 0.5675 9.72517 0.2825Z"
                fill="black"
              />
            </svg>
          </span>
        ))}
      </div>

      <input
        ref={variantInputRef}
        type="text"
        placeholder="Add a variant"
        className="w-full rounded-xl border-none bg-transparent text-sm font-medium placeholder:text-xs focus:outline-none md:text-base md:placeholder:text-base"
        value={variant}
        onChange={(e) => setVariant(e.target.value)}
      />
    </div>
  );
};
