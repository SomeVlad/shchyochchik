<script lang='ts'>
    import Function from './function.svelte'
    import { duty, roles } from '../stores'

    import { settings, amounts, roles, holidays, spAmount } from '../stores'

    function handleAmountChange({ detail }) {
        const { amount, name } = detail
        $amounts[name] = amount
    }
</script>

<section>
    {#each $roles as name, index (index)}
        <Function
          name={name}
          amount={$amounts[name]}
          on:amountChange={handleAmountChange}
        />
    {/each}
</section>

<style>
    label {
        display: inline-block;
    }
</style>
