def largest_name(names: list[str]) -> str:
    largest_name = names[0]

    for curr_name in names:
        if len(curr_name) > len(largest_name):
            largest_name = curr_name

    print(largest_name)


largest_name(["Vitória", "Raphael", "Danillo", "Danielly", "Sheilla"])
