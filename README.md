# Kithara · agência de eventos musicais

Site da Kithara, agência de eventos musicais de São José dos Campos (eventos para empresas, de 150 a 500 pessoas). A Kithara fala em "nós"; o Pablo Carvalho aparece como founder e tem uma área própria em `/pablo/`. É um site estático em HTML, CSS e JS puros, sem framework e sem etapa de build.

| Rota | Arquivo | O que é |
|---|---|---|
| `/` | `index.html` | Home da agência: abertura, o que fazemos, case, como trabalhamos, próximo festival, tecnologia, founder e contato |
| `/cases/` | `cases/index.html` | Case ThanatoFest: ficha do evento, artistas e vídeos ao vivo com filtro |
| `/tecnologia/` | `tecnologia/index.html` | Oferta de tecnologia para negócios da música |
| `/sobre/` | `sobre/index.html` | A Kithara (origem do nome) e o founder |
| `/pablo/` | `pablo/index.html` | Área do Pablo: música autoral, aulas e mentoria, materiais, "toque comigo" e criação/arranjo |
| `/materiais/recorrencias/` | `materiais/recorrencias/index.html` | Trilha de recorrências lineares (MathJax) |
| `/materiais/metodo-de-estudo/` | `materiais/metodo-de-estudo/index.html` | Pareto, curva ABC e ciclo de preparação |

`_fontes/` guarda os protótipos aprovados (referência) e não é publicado. As rotas antigas `/portfolio/` e `/apresentacao/` foram absorvidas por `/cases/`, `/sobre/` e `/pablo/`.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra http://localhost:8000. Use um servidor; abrir o arquivo direto (`file://`) não resolve as rotas em pasta.

## Navegação

- **Menu global** (`header.kbar`): igual em todas as páginas, com `Eventos · Cases · Tecnologia · Sobre · Pablo` e o botão dourado **Pedir proposta**. A página atual leva `aria-current="page"`. No celular, a marca, o botão e o tema ficam na primeira linha e o menu na segunda (rola na horizontal se faltar espaço); no desktop tudo fica numa linha. Para mudar um item, troque o bloco `<nav class="knav">` em **todas** as páginas (substituir em todos os arquivos).
- **Índice interno** (`div.ktoc > nav.ktabs`): só nas páginas longas (`/pablo/` e `/materiais/*`), logo abaixo do menu global e com o rótulo "Nesta página". `site.js` acende a seção visível quando o índice tem `data-spy`.

## Onde editar

- **Textos**: direto no `index.html` de cada rota. Cada seção tem um comentário (`<!-- I O QUE FAZEMOS -->`, `<!-- IV TOQUE COMIGO -->` …).
- **Briefing de eventos** (ação principal, botão dourado): `tally.so/r/ArBAZB`. O mesmo formulário recebe a lista do próximo festival (marcas e artistas).
- **Outros formulários Tally**: mentoria `tally.so/r/bZWKPe`, tecnologia `tally.so/r/kbNKq6`.
- **Contatos**: WhatsApp `5512991745185`, `pablocnsantos2@gmail.com`, `@pablocarvalhosm` e o LinkedIn aparecem no contato da home, na área do Pablo e no rodapé (igual em todas). Para trocar algum, faça um "substituir em todos os arquivos".
- **Mensagens do WhatsApp**: os links são `https://wa.me/5512991745185?text=<mensagem codificada>`. As da agência começam com "Oi! Vi o site da Kithara…"; as da área do Pablo, com "Oi Pablo!…". Para gerar uma nova, rode no console do navegador `encodeURIComponent("Oi! ...")`.
- **Visual**: `assets/css/kithara.css` (tokens do tema claro Musageta e do escuro Bronze no topo; a seção 11 é o desktop ≥ 1024px). O tema fica em `assets/js/tema.js`: segue o sistema na primeira visita e salva a escolha em `localStorage("kth-mode")`.
- **Mídia**: `assets/videos/`, `assets/posters/` (um `.jpg` por vídeo, mesmo nome) e `assets/audio/`.
- **Compartilhamento**: `assets/og.png` (1200×630) e `assets/favicon.svg`. As tags Open Graph usam a URL do GitHub Pages; se o site mudar de domínio, troque `https://kithara-tech.github.io/` nas tags `og:` e `twitter:` de cada página.

## Pendências (nada disto aparece no site até ser preenchido)

Os blocos de prova estão **comentados** no HTML com `<!-- PENDENTE: ... -->`, para que nada falso ou vazio apareça. Procure por `PENDENTE` nos arquivos.

| O que falta | Onde entra |
|---|---|
| Números reais do ThanatoFest (público, duração, fornecedores, alcance) | `index.html` (seção II) e `cases/index.html` (O case) |
| Depoimento de quem contratou, co-organizou ou estava no público, com autorização | `index.html` (seção II) e `cases/index.html` |
| Fotos profissionais do ThanatoFest (hoje só há frames dos vídeos) | `cases/index.html` |
| Lista de outros eventos que o Pablo organizou ou em que tocou (nome, data, local, papel) | `index.html` (bloco "Outros eventos") e `cases/index.html` (seção `#outros`) |
| Participações em podcast e gravações | `sobre/index.html` (bloco "Na mídia e em gravações") |
| Hospedar no site a análise interativa de "Naquele Banco" e a ficha da Sala de Piano (hoje estão fora do site e aparecem como "EM BREVE") | `pablo/index.html` (Materiais) |
| Link do canal no YouTube (hoje "YouTube · em breve", desativado) | `pablo/index.html` (Escute) |
| Formulário de briefing próprio para eventos de empresa, se o `ArBAZB` (shows/patrocínio) não servir | `href` do botão "Pedir proposta" em todas as páginas |
| Imagem de compartilhamento (`assets/og.png`) ainda diz "Pablo Carvalho · Kithara"; refazer com a marca da agência | `assets/og.png` |
| Publicar os formulários do Tally (`ArBAZB`, `bZWKPe`, `kbNKq6`) | Tally |

## Deploy

O workflow `.github/workflows/pages.yml` publica no GitHub Pages (branch `gh-pages`):

- **push na `main`** → https://kithara-tech.github.io/ (repositório `kithara-tech/kithara-tech.github.io`; enquanto o repo não for movido para a organização, o endereço é `https://<usuario>.github.io/<repo>/`)
- **pull request** → preview em `…/pr-preview/pr-<N>/`. O link é comentado no PR, e o preview é apagado quando o PR fecha.

Como todos os caminhos são relativos, o site funciona tanto na raiz quanto em subpasta.

Em cada deploy, o workflow acrescenta `?v=<commit>` aos CSS e JS de todas as páginas para driblar o cache.

### Alternativa: Vercel ou Netlify

Como não há build, basta importar o repositório e publicar a raiz:

- **Vercel**: *Add New → Project*, escolha o repo, *Framework Preset: Other*, deixe *Build Command* vazio e *Output Directory* `.`.
- **Netlify**: *Add new site → Import an existing project*, escolha o repo, deixe *Build command* vazio e *Publish directory* `.`.

Publicando a raiz, a pasta `_fontes/` também vai junto; apague-a do repositório antes, se não quiser os protótipos no ar. Nos dois casos, o domínio próprio é configurado no painel do serviço. Se trocar de hospedagem, atualize as URLs `og:`/`twitter:` citadas acima.
