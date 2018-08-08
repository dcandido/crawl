[![Build Status](https://travis-ci.org/crawl/crawl.svg?branch=master)](https://travis-ci.org/crawl/crawl)

# Dungeon Crawl Short Soup

Dungeon Crawl Short Soup is a fork of [Dungeon Crawl Stone Soup](https://github.com/crawl/crawl). You can download and play Short Soup on Windows by clicking one of the zip files above in this repository. Alternatively, clone this repository and compile for any system you please.

## Manifesto

This fork exists because I feel that the difficulty model of Stone Soup could be improved. There are many great things about Stone Soup - after all, I enjoy it, and can honestly call it one of my favorite games - but it has its flaws, and I am attempting to address the following:

* Stone Soup is a long game mostly composed of easy tasks, with some challenging tasks sprinkled in. The rare, occasional nature of the challenges is unfun, because ideally a fun game should challenge you all or most of the time (in my opinion). Furthermore, this "sprinkled" difficulty model is very frustrating in a permadeath game, because a stretch of easy, monotonous tasks will make a player shift into a mental lull some call autopilot, and when a challenge appears after an easy stretch, the player may die due to failing to shift out of autopilot.
* The game gets easier as you progress. This is a problem found in many RPGs because the player's growing toolkit usually outpaces the progression of the enemies. When this happens, it reduces the frequency of challenges in the late game, making it less fun than the early game.

My solution to these two issues is to drastically shorten the game. This reduces the rewards (mainly, experience and loot) available to a character, which increases the frequency and intensity of challenges. It also helps to preven autopilot, because when the game is shorter and more challenge-dense, the stretches of easiness are shorter, and thus the player is less likely to experience a long stretch of easiness that causes a shift into autopilot.

## Changes

In Short Soup, I have shortened the game by removing every permanent branch except for the Dungeon, Temple, Depths, and Zot. Thus, you will not find any entrance to the Lair, Orcish Mines, Vaults, Abyss, Pandemonium, or Hell (or any of the sub-branches within them). Zot can be entered without any runes.

Since the Abyss normally has many ways to enter it, I made these additional changes:

* Monsters no longer have the Banishment spell; any that did instead have Slow.
* The Abyssal Knight background is removed.
* Lugonu's Enter the Abyss ability is removed.
* Banishment is no longer a possible miscast effect (even from simulated miscasts from zot traps and distortion weapon unwields).
* Banishment is no longer a possible effect of the Distortion brand (instant teleportation occurs instead).
* Decks of escape no longer produce the Exile card (other Escape cards are produced instead).

# Dungeon Crawl Stone Soup

Dungeon Crawl Stone Soup is a game of dungeon exploration, combat and magic, involving characters of diverse skills, worshipping deities of great power and caprice. To win, you'll need to be a master of tactics and strategy, and prevail against overwhelming odds.

## Contents

1. [How to Play](#how-to-play)
3. [Community](#community)
5. [How you can help](#how-you-can-help)
4. [License and history information](#license-and-history-information)

## How to Play

If you'd like to dive in immediately, we suggest one of:

* Start a game and pick a tutorial (select tutorial in the game menu),
* Read [quickstart.txt](crawl-ref/docs/quickstart.txt) (in the [docs/](crawl-ref/docs/) directory), or
* For the studious, [read Crawl's full manual](crawl-ref/docs/crawl_manual.rst).

There is also an ingame list of frequently asked questions which you can access by typing
`?Q`.

#### Internet Play

You can play Crawl online, competing with other players or watching them. Click "Play Online Now!" on [the Crawl homepage](https://crawl.develz.org/) to find your closest server. You can play in your browser or over SSH.

#### Offline Play

Both classical ASCII and tiles (GUI) versions of Crawl are available to [download for Linux, Windows and OS X](https://crawl.develz.org/download.htm).

## Community

### Web
Our official homepage is [https://crawl.develz.org](https://crawl.develz.org/). You can find online play, offline downloads, a community forum and the development bug tracker/wiki.

### IRC
Chat with fellow crawlers in [##crawl on irc.freenode.net](https://webchat.freenode.net/?channels=##crawl), or talk development in [##crawl-dev](https://webchat.freenode.net/?channels=##crawl-dev).

## How you can help

If you like the game and you want to help make it better, there are a number
of ways to do so:

### Reporting bugs

At any time, there will be bugs -- finding and reporting them is a great help.
Many of the online servers host the regularly updated development version. Bugs
should be reported to [our bug tracker](https://crawl.develz.org/mantis/). Besides pointing out bugs, new ideas on how to improve interface or gameplay are welcome. These can be added to [the development wiki](https://crawl.develz.org/wiki/).

### Map making
Crawl creates levels by combining many hand-made (but often randomised) maps, known as *vaults*. Making them is fun and
easy. It's best to start with simple entry vaults: see [simple.des](crawl-ref/source/dat/des/arrival/simple.des) for examples. You can also read [the level-design manual](crawl-ref/docs/develop/levels/introduction.txt) for more help.

If you're ambitious, you can create new vaults for anywhere in the game. If you've
made some vaults, you can test them on your own system (no compiling needed) and
submit them to [our bug tracker](https://crawl.develz.org/mantis/).

### Monster Speech & Item Descriptions
Monster speech provides a lot of flavour. Just like vaults, varied speech depends
upon a large set of entries. Speech syntax is effective but unusual, so you may want to read [the formatting guide](crawl-ref/docs/develop/monster_speech.txt).

Current item descriptions can be read in-game with `?/` or out-of-game
them in [dat/descript/](crawl-ref/source/dat/descript/). The following conventions should be more or less obeyed:
* Descriptions ought to contain flavour text, ideally pointing out major weaknesses/strengths.
* No numbers, please.
* Citations are okay, but try to stay away from the most generic ones.

### Tiles
We're always open to improvements to existing tiles or variants of often-used tiles (eg floor tiles). If you want to give this a shot, please [contact us](#community) via forums or IRC. In case you drew some tiles of your own, you can submit them to [our bug tracker](https://crawl.develz.org/mantis/).

### Patches
For developers (both existing & aspiring!), you can download/fork the source code and write patches. Bug fixes as well as new features are very much welcome.

For large changes, it's always a good idea to [talk with the dev team](#community) first, to see if any plans already exist and if your suggestion is likely to be accepted.

Please be sure to read [docs/develop/coding_conventions.txt](crawl-ref/docs/develop/coding_conventions.txt) too.

## License and history information

Crawl is licensed as GPLv2+. See [licence.txt](crawl-ref/licence.txt) for the full text.

Crawl is a descendant of Linley's Dungeon Crawl. Development of the main branch stalled at version 4.0.0b26, with a final alpha of 4.1 being released by Brent Ross in 2005. Since 2006, the Dungeon Crawl Stone Soup team has continued development. [CREDITS.txt](crawl-ref/CREDITS.txt) contains a full list of contributors.

Crawl gladly uses the following open source packages; thanks to their developers:

* The Lua scripting language, for in-game functionality and user macros ([license](crawl-ref/docs/license/lualicense.txt)).
* The PCRE library, for regular expressions ([license](crawl-ref/docs/license/pcre_license.txt)).
* The SQLite library, as a database engine ([license](https://www.sqlite.org/copyright.html)).
* The SDL and SDL_image libraries, for tiles display ([license](crawl-ref/docs/license/lgpl.txt)).
* The libpng library, for tiles image loading ([license](crawl-ref/docs/license/libpng-LICENSE.txt)).

Thank you, and have fun crawling!
