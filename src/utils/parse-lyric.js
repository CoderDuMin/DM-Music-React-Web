export function parseLyric(lyric){
  let timeReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  if(!lyric) return []
  let lineArr = lyric.split('\n')
  let lyricArr = []
  for(let line of lineArr ){
    const result = timeReg.exec(line)
    if(!result) continue;
    const time1 = result[1] * 60 * 1000
    const time2 = result[2] * 1000
    const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10

    const time = time1 + time2 +time3
    const content = line.replace(timeReg,'')
    // console.log('line',{time,content})
    lyricArr.push({time,content})
  }

  return lyricArr
}