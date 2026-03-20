import { describe, expect, it } from 'vitest';

import { getPackageInstructions } from '../src/lib/packageInstructions';

describe('getPackageInstructions', () => {
  it('returns setup guidance when no package is configured', () => {
    expect(getPackageInstructions()).toEqual({
      headline: 'GitHub Package konfigurieren',
      body: 'Setze GITHUB_TOKEN_PACKAGES, optional PUBLIC_WEB_COMPONENTS_PACKAGE, und installiere dein Paket aus GitHub Packages.',
    });
  });

  it('returns package specific guidance when a package name is provided', () => {
    expect(getPackageInstructions('@acme/ui')).toEqual({
      headline: 'Bereit für @acme/ui',
      body: 'Installiere @acme/ui und importiere dessen Web Components in src/components/WebComponentLoader.ts.',
    });
  });
});
