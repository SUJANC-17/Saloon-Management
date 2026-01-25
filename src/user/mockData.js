// Mock data for User module
// This simulates backend data. Replace with real API calls when backend is ready.

export const mockSalons = [
  {
    id: 1,
    name: "Glamour Salon & Spa",
    description: "Premium beauty and wellness center with expert stylists",
    rating: 4.8,
    reviews: 124,
    address: "123 Main Street, Downtown",
    city: "New York",
    phone: "+1 (555) 123-4567",
    image: "https://via.placeholder.com/300x200?text=Glamour+Salon",
    isOpen: true,
    hours: "9:00 AM - 6:00 PM",
    priceRange: "$$$",
    startingPrice: 35,
  },
  {
    id: 2,
    name: "Urban Cuts",
    description: "Modern barbershop and styling studio for all genders",
    rating: 4.6,
    reviews: 89,
    address: "456 Oak Avenue, Midtown",
    city: "Bangalore",
    phone: "+1 (555) 234-5678",
    image: "https://via.placeholder.com/300x200?text=Urban+Cuts",
    isOpen: true,
    hours: "10:00 AM - 8:00 PM",
    priceRange: "$$",
    startingPrice: 15,
  },
  {
    id: 3,
    name: "Natural Beauty Hub",
    description: "Organic and eco-friendly salon with natural treatments",
    rating: 4.7,
    reviews: 156,
    address: "789 Green Road, Uptown",
    city: "Mumbai",
    phone: "+1 (555) 345-6789",
    image: "https://via.placeholder.com/300x200?text=Natural+Beauty",
    isOpen: true,
    hours: "9:00 AM - 7:00 PM",
    priceRange: "$$",
    startingPrice: 40,
  },
  {
    id: 4,
    name: "Elite Hair Studio",
    description: "Luxury salon specializing in hair extensions and color treatments",
    rating: 4.9,
    reviews: 203,
    address: "321 Luxury Lane, City Center",
    city: "Delhi",
    phone: "+1 (555) 456-7890",
    image: "https://via.placeholder.com/300x200?text=Elite+Hair",
    isOpen: false,
    hours: "11:00 AM - 7:00 PM",
    priceRange: "$$$$",
    startingPrice: 60,
  },
  {
    id: 5,
    name: "Spark Salon",
    description: "Contemporary salon with trendy haircuts and treatments",
    rating: 4.5,
    reviews: 67,
    address: "101 Fashion Street",
    city: "Bangalore",
    phone: "+1 (555) 567-8901",
    image: "https://via.placeholder.com/300x200?text=Spark+Salon",
    isOpen: true,
    hours: "10:00 AM - 7:00 PM",
    priceRange: "$$",
    startingPrice: 25,
  },
];

export const mockServices = {
  1: [
    { id: 1, name: "Haircut", duration: 30, price: 35, available: true },
    { id: 2, name: "Hair Color", duration: 60, price: 85, available: true },
    { id: 3, name: "Facial", duration: 45, price: 55, available: false },
    { id: 4, name: "Massage", duration: 60, price: 75, available: true },
    { id: 5, name: "Manicure", duration: 30, price: 25, available: true },
  ],
  2: [
    { id: 1, name: "Haircut", duration: 30, price: 15, available: true },
    { id: 2, name: "Beard Trim", duration: 20, price: 10, available: true },
    { id: 3, name: "Hair Styling", duration: 45, price: 30, available: true },
    { id: 4, name: "Shampoo & Conditioning", duration: 20, price: 8, available: true },
  ],
  3: [
    { id: 1, name: "Organic Haircut", duration: 30, price: 40, available: true },
    { id: 2, name: "Natural Hair Treatment", duration: 60, price: 65, available: true },
    { id: 3, name: "Herbal Facial", duration: 45, price: 50, available: true },
    { id: 5, name: "Organic Pedicure", duration: 40, price: 30, available: false },
  ],
  4: [
    { id: 1, name: "Premium Haircut", duration: 45, price: 60, available: true },
    { id: 2, name: "Hair Extension", duration: 120, price: 250, available: true },
    { id: 3, name: "Luxury Facial", duration: 60, price: 100, available: true },
    { id: 6, name: "Balayage Coloring", duration: 180, price: 350, available: false },
  ],
  5: [
    { id: 1, name: "Trendy Haircut", duration: 30, price: 25, available: true },
    { id: 2, name: "Hair Wash & Style", duration: 45, price: 35, available: true },
    { id: 3, name: "Quick Facial", duration: 30, price: 20, available: false },
  ],
};

// Simulated available time slots for each day
export const generateTimeSlots = () => {
  const slots = [];
  const today = new Date();
  
  // Time slot configurations per day
  const timeConfigurations = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "03:30 PM", available: true },
    { time: "04:00 PM", available: false },
    { time: "04:30 PM", available: true },
    { time: "05:00 PM", available: true },
    { time: "05:30 PM", available: true },
  ];
  
  // Generate slots for next 7 days
  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const date = new Date(today);
    date.setDate(date.getDate() + dayOffset);
    
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    
    timeConfigurations.forEach((config) => {
      slots.push({
        id: `${date.getTime()}-${config.time}`,
        date: dateString,
        time: config.time,
        timestamp: date.getTime(),
        available: config.available,
      });
    });
  }
  
  return slots;
};

// Simulated booking history
export const mockBookingHistory = [
  {
    id: 1,
    salonName: "Glamour Salon & Spa",
    serviceName: "Haircut",
    date: "2025-12-20",
    time: "2:00 PM",
    price: 35,
    status: "COMPLETED",
    rating: 5,
  },
  {
    id: 2,
    salonName: "Urban Cuts",
    serviceName: "Beard Trim",
    date: "2026-01-10",
    time: "10:30 AM",
    price: 15,
    status: "COMPLETED",
    rating: 4,
  },
  {
    id: 3,
    salonName: "Natural Beauty Hub",
    serviceName: "Herbal Facial",
    date: "2026-02-05",
    time: "3:00 PM",
    price: 50,
    status: "UPCOMING",
    rating: null,
  },
];
