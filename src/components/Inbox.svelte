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
    <p>Enter your desired chat room's ID</p>
    <input name="room" bind:value={room} id="textbox"/>
    <button on:click={updateState} type="Submit" id="button"><b>Submit</b></button>

    <script>
        var button = document.getElementById("button");
        var textBox = document.getElementById("textbox");
 
        textBox.addEventListener("keydown", function (event) {
 
            // Checking if key pressed is ENTER or not
            // if the key pressed is ENTER
            // click listener on button is called
            if (event.keyCode == 13) {
                button.click();
            }
        });
    </script>
</main>

<style>
    p {
        color: white;
    }
</style>