export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Destinations",
    children: [
      { label: "Dubai", href: "/destinations/dubai" },
      { label: "Maldives", href: "/destinations/maldives" },
      { label: "Bali", href: "/destinations/bali" },
      { label: "Thailand", href: "/destinations/thailand" },
      { label: "Singapore", href: "/destinations/singapore" },
    ],
  },
  {
    label: "Packages",
    children: [
      {
        label: "International Packages",
        href: "/packages",
      },
      {
        label: "Domestic Packages",
        href: "/packages",
      },
      {
        label: "Honeymoon Packages",
        href: "/packages",
      },
      {
        label: "Family Holidays",
        href: "/packages",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Flight Bookings",
        href: "/services/flights",
      },
      {
        label: "Hotel Bookings",
        href: "/services/hotels",
      },
      {
        label: "Visa Assistance",
        href: "/services/visa",
      },
      {
        label: "Travel Insurance",
        href: "/services/insurance",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
