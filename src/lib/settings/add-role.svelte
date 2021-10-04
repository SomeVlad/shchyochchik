<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    let name = ''
    let amount = 0

    const dispatch = createEventDispatcher()

    function handleClick() {
        dispatch('add', {
            name,
            amount,
        })

        name = ''
        amount = 0
    }
</script>

<div>
    <label>
        Функция
        <input type="text" bind:value={name} />
    </label>
    <label>
        SP на спринт
        <input type="number" min="1" bind:value={amount} />
    </label>
    <button on:click={handleClick}>Добавить</button>
</div>
