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
// @include     https://www.reddit.com/*
// @include     https://www.washingtonpost.com/*
// @version     2
// @grant       none
// ==/UserScript==
(function() {
    var substitutions,
        textNodes,
        regexps = {};

    substitutions = {
        "allegedly": "kinda probably",
        "ancient": "haunted",
        "anti-terror": "freedom",
        "an unknown number": "like hundreds",
        "at large": "very large",
        "behind the headlines": "beyond the grave",
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
        "google glass": "Virtual Boy",
        "guerrilla": "gorilla",
        "homeland security": "homestar runner",
        "horsepower": "tons of horsemeat",
        "killed": "smashed to bits",
        "latest": "final",
        "meeting": "channing tatum and his friends",
        "meeting": "ménage à trois",
        "migrant": "slave",
        "minutes": "years",
        "new study": "Tumblr post",
        "no indication": "lots of signs",
        "poll": "psychic reading",
        "rebuild": "avenge",
        "refugee": "rapist pig",
        "remains to be seen": "will never be known",
        "scientists": "channing tatum and his friends",
        "second-degree": "friggin' awful",
        "self driving": "uncontrollably swerving",
        "senator": "elf-lord",
        "silver bullet": "way to kill werewolves",
        "smartphone": "Pokédex",
        "space": "spaaace",
        "star-studded": "blood-soaked",
        "subway system": "tunnels I found",
        "successfully": "suddenly",
        "surprising": "surprising (but not to me)",
        "tension": "sexual tension",
        "terror": "freedom",
        "terrorism": "freedom",
        "terrorist": "clown",
        "third-degree": "friggin' awful",
        "tweet": "poem",
        "urged restraint by": "drunkenly egged on",
        "verify": "lie about",
        "vows to": "probably won't",
        "war of words": "interplanetary war",
        "win votes": "find pokemon",
        "witnesses": "these dudes I know",
        "years": "minutes",
        "you won't believe": "I'm really sad about"
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
