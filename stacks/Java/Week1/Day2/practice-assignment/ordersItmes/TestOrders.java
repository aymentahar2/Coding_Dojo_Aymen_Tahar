import java.util.ArrayList;

public class TestOrders {
    public static void main (String[] args) {
    
        // Menu items
    Items item1 = new Items() ;
    item1.name = "cuppicino" ;
    item1.price = 100.5 ;

    Items item2 = new Items() ;
    item1.name = "mocha" ;
    item1.price = 75.0 ;

    Items item3 = new Items() ;
    item1.name = "latte" ;
    item1.price = 99.9 ;

    Items item4 = new Items() ;
    item1.name = "dripcoffe" ;
    item1.price = 120.0 ;

        // Order variables -- order1, order2 etc.

    Order order1 = new Order();
    // System.out.println(order1.total);
    order1.name = "Cindhuri";

    Order order2 = new Order();
    order2.name = "Jimmy";

    Order order3 = new Order();
    order3.name = "Noah";

    Order order4 = new Order();
    order4.name = "Sam";

         // Application Simulations
         order1.items.add(item2);
         order1.total += item1.price;

        // Add the item1 to order2's item list and increment the order's total.
        order2.items.add(item1);
        order2.total += item1.price;

        // order3 ordered a cappucino. Add the cappuccino to their order list and to their tab.
        order3.items.add(item1);
        order3.total += item1.price;

        // order4 added a latte. Update accordingly. 
        order4.items.add(item3);
        order4.total += item3.price; 

        //  Cindhuri’s order is now ready. Update her status.
        order1.ready = true;
        order4.ready =true;

        // Sam ordered more drinks - 2 lattes. Update their order as well.
        order4.items.add(item3);
        order4.items.add(item3);
        order4.total += item3.price*2;

        // Jimmy’s order is now ready. Update his status.
        order2.ready = true; 

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %,.2f\n", order1.total);
        System.out.printf("Ready: %b\n", order1.ready);
System.out.println("------------------------------------------------");
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %,.2f\n", order2.total);
        System.out.printf("Ready: %b\n", order2.ready);
System.out.println("------------------------------------------------");
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %,.2f\n", order3.total);
        System.out.printf("Ready: %b\n", order3.ready);
    System.out.println("------------------------------------------------");
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %,.2f\n", order4.total);
        System.out.printf("Ready: %b\n", order4.ready);
    }
}