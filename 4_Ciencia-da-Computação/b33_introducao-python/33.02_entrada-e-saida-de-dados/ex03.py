import random


def guess_the_students():
    with open("./data/students.txt", mode="r") as students:
        stuff = [word.strip() for word in students]
        name = random.choice(stuff)
        scrambled_name = "".join(random.sample(name, len(name)))
        selected_name = input(f"Which student is this {scrambled_name}? ")

        if name == selected_name:
            print("That is correct!")
        else:
            print("Wrong!")


guess_the_students()
