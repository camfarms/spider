<script>
    import { roomID, userState } from '../routes/user.js';

    let room; 

    function updateState(){
        if(room != null) {
            userState.set('chatting')
            roomID.set(room);
        }
    }
</script>

<main>
    <input name="room" bind:value={room} />
    <button on:click={updateState}><b>Submit</b></button>
</main>