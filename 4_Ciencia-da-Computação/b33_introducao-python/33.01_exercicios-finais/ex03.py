def print_square(line_length: int):
    if line_length <= 0:
        print("The number should be higher than 0")
    else:
        for index in range(line_length):
            curr_line: str = ""
            for index in range(line_length):
                curr_line += "*"
            print(curr_line)


print_square(5)

# Solução alternativa


def print_square_alt(line_length: int):
    if line_length <= 0:
        print("The number should be higher than 0")
    else:
        for row in range(line_length):
            print(line_length * "*")


print_square_alt(5)
