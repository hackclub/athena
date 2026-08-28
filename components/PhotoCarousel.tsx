"use client";

import Image from "next/image";

type Photo = {
  image: string;
  caption: string;
};

export default function PhotoCarousel({
  items,
  itemClassName = "",
}: {
  items: Photo[];
  itemClassName?: string;
}) {
  return (
    <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item, index) => (
        <figure
          key={`${item.image}-${index}`}
          className={`flex w-[min(100%,18rem)] shrink-0 snap-start flex-col items-center justify-center gap-4 sm:w-[calc(50%-0.25rem)] lg:w-[calc(33.333%-0.35rem)] ${itemClassName}`}
        >
          <Image
            src={item.image}
            alt=""
            width={720}
            height={720}
            className="aspect-square w-full object-cover"
          />
          <figcaption>
            <i className="block p-2 text-center">{item.caption}</i>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
