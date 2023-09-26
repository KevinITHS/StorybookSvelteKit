<script lang="ts">
    export let label: string
</script>

<button on:click>{label}</button>

<style>
    button {
        color: var(--gray-000);
        background-color: var(--gray-900);
    }
</style>
