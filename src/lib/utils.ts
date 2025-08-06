export const excludedProjects = [
  "VentasMercadoLibre",
  "test-royal-caribbean",
  "nextjs-dashboard",
  "platzicourse",
  "cdumar",
  "skills-test-with-actions"
];

export const Links = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const getElementName = (children: React.ReactNode) => {
  if (children === "Overview" || children === "Home") return "overview";
  if (children === "Tech Stack") return "techstack";
  if (children === "Projects") return "projects";
  if (children === "Contact") return "contact";
  if (children === "About") return "about";
};
