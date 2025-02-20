'use client';
import { Dialog, DialogPanel } from "@headlessui/react";
import Card from "./Card";
import { useState } from "react";
import { SpotlightPost } from "@/lib/spotlight";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

export default function SpotlightCard({ post }:{ post: SpotlightPost }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="w-full" onClick={() => setOpen(true)}>
        <div className="block lg:hidden col-span-3">
          <Card cardType="photo" image={post.Image} photoLocation="top">
            <div className="text-2xl text-red font-bold">Spotlight</div>
            <div className="text-sm md:text-base">from #days-of-service</div>
            <div className="mt-6 line-clamp-3">
              <h1 className="italic text-lg">{post.Title}</h1>
              <br />
              <Markdown>
                {post.Description}
              </Markdown>
            </div>
          </Card>
        </div>
        <div className="hidden lg:block col-span-3">
          <Card cardType="photo" image={post.Image} photoLocation="right">
            <div className="text-2xl text-red font-bold">Spotlight</div>
            <div className="text-sm md:text-base">from #days-of-service</div>
            <div className="mt-6 line-clamp-3 prose:">
              <h1 className="text-base">{post.Title}</h1>
              <Markdown>
                {post.Description}
              </Markdown>
            </div>
          </Card>
        </div>
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="transition delay-0 duration-300 ease-out data-[closed]:opacity-0" transition>
        <div className="fixed inset-0 bg-black/25 background-blur-sm flex w-screen items-center justify-center p-6 md:p-16 z-50">
          <DialogPanel className="bg-white flex flex-col-reverse md:flex-row rounded-lg min-w-[67vw] justify-end md:items-stretch h-[70vh] overflow-hidden">
            <div className="md:w-1/2 p-4 lg:p-10">
              <div className="text-3xl font-bold text-red">Spotlight</div>
              {/* change this to the actual channel name we decide */}
              <div className="text-base">from #days-of-service</div>
              <div className="prose">
                <h1 className="">{post.Title}</h1>
                <Markdown>
                  {post.Description}
                </Markdown>
              </div>
            </div>
            <div className="bg-red-300 min-h-[20vh] md:w-1/2 bg-cover relative" style={{
              backgroundImage: 'url(https://cloud-lz7wipd7a-hack-club-bot.vercel.app/010doc-spotlight-min.jpg)'
            }}>
              <button className="absolute right-6 top-6 text-white text-7xl transition hover:scale-110 block" onClick={() => setOpen(false)}><Image src="https://icons.hackclub.com/api/icons/white/glyph:view-close.svg" height={56} width={56} className="size-14 cursor-pointer" alt="close" /></button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}