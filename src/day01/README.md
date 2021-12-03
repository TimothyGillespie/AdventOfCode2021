# Using Bash
https://adventofcode.com/2021/day/1

I first attempted it with Scala. It worked, but I was not happy with the result. So I opted for bash.

Running the script will require bash of course. This is usually embedded in linux and the default terminal.
Under windows the git bash can be used. I am unsure about Mac, however, I believe it uses bash by default as well.

To run this example locate your working directory to this directory.

Then run 
```
./solution1.bash < input.txt
```

or alternatively

```
cat input.txt | ./solution1.bash
```

You can run the test with
```
./test.bash
```

The second part can be executed as similarly with
```
./solution2.bash < input.txt
```

```
cat input.txt | ./solution2.bash
```

If permissions are denied try to give permissions:

```
sudo chmod +x ./solution1.bash ./solution2.bash ./test.bash
sudo chmod +r ./input.txt
```



# Sources
I was comfortable with the basic of bash, however, I do not write bash script regularly so I forget a lot as well.
I used the following sources to complete this task:

https://stackoverflow.com/questions/1975849/how-to-split-a-line-into-words-separated-by-one-or-more-spaces-in-bash

https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php

https://www.hostinger.com/tutorials/bash-for-loop-guide-and-examples/

https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php

https://stackoverflow.com/questions/806906/how-do-i-test-if-a-variable-is-a-number-in-bash

https://www.javatpoint.com/bash-read-file

https://kaijento.github.io/2017/03/19/bash-read-file-into-array/

https://www.cyberciti.biz/faq/finding-bash-shell-array-length-elements/
