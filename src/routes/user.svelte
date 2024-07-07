<script>
    import setting_icon from "../lib/settings.png"

    import { page } from "$app/stores"
    import { db, auth } from "../lib/firebase.js";
    import { ref, onValue, get } from "firebase/database";
    import { onMount } from "svelte";
    import { onAuthStateChanged } from "firebase/auth";
    import Request from "./request.svelte";

    export let username
    export let pfp

    let requests = []

    let local_user

    let dm_user

    onAuthStateChanged(auth, (user) => {
        if (user) {
            local_user = user.uid
        }
    })

    onMount(() => {
        setTimeout(() => {
            onValue(ref(db, "users/" + local_user + "/requests"), (snap) => {
                requests = []
                snap.forEach((req) => {
                    get(ref(db, "users/" + req.val().requestId)).then((snap) => {
                        requests = [...requests, snap.val()]
                    })
                })
            })
        }, 300)

        let params = new URLSearchParams(window.location.search)

        dm_user = params.get("user")
    })

</script>

<div class="sidePanel">
    {#each requests as req}
        {#if dm_user === req.username}
            <a href="/dm/?user={req.username}">
                <Request username={req.username} pfp={req.pfp} selected={true} />
            </a>
        {:else if dm_user !== req.username}
            <a href="/dm/?user={req.username}">
                <Request username={req.username} pfp={req.pfp} selected={false} />
            </a>
        {/if}
    {/each}
    <div class="root">
        <div class="userCred">
            <img class="pfp" src={pfp} alt="">
            <p>{username}</p>
        </div>
        <img class="icon" src={setting_icon} alt="">
    </div>
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
        background-color: rgba(255, 255, 255, 0.048);
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
        margin-top: 5px;
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

    .sidePanel {
        left: 0;
        bottom: 0;
        top: 0;
        position: fixed;
        overflow-y: scroll;
        width: 200px;
        border-right-style: solid;
        border-right-color: rgba(255, 255, 255, 0);
        background-color: rgb(14, 14, 14);
        border-right-width: 1px;
    }

    .sidePanel::-webkit-scrollbar {
        display: none;
    }

    .userCred { 
        display: flex;
        width: 126px;
        overflow: hidden;
    }

    .userCred::-webkit-scrollbar {
        display: none;
    }

    a {
        text-decoration: none;
    }
</style>