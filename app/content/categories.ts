import {
  CarSeatsSubCategories,
  ComfortSubCategories,
  DiapersSubCategories,
  FeedingSubCategories,
  HealthSubCategories,
  HomeSubCategories,
  StrollersAndCarriersSubCategories,
  TravelSubCategories,
} from "@/app/content/subCategories";

export const categories = [
  { text: "Home", id: "home", subCategories: HomeSubCategories },
  { text: "Car Seats", id: "car-seats", subCategories: CarSeatsSubCategories },
  { text: "Diapers", id: "diapers", subCategories: DiapersSubCategories },
  { text: "Feeding", id: "feeding", subCategories: FeedingSubCategories },
  { text: "Health", id: "health", subCategories: HealthSubCategories },
  {
    text: "Strollers & Carriers",
    id: "strollers-and-carriers",
    subCategories: StrollersAndCarriersSubCategories,
  },
  { text: "Comfort", id: "comfort", subCategories: ComfortSubCategories },
  { text: "Travel", id: "travel", subCategories: TravelSubCategories },
];