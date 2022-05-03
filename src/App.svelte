<script lang='ts'>
    import LayoutGrid, { Cell } from '@smui/layout-grid'
    import Settings from './lib/settings/index.svelte'
    import Duty from './lib/duty.svelte'
    import Leaves from './lib/leaves.svelte'
    import Amount from './lib/amount.svelte'
    import Holidays from './lib/holidays.svelte'
    import Result from './lib/result.svelte'
</script>

<LayoutGrid>
    <Cell span={12}>
        <h1>Щёччик <sup>2.0</sup></h1>
    </Cell>

    <Cell span={6}>
        <Amount />

        <Duty />

        <Leaves />

        <Holidays />
    </Cell>

    <Cell span={6}>
        <Settings />

        <Result />
    </Cell>
</LayoutGrid>

<style lang='scss'>
  @use '@material/typography/index' as typography;

  @import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text=Щёчик2.0);

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
    margin: 0;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
  }
</style>
