package eu.gillespie.aoc2021.day04

fun main() {
    val args = listOf("input.txt")
    if(args.size != 1) {
        println("Exactly one input must be give which is the input file.")
    }

    val (game, drawnNumbers) = setupGameFromFile(args.first())

    for(singleDrawnNumber in drawnNumbers) {
        val wonBoards = game.drawNumber(singleDrawnNumber)
        if(wonBoards.isNotEmpty()) {
            val board = game.boards.get(wonBoards.first()).copy()

            val sumUnmarked = board.configuration
                .filter { !it.value.marked }
                .keys
                .sum()

            println("Winning number: ${singleDrawnNumber}")
            println("Sum of unmarked value: ${sumUnmarked}")
            println("Product of unmarked values sum and the winning number: ${singleDrawnNumber * sumUnmarked}")

            break
        }
    }
}


