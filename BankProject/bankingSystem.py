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
            if accounts[acc_num][1] >= amount:
                account [acc_num][1] -= amount
                print("Amount withdraw successfuly completed: ")
                else: 
                    print("0 balance")
            else:
                print("invalid choice")
        else:
            print("account not find")

            bank_info = {
                '123456789':{'account_holder':'mate' 'balance':1000,00}
                '87654321':{'account_holder': 'luka' 'balance': 5000,00}
            }

            def uptade_bank_info(acc_num, new_holder, new_balance):
                if acc_num in bank_info:
                    bank_info[acc_num]['account_holder'] = new_holder
                    bank_info[acc_num]['balance'] = new_balance
                    print("balance updated succesfully")
                else:
                    print("account number not found")

