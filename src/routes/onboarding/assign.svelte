<script>
    import { onMount } from "svelte";
    import logo from "../../lib/Flare_Logo.png"

    import { auth, db } from "../../lib/firebase.js";
    import { onAuthStateChanged, updateProfile } from "firebase/auth";

    import { update, ref } from "firebase/database";

    let username

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (user.displayName) {
                window.location.href = "/"
            }
        })
    })

    function assignUsername () {
        if (username) {
            updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/flare-cccd9.appspot.com/o/Flare_Logo_Pfp.png?alt=media&token=4a59f447-fece-4810-ba56-8e99792a3ab9"
            }).then(() => {
                update(ref(db, "users/" + auth.currentUser.uid), {
                    username: username,
                    pfp: "https://firebasestorage.googleapis.com/v0/b/flare-cccd9.appspot.com/o/Flare_Logo_Pfp.png?alt=media&token=4a59f447-fece-4810-ba56-8e99792a3ab9"
                }).then(() => {
                    window.location.href = "/"
                })
            }).catch(console.error)
        }
    }

</script>

<div class="root">

    <img class="logo" src={logo} alt="">
    <h1>Welcome To Flare!</h1>
    <p>What should we call you?</p>

    <div class="info">
        <input type="text" placeholder="Enter a username" bind:value={username}>
        <button on:click={assignUsername}>Submit</button>
    </div>

</div>

<style>

    .info {
        display: flex;
    }

    .root {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 330px;
        margin-top: 20vh;
        filter: drop-shadow(12px 5px 80px rgba(255, 78, 55, 0.616));
    }

    h1 {
        font-family: sans-serif;
        font-weight: 800;
        background-image: linear-gradient(140deg, rgb(255, 77, 55), rgb(253, 134, 61));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
    }

    .logo {
        display: block;
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
    }

    p {
        font-family: sans-serif;
        font-weight: 800;
        color: rgb(214, 214, 214);
        margin-bottom: 40px;
    }

    input {
        display: block;
        margin-top: 20px;
        padding: 12px;
        padding-left: 15px;
        outline: none;
        color: white;
        background-color: rgb(15, 15, 15);
        border-style: none;
        border-radius: 20px;
        font-weight: 700;
        transition: 0.05s;
        width: 80%;
    }

    button {
        margin-top: 20px;
        width: 40%;
        padding: 12px;
        cursor: pointer;
        font-weight: 800;
        border-radius: 20px;
        border-style: none;
        color: white;
        background-image: linear-gradient(140deg, rgb(255, 77, 55), rgb(253, 134, 61));
        transition: 0.12s;
        margin-left: 12px;
    }

    button:hover {
        scale: 105%;
    }

    button:active {
        scale: 95%;
    }

</style>