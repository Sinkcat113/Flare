<script>
    import logo from "../../lib/Flare_Logo.png"
    
    import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
    import { auth } from "../../lib/firebase.js"

    signOut(auth)

    let email
    let password

    function signUp() {
        if (email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                window.location.href = "/"
            }).catch(console.error)
        }
    }
</script>

<div class="root">
    <img class="logo" src={logo} alt="">
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button on:click={signUp}>Log In</button>
    
    <a href="/auth">Sign Up &#8594;</a>
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