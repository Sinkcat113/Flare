<script>
    export let username
    export let pfp
</script>

<div class="root">
    <img src={pfp} alt="">
    <h3>{username}</h3>
</div>

<style>
    .root {
        display: flex;
        margin-top: 12px;
        margin-bottom: 12px;
        transition: 0.12s;
        padding: 12px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.096);
        cursor: pointer;
    }

    .root:hover {
        background-color: rgba(255, 255, 255, 0.144);
    }

    img {
        width: 40px;
        height: 40px;
    }

    h3 {
        font-family: sans-serif;
        font-weight: 700;
        color: white;
        margin: 0;
        margin-top: 10px;
        margin-left: 12px;
    }
</style>