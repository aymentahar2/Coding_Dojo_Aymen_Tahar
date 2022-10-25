
class user :
    def __init__(self, user_name, balance) :
        self.user_name = user_name
        self.balance = balance 
# make_deposit(self, amount)
    def make_deposit(self, amount):
        self.balance += amount
        return self

# make_withdrawal(self, amount)
    def make_withdrawal(self, amount):
        self.balance -= amount
        return self

# display_user_balance(self)
    def display_user_balance(self) :
        print(f"user :{self.user_name}, balance : {self.balance}")
        return self

# transfer_money(self, other_user, amount)
    def transfer_money(self, other_user_balance,  amount) :      
        self.balance -= amount
        other_user_balance.balance += amount
        return self

user1=user("slim",20000)
user2=user("elone musk",10000)
user3=user("Bezos",20000)
user4=user("joe biden",50000)

user1.make_deposit(3000)
user1.make_withdrawal(4000)
print(user2.balance)

user1.display_user_balance()
user1.transfer_money(user2, 5000)
user1.display_user_balance()
user2.display_user_balance()


user2.make_deposit(3000).make_withdrawal(4000).display_user_balance()
