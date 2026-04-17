# paperclip-hostinger-landing

Landing page pública da parceria Paperclip + Hostinger.

## Objetivo

Este repositório hospeda a landing page promocional do projeto. O bootstrap
inicial foi preparado para publicação rápida no GitHub Pages, com uma base
estática simples e sem dependências.

## Estrutura

- `site/`: arquivos estáticos publicados no GitHub Pages
- `.github/workflows/deploy-pages.yml`: deploy automático em push para `main`
- `copy-e-direcao-landing-page.md`: direção editorial e visual de referência

## Deploy

- Repositório oficial: `https://github.com/otaviomirandabr19/paperclip-hostinger-landing`
- URL esperada do Pages: `https://otaviomirandabr19.github.io/paperclip-hostinger-landing/`
- Publicação automática via GitHub Actions em push para `main`

## Segurança

- Não versionar secrets, `.env` nem credenciais
- Toda mudança em `main` deve passar por revisão do gate de DevSecOps
- O bootstrap inicial não depende de serviços externos nem expõe dados internos
