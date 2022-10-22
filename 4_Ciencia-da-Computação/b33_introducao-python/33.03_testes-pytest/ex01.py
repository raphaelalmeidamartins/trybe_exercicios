def fizz_buzz(numbers: list[int]):
    new_list = []
    for number in numbers:
        if number % 15 == 0:
            new_list.append("FizzBuzz")
        elif number % 3 == 0:
            new_list.append("Fizz")
        elif number % 5 == 0:
            new_list.append("Buzz")
        else:
            new_list.append(number)

    return new_list


if __name__ == "__main__":
    print(fizz_buzz([3, 5, 15, 25, 36, 32, 7, 40, 10]))
