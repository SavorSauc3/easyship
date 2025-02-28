<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import Ship from '~icons/bxs/ship';
</script>

<!-- Footer At the Bottom | Transparent background -->
<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <a href="/" class="hover:text-primary-500">
            <Ship class="w-6 h-6" />
        </a>
    </svelte:fragment>
    <svelte:fragment slot="default">
        <p class="text-sm text-gray-500">Copyright &copy; 2025 Nathaniel Lybrand</p>
    </svelte:fragment>
</AppBar>