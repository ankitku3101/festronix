"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { LearnMoreProps } from "@/types/TypeFile"

const LearnMore = ({ doclink, children = "Learn More", variant = "default", size = "default" }: LearnMoreProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => window.open(doclink, "_blank", "noopener,noreferrer")}
      className="inline-flex items-center gap-2"
    >
      {children ? children : "LEARN MORE"}
      <ExternalLink className="h-4 w-4" />
    </Button>
  )
}

export default LearnMore