"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { stories } from "@/lib/stories";
import { Dialog, DialogPanel } from "@headlessui/react";
import Story from "@/components/Story";

export default function Stories() {
  const [isOpen, setIsOpen] = useState<number | null>(null);


  return (
    <div className="grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8">
      {stories.map((item: any, index: any) => (
        <Fragment key={index}>
          <div
            onClick={() => setIsOpen(index)}
            className="sm:w-auto flex flex-col items-center relative"
            style={{
              //transform: `rotate(${(index % 3 === 0) ? -3 : (index % 3 === 1) ? 0 : 3}deg)`,
              transition: "transform 0.3s ease",
            }}
          >
            <Story 
                title={item.title}
                description={item.description}
                image={item.imageUrl}
                link={item.demoLink}
                author={item.author}
            />
          </div>

          <Dialog
            open={isOpen === index}
            onClose={() => setIsOpen(null)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel className="w-[600px] max-w-4xl rounded-lg bg-white p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <span className="text-xl font-bold text-red">
                        &quot;{item.title || "Project Name"}&quot;
                      </span>
                      <br />
                      <span className="font-medium">
                        by {item.author || "Name"}
                      </span>
                      <span className="italic block mt-1">
                        {item.date || "Month, Date"}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700">
                        {item.description ||
                          "No description available for this project."}
                      </p>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
                    <Image
                      src={item.imageUrl || "/api/placeholder/600/400"}
                      alt={item.title || "Project photo"}
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </Fragment>
      ))}
    </div>
  );
}
