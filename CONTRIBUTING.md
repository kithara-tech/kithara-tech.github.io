# Como contribuir

## Regras do repositório

- A `main` é protegida: ninguém faz push direto. Toda mudança entra por **pull request** com **1 aprovação**.
- Só o dono do repositório (admin) pode fazer merge sem aprovação, usando o bypass de admin.
- Force push e apagar a `main` estão bloqueados.
- Não mexa na branch `gh-pages`: ela é gerada pelo workflow de publicação.

## Fluxo

1. Atualize a `main` e crie uma branch a partir dela:
   ```bash
   git switch main && git pull
   git switch -c tipo/descricao-curta
   ```
   Prefixos: `feat/` (algo novo), `fix/` (correção), `content/` (texto, vídeo, artista), `docs/` (documentação),
   `ci/` (workflow).
2. Faça a mudança e teste localmente (`python3 -m http.server 8000`) no desktop e numa largura de celular.
3. Commits em português, no imperativo, com uma linha curta de resumo:
   `Adiciona clipe da Liz`, `Corrige link do WhatsApp`.
4. Abra o PR para a `main`. O workflow comenta no PR o link do **preview** (`…/pr-preview/pr-N/`):
   confira o resultado por ele.
5. Depois da aprovação, o merge é feito com **squash**. A branch é apagada automaticamente.
   O site de produção atualiza em 1–2 minutos e o preview do PR é removido.

## Checklist do PR

- [ ] Testei no desktop e no celular (sem rolagem horizontal).
- [ ] O console do navegador não mostra erros.
- [ ] Vídeos novos têm até ~3 MB e capa em `assets/posters/`.
- [ ] Nenhum `.MOV` original nem arquivo acima de 100 MB.
- [ ] Mudanças de conteúdo ficaram em `assets/js/data.js` sempre que possível.

## Conteúdo e direitos

- Só publique vídeos e fotos de artistas com autorização deles: o site é público.
- O código é MIT; os vídeos, imagens e nomes dos artistas não (veja o README).
