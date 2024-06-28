def create_account(accounts):
    acc_num = input("enter your number: ")
    name = input("enter your bank account name: ")
    deposit = float(input("enter deposit"))
    accounts = [name, deposit]
    print("you are registered succesfully")

    def perform_transaction(accounts):
        acc_num = input("enter account number")
        if acc_num in accounts:
            print("deposit")
            print("withdraw")
            deposit_or_withdraw = input("you want deposit of withdraw:  ")
            amount = float(input("Enter amount"))
            if deposit_or_withdraw == 1:
                accounts[acc_num][1] += amount
            print("amount is deposit succesfully")
        elif deposit_or_withdraw == 2:
            ~