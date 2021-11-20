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
    <h1>Which room?</h1>
    <input name="room" bind:value={room} id="textbox" placeholder="which room?"/>
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
	main {
		background: darkgrey;
		display: flex;
		flex-direction: column;
		width: 40%;
		align-items: center;
		padding: 20px;
		box-shadow: 20px 25px black;
	}
	button {
		color: darkgray;
		margin: 20px;
		background-color: darkgreen;
		box-shadow: 2px 4px 4px black;
	}
	input {
	       background-color: black;
	       color: lightgreen;
	}
	::placeholder {
	        color: lightgray;
	}
</style>
