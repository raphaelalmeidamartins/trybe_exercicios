import math


def howMuchInk(wallArea: float):
    if wallArea <= 0:
        print("Invalid size")

    inkLtPerM = 1 / 3
    totalInkLt = wallArea * inkLtPerM
    paintPots = math.ceil(totalInkLt / 18)
    paintPotPrice = 80.00
    totalPrice = paintPots * paintPotPrice

    return (paintPots, totalPrice)


print(howMuchInk(53))
