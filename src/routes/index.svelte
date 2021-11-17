<script>
    import Header from '../components/Header.svelte'
    import Login from '../components/Login.svelte'
    import Inbox from '../components/Inbox.svelte'
    import "../app.css";

    import { username } from '../routes/user.js';


</script>

<svelte:head>
    <title>Spider Messenger</title>
</svelte:head>


<main>
{#if $username}
    <Inbox/>
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
