#!/bin/bash

result1=$(./solution1.bash < input.txt)

if [ "$result1" -eq 1390 ]
then
  echo "Part 1 is correct"
else
  echo "Expected 1390 for the first part but got $result1."
  exit 1;
fi

result2=$(./solution2.bash < input.txt)

if [ "$result2" -eq 1457 ]
then
  echo "Part 2 is correct"
  exit 0;
else
  echo "Expected 1457 for the first part but got $result2."
  exit 1;
fi
