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



## Fun Facts

### Yoast's Advertisement
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

The written morse code contains an E-Mail address. Has the benefit of keeping the spam away.

You can decode the morse code here: https://morsecode.world/international/translator.html

It reminds me of my first experiments with GPIO pins on the Raspberry Pi where I made a program which lets an LED blink
a certain word in morse code. Perhaps you want to send your neighbour or family a hidden messages 24/7. In that case, take this:

https://gist.github.com/TimothyGillespie/ef1eb1139ebb8275f2e3669808240f43

### Words of Experience
When you attempt to access a puzzle too early you will be greeted with the following message:
`Please don't repeatedly request this endpoint before it unlocks! The calendar countdown is synchronized with the server time; the link will be enabled on the calendar the instant this puzzle becomes available.`

Seems like the creator of AoC had to deal with this in the past increasing the server load significantly.
You will always get this message when you try to access a valid year with any two digit number as day. For example,

https://adventofcode.com/2021/day/06 (only before the sixth of course!)

https://adventofcode.com/2021/day/32 (not a valid date)

https://adventofcode.com/2020/day/32 (previous year)
