import type { Unit } from 'convert-units'

export default function parseUnitFromString(str: string): Unit | undefined {
  const parsedUnit: string = str.replace(/[^A-Z]/gi, '')
  if (parsedUnit === '') {
    console.log(`No unit found in ${str}`)
    return
  }
  return parsedUnit as Unit
}
