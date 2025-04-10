'use client'
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Banner1 from '../../public/images/Banner/banner1-1.jpg';

import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/carousel"

const ImagesItems = [
     {
          name: 'images/Banner/banner1-1.jpg',
          pra: 'This is Blog Website'
     },
     {
          name: 'images/Banner/banner-2.jpg',
          pra: 'This is Blog Website-1'
     },
     {
          name: 'images/Banner/banner-3.jpg',
          pra: 'This is Blog Website-2'
     },
     {
          name: 'images/Banner/banner-4.jpg',
          pra: 'This is Blog Website-3'
     },
];


export function Banner() {
     const plugin = useRef(
          Autoplay({ delay: 2000, stopOnInteraction: true })
     )

     return (
          <Carousel
               plugins={[plugin.current]}
               className="w-full "
               onMouseEnter={plugin.current.stop}
               onMouseLeave={plugin.current.reset}>
               <CarouselContent>
                    {ImagesItems.map((v, index) => (
                         <CarouselItem key={index}>
                              <div className="relative ">
                                   <img src={v.name} />
                                   <span className="absolute md:top-40 md:left-40 top-10 left-0 w-[80%] ">
                                   <p className="text-2xl md:text-4xl text-yellow-100">{v.pra}</p>
                                   </span>
                              </div>
                         </CarouselItem>
                    ))}
               </CarouselContent>
          </Carousel>
     )
}
