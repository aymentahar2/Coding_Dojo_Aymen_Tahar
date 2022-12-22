import java.util.ArrayList;

public class Order {
    
      // MEMBER VARIABLES
    String name ; 
    double total ;
    boolean ready ;
    ArrayList<Items> items ;

     //constructor
     public Order() {
        this.name = "order";
        this.total = 0.0;
        this.ready = true;
        this.items = new ArrayList<Items>();

     }

}