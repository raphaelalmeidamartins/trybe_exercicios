class TV:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__channel = 1
        self.__size = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def channel(self):
        return self.__channel

    @property
    def size(self):
        return self.__size

    @property
    def ligada(self):
        return self.__ligada

    def increase_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, new_channel):
        if new_channel <= 1 or new_channel >= 99:
            raise ValueError("Canal indisponível")

        self.__channel = new_channel

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


minha_tv = TV(32)
print(f"Volume atual: {minha_tv.volume}")
minha_tv.increase_volume()
print(f"Volume atualizado: {minha_tv.volume}")
minha_tv.decrease_volume()
print(f"Volume atualizado: {minha_tv.volume}")
minha_tv.change_channel(103)
