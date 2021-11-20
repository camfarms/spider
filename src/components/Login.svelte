<script>
	import { loginSecure, registerSecure } from '../routes/login.js';

	let username;
	let password;
</script>

<dev class="content">
	<h1>Spider Messenger</h1>
	<h2>Spin your own web</h2>

	<label for="username">Username</label>
	<input name="username" bind:value={username} minlength="3" maxlength="16" />
	<br />

	<label for="password">Password</label>
	<input name="password" bind:value={password} type="password" />

	<br />
	<dev class="logreg">
		<button on:click={() => loginSecure(username, password)}><b>Login</b></button>
		<button on:click={() => registerSecure(username, password)}><b>Register</b></button>
	</dev>
</dev>

<style>
	button {
		color: lightgray;
		background-color: darkblue;
		width: 15%;
		box-shadow: 2px 2px black;
	}
	.content {
		margin-top: 125px;
		width: 90%;
		background: #b9b9b9;
		padding: 25px;
		box-shadow: 15px 20px black;
		display: flex;
		flex-direction: column;
	}
	.logreg {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input {
		margin: 10px;
		background-color: lightgray;
	}
</style>
