"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface Card {
  cardType: "bordered" | "tinted" | "photo";
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
}

export interface TintedCardProps extends Card {
  tintColor: string;
  cardType: "tinted";
  image: string;
  href: string;
  title: string;
  description: string;
}

type CardProps = BorderedCardProps | TintedCardProps | PhotoCardProps;

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
        <BorderedCard cardType="bordered" className={props.className}>
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
      className={`p-4 bg-white shadow-md rounded-lg border-2 ${props.className}`}
      style={{
        borderColor: props.borderColor || "black",
      }}
    >
      {props.children}
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
