import test from 'ava'
import parseNumberFromString from '../src/helpers/parse-number-from-string'
import parseUnitFromString from '../src/helpers/parse-alphabet-from-string'
import convert from '../src/helpers/convert'

test('parseNumberFromString - can parse number out of string', t => {
	t.is(parseNumberFromString('23lb'), 23)
	t.is(parseNumberFromString('100kg'), 100)
	t.is(parseNumberFromString  ('10.5kg'), 10.5)
	t.is(parseNumberFromString('20.123kg'), 20.123)
})

test('parseUnitFromString - can parse a unit from a string', t => {
  t.is(parseUnitFromString('23lb'), 'lb')
  t.is(parseUnitFromString('123.5kg'), 'kg')
  t.is(parseUnitFromString('1.12345l'), 'l')
})

test('convert - can convert units correctly', t => {
  t.is(convert({
    numberToConvert: 10,
    unit: 'km',
    unitToConvertTo: 'm',
  }), 10000)
  t.is(convert({
    numberToConvert: 50,
    unit: 'cm',
    unitToConvertTo: 'in',
  }), 19.68504)
})
