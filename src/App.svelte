<script lang="ts">
    import Function from './lib/function.svelte'
    import Settings from './lib/settings/index.svelte'
    import Duty from './lib/duty.svelte'
    import Leaves from './lib/leaves.svelte'
    import { settings, amounts, roles, holidays, spAmount } from './stores'

    function handleAmountChange({ detail }) {
        const { amount, name } = detail
        $amounts[name] = amount
    }
</script>

<main>
    <h1>Щё</h1>

    <Settings />

    {#each $roles as name, index (index)}
        <Function
            name={name}
            amount={$amounts[name]}
            on:amountChange={handleAmountChange}
        />
    {/each}

    <Duty />

    <Leaves />

    <label>
        Сколько будет праздников?
        <input type='number' min=0 bind:value={$holidays} />
    </label>

    <hr />

    {#each $roles as name, index (index)}
        <strong>{$spAmount[name]}</strong> {name} <br />
    {/each}

</main>

<style>
    @import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text=Щё);

    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        margin: 0 auto;
    }

    h1 {
        font-family: 'Pacifico', cursive, sans-serif;
    }
</style>
