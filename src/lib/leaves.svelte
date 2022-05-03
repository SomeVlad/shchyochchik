<script lang='ts'>
    import { Cell } from '@smui/layout-grid'
    import Block from './block.svelte'
    import { roles, leaves } from '../stores'
    import Textfield from '@smui/textfield'
</script>

<Block>
    <Cell span={12}>
        <h3>Отпуска и больничные</h3>
        <p>Не учитывая отгулы за дежурство</p>
    </Cell>
    {#each $roles as name, index (index)}
        <Cell span={3}>
            <Textfield
                bind:value={$leaves[name]}
                variant='outlined'
                label={name}
                type='number'
            />
        </Cell>
    {/each}
</Block>

<style>
    label {
        display: inline-block;
    }
</style>
