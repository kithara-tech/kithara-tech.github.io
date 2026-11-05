/*
 * Dados do site — edite aqui, sem mexer no HTML.
 *
 * AGENCIA.nome      → nome da agência (aparece no topo, hero, rodapé e título da aba)
 * ARTISTAS          → cards da seção "Artistas". O `id` é usado para ligar vídeos ao artista.
 * VIDEOS            → clipes da grade do Tanaton Fest. Para associar um vídeo a um artista,
 *                     troque `artista: null` pelo `id` do artista (ex.: artista: "rina").
 *                     Os filtros da grade aparecem sozinhos quando houver artista definido.
 */

window.AGENCIA = {
  nome: "Pablo Carvalho",
  slogan: "", // vazio = não aparece no site
  sobre:
    "Somos uma agência dedicada a conectar artistas independentes a palcos, festivais e eventos. " +
    "Cuidamos da curadoria, da produção e da carreira de cantoras e bandas que fazem o público parar para ouvir.",
  contato: {
    email: "pablarmusica@gmail.com",
    instagram: "@pablocarvalhosm", // TODO: confirmar o @ exato
    whatsapp: "+55 (12) 99174-5185",
  },
  heroVideo: "IMG_0653",
};

window.ARTISTAS = [
  {
    id: "rina",
    nome: "Rina",
    tipo: "Voz · Jazz & MPB",
    descricao: "Cantora. Repertório, formações e agenda sob consulta.",
    poster: "IMG_0635",
  },
  {
    id: "liz",
    nome: "Liz",
    tipo: "Voz · Jazz & Soul",
    descricao: "Cantora. Repertório, formações e agenda sob consulta.",
    poster: "IMG_0642",
  },
  {
    id: "banda-instrumental",
    nome: "Banda Instrumental",
    tipo: "Trio · Jazz & Prog Metal",
    descricao: "Guitarra, baixo e bateria. Do jazz ao prog metal, sem voz — para festivais, eventos e casas.",
    poster: "IMG_0652",
  },
];

window.VIDEOS = [
  { arquivo: "IMG_0604", artista: "liz", titulo: "Tanaton Fest · IMG_0604" },
  { arquivo: "IMG_0620", artista: "rina", titulo: "Tanaton Fest · IMG_0620" },
  { arquivo: "IMG_0632", artista: "rina", titulo: "Tanaton Fest · IMG_0632" },
  { arquivo: "IMG_0635", artista: "rina", titulo: "Tanaton Fest · IMG_0635" },
  { arquivo: "IMG_0640", artista: "rina", titulo: "Tanaton Fest · IMG_0640" },
  { arquivo: "IMG_0642", artista: "liz", titulo: "Tanaton Fest · IMG_0642" },
  { arquivo: "IMG_0648", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0648" },
  { arquivo: "IMG_0652", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0652" },
  { arquivo: "IMG_0653", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0653" },
];
