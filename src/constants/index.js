import eWaste from "../assets/img1.jpg";
import fireFly from "../assets/ff.png";

//Universal functions
export function getDefaultMode() {
  return localStorage.getItem("enableDarkMode") === "true" ? true : false; // True = Dark, False = Light
}

//Arrays
export const navLinks = [
  { href: "/", label: "Home", var: "bi bi-house-fill"},
  { href: "/login", label: "Login/Register", var: "bi bi-person-vcard-fill" },
  { href: "/contact", label: "Support", var: "bi bi-telephone-fill" },
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
  {var: "bi bi-geo-fill", message: "Easy E-Waste Pickup"},
  {var: "bi bi-building-fill", message: "Nearby Recycling Centers"},
  {var: "bi bi-award", message: "Rewards for Responsible Disposal"},
  {var: "bi bi-person-fill-check", message: "Certified Recycling Partners"},
]
