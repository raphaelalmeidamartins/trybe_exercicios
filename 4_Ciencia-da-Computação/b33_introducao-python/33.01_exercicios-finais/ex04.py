def largestName(names: list[str]) -> str:
    largestName = names[0]

    for currName in names:
        if len(currName) > len(largestName):
            largestName = currName

    print(largestName)


largestName(["Vitória", "Raphael", "Danillo", "Danielly", "Sheilla"])
