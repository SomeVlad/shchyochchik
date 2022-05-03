<script lang='ts'>
    import { Cell } from '@smui/layout-grid'
    import Block from './block.svelte'
    import { roles, spAmount } from '../stores'
</script>

<Block>
    <Cell span={12}>
        <hr />
        <h3>Результат</h3>
    </Cell>
    {#each $roles as name, index (index)}
        <Cell span={12}>
            {name}: <strong>{$spAmount[name]} SP</strong>
        </Cell>
    {/each}
</Block>

<style>
    label {
        display: inline-block;
    }
</style>
