import java.util.HashMap;
import java.util.Set;

public class Lyrics {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put ("title1", "lyrics1");
        trackList.put ("title2", "lyrics2");
        trackList.put("title3", "lyrics3");
        trackList.put("title4", "lyrics4");
    // get the keys by using the keySet method
    Set<String> keys = trackList.keySet();
    for (String key : keys) {
        System.out.println(key);
        System.out.println(trackList.get(key));
    }
    }

}