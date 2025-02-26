<!--A Navbar component, takes a few parameters-->

<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';

    let open = false;
    let open2 = false;
    let open3 = false;

    onMount(() => {
        open = false;
        open2 = false;
        open3 = false;
    });
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>