#!/usr/bin/env node

var plist = require('plist-native');
var fs = require('fs');

var input = JSON.parse(fs.readFileSync('stm.tmLanguage.JSON', 'utf8'));
var output = plist.buildString(input);
fs.writeFileSync('stm.tmLanguage', output, 'utf8');