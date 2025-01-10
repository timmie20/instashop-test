"use client";

import React, { useState } from "react";
import { ProfileInfo, ProductDetails } from "@/types";

interface FormDataType {
  profileInfo: ProfileInfo;
  productDetails: ProductDetails;
}

interface AppContextProps {
  formData: FormDataType;
  setFormData?: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const defaultContext: AppContextProps = {
  formData: {
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
      product_images: [""],
      self_shipping: false,
      instashop_shipping: false,
    },
  },
};

// Create the AuthContext
export const AppContext = React.createContext<AppContextProps>(defaultContext);

// AuthContextProvider component
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormDataType>(
    defaultContext.formData,
  );

  // Provide the context
  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = React.useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return ctx;
};
