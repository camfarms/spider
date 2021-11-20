<script>
	import { username, db, roomID } from '../routes/user.js';
	import Header from '../components/Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let roomNum = $roomID //default

	let textContents = [];
	let newMessage = '';

	async function sendMessageToDB() {
		let time = new Date().getTime();
		db.get('messageBoard')
			.get(roomNum)
			.get(time)
			.put({
				sender: $username,
				text: await SEA.encrypt(newMessage, '#key')
			});
		newMessage = '';
	}

	onMount(() => {
		db.get('messageBoard')
			.get(roomNum)
			.map()
			.once(async function (message) {
				var sender = message.sender;
				var message = (await SEA.decrypt(message.text, '#key')) + '';
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
			<tr class="boardHead"><th colspan="2">welcome to the chat</th></tr>
			{#if textContents != []}
				{#each textContents as message}
					{#if message[0] != $username}
						<tr>
							<td class="message">
								{message[1]}<br />
							</td>
						</tr>
						<tr class="sender">
							<td>
								<b>
									{message[0]}<br />
								</b>
							</td>
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
			<textarea cols="30" rows="3" bind:value={newMessage} id="paste" placeholder="message..." />
			<br />
			<button on:click={sendMessageToDB}>Submit</button>
			<!--<button on:click={refresh}>Refresh</button>-->
		</div>
	</div>
</main>

<style>
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
</style>
