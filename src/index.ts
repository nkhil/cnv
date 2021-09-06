#!/usr/bin/env node

import convert from './helpers/convert'
import parseNumberFromString from './helpers/parse-number-from-string'
import parseUnitFromString from './helpers/parse-alphabet-from-string'
import type { Unit } from 'convert-units'

const [, , ...args] = process.argv;

const [valueToConvert, unitToConvertTo] = args;

const numberToConvert = parseNumberFromString(valueToConvert)

if (!numberToConvert) {
  throw new Error('No number found!');
}

const unit: Unit | undefined = parseUnitFromString(valueToConvert)

if (!unit) {
  throw new Error('Unit could not be converted')
}

console.log(
  convert({
    numberToConvert,
    unit,
    unitToConvertTo: unitToConvertTo as Unit,
  }),
)
