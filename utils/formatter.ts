export function initialName(name: string) {
  return name.substring(0, 2)
}

const dateTimeFormatter = new Intl.DateTimeFormat('ja-JP', {
  dateStyle: 'long',
  timeStyle: 'short'
})

export function formatDateTime(dateTime: string | number | Date): string {
  return dateTimeFormatter.format(new Date(dateTime))
}

export function formatDistanceFromNow(
  dateTime: string | number | Date
): string {
  const diff = dateFns.differenceInMinutes(new Date(), dateTime)
  const OneHourPerMinutes = 60
  const OneDayPerMinutes = 24 * OneHourPerMinutes
  const OneWeekPerMinutes = 7 * OneDayPerMinutes
  if (diff < 1) return 'たった今'
  if (diff < OneHourPerMinutes) return `${diff}分前`
  if (diff < OneDayPerMinutes)
    return `${Math.floor(diff / OneHourPerMinutes)}時間前`
  if (diff < OneWeekPerMinutes * 2)
    return `${Math.floor(diff / OneDayPerMinutes)}日前`
  return dateFns.format(dateTime, 'yyyy年M月d日')
}
