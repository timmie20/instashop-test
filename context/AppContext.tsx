"use client";

import React, { useState, createContext, useContext } from "react";
import { ProfileInfo, ProductDetails } from "@/types";

interface FormDataType {
  profileInfo: ProfileInfo;
  productDetails: ProductDetails;
}

interface AppContextProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  handleProfileInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProductDetailsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Default values for context
const defaultFormData: FormDataType = {
  profileInfo: {
    email: "",
    fullname: "",
    username: "",
    phone_number: "",
    store_name: "",
    store_tag: "",
    store_number: "",
    category: "",
    store_email: "",
    store_logo: "",
  },
  productDetails: {
    product_title: "",
    product_desc: "",
    price: "",
    old_price: "",
    product_collection: [""],
    inventory: "",
    has_variations: false,
    variations: [{ type: "", variants: [""] }],
    product_images: [""],
    self_shipping: false,
    instashop_shipping: false,
  },
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormDataType>(defaultFormData);

  const handleProfileInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData?.((prev) => ({
      ...prev,
      profileInfo: {
        ...prev.profileInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleProductDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData?.((prev) => ({
      ...prev,
      productDetails: {
        ...prev.productDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        handleProfileInfoChange,
        handleProductDetailsChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
