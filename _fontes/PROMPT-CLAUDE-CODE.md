# Prompt para o Claude Code

Contexto: este repositório vai virar o novo site principal da Kithara (marca musical do Pablo Carvalho), o link que ele usa no Instagram. Você está na branch `kithara-site`. Em `_fontes/` estão os protótipos aprovados (HTML autocontidos) e o `LEIA-ME.md`. Leia o LEIA-ME e TODOS os .html de `_fontes/` antes de escrever qualquer código.

Tarefa:
1. Trabalhe só na branch `kithara-site`. Não mexa na main e não faça merge.
2. Mantenha `assets/videos/`, `assets/posters/`, `assets/audio/`, `.github/`, `.nojekyll`, `LICENSE` e `_fontes/`. Apague todo o resto (`index.html`, `assets/css/`, `assets/js/`, README e CONTRIBUTING antigos) e reconstrua do zero.
3. Site estático, sem framework e sem etapa de build (HTML + CSS + JS puro), com estas rotas, cada uma como pasta com `index.html`:
   `/` (site-principal.html), `/portfolio/`, `/apresentacao/`, `/materiais/recorrencias/`, `/materiais/metodo-de-estudo/`.
   O `linktree.html` é só referência e não vira página. Use caminhos relativos, porque o site roda em subpasta no GitHub Pages (`/<repo>/`) e no preview de PR (`/<repo>/pr-preview/pr-N/`).
4. Design system único em `assets/css/kithara.css`, a partir de `_fontes/kithara-base.css`: tema claro Musageta e escuro Bronze, fontes Cinzel, Cormorant Garamond e Inter. Tema em `assets/js/tema.js`: na primeira visita segue o sistema, o botão alterna e a escolha fica salva em localStorage "kth-mode". Barra do topo e rodapé iguais em todas as páginas. O portfólio usa os vídeos, pôsteres e o áudio que já estão em `assets/`.
5. Fidelidade: mantenha textos, ordem das seções I–VII, musas, CTAs, mensagens de WhatsApp (wa.me/5512991745185 com o texto de cada seção), links do Tally e contatos exatamente como estão nos protótipos. Troque todo link claude.ai que aponta para uma das páginas acima pela rota interna. Continuam externos só os dois links listados no LEIA-ME (Naquele Banco e Sala de Piano).
6. Mobile first (390px). Nenhum conteúdo pode depender de animação para aparecer. Toques de pelo menos 44px, contraste AA nos dois temas, vídeos com preload leve.
7. SEO e compartilhamento: title e description por página, Open Graph e Twitter card (imagem OG 1200x630 gerada a partir da lira e do nome "Pablo Carvalho · Kithara", salva em `assets/og.png`), favicon da lira em SVG.
8. Ajuste `.github/workflows/pages.yml`. Hoje ele publica só `index.html` e `assets/`. Ele precisa publicar todas as rotas novas e aplicar o cache-busting `?v=<commit>` em todos os .html. `_fontes/` não é publicado.
9. README.md curto: como rodar localmente (`python3 -m http.server`), onde editar contatos e textos, e como o deploy funciona (push na main publica; PR gera preview).
10. Antes de abrir o PR, verifique:
    - sirva localmente e tire screenshots a 390px nos dois temas de todas as rotas;
    - nenhum link quebrado e nenhum link claude.ai além dos 2 permitidos;
    - nenhuma ocorrência de "Lucas", "Liz", preço ou valor em R$ no site publicado;
    - console sem erros.
11. Abra um PR em rascunho da `kithara-site` para a `main`. Na descrição: as páginas, as screenshots, o link do preview e as pendências ([link do canal no YouTube], formulários do Tally a publicar, domínio próprio).

Não altere DNS, não faça merge e não apague nada fora da branch `kithara-site`.
