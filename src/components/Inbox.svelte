<script>
	import { username, db } from '../routes/user.js';
    import Header from '../components/Header.svelte'
  import "../app.css";

	let textContents;
	textContents = "hello";

	function update() {
        const index = 99;
		db.get('key').get(index).put({ people: {
            me: {
                name: "Cam",
                age: 23
            },
            you: {
                name: "Cade",
                age: 21
            },
            roommate1: {
                name: "Jett",
                age: 21
            }
        }});

		db.get('key').get(index).get('people').get('you').get('name').once((e) => {
			textContents=e;
		}); 
	}
</script>

<title>Spider</title> 
<main> 
  <h1> {$username}'s CobWeb </h1>
  <Header />
  <div class = "board"> 
    <table>
      <tr class="boardHead"><th colspan="2">welcome to the chat</th></tr>
      <tr><td class="message">hello it's cade</td></tr>
      <tr class = "sender"><td><b>&#62; cade</b></td></tr>
      <tr><td class="me-message">hello it's me (cam)</td></tr>
      <tr><td class="me"><b>cam &#60;</b></td></tr>
    </table>

    <div class="messageBox">
      <textarea cols="50" rows="5" bind:value={textContents} id="paste" placeholder="testing..."/>
      <br>
      <button on:click={update}>Submit</button>
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
    background-color: #1a1a1a;
    color: lightgreen;
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
