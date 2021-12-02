#!/bin/bash

file=$1
prev=""
counter=0
re='^[0-9]+$'

readarray -t all_lines
count="${#all_lines[@]}"
let "until = $count - 2"

for ((i=0; i < until; i++))
do
    if [[ "${all_lines[i]}" =~ $re ]]
    then
      let "sum_of_three = ${all_lines[i]} + ${all_lines[i + 1]} + ${all_lines[i + 2]}"
      if [ "$prev" != "" ] && [ "$sum_of_three" -gt "$prev" ]
      then
        ((counter++))
      fi

      prev=$sum_of_three

    fi
done

echo "$counter"

