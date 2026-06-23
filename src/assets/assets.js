import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.avif'
import roomImg2 from './roomImg2.avif'
import roomImg3 from './roomImg3.avif'
import roomImg4 from './roomImg4.avif'
import roomImg5 from './roomImg5.avif'
import roomImg6 from './roomImg6.avif'
import roomImg7 from './roomImg7.avif'
import roomImg8 from './roomImg8.avif'
import regImage from './regImage.avif'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.avif";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.avif";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.avif";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import veloraLogo from "./velora-logo.png";
import testimonialImg1 from './testimonialImg1.avif'
import testimonialImg2 from './testimonialImg2.avif'
import testimonialImg3 from './testimonialImg3.avif'
import testimonialImg4 from './testimonialImg4.avif'
import testimonialImg5 from './testimonialImg5.avif'
import testimonialImg6 from './testimonialImg6.avif'
import testimonialImg7 from './testimonialImg7.avif'
import testimonialImg8 from './testimonialImg8.avif'
import veloraTeam from './velora-team.png'

export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    veloraLogo,
    veloraTeam,
    roomImg1,
    roomImg2,
    roomImg3,
    roomImg4,
    roomImg5,
    roomImg6,
    roomImg7,
    roomImg8
}

export const cities = [
  "Mumbai",
  "Goa",
  "Bali",
  "Dubai",
  "Santorini",
  "Maldives",
  "Kyoto",
  "Paris"
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Coastal Serenity Escape",
    description: "Enjoy oceanfront stays with complimentary breakfast and late checkout.",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCardImg1
  },
  {
    _id: 2,
    title: "Couple's Signature Retreat",
    description: "Luxury accommodation, spa access, and a romantic dining experience.",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCardImg2
  },
  {
    _id: 3,
    title: "Weekend Luxe Staycation",
    description: "Escape the routine with curated weekend stays at premium properties.",
    priceOff: 15,
    expiryDate: "Oct 10",
    image: exclusiveOfferCardImg3
  },
]

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Ava Mitchell",
    address: "Bali, Indonesia",
    image: testimonialImg1,
    rating: 5,
    review: "Our stay in Bali was unforgettable. Velora helped us discover a beautiful beachfront resort with exceptional hospitality and breathtaking sunset views."
  },
  {
    id: 2,
    name: "Daniel Carter",
    address: "Dubai, UAE",
    image: testimonialImg2,
    rating: 5,
    review: "The booking process was smooth and hassle-free. The luxury hotel in Dubai exceeded every expectation and made our trip truly memorable."
  },
  {
    id: 3,
    name: "Mia Nakamura",
    address: "Kyoto, Japan",
    image: testimonialImg3,
    rating: 4,
    review: "I loved the peaceful atmosphere of our Kyoto stay. Velora's recommendations felt curated and perfectly matched our travel style."
  },
  {
    id: 4,
    name: "Olivia Bennett",
    address: "Santorini, Greece",
    image: testimonialImg4,
    rating: 5,
    review: "The villa overlooking the Santorini cliffs was absolutely stunning. Every detail of the booking experience felt premium."
  },
  {
    id: 5,
    name: "Lucas Anderson",
    address: "Maldives",
    image: testimonialImg5,
    rating: 5,
    review: "The overwater villa was exactly as advertised. Velora made it incredibly easy to find and book our dream vacation."
  },
  {
    id: 6,
    name: "Sophia Reed",
    address: "Goa, India",
    image: testimonialImg6,
    rating: 4,
    review: "From check-in to check-out, everything was seamless. The resort location in Goa was perfect for a relaxing getaway."
  },
  {
    id: 7,
    name: "Ethan Walker",
    address: "Mumbai, India",
    image: testimonialImg7,
    rating: 5,
    review: "I frequently travel for work and Velora has become my preferred platform. The hotel quality and service are consistently excellent."
  },
  {
    id: 8,
    name: "Isabella Young",
    address: "Singapore",
    image: testimonialImg8,
    rating: 5,
    review: "The hotel recommendations felt personalized and trustworthy. Our Singapore stay was comfortable, convenient, and well worth it."
  }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Curated Luxury Spaces",
    description:
      "Elegantly designed interiors crafted for comfort, relaxation, and unforgettable stays."
  },
  {
    icon: assets.badgeIcon,
    title: "Premium Hospitality Standards",
    description:
      "Every room is maintained to the highest standards for a seamless guest experience."
  },
  {
    icon: assets.locationFilledIcon,
    title: "Prime Destination Access",
    description:
      "Stay close to iconic attractions, dining experiences, and cultural landmarks."
  },
  {
    icon: assets.heartIcon,
    title: "Guest-Favorite Experience",
    description:
      "Highly rated by travelers for exceptional service, comfort, and memorable stays."
  }
];

// User Dummy Data
export const userDummyData = {
  "_id": "user_velora_001",
  "username": "Velora Escapes Team",
  "email": "escapes@velora.com",
  "image": veloraTeam,
  "role": "hotelOwner",
  "createdAt": "2025-03-25T09:29:16.367Z",
  "updatedAt": "2025-04-10T06:34:48.719Z",
  "__v": 1,
  "recentSearchedCities": [
    "Paris",
    "Santorini",
    "Maldives"
  ]
}

