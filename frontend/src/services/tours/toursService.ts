import { MiniTourCard } from "@/types/tourCard";
import {ISearchTourProps} from './toursInterface'
import { LocationData as LocationDataType } from "@/types/tourCard";

const SearchResultsData:MiniTourCard[] = [
  {
    id: "1",
    from: "Earth",
    to: "neptune",
    ship: "Cruiser Spaceship",
    date: "Aug 21",
    price: "300K",
    discount: "-25",
  },
  {
    id: "2",
    from: "Earth",
    to: "Venus",
    ship: "Cruiser Spaceship",
    date: "Aug 22",
    price: "300K",
    discount: "-20",
  },
  {
    id: "3",
    from: "Earth",
    to: "saturn",
    ship: "Cruiser Spaceship",
    date: "Aug 22",
    price: "300K",
    discount: "-20",
  },
  {
    id: "4",
    from: "Venus",
    to: "Earth",
    ship: "Cruiser Spaceship",
    date: "Aug 23",
    price: "300K",
    discount: "-20",
  }
]

// const locations = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//     title: {
//       title: "Luminosa Oasis -1",
//       content:
//         "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
//     },
//     climate: {
//       title: "Climate",
//       content:
//         "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
//     },
//     culture: {
//       title: "Culture",
//       content:
//         "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
//     },
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//       title: {
//         title: "Luminosa Oasis 0",
//         content:
//           "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
//       },
//       climate: {
//         title: "Climate",
//         content:
//           "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
//       },
//       culture: {
//         title: "Culture",
//         content:
//           "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
//       },
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//       title: {
//         title: "Luminosa Oasis 1",
//         content:
//           "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
//       },
//       climate: {
//         title: "Climate",
//         content:
//           "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
//       },
//       culture: {
//         title: "Culture",
//         content:
//           "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
//       },
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//       title: {
//         title: "Luminosa Oasis 2",
//         content:
//           "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
//       },
//       climate: {
//         title: "Climate",
//         content:
//           "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
//       },
//       culture: {
//         title: "Culture",
//         content:
//           "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
//       },
//   },
// ];

// want locations to be an array of objects with the following structure:
// title: string;
// titleDescription: string;
// climate: string;
// culture: string;
// img:[string,string]

const LocationData:LocationDataType[] = [
  {
    title: "Luminosa Oasis",
    titleDescription: "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
    climate: "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
    culture: "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
    img:["https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60","https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"]
  },
  {
    title: "Aurora town",
    titleDescription: "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
    climate: "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
    culture: "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
    img:["https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60","https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"]
  },
  {
    title: "celestial city",
    titleDescription: "Visitors can relax in geothermal spas, explore guided tours through the oasis, and learn about the cutting-edge technologies that sustain life in this otherworldly sanctuary.",
    climate: "Venus boasts an extreme climate with scorching temperatures due to its thick atmosphere. The greenhouse effect creates a hostile environment with surface temperatures that can melt lead.",
    culture: "Venusian culture centers around the worship of the Sun, which dominates its sky. Rich mythology and rituals revolve around the star's significance to life on this planet.",
    img:["https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60","https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"]
  }
]



async function searchTour(search: ISearchTourProps) {
  try {
    // const res = await http.get(`/item/tour/search?search=${search}`)
    // return res.data.tours
    return SearchResultsData
  } catch (error: any) {
    throw error.data.error
  }
}

async function getTour(id: string) {
    try {
        // const res = await http.get(`/item/tour/${id}`)
        // return res.data.tour
        
        const tour = SearchResultsData.find(tour => tour.id === id)
        if(!tour) throw new Error('Tour not found')
        return tour
    } catch (error: any) {
        throw error.data.error
    }
    }

async function getLocationsList(tourId: string) {
  try {
    // const res = await http.get(`/item/tour/${tourId}/locations`)
    // return res.data.locations
    return LocationData
  } catch (error: any) {
    throw error.data.error
  }
}


export { searchTour, getTour,getLocationsList }