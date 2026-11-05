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
  nome: "Nome da Agência",
  slogan: "Música ao vivo com alma, técnica e presença de palco.",
  sobre:
    "Somos uma agência dedicada a conectar artistas independentes a palcos, festivais e eventos. " +
    "Cuidamos da curadoria, da produção e da carreira de cantoras e bandas que fazem o público parar para ouvir.",
  contato: {
    email: "contato@suaagencia.com.br",
    instagram: "@suaagencia",
    whatsapp: "+55 (00) 00000-0000",
  },
  heroVideo: "IMG_0653",
};

window.ARTISTAS = [
  {
    id: "rina",
    nome: "Rina",
    tipo: "Voz · Jazz & MPB",
    descricao: "Texto curto de apresentação da artista. Repertório, influências e formações disponíveis.",
    poster: "IMG_0635",
  },
  {
    id: "liz",
    nome: "Liz",
    tipo: "Voz · Jazz & Soul",
    descricao: "Texto curto de apresentação da artista. Repertório, influências e formações disponíveis.",
    poster: "IMG_0642",
  },
  {
    id: "banda-instrumental",
    nome: "Banda Instrumental",
    tipo: "Instrumental · Jazz",
    descricao: "Texto curto de apresentação da banda. Formação, estilo e tipos de evento atendidos.",
    poster: "IMG_0652",
  },
];

window.VIDEOS = [
  { arquivo: "IMG_0604", artista: null, titulo: "Tanaton Fest · IMG_0604" }, // artista a confirmar
  { arquivo: "IMG_0620", artista: "rina", titulo: "Tanaton Fest · IMG_0620" },
  { arquivo: "IMG_0632", artista: null, titulo: "Tanaton Fest · IMG_0632" }, // artista a confirmar
  { arquivo: "IMG_0635", artista: "rina", titulo: "Tanaton Fest · IMG_0635" },
  { arquivo: "IMG_0640", artista: null, titulo: "Tanaton Fest · IMG_0640" }, // artista a confirmar
  { arquivo: "IMG_0642", artista: "liz", titulo: "Tanaton Fest · IMG_0642" },
  { arquivo: "IMG_0648", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0648" },
  { arquivo: "IMG_0652", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0652" },
  { arquivo: "IMG_0653", artista: "banda-instrumental", titulo: "Tanaton Fest · IMG_0653" },
];
