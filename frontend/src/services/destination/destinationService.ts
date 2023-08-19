// get destination

const dummyDestination = [
    {
        id: "1",
        planet: "Earth",
        place: "Mumbai",
    },
    {
        id: "2",
        planet: "Earth",
        place: "colombo", 
    },
    {
        id: "3",
        planet: "Earth",
        place: "London",
    },
    {
        id: "4",
        planet: "neptune",
        place: "p1",
    }
]

async function getAllDestination() {
    try {
        // const res = await http.get(`/item/destination`)
        // return res.data.destinations
        return dummyDestination
    } catch (error: any) {
        throw error.data.error
    }
}

export { getAllDestination } 