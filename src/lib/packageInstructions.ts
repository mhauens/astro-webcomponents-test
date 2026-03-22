export function getPackageInstructions(packageName?: string | string[]) {
  const packageNames = typeof packageName === 'string' ? [packageName] : packageName ?? [];

  if (packageNames.length === 0) {
    return {
      headline: 'GitHub Package konfigurieren',
      body: 'Setze GITHUB_TOKEN_PACKAGES, optional PUBLIC_WEB_COMPONENTS_PACKAGE, und installiere dein Paket aus GitHub Packages.',
    };
  }

  if (packageNames.length === 1) {
    const [singlePackageName] = packageNames;

    return {
      headline: `Bereit für ${singlePackageName}`,
      body: `Installiere ${singlePackageName} und importiere dessen Web Components in src/components/WebComponentLoader.ts.`,
    };
  }

  return {
    headline: `Bereit für ${packageNames.join(' + ')}`,
    body: `Installiere ${packageNames.join(', ')} und importiere deren Web Components in src/components/WebComponentLoader.ts.`,
  };
}
