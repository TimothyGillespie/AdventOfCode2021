package eu.gillespie.aoc2021.day04
import java.io.File

fun setupGameFromFile(filePath: String): Pair<Game, List<Int>> {

    val input = File(filePath).readLines()

    val drawnNumbers = input.first().split(",").map { it.trim().toInt() }

    val gameBoards = mutableListOf<Board>()

    var currentRowNumber: Int = 1
    val partialBoard = mutableMapOf<Int, Field>()
    for(currentLine in input.subList(2, input.size)) {
        if(currentLine.trim().isBlank()) {
            gameBoards.add(Board(partialBoard.toMap()))
            currentRowNumber = 1
            partialBoard.clear()
            continue
        }

        currentLine.split(' ')
            .map { it.trim() }
            .filter { it.isNotBlank() }
            .map { it.toInt() }
            .forEachIndexed { index, value ->
                partialBoard.set(value, Field(Pair(currentRowNumber, index + 1)))
            }

        currentRowNumber++
    }

    if(partialBoard.isNotEmpty()) {
        gameBoards.add(Board(partialBoard.toMap()))
        currentRowNumber = 1
        partialBoard.clear()
    }

    val game = Game(gameBoards.toList())

    return Pair(game, drawnNumbers)
}
