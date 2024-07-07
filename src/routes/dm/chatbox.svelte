<script>
    import { onMount } from "svelte";

    let dm_user

    onMount(() => {
        let params = new URLSearchParams(window.location.search)

        dm_user = params.get("user")
    })
</script>

<div class="wrapper">
    <textarea placeholder="Message {dm_user}"></textarea>
</div>

<style>
    .wrapper {
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        padding: 12px;
        padding-bottom: 20px;
        padding-left: 180px;
        background-image: linear-gradient(transparent, black);
    }

    textarea {
        height: 20px;
        font-family: sans-serif;
        font-weight: 700;
        padding: 16px;
        border-style: none;
        width: 100%;
        background-color: rgb(31, 30, 30);
        color: white;
        border-radius: 20px;
        resize: none;
        outline: none;
        padding-left: 20px;
        line-height: 20px;
        margin-left: 100px;
        margin-right: 100px;
    }

    /* textarea::-webkit-scrollbar {
        display: none;
    } */
</style>