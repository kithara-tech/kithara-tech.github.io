# proj-portfolio-agencia

Portfólio da agência de música **Pablo Carvalho**: artistas, vídeos do Thanaton Fest e contato.
Site estático (HTML + CSS + JS puro), sem build e sem dependências.

**🔗 Site no ar:** https://pablocarvalho0.github.io/proj-portfolio-agencia/

## Como o site é publicado

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publica tudo na branch `gh-pages`,
que é a origem do GitHub Pages (**Settings → Pages → Deploy from a branch → `gh-pages` / `(root)`**).

| Evento | Resultado | Endereço |
|---|---|---|
| Merge na `main` | Atualiza o site em 1–2 min | https://pablocarvalho0.github.io/proj-portfolio-agencia/ |
| PR aberto ou atualizado | Preview do PR (o link é comentado no PR) | `…/proj-portfolio-agencia/pr-preview/pr-N/` |
| PR fechado | Preview removido | — |

Não edite a branch `gh-pages` na mão: ela é gerada pelo workflow.
O repositório é privado, mas **o site é público** (qualquer pessoa com o link abre).

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000. Qualquer servidor estático serve.

## Estrutura

```
index.html                  # estrutura das seções
assets/css/style.css        # visual: cores e fontes nos tokens de :root
assets/js/data.js           # TODO o conteúdo editável: agência, artistas, vídeos
assets/js/main.js           # renderização, filtros, hover-play e modal
assets/videos/*.mp4         # clipes curtos (≈10 s, 720×1280, H.264, 1–2 MB)
assets/posters/*.jpg        # capa de cada clipe (primeiro frame)
.github/workflows/pages.yml # publicação e preview por PR
```

## Editar conteúdo (`assets/js/data.js`)

Quase toda mudança de texto acontece só neste arquivo:

- **`AGENCIA`:** nome, slogan (vazio = não aparece), texto "Sobre", contatos e vídeo de fundo do hero (`heroVideo`).
- **`ARTISTAS`:** `id`, `nome`, `tipo`, `descricao`, `poster` (nome do clipe usado como capa do card).
- **`VIDEOS`:** `{ arquivo, artista, titulo }`. `artista` é o `id` de um item de `ARTISTAS`.
  Os filtros da grade e o "Ver N vídeos" dos cards se atualizam sozinhos.

## Adicionar ou trocar um clipe

Gere um clipe curto e leve a partir do original:

```bash
ffmpeg -ss 00:01:00 -i ORIGINAL.MOV -t 10 -vf "scale=720:-2,fps=30" \
  -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p -c:a aac -b:a 96k \
  -movflags +faststart assets/videos/NOME.mp4
ffmpeg -i assets/videos/NOME.mp4 -frames:v 1 -q:v 4 assets/posters/NOME.jpg
```

Depois adicione `{ arquivo: "NOME", artista: "...", titulo: "Thanaton Fest · NOME" }` em `VIDEOS`.
Nunca suba os `.MOV` originais: têm centenas de MB e o GitHub recusa arquivos acima de 100 MB.

## Origem dos clipes

Vídeos do Thanaton Fest (ITA, São José dos Campos), gravados na vertical no iPhone, na pasta do Google Drive
`18xCejTvQUdF8wroHpZvkYkRtrAZe7Ptq`. Os clipes atuais são trechos de ~10 s a partir de ~30% de cada vídeo,
para referência visual. A curadoria final dos cortes ainda será feita.

## Contribuir

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

Código sob a [licença MIT](LICENSE).
Os vídeos, imagens e nomes de artistas em `assets/` **não** estão cobertos pela MIT: pertencem aos respectivos
artistas e só podem ser usados com autorização.
