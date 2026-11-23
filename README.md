# Kithara · site de Pablo Carvalho

Site principal da Kithara, o link da bio no Instagram. É um site estático em HTML, CSS e JS puros, sem framework e sem etapa de build.

| Rota | Arquivo | O que é |
|---|---|---|
| `/` | `index.html` | Página principal: lira, "O que te traz aqui?", sobre, seções I–VII e contato |
| `/portfolio/` | `portfolio/index.html` | Vídeos do ThanatoFest, artistas e trecho de "Naquele Banco" |
| `/apresentacao/` | `apresentacao/index.html` | Apresentação completa (formação, voz, autorais, eventos, ITA) |
| `/materiais/recorrencias/` | `materiais/recorrencias/index.html` | Trilha de recorrências lineares (MathJax) |
| `/materiais/metodo-de-estudo/` | `materiais/metodo-de-estudo/index.html` | Pareto, curva ABC e ciclo de preparação |

`_fontes/` guarda os protótipos aprovados (referência) e não é publicado.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000. Use um servidor; abrir o arquivo direto (`file://`) não resolve as rotas em pasta.

## Onde editar

- **Textos**: direto no `index.html` de cada rota. Cada seção tem um comentário (`<!-- I EVENTOS -->`, `<!-- II TOQUE -->` …).
- **Contatos**: WhatsApp `5512991745185`, `pablocnsantos2@gmail.com`, `@pablocarvalhosm` e o LinkedIn aparecem na seção de contato de cada página e no rodapé (igual em todas). Para trocar algum, faça um "substituir em todos os arquivos" no editor.
- **Mensagens do WhatsApp**: os links são `https://wa.me/5512991745185?text=<mensagem codificada>`. Para gerar uma mensagem nova, rode no console do navegador `encodeURIComponent("Oi Pablo! ...")`.
- **Formulários Tally**: shows e patrocínio `tally.so/r/ArBAZB`, mentoria `tally.so/r/bZWKPe`, Tech Music `tally.so/r/kbNKq6`.
- **YouTube**: na seção VII (`index.html`), troque o `<span>` marcado com `PENDENTE` por um link quando o canal existir.
- **Visual**: `assets/css/kithara.css` (tokens do tema claro Musageta e do escuro Bronze no topo). O tema fica em `assets/js/tema.js`: segue o sistema na primeira visita e salva a escolha em `localStorage("kth-mode")`.
- **Mídia**: `assets/videos/`, `assets/posters/` (um `.jpg` por vídeo, mesmo nome) e `assets/audio/`.
- **Compartilhamento**: `assets/og.png` (1200×630) e `assets/favicon.svg`. As tags Open Graph usam a URL do GitHub Pages; se o site mudar de domínio, troque `https://pablocarvalho0.github.io/proj-portfolio-agencia/` nas tags `og:` e `twitter:` de cada página.

## Deploy

O workflow `.github/workflows/pages.yml` publica no GitHub Pages (branch `gh-pages`):

- **push na `main`** → https://pablocarvalho0.github.io/proj-portfolio-agencia/
- **pull request** → preview em `…/proj-portfolio-agencia/pr-preview/pr-<N>/`. O link é comentado no PR, e o preview é apagado quando o PR fecha.

Em cada deploy, o workflow acrescenta `?v=<commit>` aos CSS e JS de todas as páginas para driblar o cache.

### Alternativa: Vercel ou Netlify

Como não há build, basta importar o repositório e publicar a raiz:

- **Vercel**: *Add New → Project*, escolha o repo, *Framework Preset: Other*, deixe *Build Command* vazio e *Output Directory* `.`.
- **Netlify**: *Add new site → Import an existing project*, escolha o repo, deixe *Build command* vazio e *Publish directory* `.`.

Publicando a raiz, a pasta `_fontes/` também vai junto; apague-a do repositório antes, se não quiser os protótipos no ar. Nos dois casos, o domínio próprio é configurado no painel do serviço. Se trocar de hospedagem, atualize as URLs `og:`/`twitter:` citadas acima.
