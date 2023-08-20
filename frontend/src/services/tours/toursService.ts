import { MiniTourCard } from "@/types/tourCard";
import { ISearchTourProps } from "./toursInterface";

const SearchResultsData: MiniTourCard[] = [
  {
    id: "1",
    from: "Earth",
    to: "neptune",
    ship: "Cruiser Spaceship",
    date: "Aug 21",
    price: "300K",
    discount: "-25",
    image:
      "https://images.unsplash.com/photo-1612837017391-5b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: "2",
    from: "Earth",
    to: "Venus",
    ship: "Cruiser Spaceship",
    date: "Aug 22",
    price: "300K",
    discount: "-20",
    image:
      "https://images.unsplash.com/photo-1612837017391-5b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: "3",
    from: "Earth",
    to: "saturn",
    ship: "Cruiser Spaceship",
    date: "Aug 22",
    price: "300K",
    discount: "-20",
    image:
      "https://images.unsplash.com/photo-1612837017391-5b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: "4",
    from: "Venus",
    to: "Earth",
    ship: "Cruiser Spaceship",
    date: "Aug 23",
    price: "300K",
    discount: "-20",
    image:
      "https://images.unsplash.com/photo-1612837017391-5b7b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

async function searchTour(search: ISearchTourProps) {
  try {
    // const res = await http.get(`/item/tour/search?search=${search}`)
    // return res.data.tours
    // return SearchResultsData
  } catch (error: any) {
    throw error.data.error;
  }
}

async function getTour(id: string) {
  try {
    // const res = await http.get(`/item/tour/${id}`)
    // return res.data.tour

    const tour = SearchResultsData.find((tour) => tour.id === id);
    if (!tour) throw new Error("Tour not found");
    return tour;
  } catch (error: any) {
    throw error.data.error;
  }
}

export { searchTour, getTour };
