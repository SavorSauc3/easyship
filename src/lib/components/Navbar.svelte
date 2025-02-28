<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import ShipIcon from '~icons/bxs/ship';
    import BarsIcon from '~icons/fa-solid/bars';
    let showActions = false;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <a href="/" class="hover:text-primary-500">
            <ShipIcon class="w-12 h-12" />
        </a>
    </svelte:fragment>
    <!-- Large Font Size -->
    <a href="/" class="hover:text-primary-500 md:text-2xl">
        <h1 class="font-bold">EasyShip</h1>
    </a>
    <svelte:fragment slot="trail">
        <!-- Only show the links on larger screens | md font size | divider between each link -->
        <nav class="flex items-center space-x-4 hidden md:flex">
            <a href="/about" class="hover:text-primary-500 text-lg">About</a>
            <span class="divider-vertical" />
            <a href="/contact" class="hover:text-primary-500 text-lg">Contact</a>
            <span class="divider-vertical" />
            <a href="/careers" class="hover:text-primary-500 text-lg">Careers</a>
        </nav>

        <!-- Only show the menu icon on small screens -->
        <button class="btn-icon md:hidden" on:click={() => showActions = !showActions}>
            <BarsIcon class="w-6 h-6" />
        </button>
    </svelte:fragment>
</AppBar>

{#if showActions}
    <div class="absolute top-16 right-0 bg-surface-100-800-token p-4 rounded shadow-xl md:hidden">
        <a href="/" class="block hover:text-primary-500">Home</a>
        <a href="/about" class="block hover:text-primary-500">About</a>
        <a href="/contact" class="block hover:text-primary-500">Contact</a>
        <a href="/careers" class="block hover:text-primary-500">Careers</a>
    </div>
{/if}

