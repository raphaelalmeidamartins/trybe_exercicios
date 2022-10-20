def list_average(list_numbers: list[float]) -> float:
    result = 0

    for number in list_numbers:
        result += number

    return result / len(list_numbers)


print(list_average([1, 2.5, 3, 4, 5]))
