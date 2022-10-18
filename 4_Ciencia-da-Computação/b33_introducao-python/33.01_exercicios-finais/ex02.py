def listAverage(listNumbers: list[float]) -> float:
    result = 0

    for number in listNumbers:
        result += number

    return result / len(listNumbers)


print(listAverage([1, 2.5, 3, 4, 5]))
