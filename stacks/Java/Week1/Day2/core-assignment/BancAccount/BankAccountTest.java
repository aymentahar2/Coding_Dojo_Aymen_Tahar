public class BankAccountTest {

	public static void main(String[] args) {
		
		BankAccount b1 = new BankAccount(10, 12, 20);
        BankAccount b2 = new BankAccount(10, 12, 20);

		// b1.createAccNumber();
		System.out.println("Your ten digit account number is: " + b1.getAccountNumber());
		
		
		System.out.println("There are " + BankAccount.numberOfAccount + " bank accounts created.");
		
		b1.deposit("sssdfsdf", 50.00);
		
		b2.deposit("checkings", 100.00);
		System.out.println("Checking balance is: " + b2.getCheckingBalance());
		
		b2.deposit("savings", 25.00);
		System.out.println("Savings balance is: " + b2.getSavingsBalance());

		
		b1.withdraw("savings", 200.00);
		
		b2.withdraw("savings", 20.0);
		System.out.println("Withdrew from account. Savings balance is now: " + b2.getSavingsBalance());
		
		// b1.getBalanceAndTotal();
		
		
		
		
			

	}

}