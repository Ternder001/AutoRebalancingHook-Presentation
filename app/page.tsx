"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Slide1 from "@/components/slides/slide1"
import Slide2 from "@/components/slides/slide2"
import Slide3 from "@/components/slides/slide3"
import Slide4a from "@/components/slides/slide4a"
import Slide4b from "@/components/slides/slide4b"
import Slide4c from "@/components/slides/slide4c"
import Slide5a from "@/components/slides/slide5a"
import Slide5b from "@/components/slides/slide5b"
import Slide5c from "@/components/slides/slide5c"
import Slide6 from "@/components/slides/slide6"
import Slide7 from "@/components/slides/slide7"
import Slide7b from "@/components/slides/slide7b"
import Slide8 from "@/components/slides/slide8"
import Slide9 from "@/components/slides/slide9"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 14 // Updated total slides count

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1 />
      case 2:
        return <Slide2 />
      case 3:
        return <Slide3 />
      case 4:
        return <Slide4a />
      case 5:
        return <Slide4b />
      case 6:
        return <Slide4c />
      case 7:
        return <Slide5a />
      case 8:
        return <Slide5b />
      case 9:
        return <Slide5c />
      case 10:
        return <Slide6 />
      case 11:
        return <Slide7 />
      case 12:
        return <Slide7b /> // New slide for Uniswap integration diagram
      case 13:
        return <Slide8 />
      case 14:
        return <Slide9 />
      default:
        return <Slide1 />
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50">
      <div className="w-full max-w-5xl">
        <Card className="w-full aspect-video overflow-hidden relative bg-white shadow-lg">{renderSlide()}</Card>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentSlide === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-500">
              Slide {currentSlide} of {totalSlides}
            </span>
            <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentSlide === totalSlides}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-700">Auto-Rebalancing Hook for Uniswap v4</div>
        </div>
      </div>
    </main>
  )
}

