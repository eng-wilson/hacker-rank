function timeConversion(s: string): string {
  const afternoon = s.includes('PM')  
  const initialHour = Number(s.split(':')[0])
  let formattedDate = ''
  let hourResult = '';
  let result = '';

  if (afternoon) {
    formattedDate = s.split('PM')[0]

    if (initialHour < 12) {
      hourResult = `${(initialHour) + 12}`
    } else {
      hourResult = `${(initialHour)}`
    }

    result = `${String(hourResult)}:${formattedDate.split(':')[1]}:${formattedDate.split(':')[2]}`

    return result
  } else {
    formattedDate = s.split('AM')[0]
  
    if (initialHour < 12) {
      hourResult = `${initialHour}`
    } else {
      hourResult = `${(initialHour - 12)}`
    }

    if (hourResult.length === 1) {
      hourResult = '0' + hourResult
    }

    result = `${String(hourResult)}:${formattedDate.split(':')[1]}:${formattedDate.split(':')[2]}`
  }
  
  return result
}

console.log(timeConversion('06:05:45AM'))