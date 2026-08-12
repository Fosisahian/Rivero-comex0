# Rivero Comex

Landing page en React (Vite) para Rivero Comex — cursos de comercio exterior:
importación desde China, negociación con proveedores e inglés para comercio exterior.

## Antes de publicar

Editá `src/App.jsx` y reemplazá:

- `WHATSAPP_URL` → tu número real, formato `https://wa.me/549XXXXXXXXXX`
- `INSTAGRAM_URL` → tu usuario real de Instagram
- Los testimonios (son de ejemplo, hay que cambiarlos por reales o sacarlos)

## Correr en local

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Deploy en Vercel (gratis)

**Opción A — desde GitHub (recomendada):**

1. Creá un repositorio nuevo en GitHub y subí esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Rivero Comex landing"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/rivero-comex.git
   git push -u origin main
   ```
2. Entrá a [vercel.com](https://vercel.com), iniciá sesión con GitHub.
3. Clic en **Add New → Project**, elegí el repo `rivero-comex`.
4. Vercel detecta Vite automáticamente (Build Command: `vite build`, Output: `dist`). Clic en **Deploy**.
5. En 1–2 minutos te da una URL pública tipo `rivero-comex.vercel.app`, visible para cualquiera.
6. Cada vez que hagas `git push`, Vercel actualiza el sitio solo.

**Opción B — sin GitHub, con la CLI de Vercel:**

```bash
npm install -g vercel
cd rivero-comex
vercel --prod
```

Te va a pedir loguearte (con email o GitHub) y en un par de minutos te da la URL pública.

## Dominio propio

Una vez deployado, en el dashboard de Vercel → tu proyecto → **Settings → Domains** podés
conectar `riverocomex.com` o el dominio que compres.
