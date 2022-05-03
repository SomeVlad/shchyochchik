<script lang='ts'>
    import { Cell } from '@smui/layout-grid'
    import Block from './block.svelte'
    import Function from './function.svelte'

    import { amounts, roles } from '../stores'

    function handleAmountChange({ detail }) {
        const { amount, name } = detail
        $amounts[name] = amount
    }
</script>

<Block>
    <Cell span={12}>
        <h3>👨‍👩‍👧‍👦 Количество рабочих</h3>
    </Cell>
    {#each $roles as name, index (index)}
        <Cell span={3}>
            <Function
                name={name}
                amount={$amounts[name]}
                on:amountChange={handleAmountChange}
            />
        </Cell>
    {/each}
</Block>
