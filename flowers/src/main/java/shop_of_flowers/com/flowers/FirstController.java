package shop_of_flowers.com.flowers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {
    final String first = "Саня гей";

    @GetMapping("/")
    public String firstik(){
        return first;
    }
}
