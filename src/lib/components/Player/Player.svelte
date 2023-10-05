<script lang="ts">
    export let alive: boolean = false
    export let story: string = ""
    export let appearance: "0" | "1" | "2" | "3" | "4" = "0"
</script>

<div class="DeadStory">
    {#if alive && story === "Dead"}
        👨‍🦲
    {:else if story === "Dead"}
        💀
    {/if}
</div>

<div class="DefaultStory">
    {#if story === "Default"}
        <div class="emoji-container">
            <div class="emoji">
                🤴
                <span class="potato">🥔</span>
            </div>
            <h1>Felix</h1>
            <p>has potato</p>
            <button class="potato-button primary-fat-100">Pass Potato</button>
        </div>
    {/if}
</div>

<div class="StylingStory">
    {#if story === "Styling"}
        <div class="emoji-container">
            <div class="emoji">
                🤴
                <span class="potato">🥔</span>
            </div>
            <h1 class="primary-fat-500">Felix</h1>
            <p class="primary-fat-100">has potato</p>
            <button class="potato-button primary-fat-100">Pass Potato</button>
        </div>
    {/if}
</div>

<div class="PersonStory">
    {#if story === "Person"}
        {#if appearance === "0"}
            <div class="player1">👨‍🦲</div>
        {:else if appearance === "1"}
            <div class="player2">🧑</div>
        {:else if appearance === "2"}
            <div class="player3">👨</div>
        {:else if appearance === "3"}
            <div class="player4">🤴</div>
        {:else if appearance === "4"}
            <div class="player5">👳‍♂️</div>
        {/if}
    {/if}
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

    .PersonStory {
        display: flex;
        justify-content: center;
        align-items: row;
        gap: 25px;
        font-size: 36px;
    }
</style>
