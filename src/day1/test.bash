#!/bin/bash

result=$(./solution.bash < input.txt)

if [ "$result" -eq 1390 ]
then
  echo "Correct"
  exit 0;
else
  echo "Expected 1390 but got $result."
  exit 1;
fi
