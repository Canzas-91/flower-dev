package shop_of_flowers.com.flowers.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import shop_of_flowers.com.flowers.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM item ORDER BY id DESC LIMIT 6", 
           nativeQuery = true)
    List<Product> findTopSixProducts();
}