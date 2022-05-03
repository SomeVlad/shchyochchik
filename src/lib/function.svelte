<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import Textfield from '@smui/textfield'

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

<Textfield
    bind:value={amount}
    variant='outlined'
    label={name}
    type='number'
    on:change={handleChange}
/>
