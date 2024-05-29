import { HeaderMenu } from "@/components/header-menu";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderMenu />
      {children}
    </div>
  )
}
