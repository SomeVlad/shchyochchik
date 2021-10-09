<script lang='ts'>
    import Textfield from '@smui/textfield';

    import { settings, amounts, roles, holidays, spAmount } from '../stores'

    function handleAmountChange({ detail }) {
        const { amount, name } = detail
        $amounts[name] = amount
    }
</script>

<section>
    <label>
        <Textfield
          bind:value={$holidays}
          variant="outlined"
          label="Праздники"
          type="number"
        />
    </label>
</section>

<style>
    label {
        display: inline-block;
    }
</style>
