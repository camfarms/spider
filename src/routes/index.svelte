<script>
    import Header from '../components/Header.svelte'
    import Login from '../components/Login.svelte'
    import Inbox from '../components/Inbox.svelte'

</script>

<svelte:head>
    <title>Spider Messenger</title>
</svelte:head>

<Header />

<main>
{#if true}
<Login/>
{:else if true}
<Inbox />
{/if}
</main>

<h1>Welcome to SvelteKit</h1>


<style>
    h1 {
        color: red;
    }
    main {
		background: darkblue;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>