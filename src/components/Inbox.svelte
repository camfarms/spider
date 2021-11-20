<script>
    import { roomNum, userState } from '../routes/user.js';

    function updateState(){
        userState.set('chatting')
    }
</script>

<main>
    <button on:click={updateState}><b>Submit</b></button>
</main>