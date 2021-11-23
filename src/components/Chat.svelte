<script>
	import { username, db, roomID } from '../routes/user.js';
	import Header from '../components/Header.svelte';
	import '../app.css';
        import {hash} from '../routes/crypto.js';
	import { onMount } from 'svelte';

        // get current room 
	let roomNum = $roomID
        // create a key unique to the room id 
        let key = hash(roomNum.toString()).toString();

        // array for temp storage of room's messages 
	let textContents = [];
        // current user's message 
	let newMessage = '';

        /**
         * get the user's message and put it in the database 
         */
	async function sendMessageToDB() {
                // time of new message 
		let time = new Date().getTime();

                // get the current room from db 
		db.get('messageBoard')
			.get(roomNum)
			.get(time)
                        // put the message in form user, encrypted message
			.put({ 
				sender: $username,
                                // encrypt 
				text: await SEA.encrypt(newMessage, key)
		});
                // clear new message 
		newMessage = '';
	}

        /** 
          * onMount runs when the page opens 
          */
	onMount(() => {
                // get the current room's "board" 
		db.get('messageBoard')
			.get(roomNum)
			.map()
                        // once opens the db when called and keeps it open
			.once(async function (message) {
                                // set variables to info from db 
				var sender = message.sender;
				var message = (
                                        await SEA.decrypt(
                                                message.text,
                                                key))
                                                + '';
                                // put the new data in temp array to be displayed 
				textContents = [...textContents, [sender, message]];
			});
	});
</script>

<title>Spider</title>
<main>
	<h1>{$username}'s CobWeb <br>
		Room ID: {roomNum}</h1>
	<Header />
	<div class="board">
		<table>
			<tr class="boardHead"><th colspan="2">Welcome to the chat</th></tr>
			{#if textContents != []}
				{#each textContents as message}
					{#if message[0] != $username}
						<tr>
							<td class="message"> {message[1]} </td>
						</tr>
						<tr>
							<td class="sender"><b>{message[0]}</b></td>
						</tr>
					{:else}
						<tr>
							<td class="me-message"> {message[1]} </td>
						</tr>
						<tr>
							<td class="me"><b>{message[0]}</b></td>
						</tr>
					{/if}
				{/each}
			{/if}
		</table>

		<div class="messageBox">
			<textarea id="textbox" cols="45" rows="3" bind:value={newMessage} placeholder="message..." />
			<br />
			<button id="button" on:click={sendMessageToDB}>Submit</button>
		</div>
	</div>

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
	td.message:hover {
		background-color: red;
	}
	td.me-message:hover {
		background-color: red;
	}
	main {
		background: darkgrey;
		display: flex;
		flex-direction: column;
		width: 90%;
		align-items: center;
		padding: 20px;
		box-shadow: 20px 25px black;
	}
	textarea {
		background-color: black;
		color: lightgreen;
		font-size: 150%;
		font-weight: bolder;
		border-radius: 6px;
		box-shadow: 2px 5px 5px darkgray;
	}
	.board {
		padding: 15px;
		width: 90%;
		background: lightgrey;
		box-shadow: 3px 5px 7px black;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	table {
		width: 95%;
		background: black;
		border: 4px solid black;
		padding: 10px;
		margin-bottom: 25px;
		border-radius: 10px;
		box-shadow: 3px 5px 5px darkgray;
	}
	th {
		padding: 15px;
	}
	button {
		color: white;
		margin: 5px;
		background-color: darkgreen;
		box-shadow: 2px 4px 4px black;
	}
	.message {
		text-align: left;
		background: lightblue;
		border-radius: 6px;
		padding: 6px;
	}
	.me-message {
		text-align: right;
		background: lightgreen;
		border-radius: 6px;
		padding: 6px;
	}
	.sender {
		color: lightblue;
	}
	.me {
		color: lightgreen;
		text-align: right;
	}
	.boardHead {
		color: lightgray;
	}
	.messageBox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	::placeholder {
	        color: lightgray;
	}
</style>