// Hotel Dummy Data
export const hotelDummyData1 = {
    "_id": "hotel_1",
    "name": "Azure Bay Resort",
    "address": "Candolim Beach Road",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Goa",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData2 = {
    "_id": "hotel_2",
    "name": "Skyline Grand Hotel",
    "address": "Marine Drive",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Mumbai",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData3 = {
    "_id": "hotel_3",
    "name": "Royal Heritage Palace",
    "address": "Pink City District",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Jaipur",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData4 = {
    "_id": "hotel_4",
    "name": "Palm Horizon Resort",
    "address": "Dubai Marina",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Dubai",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData5 = {
    "_id": "hotel_5",
    "name": "Bali Serenity Retreat",
    "address": "Ubud Valley Road",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Bali",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData6 = {
    "_id": "hotel_6",
    "name": "Santorini Pearl Villas",
    "address": "Oia Cliffside",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Santorini",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData7 = {
    "_id": "hotel_7",
    "name": "Ocean Crest Retreat",
    "address": "North Atoll",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Maldives",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData8 = {
    "_id": "hotel_8",
    "name": "Sakura Heights",
    "address": "Gion District",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Kyoto",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData9 = {
    "_id": "hotel_9",
    "name": "Parisian Luxe Hotel",
    "address": "Champs-Élysées",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Paris",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData10 = {
    "_id": "hotel_10",
    "name": "Marina View Suites",
    "address": "Marina Bay",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Singapore",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData11 = {
    "_id": "hotel_11",
    "name": "Venetian Canal Suites",
    "address": "Grand Canal",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Venice",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData12 = {
    "_id": "hotel_12",
    "name": "Alpine Escape Lodge",
    "address": "Swiss Alps",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Switzerland",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData13 = {
    "_id": "hotel_13",
    "name": "Desert Bloom Resort",
    "address": "Corniche Road",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Abu Dhabi",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData14 = {
    "_id": "hotel_14",
    "name": "Central Park Residences",
    "address": "Manhattan Avenue",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData15 = {
    "_id": "hotel_15",
    "name": "Regency Thames Hotel",
    "address": "Westminster Bridge Road",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "London",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData16 = {
    "_id": "hotel_16",
    "name": "Emerald Coast Retreat",
    "address": "Patong Beach Road",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Phuket",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "room1",
    hotel: hotelDummyData1,
    roomType: "Ocean View Suite",
    pricePerNight: 399,
    amenities: ["Free WiFi", "Pool Access", "Room Service"],
    images: [roomImg1, roomImg5, roomImg2, roomImg6],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0
  },
  {
    _id: "room2",
    hotel: hotelDummyData2,
    roomType: "Executive King Room",
    pricePerNight: 299,
    amenities: ["Free Breakfast", "Room Service", "Mountain View"],
    images: [roomImg3, roomImg7, roomImg4, roomImg8],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0
  },
  {
    _id: "room3",
    hotel: hotelDummyData3,
    roomType: "Heritage Deluxe Room",
    pricePerNight: 259,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg5, roomImg1, roomImg6, roomImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0
  },
  {
    _id: "room4",
    hotel: hotelDummyData4,
    roomType: "Skyline Luxury Suite",
    pricePerNight: 549,
    amenities: ["Pool Access", "Room Service", "Free WiFi"],
    images: [roomImg7, roomImg3, roomImg8, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room5",
    hotel: hotelDummyData5,
    roomType: "Tropical Villa",
    pricePerNight: 449,
    amenities: ["Pool Access", "Mountain View", "Free Breakfast"],
    images: [roomImg2, roomImg6, roomImg4, roomImg8],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room6",
    hotel: hotelDummyData6,
    roomType: "Cliffside Retreat",
    pricePerNight: 499,
    amenities: ["Free WiFi", "Pool Access", "Room Service"],
    images: [roomImg1, roomImg8, roomImg5, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room7",
    hotel: hotelDummyData7,
    roomType: "Overwater Villa",
    pricePerNight: 899,
    amenities: ["Pool Access", "Free Breakfast", "Room Service"],
    images: [roomImg6, roomImg3, roomImg7, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room8",
    hotel: hotelDummyData8,
    roomType: "Zen Garden Suite",
    pricePerNight: 349,
    amenities: ["Free WiFi", "Mountain View", "Free Breakfast"],
    images: [roomImg4, roomImg7, roomImg2, roomImg5],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room9",
    hotel: hotelDummyData9,
    roomType: "Parisian Deluxe Room",
    pricePerNight: 469,
    amenities: ["Free Breakfast", "Room Service", "Free WiFi"],
    images: [roomImg8, roomImg2, roomImg6, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room10",
    hotel: hotelDummyData10,
    roomType: "City View Suite",
    pricePerNight: 379,
    amenities: ["Pool Access", "Room Service", "Free WiFi"],
    images: [roomImg5, roomImg4, roomImg3, roomImg7],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room11",
    hotel: hotelDummyData11,
    roomType: "Canal View Room",
    pricePerNight: 429,
    amenities: ["Free Breakfast", "Room Service", "Mountain View"],
    images: [roomImg2, roomImg7, roomImg1, roomImg6],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room12",
    hotel: hotelDummyData12,
    roomType: "Beachfront Suite",
    pricePerNight: 319,
    amenities: ["Pool Access", "Free WiFi", "Free Breakfast"],
    images: [roomImg8, roomImg3, roomImg5, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room13",
    hotel: hotelDummyData13,
    roomType: "Alpine Chalet Suite",
    pricePerNight: 599,
    amenities: ["Mountain View", "Free Breakfast", "Room Service"],
    images: [roomImg1, roomImg6, roomImg4, roomImg7],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room14",
    hotel: hotelDummyData14,
    roomType: "Royal Palace Room",
    pricePerNight: 489,
    amenities: ["Pool Access", "Room Service", "Free Breakfast"],
    images: [roomImg3, roomImg8, roomImg2, roomImg5],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room15",
    hotel: hotelDummyData15,
    roomType: "Manhattan Executive Suite",
    pricePerNight: 649,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg7, roomImg4, roomImg6, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  },
  {
    _id: "room16",
    hotel: hotelDummyData16,
    roomType: "Royal London Suite",
    pricePerNight: 529,
    amenities: ["Free Breakfast", "Free WiFi", "Room Service"],
    images: [roomImg5, roomImg2, roomImg8, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0
  }
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    "_id": "booking1",
    "user": userDummyData,
    "room": roomsDummyData[4], // Bali
    "hotel": hotelDummyData5,
    "checkInDate": "2026-07-12T00:00:00.000Z",
    "checkOutDate": "2026-07-16T00:00:00.000Z",
    "totalPrice": 1796,
    "guests": 2,
    "status": "confirmed",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2026-06-10T10:30:00.000Z",
    "updatedAt": "2026-06-10T10:30:00.000Z",
    "__v": 0
  },
  {
    "_id": "booking2",
    "user": userDummyData,
    "room": roomsDummyData[6], // Maldives
    "hotel": hotelDummyData7,
    "checkInDate": "2026-08-02T00:00:00.000Z",
    "checkOutDate": "2026-08-06T00:00:00.000Z",
    "totalPrice": 3596,
    "guests": 2,
    "status": "pending",
    "paymentMethod": "Pay At Hotel",
    "isPaid": false,
    "createdAt": "2026-06-11T09:15:00.000Z",
    "updatedAt": "2026-06-11T09:15:00.000Z",
    "__v": 0
  },
  {
    "_id": "booking3",
    "user": userDummyData,
    "room": roomsDummyData[8], // Paris
    "hotel": hotelDummyData9,
    "checkInDate": "2026-09-15T00:00:00.000Z",
    "checkOutDate": "2026-09-18T00:00:00.000Z",
    "totalPrice": 1407,
    "guests": 1,
    "status": "confirmed",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2026-06-12T14:20:00.000Z",
    "updatedAt": "2026-06-12T14:20:00.000Z",
    "__v": 0
  },
  {
    "_id": "booking4",
    "user": userDummyData,
    "room": roomsDummyData[10], // Venice
    "hotel": hotelDummyData11,
    "checkInDate": "2026-10-05T00:00:00.000Z",
    "checkOutDate": "2026-10-08T00:00:00.000Z",
    "totalPrice": 1287,
    "guests": 2,
    "status": "confirmed",
    "paymentMethod": "Pay At Hotel",
    "isPaid": false,
    "createdAt": "2026-06-13T08:00:00.000Z",
    "updatedAt": "2026-06-13T08:00:00.000Z",
    "__v": 0
  },
  {
    "_id": "booking5",
    "user": userDummyData,
    "room": roomsDummyData[12], // Switzerland
    "hotel": hotelDummyData13,
    "checkInDate": "2026-11-20T00:00:00.000Z",
    "checkOutDate": "2026-11-25T00:00:00.000Z",
    "totalPrice": 2995,
    "guests": 3,
    "status": "pending",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2026-06-14T11:40:00.000Z",
    "updatedAt": "2026-06-14T11:40:00.000Z",
    "__v": 0
  },
  {
    "_id": "booking6",
    "user": userDummyData,
    "room": roomsDummyData[15], // London
    "hotel": hotelDummyData16,
    "checkInDate": "2026-12-10T00:00:00.000Z",
    "checkOutDate": "2026-12-14T00:00:00.000Z",
    "totalPrice": 2116,
    "guests": 2,
    "status": "confirmed",
    "paymentMethod": "Stripe",
    "isPaid": true,
    "createdAt": "2026-06-15T16:45:00.000Z",
    "updatedAt": "2026-06-15T16:45:00.000Z",
    "__v": 0
  }
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: userBookingsDummyData.length,
  totalRevenue: userBookingsDummyData.reduce(
    (sum, booking) => sum + booking.totalPrice,
    0
  ),
  bookings: userBookingsDummyData,
};