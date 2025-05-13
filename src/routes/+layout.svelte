<script>
    const { data, children } = $props();
	import Construction from "$components/construction.svelte";
</script>

{#await data}
    <div><p>Loading...</p></div>
{:then data} 
    {#if data.construction}
        <Construction></Construction>
    {:else}
        {@render children()}
    {/if}
{/await}