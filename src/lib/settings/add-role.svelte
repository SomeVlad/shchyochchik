<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { Cell } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    import IconButton from '@smui/icon-button'
    import AddButton from '../../icons/add.svg.svelte'

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

    $: isValidAmount = Number.isSafeInteger(amount) && amount > 0
    $: isValidName = name.length > 0
    $: isAddingDisabled = !isValidAmount || !isValidName
</script>

<Cell span={12}>
    <div class='wrapper'>
        <div class='text-field'>
            <Textfield
                bind:value={name}
                variant='filled'
                label='Функция'
                type='text'
            />
        </div>
        <div class='text-field'>
            <Textfield
                bind:value={amount}
                variant='filled'
                label='SP на рабочего'
                type='number'
                min='1'
            />
        </div>
        <IconButton
            disabled={isAddingDisabled}
            on:click={handleClick}>
            <AddButton />
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
