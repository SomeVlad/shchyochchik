<script lang='ts'>
    import { InnerGrid } from '@smui/layout-grid'
</script>

<div>
    <InnerGrid>
        <slot />
    </InnerGrid>
</div>

<style>
    div {
        margin-top: 40px;
    }
</style>
