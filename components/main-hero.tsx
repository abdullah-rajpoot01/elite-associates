
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Medal, User } from "lucide-react";
import Link from "next/link";
import { WhatsApp } from "./social-icons";
import ButtonNeon from "./ui/neon-button";

const HeroSection2 = () => {
  return (
    <section className="w-full py-8 mx-auto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-6 items-center lg:items-start">
           
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-balance md:text-5xl text-foreground">
                <span className="text-primary  ">Elite Associates</span>  Buy, Sell & Invest with Confidence
                Online
              </h1>
              <p className="text-muted-foreground text-sm text-balance md:text-lg">
             Elite Associates Real Estate Agency helps you buy, sell, and invest in residential and commercial properties with expert guidance and transparent, hassle-free service.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href={"/listings"} >
                <ButtonNeon
                  size="lg"
                  className="h-10 px-12 md:px-8 cursor-pointer hover:animate-tada hover:animate-iteration-count-once"
                >
                  View All Properties 
                </ButtonNeon>
              </Link>
              <Link href={"/about-us"} >
                <Button
                  size="lg" variant={"outline"}
                  className="h-10 px-8 cursor-pointer hover:animate-tada hover:animate-iteration-count-once"
                >
                <User className="size-5"/> About Us
                </Button>
              </Link>
            </div>
          </div>
        <div className="mx-auto aspect-square w-full max-w-sm lg:max-w- rounded-xl bg-accent " >
          <img src={"/hero-section.png"} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;


