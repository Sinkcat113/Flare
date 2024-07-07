<script>

    import { db, auth } from "../lib/firebase.js"
    import { onAuthStateChanged } from "firebase/auth";
    import { push, onValue, ref, get } from "firebase/database";
    import { onMount } from "svelte";
    import Outgoing from "./outgoing.svelte";

    let local_user
    let local_username

    let outgoing_req = []


    onAuthStateChanged(auth, (user) => {
        if (user) {
            local_user = user.uid
            local_username = user.displayName
        }
    })


    onMount(() => {
        setTimeout(() => {
            onValue(ref(db, "users/" + local_user + "/outgoing"), (snap) => {
                outgoing_req = []
                snap.forEach((req) => {
                    get(ref(db, "users/" + req.val().outgoingId)).then((snap) => {
                        outgoing_req = [...outgoing_req, snap.val()]
                    })
                })
            })
        }, 1000)
    }) 

    let fr_username = ""

    function addFriend() {
        if (fr_username !== "" && fr_username !== local_username) {
            get(ref(db, "users")).then((snap) => {
                snap.forEach((db_user) => {

                    let uname = db_user.val().username

                    if (uname === fr_username) {
                        push(ref(db, "users/" + db_user.key + "/requests"), {
                            requestId: local_user
                        })

                        push(ref(db, "users/" + local_user + "/outgoing"), {
                            outgoingId: db_user.key
                        }).then(() => {
                            fr_username = ""
                        })
                    }
                })
            })
        }
    }

</script>

<div class="root">
    <div class="glow">
        <h1>Add some friends!</h1>
    
        <div class="inputs">
            <input type="text" placeholder="Friend's Username" bind:value={fr_username}>
            <button on:click={addFriend}>Send</button>
        </div>
    </div>


    <div class="outgoing">
        <p>Pending requests</p>
        <hr>
        {#each outgoing_req as req}
            <Outgoing username={req.username} pfp={req.pfp} />   
        {/each}
    </div>
</div>

<style>

    .root {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 400px;
        margin-top: 20vh;
        padding-left: 14vw;

    }

    .glow {
        filter: drop-shadow(12px -90px 80px rgba(255, 78, 55, 0.616));
    }

    .outgoing {
        margin-top: 70px;
    }

    .inputs {
        display: flex;
    }

    h1 {
        font-family: sans-serif;
        font-weight: 800;
        background-image: linear-gradient(140deg, rgb(255, 77, 55), rgb(253, 134, 61));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
    }

    p {
        font-family: sans-serif;
        color: rgb(216, 216, 216);
        font-size: 12px;
        margin: 0;
    }

    hr {
        border: none;
        height: 1px;
        color: white;
        background-color: rgba(255, 255, 255, 0.295);
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
        width: 100%;
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