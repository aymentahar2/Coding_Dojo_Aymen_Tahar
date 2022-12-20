public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripcoffee = 3.5;
        double latte = 3.5;
        int cappuccino = 4;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sami" ;
      String customer3 = "Sam" ;
    String customer4 = "Jimmy" ;
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        
        
        System.out.println(customer1 + pendingMessage );
        ////2.
        
        if (isReadyOrder1){
            System.out.println(customer1+ readyMessage);
            System.out.println(displayTotalMessage + cappuccino);
        }
        else {
            System.out.println(customer1 + pendingMessage);
        }

             if (isReadyOrder2){
            System.out.println(customer2+ readyMessage);
            System.out.println(displayTotalMessage + latte);
        }
        else {
            System.out.println(customer2 + pendingMessage);
        }

             if (isReadyOrder3){
            System.out.println(customer3+ readyMessage);
            System.out.println(displayTotalMessage + dripcoffee);
        }
        else {
            System.out.println(customer4 + pendingMessage);
        }

             if (isReadyOrder4){
            System.out.println(customer4+ readyMessage);
            System.out.println(displayTotalMessage + cappuccino);
        }
        else {
            System.out.println(customer4 + pendingMessage);
        }

        /////3.
        System.out.println(displayTotalMessage + latte * 2);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        }
        else {
            System.out.println(customer2 + pendingMessage);
        }
        ////4.
        System.out.println(displayTotalMessage + (dripcoffee - latte));
    }
}


