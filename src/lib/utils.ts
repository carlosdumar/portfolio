import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const excludedProjects = [
  "VentasMercadoLibre",
  "test-royal-caribbean",
  "nextjs-dashboard",
  "platzicourse",
  "cdumar",
  "skills-test-with-actions",
  "frontend-test-template"
];

export const Links = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const getElementName = (children: React.ReactNode) => {
  if (children === "Overview" || children === "Home") return "overview";
  if (children === "Tech Stack") return "techstack";
  if (children === "Projects") return "projects";
  if (children === "Contact") return "contact";
  if (children === "About") return "about";
};


export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}