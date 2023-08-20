import { TourClass } from "./enum";


export type MiniTourCard = {
    id: string;
    from: string;
    to: string;
    ship: string;
    date: string;
    price: string;
    discount: string;
    image?: string;
    class?: TourClass | null;

};

export type SearchTourCard = {
    from: string | null;
    to: string | null;
    dates: Date[];
    price?: number[];
    class?: TourClass | null;
    
};