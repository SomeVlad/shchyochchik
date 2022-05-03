<script lang='ts'>
    import { Cell, InnerGrid } from '@smui/layout-grid'
    import { roles, spAmount } from '../stores'
</script>

<hr />
<InnerGrid>
    <Cell span={12}>
        <h2>🎛 Результат</h2>
    </Cell>
    {#each $roles as name, index (index)}
        <Cell span={12}>
            {name}: <strong>{$spAmount[name]} SP</strong>
        </Cell>
    {/each}
</InnerGrid>

<style>
    hr {
        margin-bottom: 30px;
    }
</style>
