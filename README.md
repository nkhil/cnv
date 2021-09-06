<img src="./img/logo.png" width="150px">

# cnv

CLI tool to convert units in the command line. This module uses the [convert-units](https://github.com/convert-units/convert-units) module under the hood.

## Motivation

I built this for myself, because I usually google 

## Installation

Install `cnv` globally 

```
npm i -g cnv
```

To install it locally, use `npm i cnv` instead.

## Usage

```bash
cnv 50km m
```

Some more examples:

```bash
cnv 1m cm
cnv 1lb kg
cnv 100oz ml
```

## Test

cnv is tested using [ava](https://github.com/avajs/ava).

To run tests: 

1. Setup the repository locally using: 

```
git clone git@github.com:nkhil/cnv.git
cd cnv
npm install 
```

2. Run tests: 

```
npm t
```
