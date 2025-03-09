export interface indepthDetails {
    heading: string;
    points: string[];
  }
  
export interface Detail {
  image: string;
  title: string;
  description: string;
  specification?: indepthDetails[];
  doclink?:string;
}

export interface LearnMoreProps {
  doclink: string
  children?: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}