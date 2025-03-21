'use client';
import { Fragment, useState } from "react";
import { projects } from '@/lib/projects';
import { Dialog, DialogPanel } from "@headlessui/react";

export default function Projects() {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    return (
        <div className='grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-8'>
        {projects.map((item, index) => (
            <Fragment key={index}>
                <div 
                    onClick={() => setIsOpen(index)}
                    className="sm:w-auto flex flex-col items-center relative p-2"
                    style={{
                        //transform: `rotate(${(index % 3 === 0) ? -3 : (index % 3 === 1) ? 0 : 3}deg)`,
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <div 
                        className="polaroid-frame bg-gray-50 p-2 pb-6 shadow-md hover:shadow-lg rounded-md border border-gray-200 cursor-pointer"
                        style={{
                            maxWidth: '300px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.zIndex = '10';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.zIndex = '1';
                        }}
                    >
                        <div className="relative h-48 overflow-hidden w-full">
                            <img 
                                src={item.imageUrl || "/api/placeholder/300/200"} 
                                alt={item.title || "Project photo"} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-black font-semibold text-lg">"{item.title || "Project Name"}" by {item.author || "Name"}</p>
                            <p className="text-black italic">{item.date || "Month, Date"}</p>
                        </div>
                    </div>
                </div>

                <Dialog 
                    open={isOpen === index} 
                    onClose={() => setIsOpen(null)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-4xl rounded-lg bg-white p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <span className="text-xl font-bold text-red">"{item.title || "Project Name"}"</span>
                                        <span className="font-medium">by {item.author || "Name"}</span>
                                        <span className="italic block mt-1">{item.date || "Month, Date"}</span>
                                        
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-gray-700">
                                            {item.description || "No description available for this project."}
                                        </p>
                                    </div>
                                </div>
                                <div className="h-full w-full rounded-md overflow-hidden">
                                    <img 
                                        src={item.imageUrl || "/api/placeholder/600/400"} 
                                        alt={item.title || "Project photo"} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Fragment>
        ))}
        </div>
    )
}