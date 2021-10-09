<script lang="ts">
    import Settings from './lib/settings/index.svelte'
    import Duty from './lib/duty.svelte'
    import Leaves from './lib/leaves.svelte'
    import Amount from './lib/amount.svelte'
    import Holidays from './lib/holidays.svelte'
    import Result from './lib/result.svelte'


    import LayoutGrid, { Cell } from '@smui/layout-grid';

</script>

<LayoutGrid>
    <Cell span={12}>
        <h1>Щё</h1>
    </Cell>

    <Cell span={6}>
        <Amount />

        <Duty />

        <Leaves />

        <Holidays />
    </Cell>

    <Cell span={6}>
        <Settings />
    </Cell>
</LayoutGrid>

<hr />

<Result />

<style lang="scss">
    //@use '@material/typography/mdc-typography';
    @use '@material/typography/index' as typography;

    @import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text=Щё);

    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        margin: 0 auto;
    }

    h1 {
        @include typography.typography('headline3');
        font-family: 'Pacifico', cursive, sans-serif;
    }
</style>
