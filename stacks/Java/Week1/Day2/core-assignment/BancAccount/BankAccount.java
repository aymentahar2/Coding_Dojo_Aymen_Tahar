import java.text.DecimalFormat;
public class BankAccount {
     DecimalFormat df = new DecimalFormat("#.00");
    private double chekingBalance;
    private double savingBalance;
    public static int numberOfAccount = 0;
    private static double totalAmount = 0;
    

    public BankAccount(double cheking, double saving, double totalAmount){
        this.chekingBalance = cheking;
        this.savingBalance = saving;
        numberOfAccount++;
    }

    public double getChekingBalance() {
        return this.chekingBalance;
    }
    public double getSavingBalance() {
        return this.savingBalance;
    }

    public void deposit(String accountType, double amount){
        if(accountType == "checking"){
            this.chekingBalance += amount;
        } else if(accountType == "savings"){
            this.savingBalance += amount;
        } else {
            System.out.println("Make a deposit.");
        }
        totalAmount += amount;
        System.out.println("Deposited $"+df.format(amount)+" in "+accountType+" account.");        
    }
    
      
    public void withdraw(String accountType, double amount){
        if(accountType == "checking"){
            if(amount > this.chekingBalance){
                System.out.println("Not enough funding.");
            }
            this.savingBalance -= amount;
        } else {
            System.out.println("Make a withdraw.");
        }
        totalAmount -= amount;
        System.out.println("Withdrawn $"+df.format(amount)+" from"+accountType+" account.");
    }

public int getAccountNumber() {
		return numberOfAccount;
	}

	public Double getCheckingBalance() {
		return chekingBalance;
	}

	public void setCheckingBalance(Double checkingBalance) {
		this.chekingBalance = checkingBalance;
	}

	public Double getSavingsBalance() {
		return savingBalance;
	}

	public void setSavingsBalance(Double savingsBalance) {
		this.savingBalance = savingsBalance;
	}

    }





