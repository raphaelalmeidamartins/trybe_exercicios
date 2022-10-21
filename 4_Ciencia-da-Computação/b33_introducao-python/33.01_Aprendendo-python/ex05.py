import math


def how_much_ink(wall_area: float):
    if wall_area <= 0:
        print("Invalid size")

    ink_lt_per_m = 1 / 3
    total_ink_lt = wall_area * ink_lt_per_m
    paint_pots = math.ceil(total_ink_lt / 18)
    paint_pot_price = 80.00
    total_price = paint_pots * paint_pot_price

    return (paint_pots, total_price)


print(how_much_ink(53))
