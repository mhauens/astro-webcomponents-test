/*
 * This module is loaded only in the browser.
 * Importing the packages registers their custom elements globally,
 * so Astro pages can use <wc-accordion> and <wc-toggle> directly in their markup.
 */
import '@mhauens/accordion';
import '@mhauens/toggle';
