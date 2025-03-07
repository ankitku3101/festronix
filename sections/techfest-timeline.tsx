"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TechfestTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile for responsive design
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Timeline data
  const timelineEvents = [
    {
      title: "Registration Opens",
      date: "March 10, 2025",
      description: "Start registering your team for the techfest",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Registration Closes",
      date: "March 15, 2025",
      description: "Last date to register your team",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Teams Shortlisting",
      date: "March 16, 2025",
      description: "Selected teams will be notified",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Day 1 & 2 Events",
      date: "March 20-21, 2025",
      description: "Hackathon, Technical workshops, and competitions",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Final Day Events",
      date: "March 22, 2025",
      description: "Project showcase, Award ceremony",
      icon: <Calendar className="h-6 w-6" />,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Techfest Timeline</h2>

      <div className={cn("relative", isMobile ? "overflow-x-auto pb-8" : "")}>
        {/* Main timeline container */}
        <div className={cn("flex items-start", isMobile ? "w-[800px]" : "w-full")}>
          {/* Background timeline line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-muted-foreground/20" />

          {/* Progress timeline line */}
          <div
            className="absolute top-10 left-0 h-1 bg-white transition-all duration-500 z-[1] my-4"
            style={{
              width: `${(activeIndex / (timelineEvents.length - 1)) * 100}%`,
            }}
          />

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={cn(
                "flex-1 relative px-2 cursor-pointer group",
                index === 0 ? "pl-0" : "",
                index === timelineEvents.length - 1 ? "pr-0" : "",
              )}
              onMouseEnter={() => setActiveIndex(index)}
            >

              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300",
                  activeIndex === index
                    ? "bg-primary/20 text-primary"
                    : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary/80",
                )}
              >
                {event.icon}
              </div>

              {/* Content */}
              <div
                className={cn(
                  "text-center mt-8 transition-all duration-300",
                  activeIndex === index ? "scale-105" : "scale-100 group-hover:scale-105",
                )}
              >
                <h3
                  className={cn(
                    "font-semibold text-sm sm:text-base transition-colors duration-300",
                    activeIndex === index ? "text-primary" : "group-hover:text-primary/80",
                  )}
                >
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">{event.date}</p>
                <p className="text-xs mt-2 hidden sm:block text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile description (only shown for active item) */}
      <div className="mt-6 text-center block md:hidden">
        <p className="text-sm text-muted-foreground">{timelineEvents[activeIndex].description}</p>
      </div>
    </div>
  )
}

