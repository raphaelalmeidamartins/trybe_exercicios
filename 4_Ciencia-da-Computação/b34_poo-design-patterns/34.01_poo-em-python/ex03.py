import math
from abc import ABC, abstractmethod


class GeometricForm(ABC):
    @abstractmethod
    def area(self) -> float:
        raise NotImplementedError

    @abstractmethod
    def perimeter(self) -> float:
        raise NotImplementedError


class Square(GeometricForm):
    def __init__(self, side):
        self.__side = side

    @property
    def side(self):
        return self.__side

    def area(self) -> float:
        return self.__side**2

    def perimeter(self) -> float:
        return self.__side * 4


class Rectangle(GeometricForm):
    def __init__(self, base, height):
        self.__base = base
        self.__height = height

    @property
    def base(self):
        return self.__base

    @property
    def height(self):
        return self.__height

    def area(self) -> float:
        return self.__base * self.__height

    def perimeter(self) -> float:
        return (self.__base + self.__height) * 2


class Circle(GeometricForm):
    def __init__(self, radius):
        self.__radius = radius

    @property
    def radius(self):
        return self.__radius

    def area(self) -> float:
        return self.__radius * math.pi**2

    def perimeter(self) -> float:
        return 2 * math.pi * self.__radius


my_square = Square(4)
my_rectangle = Rectangle(4, 8)
my_circle = Circle(10)

print("ÁREA DE:")
print(f"- Quadrado de lado 4cm: {round(my_square.area(), 2)}cm²")
print(
    f"- Retangulo de base 4cm e altura 8cm: {round(my_rectangle.area(), 2)}cm²"
)
print(f"- Círculo de raio 10cm: {round(my_circle.area(), 2)}cm²")

print("\nPERÌMETRO DE:")
print(f"- Quadrado de lado 4cm: {round(my_square.perimeter(), 2)}cm")
print(
    f"- Retangulo de base e altura 8cm: {round(my_rectangle.perimeter(), 2)}cm"
)
print(f"- Círculo de raio 10cm: {round(my_circle.perimeter(), 2)}cm")
