def printSquare(lineLength: int):
    if lineLength <= 0:
        print("The number should be higher than 0")
    else:
        for index in range(lineLength):
            currLine: str = ""
            for index in range(lineLength):
                currLine += "*"
            print(currLine)


printSquare(5)

# Solução alternativa


def printSquareAlt(lineLength: int):
    if lineLength <= 0:
        print("The number should be higher than 0")
    else:
        for row in range(lineLength):
            print(lineLength * "*")


printSquareAlt(5)
