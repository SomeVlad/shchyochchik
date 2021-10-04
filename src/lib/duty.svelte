<script lang='ts'>
    import { duty, roles } from '../stores'
</script>

<section>
    <label>
        Дежурный на второй неделе минувшего спринта
        <select bind:value={$duty.lastWeekDutyRole}>
            <option value={null}>Никто</option>
            {#each $roles as name, index (name)}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </label>

    <label>
        Дежурный на первой неделе нового спринта
        <select bind:value={$duty.sprintFirstWeekDutyRole}>
            <option value={null}>Никто</option>
            {#each $roles as name, index (name)}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </label>

    <label>
        Дежурный на первой неделе нового спринта
        <select bind:value={$duty.sprintSecondWeekDutyRole}>
            <option value={null}>Никто</option>
            {#each $roles as name, index (name)}
                <option value={name}>{name}</option>
            {/each}
        </select>
    </label>
</section>

<style>
    label {
        display: inline-block;
    }
</style>
