<script>
    import setting_icon from "../lib/settings.png"

    export let username
    export let pfp
</script>

<div class="root">
    <img class="pfp" src={pfp} alt="">
    <p>{username}</p>
    <img class="icon" src={setting_icon} alt="">
</div>

<style>
    .root {
        bottom: 0;
        position: fixed;
        display: flex;
        padding: 12px;
        padding-left: 10px;
        padding-right: 20px;
        transition: 0.12s;
        background-color: rgba(255, 255, 255, 0.055);
    }

    .pfp {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        background-color: rgba(255, 255, 255, 0.103);
    }

    p {
        color: white;
        font-family: sans-serif;
        font-weight: 800;
        margin: 0;
        margin-top: 8px;
        margin-left: 8px;
        margin-right: 12px;
        cursor: pointer;
    }

    p:hover {
        text-decoration: underline;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-top: 6px;
        margin-left: 15px;
        filter: invert(1);
        opacity: 60%;
        transition: 0.12s;
        padding: 5px;
        cursor: pointer;
    }

    .icon:hover {
        opacity: 100%;
        background-color: rgba(73, 73, 73, 0.322);
        border-radius: 100px;
    }
</style>