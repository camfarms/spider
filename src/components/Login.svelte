<script>
	import { loginSecure, registerSecure } from '../routes/login.js';

	let username;
	let password;
</script>

<dev class="content">
	<h1>Spider Messenger</h1>
	<h2>Spin your own web</h2>
        <dev class = "logForms">
	<label for="username">Username</label>
	<input name="username" bind:value={username} minlength="3" maxlength="16" placeholder="user..." />
	<br />

	<label for="password">Password</label>
	<input name="password" bind:value={password} type="password" id="textbox" placeholder="passwd..." />
        </dev>
	<br />
	<dev class="logreg">
		<button id="button" on:click={() => loginSecure(username, password)}><b>Login</b></button>
		<button on:click={() => registerSecure(username, password)}><b>Register</b></button>
	</dev>

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
</dev>

<style>
        ::placeholder {
                color: darkgray;
        }
        h2,h1 {
		display: flex;
		flex-direction: column;
                align-self: center;
        }
        .logForms {
                width: 45%;
		display: flex;
		flex-direction: column;
                align-self: center;
        }
	button {
		color: lightgreen;
		background-color: darkblue;
		width: 25%;
		box-shadow: 2px 2px black;
	}
	.content {
		margin-top: 125px;
		width: 50%;
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
		background-color: black;
                color: lightgreen;
	}
</style>
