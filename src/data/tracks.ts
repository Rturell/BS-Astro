export interface Track {
  file: string;
  title: string;
}

// Agregar más temas acá es tan simple como sumar un objeto más al array,
// con la ruta del mp3 (dentro de public/audios/) y el título.
export const tracks: Track[] = [
  { file: "/audios/CuandoTodoCae.mp3", title: "Cuando Todo Cae" },
  { file: "/audios/VuelvoACreer.mp3", title: "Vuelvo a Creer" },
  { file: "/audios/NadaEsIgualFinal.mp3", title: "Nada Es Igual" }
];
