def decode_string(string: str):
    codex = [
        ("ABC", 2),
        ("DEF", 3),
        ("GHI", 4),
        ("JKL", 5),
        ("MNO", 6),
        ("PQRS", 7),
        ("TUV", 8),
        ("WXYZ", 9),
    ]

    decoded = ""

    for char in string:
        value = char if char in "01-" else ""

        for key, number in codex:
            if char.upper() in key:
                value = str(number)
                break

        decoded += value

    return decoded


if __name__ == "__main__":
    print(decode_string("MY-LOVE"))
