/*
 * Dados do site — edite aqui, sem mexer no HTML.
 *
 * AGENCIA.nome      → nome da agência (aparece no topo, hero, rodapé e título da aba)
 * ARTISTAS          → cards da seção "Artistas". O `id` é usado para ligar vídeos ao artista.
 * VIDEOS            → clipes da grade do Thanaton Fest. Para associar um vídeo a um artista,
 *                     troque `artista: null` pelo `id` do artista (ex.: artista: "rina").
 *                     Os filtros da grade aparecem sozinhos quando houver artista definido.
 */

window.AGENCIA = {
  nome: "Pablo Carvalho",
  slogan: "", // vazio = não aparece no site
  sobre:
    "Música é linguagem — a forma mais pura de comunicação humana. Nascemos no ITA, entre engenharia e palco, " +
    "e levamos essa lente para cada show: técnica de quem estuda a fundo, sentimento de quem toca para encantar. " +
    "Cuidamos da curadoria, da produção e do encontro entre os artistas certos e o seu evento.",
  contato: {
    email: "pablocnsantos2@gmail.com",
    instagram: "@pablocarvalhosm", // TODO: confirmar o @ exato
    // Vazio = não aparece no site. Preencher quando houver o WhatsApp Business, ex.: "+55 (12) 90000-0000".
    whatsapp: "",
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
  { arquivo: "IMG_0604", artista: "liz", titulo: "Thanaton Fest · IMG_0604" },
  { arquivo: "IMG_0620", artista: "rina", titulo: "Thanaton Fest · IMG_0620" },
  { arquivo: "IMG_0632", artista: "rina", titulo: "Thanaton Fest · IMG_0632" },
  { arquivo: "IMG_0635", artista: "rina", titulo: "Thanaton Fest · IMG_0635" },
  { arquivo: "IMG_0640", artista: "rina", titulo: "Thanaton Fest · IMG_0640" },
  { arquivo: "IMG_0642", artista: "liz", titulo: "Thanaton Fest · IMG_0642" },
  { arquivo: "IMG_0648", artista: "banda-instrumental", titulo: "Thanaton Fest · IMG_0648" },
  { arquivo: "IMG_0652", artista: "banda-instrumental", titulo: "Thanaton Fest · IMG_0652" },
  { arquivo: "IMG_0653", artista: "banda-instrumental", titulo: "Thanaton Fest · IMG_0653" },
];

/*
 * MUSICAS → seção "Música". Só TRECHOS das faixas ficam no site (a música inteira não é publicada).
 * arquivo = nome do MP3 em assets/audio/ (sem extensão). Como gerar o trecho: veja o README.
 */
window.MUSICAS = [
  {
    titulo: "Naquele Banco",
    artista: "Pablo Carvalho",
    status: "Em produção",
    arquivo: "naquele-banco-trecho",
    nota: "Trecho de 1 min · pré-refrão e refrão",
  },
];
