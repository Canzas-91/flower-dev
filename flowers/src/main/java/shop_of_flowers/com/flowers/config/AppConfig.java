package shop_of_flowers.com.flowers.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import shop_of_flowers.com.flowers.service.ProductService;

@Configuration
public class AppConfig {
    @Bean
    public ProductService productService() {
        return new ProductService();
    }
}