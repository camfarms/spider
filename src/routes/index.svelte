<script>
    import Login from '../components/Login.svelte'
    import Chat from '../components/Chat.svelte'
    import "../app.css";

    import { username } from '../routes/user.js';


</script>

<svelte:head>
    <title>Spider Messenger</title>
</svelte:head>


<main>
{#if $username}
    <Chat/>
{:else}
    <Login />
{/if}
</main>

<style>
    main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
