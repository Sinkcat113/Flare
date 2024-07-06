<script>
    import logo from "../../lib/Flare_Logo.png"
    
    import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
    import { auth, db } from "../../lib/firebase.js"
    import { update, ref } from "firebase/database";

    let email
    let password

    function signUp() {
        if (email !== null && password !== null) {
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                console.log("User: " + userCredential.user.email + " has successfully signed up!")

                update(ref(db, "users/" + userCredential.user.uid), {
                    username: "user" + userCredential.user.uid
                }).then(() => {
                    window.location.href = "/"
                })
                
            }).catch(console.error)
        }
    }
</script>

<div class="root">
    <img class="logo" src={logo} alt="">
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button on:click={signUp}>Sign Up</button>
    
    <a href="/auth/login">Login &#8594;</a>
</div>

<style>
    .root {
        margin-left: auto;
        margin-right: auto;
        padding: 12px;
        padding-top: 80px;
        padding-bottom: 80px;
        margin-top: 15vh;
        width: 203px;
        filter: drop-shadow(12px 5px 80px rgba(255, 78, 55, 0.616));
    }

    input {
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 12px;
        padding: 12px;
        padding-left: 15px;
        outline: none;
        color: white;
        background-color: rgb(10, 10, 10);
        border-style: none;
        border-radius: 20px;
        font-weight: 700;
        transition: 0.05s;
    }

    input:hover {
        background-color: rgba(0, 0, 0, 0.822);
        box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.425);
    }

    input:focus {
        background-color: rgba(0, 0, 0, 0.822);
        box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.425);
    }

    .logo {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 40px;
        height: 40px;
        margin-bottom: 40px;
    }

    button {
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 20px;
        width: 100%;
        padding: 12px;
        cursor: pointer;
        font-weight: 800;
        border-radius: 20px;
        border-style: none;
        color: white;
        background-image: linear-gradient(140deg, rgb(255, 77, 55), rgb(253, 134, 61));
        transition: 0.12s;
    }

    button:hover {
        scale: 105%;
    }

    button:active {
        scale: 95%;
    }

    a {
        margin-left: auto;
        margin-right: auto;
        display: block;
        text-align: center;
        margin-top: 20px;
        font-family: sans-serif;
        text-underline-offset: 5px;
        font-weight: 600;
        background-image: linear-gradient(rgb(255, 77, 55), rgb(253, 134, 61));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 0.12s;
        padding: 12px;
        border-radius: 20px;
        text-decoration: none;
    }

    a:hover {
        background-color: black;
        scale: 105%;
    }

    a:active {
        scale: 95%;
    }
</style>