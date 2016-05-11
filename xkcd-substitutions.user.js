// ==UserScript==
// @name        xkcd-substitutions
// @namespace   istepaniuk.com
// @description SUBSTITUTIONS That make reading the news more fun. (http://xkcd.com/1288/)
// @include     http://www.bbc.co.uk/*
// @include     http://www.bbc.com/*
// @include     http://www.cbc.ca/*
// @include     http://www.theguardian.com/*
// @include     http://www.telegraph.co.uk/*
// @include     http://www.theonion.com/*
// @include     http://www.foxnews.com/*
// @include		https://www.reddit.com/*
// @include		https://www.washingtonpost.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
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
    'could not be reached for comment': 'is guilty and everyone knows it',
	'debate' : 'dance-off',
	'self driving' : 'uncontrollably swerving',
	'poll' : 'psychic reading',
	'candidate' : 'airbender',
	'drone' : 'dog',
	'vows to' : 'probably won\'t',
	'at large' : 'very large',
	'successfully' : 'suddenly',
	'expands' : 'physically expands',
	'first-degree' : 'friggin\' awful',
	'second-degree' : 'friggin\' awful',
	'third-degree' : 'friggin\' awful',
	'an unknown number' : 'like hundreds',
	'front runner' : 'blade runner',
	'global' : 'spherical',
	'years' : 'minutes',
	'no indication' : 'lots of signs',
	'urged restraint by' : 'drunkenly egged on',
	'horsepower' : 'tons of horsemeat',
	'gaffe' : 'magic spell',
	'ancient' : 'haunted',
	'star-studded' : 'blood-soaked',
	'remains to be seen' : 'will never be known',
	'silver bullet' : 'way to kill werewolves',
	'subway system' : 'tunnels i found',
	'surprising' : 'surprising (but not to me)',
	'war of words' : 'interplanetary war',
	'tension' : 'sexual tension',
	'cautiously optimistic' : 'delusional',
	'doctor who' : 'the big bang theory',
	'win votes' : 'find pokemon',
	'behind the headlines' : 'beyond the grave',
	'email' : 'poem',
	'facebook post' : 'poem',
	'tweet' : 'poem',
	'facebook ceo' : 'this guy',
	'latest' : 'final' ,
	'disrupt' : 'destroy', 
	'meeting' : 'channing tatum and his friends',
	'you won\'t believe' : 'i\'m really sad about',
	'killed' : 'smashed to bits',
	'terrorist' : 'clown',
	'anti-terror' : 'freedom',
	'terror' : 'freedom',
	'refugee' : 'rapist pig',
	'migrant' : 'slave',
	'verify' : 'lie about'
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
  
})();



