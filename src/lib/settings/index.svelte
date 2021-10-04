<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { settings, amounts, Role } from '../../stores'
    import AddRole from './add-role.svelte'

    function addToList({ detail }) {
        const { name, amount } = detail
        if (name === '' || $amounts[name]) return
        $settings = [...$settings, { name, sprintCapacity: amount }]
    }

    function removeFromList(index) {
        $settings.splice(index, 1)
        $settings = $settings
    }
</script>

<section>
    <h3>Настройка</h3>
    <div>
        {#each $settings as { name, sprintCapacity }, index (name)}
            <div>
                <label>
                    Функция
                    <input type="text" bind:value={name} on:change={() => {}} />
                </label>
                <label>
                    SP на спринт
                    <input type="number" min="1" bind:value={sprintCapacity} />
                </label>
                <button on:click={() => removeFromList(index)}>❌</button>
            </div>
        {/each}
        <AddRole on:add={addToList} />
    </div>
</section>
