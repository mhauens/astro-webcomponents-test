export function getPackageInstructions(packageName?: string) {
  if (!packageName) {
    return {
      headline: 'GitHub Package konfigurieren',
      body: 'Setze GITHUB_TOKEN_PACKAGES, optional PUBLIC_WEB_COMPONENTS_PACKAGE, und installiere dein Paket aus GitHub Packages.',
    };
  }

  return {
    headline: `Bereit für ${packageName}`,
    body: `Installiere ${packageName} und importiere dessen Web Components in src/components/WebComponentLoader.ts.`,
  };
}
