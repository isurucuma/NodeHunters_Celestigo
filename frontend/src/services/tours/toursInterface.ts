import { TourClass } from "@/types/enum";

export interface ISearchTourProps{
    from: string;
    to: string;
    dates: Date[];
    priceRange?: number[] | null;
    class? : TourClass | null;
}



