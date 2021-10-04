import { derived, writable, get } from 'svelte/store'
import { localStore } from "../util/localStore";

export type Role = { name: string; sprintCapacity: number }
export type Amounts = Record<string, number>
export type Leaves = Record<string, number>
export type Duties = Record<
    'lastWeekDutyRole' | 'sprintFirstWeekDutyRole' | 'sprintSecondWeekDutyRole',
    string | null
>

export const settings = localStore('settings', [
    { name: 'BE', sprintCapacity: 15 },
    { name: 'FE', sprintCapacity: 15 },
])

// !!!
export const roles = derived(settings, ($settings) => {
    return $settings.map((setting) => setting.name)
})

export const amounts = writable<Amounts>({
    BE: 2,
    FE: 2,
})

// update amounts when roles update
roles.subscribe((rolesList) => {
    let result = {}
    const $amounts = get(amounts)
    rolesList.forEach((name) => {
        result[name] = $amounts[name] || 2
    })

    amounts.set(result)
})

export const duty = writable<Duties>({
    lastWeekDutyRole: null,
    sprintFirstWeekDutyRole: null,
    sprintSecondWeekDutyRole: null,
})

// update duty when roles update
roles.subscribe((rolesList) => {
    duty.update((currentValue) => {
        const {
            lastWeekDutyRole,
            sprintFirstWeekDutyRole,
            sprintSecondWeekDutyRole,
        } = currentValue

        return {
            lastWeekDutyRole: rolesList.includes(lastWeekDutyRole)
                ? lastWeekDutyRole
                : null,
            sprintFirstWeekDutyRole: rolesList.includes(sprintFirstWeekDutyRole)
                ? sprintFirstWeekDutyRole
                : null,
            sprintSecondWeekDutyRole: rolesList.includes(
                sprintSecondWeekDutyRole
            )
                ? sprintSecondWeekDutyRole
                : null,
        }
    })
})

export const leaves = writable<Leaves>({
    BE: 0,
    FE: 0,
})

roles.subscribe((rolesList) => {
    let result = {}
    const $leaves = get(leaves)
    rolesList.forEach((name) => {
        result[name] = $leaves[name] || 0
    })

    leaves.set(result)
})

export const holidays = writable(0)

export const spAmount = derived(
    [roles, settings, amounts, duty, leaves, holidays],
    ([$roles, $settings, $amounts, $duty, $leaves, $holidays]) => {
        let result = {}
        $roles.forEach((role) => {
            const { sprintCapacity } = $settings.find(
                (elem) => elem.name === role
            )
            const dailyCapacity = sprintCapacity / 10
            let workDaysAmount = (10 - $holidays) * $amounts[role]

            if ($duty.lastWeekDutyRole === role) {
                workDaysAmount--
            }

            if ($duty.sprintFirstWeekDutyRole === role) {
                workDaysAmount -= 5
                workDaysAmount--
            }

            if ($duty.sprintSecondWeekDutyRole === role) {
                workDaysAmount -= 5
            }

            workDaysAmount -= $leaves[role]

            result[role] = Math.max(
                Math.floor(dailyCapacity * workDaysAmount),
                0
            )
        })
        return result
    }
)
