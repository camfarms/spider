<script>
    import { username, user } from '../routes/user.js';

    function signout(){
        user.leave();
        username.set('');
    }

</script>

<div class="svelteHeader">
    {#if $username}
        <div class='user-info'>
        </div>

        <button class="singout-button" on:click={signout}> 
            Sign Out 
        </button>

    {:else}
        <h3>Gun Chat Default Header!</h3>
    {/if}
 </div>
<style>
  .svelteHeader {
    padding-bottom: 30px;
  }
  button {
    color: white;
    background-color: darkblue;
    box-shadow: 2px 4px 4px black;
  }
  </style>
