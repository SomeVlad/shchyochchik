<script lang='ts'>
    import { createEventDispatcher } from 'svelte'

    export let name
    export let amount

    const dispatch = createEventDispatcher()

    function handleChange() {
        dispatch('amountChange', {
            name,
            amount,
        })
    }
</script>

<section>
    <label>
        {`Сколько будет ${name}-разработчиков`}
        <input
            type='number'
            min='0'
            bind:value={amount}
            on:change={handleChange}
        />
    </label>
</section>
