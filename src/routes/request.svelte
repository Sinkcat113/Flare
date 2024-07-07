<script>
    export let username
    export let pfp

    export let selected
</script>

{#if selected}
    <div class="root-selected">
        <img src={pfp} alt="">
        <h3>{username}</h3>
    </div>
{:else}
    <div class="root">
        <img src={pfp} alt="">
        <h3>{username}</h3>
    </div>
{/if}


<style>
    .root {
        display: flex;
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: 6px;
        margin-right: 6px;
        transition: 0.12s;
        padding: 6px;
        border-radius: 14px;
        background-color: rgba(255, 255, 255, 0.096);
        cursor: pointer;
    }

    .root:hover {
        background-color: rgba(255, 255, 255, 0.144);
    }

    .root-selected {
        display: flex;
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: 6px;
        margin-right: 6px;
        transition: 0.12s;
        padding: 6px;
        border-radius: 14px;
        background-color: rgba(255, 255, 255, 0.185);
        cursor: pointer;
    }

    img {
        width: 30px;
        height: 30px;
    }

    h3 {
        font-family: sans-serif;
        font-weight: 700;
        color: white;
        margin: 0;
        margin-top: 7px;
        margin-left: 12px;
        font-size: 14px;
    }
</style>