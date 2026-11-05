# proj-portfolio-agencia

Portfólio da agência de música: site estático (HTML + CSS + JS puro, sem build).

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000.

## Estrutura

```
index.html              # estrutura das seções
assets/css/style.css    # visual (cores e fontes em :root)
assets/js/data.js       # TODO o conteúdo editável: agência, artistas, vídeos
assets/js/main.js       # renderização, filtros, hover-play e modal
assets/videos/*.mp4     # clipes curtos (≈10 s, 720×1280, H.264, ~1–2 MB)
assets/posters/*.jpg    # capa de cada clipe (primeiro frame)
```

## Editar conteúdo (`assets/js/data.js`)

- **Nome da agência, slogan, texto "Sobre", contatos:** objeto `AGENCIA`. O nome é trocado em um lugar só.
- **Vídeo de fundo do hero:** `AGENCIA.heroVideo` (nome do arquivo sem extensão).
- **Artistas:** array `ARTISTAS` (`id`, `nome`, `tipo`, `descricao`, `poster`).
- **Vídeos:** array `VIDEOS`. Para ligar um vídeo a um artista, troque `artista: null` pelo `id` do artista
  (ex.: `artista: "rina"`). Os botões de filtro e a contagem "Ver N vídeos" nos cards se atualizam sozinhos.

## Adicionar ou trocar um clipe

Gere um clipe curto e leve a partir do original e coloque em `assets/videos/` + capa em `assets/posters/`:

```bash
ffmpeg -ss 00:01:00 -i ORIGINAL.MOV -t 10 -vf "scale=720:-2,fps=30" \
  -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p -c:a aac -b:a 96k \
  -movflags +faststart assets/videos/NOME.mp4
ffmpeg -i assets/videos/NOME.mp4 -frames:v 1 -q:v 4 assets/posters/NOME.jpg
```

Depois adicione `{ arquivo: "NOME", artista: "...", titulo: "..." }` em `VIDEOS`.
Não suba os `.MOV` originais (centenas de MB; o GitHub recusa arquivos > 100 MB).

## Origem dos clipes

Vídeos do Thanaton Fest, gravados na vertical no iPhone, na pasta do Google Drive
`18xCejTvQUdF8wroHpZvkYkRtrAZe7Ptq`. Os clipes atuais são trechos de ~10 s a partir de ~30% de cada vídeo,
só para referência visual — a curadoria final dos cortes ainda será feita.
