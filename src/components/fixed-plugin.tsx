"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/6285977898907?text=Hallo Kak Mau Nanya-nanya Tentang Buat Project Dong ?" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="/image/whatsapp.svg"
        />{" "}
        Contact Us
      </Button>
    </a>
  );
}
