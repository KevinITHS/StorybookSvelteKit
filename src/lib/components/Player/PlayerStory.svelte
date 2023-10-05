<script lang="ts">
    import Player from "./Player.svelte"
    import Person from "./Person.svelte"

    export let story: "Dead" | "Person" | "Default" | "Appearance" = "Default"
    export let alive: boolean = true
    export let appearance: "0" | "1" | "2" | "3" | "4" = "0"
</script>

{#if story == "Default"}
    <Player {appearance} {alive} />
{/if}
{#if story === "Dead"}
    <Player {alive} {appearance} />
{/if}
{#if story === "Appearance"}
    <Person appearance="0" />
    <Person appearance="1" />
    <Person appearance="2" />
    <Person appearance="3" />
    <Person appearance="4" />
{/if}
