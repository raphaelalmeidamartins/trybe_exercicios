import random


def guess_the_students():
    students = ["Raphael", "Danielly", "Danillo", "Sheilla", "Vitória"]
    name = random.choice(students)
    scrambled_name = "".join(random.sample(name, len(name)))
    selected_name = input(f"Which student is this {scrambled_name}? ")

    if name == selected_name:
        print("That is correct!")
    else:
        print("Wrong!")


guess_the_students()
