<script lang="ts">
    import Person from "./Person.svelte"

    export let alive: boolean = true
    export let appearance: "0" | "1" | "2" | "3" | "4" = "0"
</script>

<div class="emoji-container">
    <div class="emoji">
        {#if alive}
            <Person {appearance} />
        {:else}
            {"💀"}
        {/if}
        <span class="potato">🥔</span>
    </div>
    <h1>Felix</h1>
    <p>has potato</p>
    <!-- TODO change to button component -->
    <!-- TODO add hotPotatoStore.passPotato to onclick -->
    <button class="potato-button primary-fat-100">Pass Potato</button>
</div>

<style scoped>
    .emoji-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .emoji {
        font-size: 36px;
        position: relative;
    }

    .potato {
        position: absolute;
        left: 25px;
        top: 20px;
        font-size: 25px;
    }

    .potato-button {
        background-color: #7a5901;
        color: white;
        font-size: 16px;
        padding: 4px 15px;
        border-radius: 20px;
        cursor: pointer;
    }
</style>
