<script lang='ts'>
    import LayoutGrid, { Cell } from '@smui/layout-grid'
    import Settings from './lib/settings/index.svelte'
    import Duty from './lib/duty.svelte'
    import Leaves from './lib/leaves.svelte'
    import Amount from './lib/amount.svelte'
    import Holidays from './lib/holidays.svelte'
    import Result from './lib/result.svelte'
</script>

<main>
    <LayoutGrid>
        <Cell span={12}>
            <h1>Щёччик</h1>
        </Cell>

        <Cell span={4}>
            <Amount />
            <Holidays />
            <Leaves />
        </Cell>
        <Cell span={4}>
            <Duty />
        </Cell>
        <Cell span={4}>
            <Settings />
        </Cell>
        <Cell span={12}>
            <Result />
        </Cell>
    </LayoutGrid>
</main>

<style lang='scss'>
  @use '@material/typography/index' as typography;

  @import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text=Щёчик);

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    max-width: 1200px;
    min-width: 340px;
    margin: 0 auto;
  }

  h1 {
    @include typography.typography('headline3');
    font-family: 'Pacifico', cursive, sans-serif;
    margin: 0;
  }

  :global(body, h1, h2, h3, h4, h5, h6) {
    margin: 0;
  }
</style>
