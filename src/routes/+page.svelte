<script>
    import User from "./user.svelte";

    import { onMount } from "svelte";
    import { auth, db } from "../lib/firebase.js"
    import { onAuthStateChanged } from "firebase/auth";

    let username
    let pfp


    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                username = user.displayName
                pfp = user.photoURL

                if (username == null) {
                    window.location.href = "/onboarding"
                }
            } else {
                window.location.href = "/auth"
            }
        })
    })
</script>

<div class="root">
    <div class="sidePanel">
        <User username={username} pfp={pfp} />
    </div>

</div>

<style>
    .sidePanel {
        left: 0;
        bottom: 0;
        top: 0;
        position: fixed;
        overflow-y: scroll;
        width: 200px;
        border-right-style: solid;
        border-right-color: rgba(255, 255, 255, 0.171);
        border-right-width: 1px;
    }

    .sidePanel::-webkit-scrollbar {
        display: none;
    }
</style>