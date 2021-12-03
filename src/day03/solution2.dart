import 'dart:io';

void main(List<String> args) {
  if(args.length != 1) {
    print('Exactly one input needs to be provided which is the path to the input file');
    return;
  }

  var inputFile = args.first;


  File(inputFile).readAsString().then((String content) {
    List<String> lines;

    if (content.contains('\r\n')) {
      lines = content.split('\r\n');
    } else {
      lines = content.split('\n');
    }

    lines.removeWhere((element) => element == '');

    var numericLines = lines.map((singleLine) =>
        singleLine.split('')
            .map((singleDigit) {
              var newValue = int.parse(singleDigit);
              if (newValue != 0 && newValue != 1) {
                throw new Exception('A digit was neither 0 nor 1 but ${newValue}');
              }
              return newValue;
        }).toList()
    ).toList();

    var oxygenGeneratorRatingRaw = obtainRatingByEqualityRetention(numericLines, (zeroCount, oneCount, inputList, currentDigitIndex) {
      if (oneCount >= zeroCount) {
        inputList.retainWhere((singleLine) => singleLine[currentDigitIndex] == 1);
      } else{
        inputList.retainWhere((singleLine) => singleLine[currentDigitIndex] == 0);
      }

      return inputList;
    });
    var oxygenGeneratorRating = binaryListToDec(oxygenGeneratorRatingRaw);

    var co2ScrubberRatingRaw = obtainRatingByEqualityRetention(numericLines, (zeroCount, oneCount, inputList, currentDigitIndex) {
      if (oneCount >= zeroCount) {
        inputList.retainWhere((singleLine) => singleLine[currentDigitIndex] == 0);
      } else{
        inputList.retainWhere((singleLine) => singleLine[currentDigitIndex] == 1);
      }

      return inputList;
    });
    var co2ScrubberRating = binaryListToDec(co2ScrubberRatingRaw);

    print('Oxygen Generator Rating: ${oxygenGeneratorRating}');
    print('CO2 Scrubber Rating: ${co2ScrubberRating}');
    print('Life Support Rating: ${oxygenGeneratorRating * co2ScrubberRating}');
  });

}



int binaryListToDec(List<int> input) {
  var currentMultiplier = 1;
  var sum = 0;
  for(var singleDigit in input.reversed) {
    sum += singleDigit * currentMultiplier;
    currentMultiplier *= 2;
  }

  return sum;
}

List<int> obtainRatingByEqualityRetention(List<List<int>> input, Function f) {
  List<List<int>> innerNumericLines = List.from(input);

  var digitCount = innerNumericLines.first.length;

  int oneCount;

  for (var i = 0; i < digitCount; i++) {
    // Not considering instances where there are two of the same remaining
    if(innerNumericLines.length == 1) {
      break;
    }
    oneCount = 0;
    for (var singleLine in innerNumericLines) {
      oneCount += singleLine[i];
    }

    var zeroCount = innerNumericLines.length - oneCount;
    innerNumericLines = f(zeroCount, oneCount, List.of(innerNumericLines), i);
  }

  return innerNumericLines.first;
}
