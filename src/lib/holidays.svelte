<script lang='ts'>
    import Textfield from '@smui/textfield'
    import { holidays } from '../stores'
    import { Cell } from '@smui/layout-grid'
    import Block from './block.svelte'
</script>

<Block>
    <Cell span={12}>
        <h3>🎅 Праздники</h3>
    </Cell>
    <Cell span={12}>
        <Textfield
            bind:value={$holidays}
            variant='filled'
            type='number'
        />
    </Cell>
</Block>

<style>
    label {
        display: inline-block;
    }
</style>
