import {differenceInMinutes, formatDate} from "date-fns"

export function initialName(name: string) {
    return name.substring(0, 2)
}

export const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeStyle: "short"
})

export function formatDistanceFromNow(dateTime: Date): string {
    const diff = differenceInMinutes(new Date(), dateTime)
    const OneHourPerMinutes = 60
    const OneDayPerMinutes = 24 * OneHourPerMinutes
    const OneWeekPerMinutes = 7 * OneDayPerMinutes
    if (diff < 1) return "たった今"
    if (diff < OneHourPerMinutes) return `${diff}分前`
    if (diff < OneDayPerMinutes) return `${Math.floor(diff / OneHourPerMinutes)}時間前`
    if (diff < OneWeekPerMinutes * 2) return `${Math.floor(diff / (OneDayPerMinutes))}日前`
    return formatDate(dateTime, "yyyy年M月d日")
}