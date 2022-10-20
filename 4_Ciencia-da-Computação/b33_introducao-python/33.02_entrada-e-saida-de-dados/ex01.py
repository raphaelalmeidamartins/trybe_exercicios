def print_inverted_pyramid_name(name: str):
    for index in range(len(name)):
        print(name[0: len(name) - index])


print_inverted_pyramid_name("RAPHAEL")
