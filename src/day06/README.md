# How To Run
This solutions requires ts-node to run. Install node from https://nodejs.org/en/

Then install ts-node globally: `npm install -g ts-node`

Now you should be abel to run the programs with:

```
ts-node solution1.txt input.txt
ts-node solution2.txt input.txt
```

# Some thoughts
Part 1 and 2 are the same task, just that part 2 has an increased magnitude which forces you to
find a more efficient solution.

I first simulate this scenario quite naively by just keeping an array of all numbers representing the fish's state.

I solved the second part by simply tracking the count of fish in a state and defined in terms of number shifts as they 
will always remain in sync.
