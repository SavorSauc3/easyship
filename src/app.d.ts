// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
// global.d.ts
declare interface Window {
	dataLayer: IArguments[];
	
	/* eslint-disable @typescript-eslint/no-explicit-any */
	gtag?: (...args: any[]) => void;
}
