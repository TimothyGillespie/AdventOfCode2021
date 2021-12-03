import 'dart:io';

void main(List<String> args) {
  if(args.length != 1) {
    print('Exactly one input needs to be provided which is the path to the input file');
    return;
  }

  var inputFile = args.first;


  File(inputFile).readAsString().then((String content) {
    List<String> lines;
    Map<int, int> zeroCounter = new Map();
    Map<int, int> oneCounter = new Map();

    if(content.contains('\r\n')) {
      lines = content.split('\r\n');
    } else {
      lines = content.split('\n');
    }

    lines.removeWhere((element) => element == '');

    var entryLength = lines.first.length;

    for(var i = 0; i < entryLength; i++) {
      zeroCounter[i] = 0;
      oneCounter[i] = 0;
    }
    
    for(var singleLine in lines) {
      var digits = singleLine.split('');
      for(var j = 0; j < digits.length; j++) {
        var currentDigit = int.parse(digits[j]);
        switch(currentDigit) {
          case 0:
            zeroCounter[j] = zeroCounter[j]! + 1;
            break;
          case 1:
            oneCounter[j] = oneCounter[j]! + 1;
            break;
          default:
            throw new Exception('Unexpected symbol received: ${digits[j]}');
        }
      }
    }


  List<int> result = [];
  for(var i = 0; i < entryLength; i++) {
    if(oneCounter[i]! > zeroCounter[i]!) {
      result.add(1);
    } else if(oneCounter[i]! < zeroCounter[i]!) {
      result.add(0);
    } else {
      throw new Exception('Same count for a digit. Indeterminate state.');
    }
  }

  var gammaRate = binaryListToDec(result);

  var invertedResult = result.map((e) => e == 1 ? 0 : 1).toList();
  var epsilonRate = binaryListToDec(invertedResult);

  print('Gamma Rate: ${gammaRate}');
  print('Epsilon Rate: ${epsilonRate}');
  print('Power Consumption: ${gammaRate * epsilonRate}');
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
