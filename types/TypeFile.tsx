export interface indepthDetails {
    heading: string;
    points: string[];
  }
  
  export interface Detail {
    image: string;
    title: string;
    description: string;
    specification?: indepthDetails[];
  }
  