<script>
    import User from "./user.svelte";

    import { page } from "$app/stores"
    import { onMount } from "svelte";
    import { auth } from "../lib/firebase.js"
    import { onAuthStateChanged } from "firebase/auth";

    let username
    let pfp

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                username = user.displayName
                pfp = user.photoURL

                if (username === null && $page.url.pathname !== "/onboarding") {
                    window.location.href = "/onboarding"
                }
            } else if ($page.url.pathname === "/" && !user) {
                window.location.href = "/auth"
            }
        })
    })
</script>


<svelte:head>
    <title>Flare</title>
</svelte:head>

<main>
    <slot />
    {#if $page.url.pathname === "/"}
        <User username={username} pfp={pfp} />
    {:else if $page.url.pathname === "/dm"}
        <User username={username} pfp={pfp} />
    {/if}
</main>

<style>
    :global(body) {
        background-color: rgb(22, 22, 22);
    }
</style>