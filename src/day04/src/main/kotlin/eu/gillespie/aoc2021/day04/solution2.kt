package eu.gillespie.aoc2021.day04

fun main() {
    val args = listOf("input.txt")
    if(args.size != 1) {
        println("Exactly one input must be give which is the input file.")
    }

    val (game, drawnNumbers) = setupGameFromFile(args.first())

    var lastWinningBoard: Board? = null
    var lastWinningNumber: Int? = null
    for(singleDrawnNumber in drawnNumbers) {
        var wonBoards = game.drawNumber(singleDrawnNumber)
        if(wonBoards.isNotEmpty()) {
            lastWinningBoard = game.boards.get(wonBoards.first()).deepCopy()
            lastWinningNumber = singleDrawnNumber
        }
    }

    val sumUnmarked = lastWinningBoard?.configuration
        ?.filter { !it.value.marked }
        ?.keys
        ?.sum()

    println("Winning number: ${lastWinningNumber}")
    println("Sum of unmarked value: ${sumUnmarked}")
    println("Product of unmarked values sum and the winning number: ${sumUnmarked?.let { lastWinningNumber?.times(it) }}")

}


