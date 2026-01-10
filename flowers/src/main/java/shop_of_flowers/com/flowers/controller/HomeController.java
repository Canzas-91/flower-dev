package shop_of_flowers.com.flowers.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import shop_of_flowers.com.flowers.service.ProductService;

@Controller
public class HomeController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String home(Model model) {
        var products = productService.getTopSixProducts();
        model.addAttribute("products",products);
        return "index";
    }
}