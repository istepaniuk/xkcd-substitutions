// ==UserScript==
// @name        xkcd-substitutions
// @namespace   istepaniuk.com
// @description SUBSTITUTIONS That make reading the news more fun. (http://xkcd.com/1288/ & https://xkcd.com/1625/ & http://xkcd.com/1679/)
// @include     http://www.bbc.co.uk/*
// @include     http://www.bbc.com/*
// @include     http://www.cbc.ca/*
// @include     http://www.theguardian.com/*
// @include     http://www.telegraph.co.uk/*
// @include     http://www.theonion.com/*
// @include     http://www.foxnews.com/*
// @include     http://www.reddit.com/*
// @version     1
// @grant       none
// ==/UserScript==
(function() {
    var substitutions,
        textNodes,
        regexps = {};

    substitutions = {
        "allegedly": "kinda probably",
        "an unknown number": "like hundreds",
        "ancient": "haunted",
        "at large": "very large",
        "candidate": "airbender",
        "car": "cat",
        "cautiously optimistic": "delusional",
        "congressional leaders": "river spirits",
        "could not be reached for comment": "is guilty and everyone knows it",
        "debate": "dance-off",
        "disrupt": "destroy",
        "doctor who": "the big bang theory",
        "drone": "dog",
        "election": "eating contest",
        "electric": "atomic",
        "email": "poem",
        "expands": "physically expands",
        "facebook ceo": "this guy",
        "facebook post": "poem",
        "first-degree": "friggin' awful",
        "front runner": "blade runner",
        "gaffe": "magic spell",
        "global": "spherical",
        "google glass": "virtual boy",
        "homeland security": "homestar runner",
        "horsepower": "tons of horsemeat",
        "latest": "final",
        "meeting": "ménage à trois",
        "minutes": "years",
        "new study": "tumblr post",
        "no indication": "lots of signs",
        "poll": "psychic reading",
        "rebuild": "avenge",
        "remains to be seen": "will never be known",
        "scientists": "channing tatum and his friends",
        "second-degree": "friggin' awful",
        "self driving": "uncontrollably swerving",
        "senator": "elf-lord",
        "silver bullet": "way to kill warewolves",
        "smartphone": "pokédex",
        "space": "spaaace",
        "subway system": "tunnels i found",
        "successfully": "suddenly",
        "surprising": "surprising (but not to me)",
        "tension": "sexual tension",
        "third-degree": "friggin' awful",
        "tweet": "poem",
        "urged restraint by": "drunkenly egged on",
        "vows to": "probably won't",
        "war of words": "interplanetary war",
        "witnesses": "these dudes i know",
        "years": "minutes",
        "you won't believe": "i'm really sad about"
    }

    for (var key in substitutions) {
        regexps[key] = new RegExp(key, 'gi');
    }

    textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < textNodes.snapshotLength; i++) {
        var node = textNodes.snapshotItem(i);
        node.data = substituteTextIn(node.data);
    }

    function substituteTextIn(text) {
        for (var key in substitutions) {
            text = text.replace(regexps[key], substitutions[key]);
        }
        return text;
    }

})();
