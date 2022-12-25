import java.util.ArrayList;

public class OrderTest {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("cappucino", 6.5);
        Item item2 = new Item("Mocha", 7.0);
        Item item3 = new Item("Latte", 3.5);
        Item item4 = new Item("Drip Coffee", 2.0);
 
       Order order1 = new Order("C1");
       Order order2 = new Order("C2");
       Order order3 = new Order("C3");
       order1.addItem(item1);
       order1.addItem(item4);
       //Implement the getStatusMessage method within the Order class
       System.out.println(order1.getStatusMessage());
       //Test your getStatusMessage functionality by setting some orders to ready and printing the messages for each order. For example: order2.setReady(true); System.out.println(order2.getStatusMessage());
       order1.setReady(true);
       System.out.println(order1.getStatusMessage());
        //Test the total by printing the return value like so: System.out.println(order1.getOrderTotal());
       System.out.println(order1.getOrderTotal());

       order3.addItem(item1);
       order3.addItem(item4);
       order3.addItem(item2);
       order3.display();
        

    }
}