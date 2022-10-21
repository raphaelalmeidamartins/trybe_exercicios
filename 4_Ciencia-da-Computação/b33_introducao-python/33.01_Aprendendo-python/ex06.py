def is_it_a_triangle(a: float, b: float, c: float):
    if a + b < c:
        return "Não é um triângulo"
    elif a == b and b == c:
        return "É um triângulo equilátero"
    elif a == b or a == c or b == c:
        return "É um triângulo Isóseles"
    else:
        return "É um triângulo escaleno"


print(is_it_a_triangle(5, 9, 10))
