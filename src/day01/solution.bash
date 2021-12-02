#!/bin/bash

file=$1
prev=""
counter=0
re='^[0-9]+$'

while read -r line; do
  if [[ "$line" =~ $re ]]
  then

    if [ "$prev" != "" ] && [ "$line" -gt "$prev" ]
    then
      ((counter++))
    fi

    prev=$line

  fi

done

echo "$counter"
