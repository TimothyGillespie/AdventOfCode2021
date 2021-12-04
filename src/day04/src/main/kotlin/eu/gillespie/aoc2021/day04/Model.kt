package eu.gillespie.aoc2021.day04

import kotlin.math.roundToInt
import kotlin.math.sqrt


data class Game(
    val boards: List<Board>,
) {
    /**
     * Marks a number in the board and returns a list of all boards
     * which have now been won.
     */
    fun drawNumber(number: Int): List<Int> {

        val nowWinning = mutableListOf<Int>()
        boards.forEachIndexed { index, singleBoard ->
            if(singleBoard.markNumber(number)) {
                nowWinning.add(index)
            }
        }

        return nowWinning
    }
}

data class Board(
    val configuration: Map<Int, Field>,
    var won: Boolean = false,
) {
    fun markNumber(number: Int): Boolean {
        val alreadyWon = won
        val field = configuration[number]
        if(field !== null) {
            field.mark()
            updateWon()
        }

        return won && !alreadyWon
    }

    private fun updateWon() {
        val markedCoordinates = this.configuration.values
            .filter { it.marked }
            .map { it.coordinate }

        val size = getSize()

        // Checking rows and columns
        for(i in 1..size) {
            val markedRowI = markedCoordinates.filter { it.first == i }
            val markedColI = markedCoordinates.filter { it.second == i }

            if(markedRowI.size == size || markedColI.size == size) {
                won = true
                return
            }
        }

        won = false
    }

    fun getSize(): Int {
        return sqrt(this.configuration.entries.size.toDouble()).roundToInt()
    }

    fun deepCopy(): Board {
        val configurationCopy = this.configuration.toMap()
            .map { it.key to it.value.copy() }
            .toMap()
        return Board(configurationCopy, this.won)
    }

    override fun toString(): String {
        val size = getSize()
        val digitMaxCount = this.configuration
            .maxOf { it.key }
            .toString()
            .length


        val ordered = this.configuration.entries.sortedBy {
            val coordinate = it.value.coordinate
            coordinate.second + (coordinate.first - 1) * size
        }

        var result = ""
        for(i in 0 until size) {

            if(i > 0)
                result += "\n"

            for(j in 0 until size) {
                if(j > 0)
                    result += " "
                result += ordered.get(j + i * size).key
                    .toString().padStart(digitMaxCount)
            }

        }

        return result
    }
}

data class Field(
    // First value is the row; Second value is the column
    // Both starting at 1
    val coordinate: Pair<Int, Int>,
    var marked: Boolean = false,
) {
    fun mark() {
        this.marked = true
    }
}
