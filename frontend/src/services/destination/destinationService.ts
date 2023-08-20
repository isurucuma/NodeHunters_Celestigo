// get destination

const dummyDestination = [
  {
    id: "1",
    planet: "Earth",
    place: "P1",
  },
  {
    id: "2",
    planet: "Earth",
    place: "P2",
  },
  {
    id: "3",
    planet: "Earth",
    place: "P3",
  },
  {
    id: "4",
    planet: "Venus",
    place: "p1",
  },
  {
    id: "5",
    planet: "Venus",
    place: "p2",
  },
  {
    id: "6",
    planet: "Venus",
    place: "p3",
  },
];

async function getAllDestination() {
  try {
    // const res = await http.get(`/item/destination`)
    // return res.data.destinations
    return dummyDestination;
  } catch (error: any) {
    throw error.data.error;
  }
}

export { getAllDestination };
