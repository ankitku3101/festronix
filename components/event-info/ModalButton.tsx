"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { indepthDetails } from "@/types/TypeFile";

interface ModalComponentProps {
  specification?: indepthDetails[];
}

export default function ModalComponent({specification = []}:ModalComponentProps) {
  console.log("From Modal Button");
  console.log(specification);
  
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Handle click outside to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Hitting click");
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className="p-4">
      <Button className="hover:bg-[#222]" onClick={openModal}>
        Learn More
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Modal Title</h2>
              <Button variant="ghost" size="icon" onClick={closeModal} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 space-y-8">
              {
                specification.length>0?
                specification.map((item,index)=>{
                  return <div key={index} className="mt-6 mb-10 px-4">
                    <h3 className="text-2xl font-bold">
                      {item.heading}
                    </h3>
                    <ul className="pl-5">
                      {
                        item.points.map((point,pos)=>{
                          return <li key={pos} className="list-disc">
                            {
                              point
                            }
                          </li>
                        })
                      }
                    </ul>
                  </div>
                })
                :
                <h2 className="text-3xl font-extrabold">COMING SOON</h2>
              }
            </div>
            <div className="p-4 border-t flex justify-end">
              <Button onClick={closeModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

