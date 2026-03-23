# Astro Web Components Starter

Dieses Repository enthält einen minimalen Astro-Starter mit:

- **TypeScript**
- **ESLint**
- **Prettier**
- **Vitest**
- Vorbereitung für **Web Components aus GitHub Packages**

## Installation

```bash
cp .env.example .env
cp .npmrc.example .npmrc
pnpm install
```

Ergänze danach in `.env` deinen Wert für `GITHUB_TOKEN_PACKAGES`. `.npmrc` verwendet diesen Token automatisch für GitHub Packages.

## Web Components aus GitHub Packages verwenden

1. Passe den Scope in `.npmrc.example` an, z. B. `@dein-org`.
2. Installiere dein veröffentlichtes Paket:

   ```bash
   pnpm install @your-org/web-components
   ```

3. Trage in `.env` deinen GitHub Packages Token ein und hinterlege optional den Paketnamen:

   ```bash
   GITHUB_TOKEN_PACKAGES=ghp_replace_me
   PUBLIC_WEB_COMPONENTS_PACKAGE=@your-org/web-components
   ```

4. Importiere dein Paket in `src/components/WebComponentLoader.ts`:

   ```ts
   import '@your-org/web-components';
   ```

5. Nutze die registrierten Tags direkt in Astro:

   ```astro
   <my-button label="Hallo Welt"></my-button>
   ```

## Scripts

- `pnpm dev` – lokaler Dev-Server
- `pnpm build` – Produktionsbuild
- `npm check` – Astro Type Check
- `pnpm lint` – ESLint
- `pnpm format` – Prettier Check
- `pnpm test:run` – Vitest ohne Watch-Modus
