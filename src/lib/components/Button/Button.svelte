<script lang="ts">
    export let label: string
</script>

<button class="primary-fat-100" on:click>{label}Pass Potato</button>

<style>
    button {
        background-color: #7a5901;
        color: white;
        font-size: 16px;
        padding: 4px 15px;
        border-radius: 20px;
        cursor: pointer;
    }
</style>
