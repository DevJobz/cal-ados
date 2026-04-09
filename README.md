# Bem-Me-Quer Calçados — Guia de Deploy e Imagens

## 📁 Estrutura do Projeto
```
bem-me-quer/
├── index.html
├── admin/
│   ├── index.html       ← Painel Decap CMS
│   ├── config.yml       ← Configuração do CMS
│   └── preview.css
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/uploads/  ← Todas as imagens aqui
├── dados/               ← JSONs editáveis pelo CMS
│   ├── navbar.json
│   ├── hero.json
│   ├── historia.json
│   ├── diferenciais.json
│   ├── produtos.json
│   ├── marcas.json
│   ├── galeria.json
│   ├── depoimentos.json
│   ├── empresa.json
│   └── configuracoes.json
├── netlify.toml
├── _redirects
├── robots.txt
└── sitemap.xml
```

---

## 🖼️ Guia de Imagens

Coloque **todas** em `assets/images/uploads/`

| Arquivo                    | Uso                          | Tamanho ideal  |
|----------------------------|------------------------------|----------------|
| `logo-bmq.png`             | Logo (PNG transparente)      | 300×100px      |
| `hero-fachada.jpg`         | Foto de fundo do hero        | 1920×1080px    |
| `historia-loja.jpg`        | Foto seção história          | 900×700px      |
| `prod-semijoia.jpg`        | Card: Semijóias              | 600×420px      |
| `prod-mahogany.jpg`        | Card: Linha Mahogany         | 600×420px      |
| `prod-bolsas.jpg`          | Card: Bolsas e Mochilas      | 600×420px      |
| `prod-calcados.jpg`        | Card: Calçados               | 600×420px      |
| `prod-esportivo.jpg`       | Card: Linha Esportiva        | 600×420px      |
| `galeria-01.jpg` a `08.jpg`| Fotos da galeria             | 800×600px      |
| `galeria-video-thumb.jpg`  | Thumb do vídeo               | 800×600px      |
| `dep-carla.jpg`            | Foto depoimento — Carla      | 200×200px      |
| `dep-roberto.jpg`          | Foto depoimento — Roberto    | 200×200px      |
| `dep-ana.jpg`              | Foto depoimento — Ana        | 200×200px      |
| `dep-paulo.jpg`            | Foto depoimento — Paulo      | 200×200px      |
| `og-image.jpg`             | Imagem compartilhamento      | 1200×630px     |
| `favicon.png`              | Ícone navegador              | 32×32px        |
| `apple-touch-icon.png`     | Ícone iOS                    | 180×180px      |

---

## 🚀 Deploy Passo a Passo

### 1. GitHub
```bash
git init
git add .
git commit -m "feat: Bem-Me-Quer Calçados — site completo"
git remote add origin https://github.com/SEU_USUARIO/bem-me-quer.git
git push -u origin main
```

### 2. Netlify
1. netlify.com → **Add new site** → Import from Git
2. Selecione o repositório
3. Deixe configurações de build em branco → **Deploy site**

### 3. Netlify Identity
1. Site settings → Identity → **Enable Identity**
2. Registration: **Invite only**
3. Services → Git Gateway → **Enable Git Gateway**

### 4. Convidar o cliente
- Identity → **Invite users** → e-mail do cliente

### 5. Painel admin
- Acesse: `https://SEU-SITE.netlify.app/admin/`

---

## 📝 Painel Admin — O que pode ser editado

| Seção | O que é editável |
|-------|-----------------|
| Navbar | Logo, links do menu, número WhatsApp |
| Hero/Capa | Foto de fundo, títulos, subtítulo, stats |
| Nossa História | Texto completo, foto, assinatura |
| Diferenciais | Cards (título, texto, ícone) — add/remover |
| Produtos | Cards (foto, título, descrição, msg WhatsApp) — add/remover |
| Marcas | Categorias e marcas do ticker — add/remover |
| Galeria | Fotos e vídeos — add/remover |
| Depoimentos | Nome, foto, texto, estrelas — add/remover |
| Contato | Endereço, horários, WhatsApp, redes sociais, mapa |
| SEO | Título, descrição, keywords, OG image |

---

*Desenvolvido com 🧡 para a Bem-Me-Quer Calçados · Piratininga SP*
