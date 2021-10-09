<script lang='ts'>
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { roles, spAmount } from '../stores'
</script>

<LayoutGrid>
{#each $roles as name, index (index)}
    <Cell span={12}>
        <strong>{$spAmount[name]}</strong> {name}
    </Cell>
{/each}
</LayoutGrid>

<style>
    label {
        display: inline-block;
    }
</style>
