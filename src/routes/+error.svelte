<!-- src/routes/404.svelte -->
<script>
    import { page } from '$app/stores';
    import MissingIcon from '~icons/subway/missing';
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <MissingIcon class="w-32 h-32 text-warning-500 mb-4" />
    <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="text-gray-500 mb-8">The page you're looking for ({$page.url.pathname}) could not be found.</p>
    <a href="/" class="btn variant-filled">Go to Home</a>
</div>
