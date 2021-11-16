<script>
	import { username, db } from '../routes/user.js';

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

<div>
	<h4>Hello {$username}!</h4>
	<p>This is Inbox's HTML</p>
	<textarea bind:value={textContents} id="paste" placeholder="testing..." />
    <p>{textContents}</p>
	<button on:click={update}>Submit</button>
</div>

<style>
	h4 {
		color: white;
	}

	p {
		color: white;
	}
	textarea {
		height: 100px;
		width: 500px;
	}
</style>
