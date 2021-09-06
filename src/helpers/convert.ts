import convert from 'convert-units'
import type { Unit } from 'convert-units'

export default function main({
    numberToConvert,
    unit, 
    unitToConvertTo,
}: {
  numberToConvert: number
  unit: Unit
  unitToConvertTo: Unit
}): number {
  return convert(numberToConvert).from(unit).to(unitToConvertTo)
}
