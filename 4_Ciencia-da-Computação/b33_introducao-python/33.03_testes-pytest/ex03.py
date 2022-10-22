import re


def is_email_Format_valid(email: str):
    username = r"^[a-z]{1,}(\.|_){0,1}([a-z0-9]{1,}(\.|_){0,1}[a-z0-9]{1,})*"
    domain = r"@[a-z]{1,}.(com|edu|net)((\.|_)[a-z]{2})?$"
    regexp = re.compile(username + domain, flags=re.I)

    if re.search(regexp, email):
        return "Valid email"
    else:
        return "Invalid email"


if __name__ == "__main__":
    email = input("Enter your email: ")
    print(is_email_Format_valid(email))
