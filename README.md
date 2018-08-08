[![Build Status](https://travis-ci.org/crawl/crawl.svg?branch=master)](https://travis-ci.org/crawl/crawl)

# Dungeon Crawl Short Soup

Dungeon Crawl Short Soup is a fork of [Dungeon Crawl Stone Soup](https://github.com/crawl/crawl). You can download and play Short Soup on Windows by clicking one of the zip files above in this repository. Alternatively, clone this repository and compile for any system you please.

## Manifesto

This fork exists because I feel that the difficulty model of Stone Soup could be improved. There are many great things about Stone Soup - after all, I enjoy it, and can honestly call it one of my favorite games - but it has its flaws, and I am attempting to address the following:

* Stone Soup is a long game mostly composed of easy tasks, with some challenging tasks sprinkled in. The rare, occasional nature of the challenges is unfun, because ideally a fun game should challenge you all or most of the time (in my opinion). Furthermore, this sparse difficulty model is very frustrating in a permadeath game, because a stretch of easy, monotonous tasks will make a player shift into a mental lull some call autopilot, and when a challenge appears after an easy stretch, the player may die due to failing to shift out of autopilot.
* The game gets easier as you progress. This is a problem found in many RPGs because the player's growing toolkit usually outpaces the progression of the enemies. When this happens, it reduces the frequency of challenges in the late game, making it less fun than the early game.

My solution to these two issues is to drastically shorten the game. This reduces the rewards (mainly, experience and loot) available to a character, which increases the frequency and intensity of challenges. It also helps to prevent autopilot, because when the game is shorter and more challenge-dense, the stretches of easiness are shorter, and thus the player is less likely to experience a long stretch of easiness that causes a shift into autopilot.

## Changes

In Short Soup, I have shortened the game by removing every permanent branch except for the Dungeon, Temple, Depths, and Zot. Thus, you will not find any entrance to the Lair, Orcish Mines, Vaults, Abyss, Pandemonium, or Hell (or any of the sub-branches within them). Zot can be entered without any runes.

Since the Abyss normally has many ways to enter it, I made these additional changes:

* Monsters no longer have the Banishment spell; any that did instead have Slow.
* The Abyssal Knight background is removed.
* Lugonu's Enter the Abyss ability is removed.
* Banishment is no longer a possible miscast effect (even from simulated miscasts from zot traps and distortion weapon unwields).
* Banishment is no longer a possible effect of the Distortion brand (instant teleportation occurs instead).
* Decks of Escape no longer produce the Exile card (other Escape cards are produced instead).

Please enjoy Dungeon Crawl Short Soup!
