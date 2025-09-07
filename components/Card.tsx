"use client";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface Card {
  cardType: "bordered" | "tinted" | "photo" | "spotlight";
  className?: string;
  children?: ReactNode;
}

interface PhotoCardProps extends Card {
  cardType: "photo";
  children: ReactNode;
  photoLocation: "left" | "right" | "top";
  image: string;
}

interface BorderedCardProps extends Card {
  cardType: "bordered";
  children: ReactNode;
  borderColor?: string;
  href?: string;
  title?: string;
  description?: string;
  iconImage?: string;
}

export interface TintedCardProps extends Card {
  tintColor: string;
  cardType: "tinted";
  image: string;
  href: string;
  title: string;
  description: string;
}

interface SpotlightCardProps extends Card {
  cardType: "spotlight";
  image: string;
  title: string;
  description: string;
  channel?: string;
  href: string;
}

type CardProps = BorderedCardProps | TintedCardProps | PhotoCardProps | SpotlightCardProps;

export default function Card(props: CardProps) {
  return (
    <>
      {props.cardType === "tinted" && (
        <TintedCard
          cardType="tinted"
          tintColor={props.tintColor}
          image={props.image}
          href={props.href}
          title={props.title}
          description={props.description}
          className={props.className}
        />
      )}
      {props.cardType === "bordered" && (
        <BorderedCard
          title={props.title}
          description={props.description}
          href={props.href}
          cardType="bordered"
          className={props.className}
          iconImage={props.iconImage}
        >
          {props.children}
        </BorderedCard>
      )}
      {props.cardType === "photo" && (
        <PhotoCard
          cardType="photo"
          photoLocation={props.photoLocation}
          image={props.image}
          className={props.className}
        >
          {props.children}
        </PhotoCard>
      )}
      {props.cardType === "spotlight" && (
        <SpotlightCard
          cardType="spotlight"
          image={props.image}
          title={props.title}
          description={props.description}
          channel={props.channel}
          href={props.href}
          className={props.className}
        />
      )}
    </>
  );
}

function TintedCard(props: TintedCardProps) {
  return (
    <div
      className={`transition hover:scale-105 p-4 relative overflow-hidden shadow-md min-h-[20vh] max-h-[40vh] rounded-lg bg-no-repeat bg-cover bg-center ${props.className}`}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div
        className="absolute w-full h-full top-0 left-0 z-0 opacity-50 mix-blend-multiply"
        style={{
          backgroundColor: props.tintColor,
        }}
      ></div>
      <div className="text-left absolute bottom-4 left-0 z-10 px-4 text-white">
        <div className="text-2xl font-bold">{props.title}</div>
        <div className="text-base">{props.description}</div>
      </div>
      <Link
        href={props.href}
        className="absolute w-full h-full top-0 left-0 z-20"
      >
        <span className="sr-only">Go to events page</span>
      </Link>
    </div>
  );
}

function BorderedCard(props: BorderedCardProps) {
  return (
    <div
      className={`p-4 text-black shadow-md rounded-lg border-2 ${props.className}`}
      style={{
        borderColor: props.borderColor || "red",
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="text-2xl font-bold">{props.title}</div>
          <div className="text-sm md:text-base">{props.description}</div>
          <div className="">
            {props.children}
          </div>
        </div>
        {props.iconImage && (
          <div className="w-16 h-16 flex-shrink-0">
            <Image 
              src={props.iconImage} 
              alt="" 
              className="w-full h-full object-contain"
              width={64} 
              height={64}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function PhotoCard(props: PhotoCardProps) {
  const getFlexDirectionFromPhotoProps = () => {
    switch (props.photoLocation) {
      case "left":
        return "flex-row";
      case "right":
        return "flex-row-reverse";
      case "top":
        return "flex-col";
    }
  };

  const getPhotoStylesFromPhotoProps = () => {
    switch (props.photoLocation) {
      case "left":
        return "rounded-l-lg max-w-[50%] w-full";
      case "right":
        return "rounded-r-lg max-w-[50%] w-full";
      case "top":
        return "rounded-t-lg w-full h-[15vh]";
    }
  };

  return (
    <div
      className={`bg-white min-h-[20vh] flex rounded-lg shadow-md ${getFlexDirectionFromPhotoProps()} w-full ${
        props.className
      }`}
    >
      <div
        className={`${getPhotoStylesFromPhotoProps()} shrink-0 bg-cover bg-center`}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className="p-4 text-left">{props.children}</div>
    </div>
  );
}

function SpotlightCard(props: SpotlightCardProps) {
  return (
    <div className="w-full col-span-2">
      <Link href={props.href} className="block w-full">
        <div className="block lg:hidden w-full">
          <Card cardType="photo" image={props.image} photoLocation="top">
            <div className="text-2xl text-[#D35648] font-bold">{props.title}</div>
            <div className="mt-3 line-clamp-3">
              <div className="prose">{props.description}</div>
              <button className="text-red">Read more</button>
            </div>
          </Card>
        </div>
        <div className="hidden lg:block w-full">
          <Card cardType="photo" image={props.image} photoLocation="right">
            <div className="text-2xl text-[#D35648] font-bold">{props.title}</div>
            <div className="mt3 line-clamp-3 prose">
              <div className="prose">{props.description}</div>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
}
