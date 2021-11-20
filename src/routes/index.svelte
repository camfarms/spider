<script>
    import Login from '../components/Login.svelte'
    import Chat from '../components/Chat.svelte'
    import Inbox from '../components/Inbox.svelte'

    import "../app.css";

    import { userState } from '../routes/user.js';


</script>

<svelte:head>
    <title>Spider Messenger</title>
</svelte:head>


<main>
{#if $userState == 'loggedIn'} 
    <Chat/>
<!-- {:else if $userState == 'loggedIn'}
    <Inbox /> -->
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
