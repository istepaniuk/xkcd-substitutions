// ==UserScript==
// @name        xkcd-substitutions
// @namespace   istepaniuk.com
// @description SUBSTITUTIONS That make reading the news more fun. (http://xkcd.com/1288/)
// @include     http://www.bbc.co.uk/*
// @version     1
// @grant       none
// ==/UserScript==

var substitutions, 
    textNodes, 
    regexps = {};

substitutions = {
  'witnesses': 'these dudes I know',
  'allegedgly': 'kinda probably',
  'new study': 'Tumblr post',
  'rebuild': 'avenge',
  'space': 'spaaace',
  'google glass': 'Virtual Boy',
  'smartphone': 'Pokédex',
  'electric': 'atomic',
  'senator': 'elf-lord',
  'car': 'cat',
  'election': 'eating contest',
  'congressional leaders': 'river spirits',
  'homeland security': 'homestar runner',
  'could not be reached for comment': 'is guilty and everyone knows it'
}

for (var key in substitutions) {
  regexps[key] = new RegExp(key ,'gi');
}

textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < textNodes.snapshotLength; i++) {
  var node = textNodes.snapshotItem(i);
  node.data = substituteTextIn(node.data);
}

function substituteTextIn(text){
  for (var key in substitutions) {
    text = text.replace(regexps[key], substitutions[key]); 
  }
  return text;
}




