<script lang="ts">
	import '../app.postcss';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- Include the GoogleAnalytics component -->
<GoogleAnalytics id="G-R1G27RBPKP" />

<!-- Render the rest of the page content -->
<slot />