import java.util.ArrayList;
// import java.util.Random;
public class TestPuzzle {
    
	public static void main(String[] args) {
		Puzzle generator = new Puzzle();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);

        
    // getRandomLetter
        String randomLetter = generator.getRandomLetter();
        System.out.println(randomLetter);
    // generatePassword
     System.out.println(generator.generatePassword());
	// getNewPasswordSet
     System.out.println(generator.getNewPasswordSet(20));
    	
	}
}
