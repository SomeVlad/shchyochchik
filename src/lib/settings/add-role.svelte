<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { Cell } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    import IconButton from '@smui/icon-button'

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

<Cell span={12}>
    <div class='wrapper'>
        <div class='text-field'>
            <Textfield
                bind:value={name}
                variant='outlined'
                label='Функция'
                type='text'
            />
        </div>
        <div class='text-field'>
            <Textfield
                bind:value={amount}
                variant='outlined'
                label='SP на спринт'
                type='number'
                min='1'
            />
        </div>
        <IconButton
            class='material-symbols-outlined'
            on:click={handleClick}>
            add
        </IconButton>
    </div>
</Cell>

<style>
    .wrapper {
        display: flex;
        align-items: center;
    }

    .text-field {
        margin-right: 8px;
    }
</style>
