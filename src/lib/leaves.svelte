<script lang='ts'>
    import { createEventDispatcher } from 'svelte'
    import { roles, leaves } from '../stores'

    const dispatch = createEventDispatcher()
    /*
        function handleChange() {
            dispatch('amountChange', {
                name,
                amount,
            })
        }*/
</script>

<section>
    {#each $roles as name, index (index)}
        <label>{name}-разработчики пропустят
            <input type='number' min='0' bind:value={$leaves[name]} />
        </label>
        человекодней
    {/each}
</section>

<style>
    label {
        display: inline-block;
    }
</style>
