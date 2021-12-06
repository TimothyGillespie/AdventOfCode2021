# Advent Of Code (AoC) 2021
My solutions to the challenges of https://adventofcode.com/2021

The challenges how two parts, which is why you will usually find solution1 and solution2 named files for each part.
Each solution will also contain a ReadMe with instructions on how to run the program, the resource I used and sometimes
some thoughts of mine.

## Solutions

### [Day 1: Sonar Sweep](https://adventofcode.com/2021/day/1)
First attempted with Scala, but I was unhappy with the architecture. So, I did it briefly in bash.

[Go To The Code](src/day01)


### [Day 2: Dive!](https://adventofcode.com/2021/day/2)
I did this one in raw JavaScript with node. I only used node briefly in this way, and otherwise work a lot with TypeScript.

[Go To The Code](src/day02)

### [Day 3: Binary Diagnostic](https://adventofcode.com/2021/day/3)
The programming language was Dart, as chosen by https://perchance.org/programming-languge.
It seems interesting, but I certainly really noticed how I am only skipping the actual language and don't gain any proper
insight into them, which is why I want to keep to languages familiar to me with the future tasks.

[Go To The Code](src/day03)

### [Day 4: Giant Squid](https://adventofcode.com/2021/day/4)
I implemented this in Kotlin, however I was unable to make an easily compilable and runnable version with the raw kotlin
compiler and the JavaVM as soon as I added another file. Therefore, this day has a lot of full-project fluff.
I probably won't be using Kotlin here further. It would make more sense though if I wanted to implement all challenges
in Kotlin.

[Go To The Code](src/day04)

### [Day 5: Hydrothermal Venture](https://adventofcode.com/2021/day/5)
Here, I go back to node, but use TypeScript instead of JavaScript.

[Go To The Code](src/day05)


## Other Interesting AoC 2021 Projects

### Jon Mikoš' APL Solutions
APL is an old programming language which did not stand the test of time.
It did need its keyboards as it used quite many special characters. Apart from that, I have no idea about APL which
only seem cryptic but not old.

Interestingly enough, its last stable release was in 2001 (according to Wikipedia).

Jon seems to be suffering quite a lot when you read his commit messages.

[Go To Jon Mikoš' Solutions](https://github.com/MikosJon/AdventOfCode2021)

[Try APL](https://tryapl.org/)

### James Stanley's Own Computer and Language
I think the title speaks for itself. He also showcases each day's solution

[Go To James Stanely's Solutions](https://github.com/jes/aoc2021)

### u/AvshalomHeironymous' Prolog Solutions
He simply posts them on reddit but does not seem to collect them otherwise. His only posts are about AoC2021.

[Go To u/AvshalomHeironymous' Reddit Profile](https://www.reddit.com/user/AvshalomHeironymous/)

### BluePsychoRanger's Minecraft Solutions
Yep, only really became known to me due to his visualization for the day 5 challenge: https://www.reddit.com/r/adventofcode/comments/r9dq0y/2021_day_5_visualization_in_minecraft/

[Go To BluePsychoRanger's Solutions](https://github.com/BluePsychoRanger/Advent-of-Code-2021)

### Mathgeek's Excel Solutions
Well, of course someone is going to try to solve it with Excel. [And he is not the only one.](https://www.reddit.com/r/adventofcode/comments/r9pf87/please_make_the_inputs_smaller_i_am_starting_to/)

Excel solutions are not usually posted or displayed as programming language code is, so I love his display via the videos he puts out.

[Go To Mathgeek's YouTube Playlist](https://www.youtube.com/watch?v=JmjQevLLc6I&list=PLQQET3QPz-w2Fe7JjId4ENr7i9NpMjtwC)

### gottfired's GitHub Copilot Solutions
gottfired's attempts to solve all challenges only with GitHub Copilot via comments as he explains in this Reddit Thread: https://www.reddit.com/r/adventofcode/comments/r9lpnd/copilot_edition/

[Go To gottfired's Solutions](https://github.com/gottfired/advent-of-code-2021-copilot-edition)

## Fun Facts

### Yoast's Advertisement Morse Code
The company Yoast advertised their job positions on AoC. This was their ad:

```
Yoast - Dreaming 
of your code on 
12M sites 
worldwide? Make 
your dreams come 
true! .--- --- 
-... ... .--.-. 
-.-- --- .- ... - 
.-.-.- -.-. --- 
--
```

The written Morse code contains an E-Mail address. Has the benefit of keeping the spam away.

You can decode the Morse code here: https://morsecode.world/international/translator.html

It reminds me of my first experiments with GPIO pins on the Raspberry Pi, where I made a program which lets an LED blink
a certain word in Morse code. Perhaps you want to send your neighbor or family a hidden messages 24/7. In that case, take this:

https://gist.github.com/TimothyGillespie/ef1eb1139ebb8275f2e3669808240f43

### Words of Experience
When you attempt to access a puzzle too early, you will be greeted with the following message:
`Please don't repeatedly request this endpoint before it unlocks! The calendar countdown is synchronized with the server time; the link will be enabled on the calendar the instant this puzzle becomes available.`

It seems like the creator of AoC had to deal with this in the past, increasing the server load significantly.
You will always get this message when you try to access a valid year with any two-digit number as day. For example,

https://adventofcode.com/2021/day/06 (only before the sixth, of course!)

https://adventofcode.com/2021/day/32 (not a valid date)

https://adventofcode.com/2020/day/32 (previous year)
