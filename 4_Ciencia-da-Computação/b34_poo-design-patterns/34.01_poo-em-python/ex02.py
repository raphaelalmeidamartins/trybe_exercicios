class Statistic:
    @classmethod
    def average(cls, numbers: list[float]):
        return sum(numbers) / len(numbers)

    @classmethod
    def median(cls, numbers: list[float]):
        numbers.sort()
        index = len(numbers) // 2

        if len(numbers) % 2 != 0:
            return numbers[index]

        return (numbers[index - 1] + numbers[index]) / 2

    @classmethod
    def moda(cls, numbers: list[float]):
        set_numbers = set(numbers)
        each_count = []

        for element in set_numbers:
            counter = 0

            for number in numbers:
                if number == element:
                    counter += 1

            each_count.append((element, counter))

        result = each_count[0][1]

        for index in range(len(each_count)):
            current_count = each_count[index][1]

            if current_count > result:
                result = current_count

        return result


print(f"Média de [1, 2, 3]: {Statistic.average([1, 2, 3])}")
print(f"Mediana de [3, 1, 2]: {Statistic.average([1, 2, 3])}")
print(f"Mediana de [3, 1, 2.5, 2]: {Statistic.median([3, 1, 2.5, 2])}")
print(f"Moda de [3, 3, 1, 3]: {Statistic.moda([3, 3, 1, 3])}")
