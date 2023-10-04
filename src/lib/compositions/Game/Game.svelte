<script lang="ts">
    export let story: string = ""
</script>

<div class="PlacementStory">
    {#if story === "Placement"}
        .
    {/if}
</div>

<div class="StartRestartStory">
    {#if story === "StartRestart"}
        .
    {/if}
</div>

<div class="ResponsiveStory">
    {#if story === "Responsive"}
        .
    {/if}
</div>
