<script lang="ts">
    export let story: string = ""
</script>

<div class="PlacementStory">
    {#if story === "Placement"}
        <div class="player">
            <div class="emoji-container">
                <div class="emoji">
                    🤴
                    <span class="potato">🥔</span>
                </div>
                <div class="nametag">
                    <h1 class="primary-fat-500 nametag">Felix</h1>
                    <p class="primary-fat-100 nametag">has potato</p>
                    <button class="potato-button primary-fat-100 nametag">Pass Potato</button>
                </div>
            </div>
        </div>

        <div class="player">
            <br />👨 <br />
            <p class="nametag primary-fat-100">Sam</p>
        </div>

        <div class="player">
            <br />👳‍♂️ <br />
            <p class="nametag primary-fat-100">Kevin</p>
        </div>

        <div class="player">
            <br />👨‍🦲 <br />
            <p class="nametag primary-fat-100">Bob</p>
        </div>

        <div class="player">
            <br />🧑 <br />
            <p class="nametag primary-fat-100">Alice</p>
        </div>
    {/if}
</div>

<div class="StartRestartStory">
    {#if story === "StartRestart"}
        <div class="player">
            <br />🤴 <br />
            <p class="nametag primary-fat-100">Felix</p>
        </div>

        <div class="player">
            <br />👨 <br />
            <p class="nametag primary-fat-100">Sam</p>
        </div>

        <div class="player">
            <br />👳‍♂️ <br />
            <p class="nametag primary-fat-100">Kevin</p>
        </div>

        <div class="player">
            <br />💀 <br />
            <p class="nametag primary-fat-100">Bob</p>
        </div>

        <div class="player">
            <br />🧑 <br />
            <p class="nametag primary-fat-100">Alice</p>
        </div>
        <div class="centerbutton">
            <button class="potato-button primary-fat-100 nametag">Restart Game</button>
        </div>
        <p class="potatodead">🥔</p>
    {/if}
</div>

<div class="ResponsiveStory">
    {#if story === "Responsive"}
        <div class="player">
            <div class="emoji-container">
                <div class="emoji">🤴🥔</div>
                <div class="nametag">
                    <h1 class="primary-fat-500 nametag">Felix</h1>
                    <p class="primary-fat-100 nametag">has potato</p>
                    <button class="potato-button primary-fat-100 nametag">Pass Potato</button>
                </div>
            </div>
        </div>

        <div class="player">
            <br />👨 <br />
            <p class="nametag primary-fat-100">Sam</p>
        </div>

        <div class="player">
            <br />👳‍♂️ <br />
            <p class="nametag primary-fat-100">Kevin</p>
        </div>

        <div class="player">
            <br />👨‍🦲 <br />
            <p class="nametag primary-fat-100">Bob</p>
        </div>

        <div class="player">
            <br />🧑 <br />
            <p class="nametag primary-fat-100">Alice</p>
        </div>
    {/if}
</div>

<style>
    .PlacementStory,
    .StartRestartStory,
    .ResponsiveStory {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 10px;
        justify-items: center;
        align-items: center;
    }

    .player:nth-child(1) {
        grid-column: 3;
        grid-row: 1;
    }

    .player:nth-child(2) {
        grid-column: 1;
        grid-row: 3;
    }

    .player:nth-child(3) {
        grid-column: 5;
        grid-row: 3;
    }

    .player:nth-child(4) {
        grid-column: 2;
        grid-row: 5;
    }

    .player:nth-child(5) {
        grid-column: 4;
        grid-row: 5;
    }

    .player {
        font-size: 36px;
    }

    .nametag {
        font-size: 20px;
    }

    .potato-button {
        background-color: #7a5901;
        color: white;
        font-size: 16px;
        padding: 4px 15px;
        border-radius: 20px;
        cursor: pointer;
    }

    .emoji {
        position: relative;
    }

    .potato {
        position: absolute;
        top: 60%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 30px;
    }

    .centerbutton {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .potatodead {
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% + -20px);
        font-size: 30px;
    }

    @media (max-width: 789px) {
        .ResponsiveStory {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .player {
            width: 100%;
            text-align: center;
        }
    }
</style>
