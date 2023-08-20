import { TourClass } from "@/types/enum";

export interface ISearchTourProps {
  from: string;
  to: string;
  fromDate: Date;
  toDate: Date;
  priceRange?: number[] | null;
  class?: TourClass | null;
}
