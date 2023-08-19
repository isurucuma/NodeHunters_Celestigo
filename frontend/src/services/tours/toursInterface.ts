import { TourClass } from "@/types/enum";

export interface ISearchTourProps{
    from: string;
    to: string;
    dates: Date[];
    priceRange: number[];
    class : TourClass | null;
}



