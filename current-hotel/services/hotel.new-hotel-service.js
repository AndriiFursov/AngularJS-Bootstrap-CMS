/*
 * Constructor for new hotel
 *
*/

angular.module('trAg.hotel').factory('TrAgNewHotelService', ['$http', function($http) {
    return function () {
        this.id = "";
        this.photos = [];
        this.description = "";
        this.reconstructions = [];
        this.distances = [];
        this.groups = [
            {
                groupTitle: "In the room",
                col1: [
                    {
                        id: "gr1.c1.1",
                        title: "Central air-conditioning",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.2",
                        title: "Air-conditioner",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.3",
                        title: "Fan",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.4",
                        title: "Heating",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.5",
                        title: "Phone",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.6",
                        title: "Satellite television",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.7",
                        title: "Cabel television",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.8",
                        title: "LCD-TV",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.9",
                        title: "TV",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.10",
                        title: "DVD-player",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.11",
                        title: "High speed internet access",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.12",
                        title: "Internet access",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.13",
                        title: "Wi-Fi",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.14",
                        title: "Wired internet access",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.15",
                        title: "Mini-bar",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.16",
                        title: "Full mini-bar",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.17",
                        title: "Free bottle of water upon arrival",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.18",
                        title: "Mini-fridge",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.19",
                        title: "Fridge",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.20",
                        title: "Electric kettle and set of tea/coffee",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c1.21",
                        title: "Set of tea/coffee",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr1.c2.1",
                        title: "Bathtube",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.2",
                        title: "Shower bath",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.3",
                        title: "Hair-dryer",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.4",
                        title: "Toiletries",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.5",
                        title: "Toiletries/beauty",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.6",
                        title: "Towels",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.7",
                        title: "Bathrobes, slippers",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.8",
                        title: "Crisp white linen",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.9",
                        title: "Linens premium",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.10",
                        title: "Modern furniture",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.11",
                        title: "Wood furniture",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.12",
                        title: "Desk",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.13",
                        title: "Seating area",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.14",
                        title: "Safe",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.15",
                        title: "Mini-safe",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.16",
                        title: "Alarm clock",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.17",
                        title: "Iron and ironing board",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c2.18",
                        title: "Drying cabinet",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr1.c3.1",
                        title: "Carpet/laminate floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.2",
                        title: "Carpet floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.3",
                        title: "Laminate floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.4",
                        title: "Hardwood floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.5",
                        title: "Ceramic coating floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.6",
                        title: "Tiled floor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.7",
                        title: "Balcony",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.8",
                        title: "Terrace",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.9",
                        title: "With floor to ceiling windows",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.10",
                        title: "Balcony, terrace or window",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.11",
                        title: "Delivery of food and drinks to the room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.12",
                        title: "Daily housekeeping",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.13",
                        title: "Housekeeping",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.14",
                        title: "Room service 10:30-23:00",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.15",
                        title: "Room service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.16",
                        title: "All-day room service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.17",
                        title: "Smoking is prohibited in all rooms",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.18",
                        title: "Card lock system",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr1.c3.19",
                        title: "Fire alarm",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Available",
                col1: [
                    {
                        id: "gr2.c1.1",
                        title: "Honeymoon Suite",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c1.2",
                        title: "Family rooms",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c1.3",
                        title: "Non-smoking rooms",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr2.c2.1",
                        title: "Hypoallergenic room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.2",
                        title: "Soundproof rooms",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.3",
                        title: "Rooms for guests with disabilities",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr2.c2.4",
                        title: "Shared lounge / living room with TV",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [],
                colExtra: []
            },{
                groupTitle: "Food & Drink",
                col1: [
                    {
                        id: "gr3.c1.1",
                        title: "Restaurants",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr3.c1.2",
                        title: "Main restaurant",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.3",
                        title: "Restaurant",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.4",
                        title: "Several restaurants",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c1.5",
                        title: "Special Diet Menu",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr3.c2.1",
                        title: "Bars",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr3.c2.2",
                        title: "Bar",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.3",
                        title: "Several bars",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.4",
                        title: "Lobby bar",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.5",
                        title: "Snack bar",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr3.c2.6",
                        title: "Pool bar",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [],
                colExtra: []
            },{
                groupTitle: "Territory",
                col1: [
                    {
                        id: "gr4.c1.1",
                        title: "Garden",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.2",
                        title: "Tropical garden",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.3",
                        title: "Green zone",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.4",
                        title: "Terrace",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.5",
                        title: "Terrace with sun loungers",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c1.6",
                        title: "BBQ",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr4.c2.1",
                        title: "Private beach",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.2",
                        title: "Sand beach",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.3",
                        title: "Beach",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.4",
                        title: "Platform",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c2.5",
                        title: "Pontoon",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr4.c3.1",
                        title: "Beach service (sun loungers, umbrellas, mattresses, beach towels)",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.2",
                        title: "Umbrellas and sun loungers can be rented free of charge",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.3",
                        title: "Bus to the beach",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr4.c3.4",
                        title: "Free shuttle service to the beach",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Pools",
                col1: [
                    {
                        id: "gr5.c1.1",
                        title: "Outdoor pools",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr5.c1.2",
                        title: "Indoor pools",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr5.c1.3",
                        title: "Children's swimming pool",
                        type: "number",
                        active: ""
                    }
                ],
                col2: [
                    {
                        id: "gr5.c2.1",
                        title: "Pool",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c2.2",
                        title: "Outdoor pool",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c2.3",
                        title: "Outdoor heated pool",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr5.c3.1",
                        title: "Indoor pool",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.2",
                        title: "Water slides",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.3",
                        title: "Pool for exclusive rooms",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr5.c3.4",
                        title: "Aqua park",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "For children",
                col1: [
                    {
                        id: "gr6.c1.1",
                        title: "Children's animation",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.2",
                        title: "Game room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.3",
                        title: "Children's slides",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.4",
                        title: "Children's playground",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.5",
                        title: "Children's space",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c1.6",
                        title: "Children's mini-club",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr6.c2.1",
                        title: "Children's pool",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c2.2",
                        title: "Children's pool with water slides",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c2.3",
                        title: "Children's space  in the adult pool",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr6.c3.1",
                        title: "Babysitter",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.2",
                        title: "Child care service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.3",
                        title: "Children's chairs in the restaurant",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.4",
                        title: "Children's menu in the restaurant",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr6.c3.5",
                        title: "Children's beds",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Services",
                col1: [
                    {
                        id: "gr7.c1.1",
                        title: "Meeting rooms",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr7.c1.2",
                        title: "Meeting room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.3",
                        title: "Banqueting hall",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.4",
                        title: "Business centre",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.5",
                        title: "Fax/Copier service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.6",
                        title: "V.I.P. Services",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.7",
                        title: "Currency exchange",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.8",
                        title: "ATM on site",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.9",
                        title: "Internet-cafe",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.10",
                        title: "Internet-space",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.11",
                        title: "Wi-Fi",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.12",
                        title: "Wi-Fi in public areas",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.13",
                        title: "Shuttle service for an additional fee",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.14",
                        title: "Shuttle service to/from the airport",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.15",
                        title: "Parking",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.16",
                        title: "Car-parking",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c1.17",
                        title: "Car rental",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr7.c2.1",
                        title: "Stores on site",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.2",
                        title: "Mini-market on site",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.3",
                        title: "Gift shop",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.4",
                        title: "Vending Machine (drinks)",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.5",
                        title: "Ticket service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.6",
                        title: "Tour agency",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.7",
                        title: "Hour Front Desk",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.8",
                        title: "Express Check-In / Check-Out",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.9",
                        title: "Safe",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.10",
                        title: "Luggage storage",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.11",
                        title: "Baggage room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c2.12",
                        title: "Lockers",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr7.c3.1",
                        title: "Medical service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.2",
                        title: "Concierge service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.3",
                        title: "Newspapers",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.4",
                        title: "Delivery of products",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.5",
                        title: "Delivery of food and drinks in the room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.6",
                        title: "Packed Lunches",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.7",
                        title: "Breakfast in the Room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.8",
                        title: "Ironing service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.9",
                        title: "Laundry",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.10",
                        title: "Dry-cleaning service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.11",
                        title: "Pants press service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.12",
                        title: "Shoe Shine service",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.13",
                        title: "Elevator",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.14",
                        title: "Elevators",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.15",
                        title: "Designated Smoking Area",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr7.c3.16",
                        title: "Facilities for guests with disabilities",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Health & Beauty",
                col1: [
                    {
                        id: "gr8.c1.1",
                        title: "Hydromassage bath",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.2",
                        title: "Jacuzzi",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.3",
                        title: "Sauna",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.4",
                        title: "Steam room",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c1.5",
                        title: "Turkish bath",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr8.c2.1",
                        title: "Massage",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.2",
                        title: "Massage centre",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.3",
                        title: "Health Centre",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c2.4",
                        title: "SPA-centre",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr8.c3.1",
                        title: "Hairdressing salon",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.2",
                        title: "Beauty shop",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.3",
                        title: "Hairdressing salon/Beauty shop",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr8.c3.4",
                        title: "Solarium",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Entertainment",
                col1: [
                    {
                        id: "gr9.c1.1",
                        title: "Animation",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c1.2",
                        title: "Entertainment staff",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c1.3",
                        title: "Karaoke",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr9.c2.1",
                        title: "Daytime entertainment",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.2",
                        title: "Evening entertainment",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.3",
                        title: "Night club / DJ",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c2.4",
                        title: "Disco",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr9.c3.1",
                        title: "Library",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.2",
                        title: "Cinema",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.3",
                        title: "Amphitheater",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr9.c3.4",
                        title: "Picnic breakfast for early departures",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            },{
                groupTitle: "Sport",
                col1: [
                    {
                        id: "gr10.c1.1",
                        title: "Tennis courts",
                        type: "number",
                        active: ""
                    },
                    {
                        id: "gr10.c1.2",
                        title: "Fitness Centre",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.3",
                        title: "Gym",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.4",
                        title: "Horseback riding",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.5",
                        title: "Cycling",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.6",
                        title: "Bicycles for rent",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.7",
                        title: "Walking",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.8",
                        title: "Golf course",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.9",
                        title: "Mini-golf",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.10",
                        title: "Mini football",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.11",
                        title: "Basketball court",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.12",
                        title: "Squash",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.13",
                        title: "Tennis court",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.14",
                        title: "Volleyball Court",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.15",
                        title: "Volleyball",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.16",
                        title: "Bowling",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.17",
                        title: "Billiards",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.18",
                        title: "Ping-pong",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.19",
                        title: "Darts",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c1.20",
                        title: "Sports equipment",
                        type: "checkbox",
                        active: false
                    }
                ],
                col2: [
                    {
                        id: "gr10.c2.1",
                        title: "Water Sports",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.2",
                        title: "Equipment for water sports",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.3",
                        title: "Diving school",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.4",
                        title: "Diving centre",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.5",
                        title: "Rental of diving equipment",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.6",
                        title: "Diving",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.7",
                        title: "Diving and snorkelling",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.8",
                        title: "Water bike",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.9",
                        title: "Canoe",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.10",
                        title: "Catamaran",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.11",
                        title: "Water bicycle",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.12",
                        title: "Surfing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.13",
                        title: "Sailing boats",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.14",
                        title: "Windsurfing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.15",
                        title: "Parasailing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.16",
                        title: "Banana sailing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.17",
                        title: "Water skiing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c2.18",
                        title: "Fishing",
                        type: "checkbox",
                        active: false
                    }
                ],
                col3: [
                    {
                        id: "gr10.c3.1",
                        title: "Free shuttle service to the ski slopes",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.2",
                        title: "Free shuttle to the ski slopes",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.3",
                        title: "Free ski storage",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.4",
                        title: "Luggage storage ski / snowboard equipment",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.5",
                        title: "Skiing",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.6",
                        title: "Ski School",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.7",
                        title: "Ski instructor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.8",
                        title: "Skiing equipment rental",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.9",
                        title: "Ski Pass Vendor",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.10",
                        title: "Ski-to-door",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.11",
                        title: "Snowmobiling",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.12",
                        title: "Extreme driving on ice",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.13",
                        title: "Dog sledding",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.14",
                        title: "Skibike",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.15",
                        title: "Ice diving",
                        type: "checkbox",
                        active: false
                    },
                    {
                        id: "gr10.c3.16",
                        title: "Mountaineering",
                        type: "checkbox",
                        active: false
                    }
                ],
                colExtra: []
            }
        ];
        
        this.loadData = function (id) {
            self = this;
            
            $http.get('http://travelingua.com.ua/php/tools.load-hotel.php', {params: {id: id}})
            .then(function(answ) {
                self.id = answ.data.id;
                self.photos = answ.data.photos;
                self.description = answ.data.description;
                self.reconstructions = answ.data.reconstructions;
                self.distances = answ.data.distances;
                self.groups = answ.data.groups;
            });
        };
    };
}]);