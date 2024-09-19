type Project = {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  pageUrl: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce",
    description:
      "Un comercio electrónico para publicar productos y comprar a través de MercadoPago.",
    githubUrl: "https://github.com/thiagoSalaberry/frontend",
    pageUrl: "https://frontend-seven-blond.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Una web para facilitar la reservación de turnos de tatuajes.",
    githubUrl: "https://github.com/thiagoSalaberry/landing-page",
    pageUrl: "https://landing-page-zeta-mauve.vercel.app/",
  },
  {
    id: 3,
    title: "Piedra Papel o Tijera",
    description:
      "Un piedra papel o tijera online para jugar con tus amigos en tiempo real.",
    githubUrl: "https://github.com/thiagoSalaberry/ppt-online",
    pageUrl: "https://ppt-online-react.vercel.app/",
  },
  {
    id: 4,
    title: "Pet Finder",
    description:
      "Una web para encontrar y reportar mascotas perdidas en cierta ubicación.",
    githubUrl: "",
    pageUrl: "",
  },
];
