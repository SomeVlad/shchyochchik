<script lang='ts'>
    import { Cell } from '@smui/layout-grid'
    import Select, { Option } from '@smui/select'
    import Block from './block.svelte'
    import { duty, roles } from '../stores'
</script>

<Block>
    <Cell span={12}>
        <h3>👮‍♀️ Дежурства</h3>
    </Cell>
    <Cell span={12}>
        <span>На второй неделе <em>минувшего</em> спринта</span>
        <Select
            variant='filled'
            bind:value={$duty.lastWeekDutyRole}
            label='Дежурный'
        >
            <Option value='' />
            {#each $roles as name, index (name)}
                <Option value={name}>{name}</Option>
            {/each}
        </Select>
    </Cell>


    <Cell span={12}>
        <span>На первой неделе <em>нового</em> спринта</span>
        <Select
            variant='filled'
            bind:value={$duty.sprintFirstWeekDutyRole}
            label='Дежурный'
        >
            <Option value='' />
            {#each $roles as name, index (name)}
                <Option value={name}>{name}</Option>
            {/each}
        </Select>
    </Cell>

    <Cell span={12}>
        <span>На второй неделе <em>нового</em> спринта</span>
        <Select
            variant='filled'
            bind:value={$duty.sprintSecondWeekDutyRole}
            label='Дежурный'
        >
            <Option value='' />
            {#each $roles as name, index (name)}
                <Option value={name}>{name}</Option>
            {/each}
        </Select>
    </Cell>
</Block>

<style>
    span {
        display: block;
        margin-bottom: 1em;
    }
</style>
