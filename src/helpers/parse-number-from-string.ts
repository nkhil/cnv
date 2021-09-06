type ParsedNumber = number | undefined;

export default function parseNumberFromString(str: string):ParsedNumber {
  const parsedNumberArray: string[] | null = str.match(/\d+/g)
  if (parsedNumberArray === null) {
    console.log('Sorry - no number detected')
    return
  }
  if (Array.isArray(parsedNumberArray) && parsedNumberArray?.length > 0) { // If decimal, length wil be 2
    switch (parsedNumberArray.length) {
      case 1:
        return parseInt(parsedNumberArray[0])
      case 2:
        return Math.abs(Number(parsedNumberArray.join('.')))
      default:
        console.log(`Unrecognised number array found: ${parsedNumberArray}`)
        return
    }
  }
  console.log(`Unexpected error occured. String ${str} could not be parsed`)
}
