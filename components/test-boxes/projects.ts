import { dividerClasses } from "@mui/material";

type Project = {
  id: number;
  title: string;
  description: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Piedra Papel o Tijera",
    description:
      "Un piedra papel o tijera online para jugar con tus amigos en tiempo real.",
  },
  {
    id: 2,
    title: "Pet Finder",
    description:
      "Una web para encontrar y reportar mascotas perdidas en cierta ubicación.",
  },
  {
    id: 3,
    title: "E-Commerce",

    description:
      "Un comercio electrónico para publicar productos y comprar a través de MercadoPago.",
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Una web para facilitar la reservación de turnos de tatuajes.",
  },
];
