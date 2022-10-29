from abc import ABC, abstractmethod
from datetime import datetime


# classe abstrata manipulador de log
class LogManipulator(ABC):
    @classmethod
    @abstractmethod
    def log(cls) -> None:
        NotImplementedError()


# subclasse de log em arquivo
class LogInFile(LogManipulator):
    @classmethod
    def log(cls, message) -> None:
        with open("./logs.txt", mode="a") as file:
            print(message, file=file)


# subclasse de log em tela
class LogOnScrren(LogManipulator):
    @classmethod
    def log(cls, message) -> None:
        print(message)


# classe log
class Log:
    def __init__(self, manipulators: set[LogManipulator]) -> None:
        self.__manipulators = manipulators

    @property
    def manipulators(self):
        return self.__manipulators

    def info(self, message):
        self.__log("INFO", message)

    def warning(self, message):
        self.__log("WARNING", message)

    def error(self, message):
        self.__log("ERROR", message)

    def debug(self, message):
        self.__log("DEBUG", message)

    def __log(self, level, message):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, message))

    def __format(self, level, msg):
        date = datetime.now().strftime("%d/%m/%Y, %H:%M:%S")
        return f"[{level} - {date}] {msg}"


my_log = Log({LogInFile, LogInFile, LogOnScrren})
my_log.warning("Coisonaro não pode ganhar")
my_log.error("Você ainda não fez a pré-venda do Sonic Frontiers!")
my_log.debug("Debugando uhuul!")
