package shop_of_flowers.com.flowers.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shop_of_flowers.com.flowers.model.Product;
import shop_of_flowers.com.flowers.repository.ProductRepository;
import java.util.List;

@Service 
public class ProductService {
    @Autowired 
    private ProductRepository productRepository;
    public List<Product> getTopSixProducts() {
        List<Product> products = productRepository.findTopSixProducts();
        return products;
    }
}