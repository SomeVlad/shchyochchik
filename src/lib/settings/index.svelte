<script lang='ts'>
    import { Cell } from '@smui/layout-grid'
    import Textfield from '@smui/textfield'
    import IconButton from '@smui/icon-button'
    import Block from '../block.svelte'
    import { settings, amounts } from '../../stores'
    import AddRole from './add-role.svelte'

    function addToList({ detail }) {
        const { name, amount } = detail
        if (name === '' || $amounts[name]) return
        const role = { name, sprintCapacity: amount }
        // @ts-ignore
        $settings = [...$settings, role]
    }

    function removeFromList(index) {
        $settings.splice(index, 1)
        $settings = $settings
    }
</script>

<Block>
    <Cell span={12}>
        <h3>⚙️ ️Настройка</h3>
    </Cell>
    {#each $settings as { name, sprintCapacity }, index}
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
                        bind:value={sprintCapacity}
                        variant='outlined'
                        label='SP на рабочего'
                        type='number'
                        min='1'
                    />
                </div>
                <IconButton
                    class='material-symbols-outlined'
                    on:click={() => removeFromList(index)}>
                    delete
                </IconButton>
            </div>
        </Cell>
    {/each}
    <AddRole on:add={addToList} />
</Block>

<style>
    .wrapper {
        display: flex;
        align-items: center;
    }

    .text-field {
        margin-right: 8px;
    }
</style>
