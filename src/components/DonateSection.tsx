"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StripeIcon, EthereumIcon, PaytmIcon } from "@/icons";
import Link from "next/link";
import { Heart, Copy, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export default function DonateSection() {
  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <Heart className="size-6 mr-2 animate-pulse text-pink-300 drop-shadow-[0_0_8px_rgba(255,182,193,0.8)]" />
        <h2 className="text-xl font-semibold text-white">Support My Work</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button
          size="sm"
          className="bg-[#635BFF] hover:bg-[#5A52E8] text-white px-4 py-2 rounded-full text-sm font-medium"
          asChild
        >
          <Link
            href="https://donate.stripe.com/4gM14p365ckW2rp1bY0Ba0a"
            target="_blank"
            className="flex items-center gap-2"
          >
            <StripeIcon className="size-4" />
            Stripe
          </Link>
        </Button>

        <Button
          size="sm"
          className="bg-[#627EEA] hover:bg-[#627EEA]/80 text-white px-4 py-2 rounded-full text-sm font-medium"
          asChild
        >
          <Link
            href="https://pay.oxapay.com/10489526"
            target="_blank"
            className="flex items-center gap-2"
          >
            <EthereumIcon className="size-4" />
            Crypto
          </Link>
        </Button>

        <UPIBadge />
      </div>
      <span className="text-xs text-[10px] text-gray-400 text-center mt-4">
        i have a german shepherd, so i need to feed her 🐕
      </span>
    </div>
  );
}

function UPIBadge() {
  const upiNumber = "69697007";
  const upiID = "mysty@upi";

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard`);
    } catch (err) {
      toast.error(`Failed to copy ${label}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className="bg-[#2F9D27] hover:bg-[#2F9D27]/80 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          <PaytmIcon className="size-4 mr-1" />
          UPI
          <ChevronDown className="size-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => copyToClipboard(upiNumber, "UPI Number")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="text-left">
            <div className="font-medium">UPI Number</div>
            <div className="text-xs text-muted-foreground font-mono">
              {upiNumber}
            </div>
          </div>
          <Copy className="size-4 text-muted-foreground" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyToClipboard(upiID, "UPI ID")}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="text-left">
            <div className="font-medium">UPI ID</div>
            <div className="text-xs text-muted-foreground font-mono">
              {upiID}
            </div>
          </div>
          <Copy className="size-4 text-muted-foreground" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
