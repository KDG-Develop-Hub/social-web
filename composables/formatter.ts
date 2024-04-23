import {DateTime} from "luxon"

export function initialName(name: string) {
    return name.substring(0, 2)
}

export const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeStyle: "short"
})

const durationUnits = ["minute", "hours", "days", "weeks", "months", "years"] as const

export function formatDateTime(dateTime: Date): string {
    const given = DateTime.fromJSDate(dateTime).setLocale("ja-JP")
    const diffBy = durationUnits.reduce((prev, value) => {
        prev[value] = Math.trunc(Math.abs(given.diffNow(value).get(value)))
        return prev
    }, {} as Record<(typeof durationUnits)[number], number>)
    if (diffBy.minute < 1) {
        return "たった今"
    }
    if (diffBy.hours <= 1) {
        return `${diffBy.minute}分前`
    }
    if (diffBy.days <= 2) {
        return `${diffBy.hours}時間前`
    }
    if (diffBy.weeks <= 2) {
        return `${diffBy.days}日前`
    }
    if (diffBy.months <= 2) {
        return `${diffBy.weeks}週間前`
    }
    if (diffBy.years < 1) {
        return `${diffBy.months}ヶ月前`
    }
    return given.toLocaleString({
        dateStyle: "long",
        timeStyle: "short"
    })
}