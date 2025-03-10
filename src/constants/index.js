import eWaste from "../assets/img1.jpg";
import fireFly from "../assets/ff.png";
export const navLinks = [
  { href: "/", label: "Home", var: "bi bi-house-fill"},
  { href: "/beginnersideproject--ewaste-/login", label: "Login/Register", var: "bi bi-person-vcard-fill" },
  { href: "/beginnersideproject--ewaste-/contact", label: "Support", var: "bi bi-telephone-fill" },
];
export const profileImage = [
  { src: fireFly, name: "Profile Icon" },
  { src: eWaste, name: "E-waste Image" },
];
export const selectionOpt = [
  {
    href: "#E-Waste Collection & Pickup Scheduling",
    label: "E-Waste Collection & Pickup Scheduling",
  },
  {
    href: "#Recycle & Disposal Tracking",
    label: "Recycle & Disposal Tracking",
  },
  { href: "#Marketplace", label: "Marketplace" },
  { href: "#Rewards & Gamification", label: "Rewards & Gamification" },
];
export const OfferFeatures = [
  {var: "location_on", message: "Easy E-Waste Pickup"},
  {var: "location_away", message: "Nearby Recycling Centers"},
  {var: "award_star", message: "Rewards for Responsible Disposal"},
  {var: "verified_user", message: "Certified Recycling Partners"},
]