// package shop_of_flowers.com.flowers.config;

// import java.util.List;

// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Profile;

// import shop_of_flowers.com.flowers.model.Product;
// import shop_of_flowers.com.flowers.repository.ProductRepository;

// @Configuration
// public class DataConfig {
//     @Bean
//     @Profile("dev")
//     public CommandLineRunner dataLoader(ProductRepository repository) {
//         return args -> {
//             if (repository.count() == 0) {
//                 List<Product> products = List.of(
//                     new Product( "Красные розы", "rose.jpg", "Розы", 1500, "Букет из 11 роз"),
//                     new Product("Тюльпаны", "tulip.jpg", "Тюльпаны", 800, "Яркие желтые тюльпаны"),
//                     new Product( "Орхидея", "orchid.jpg", "Орхидеи", 2500, "Белая орхидея в горшке"),
//                     new Product("Хризантемы", "chrysanthemum.jpg", "Хризантемы", 700, "Пучок белых хризантем"),
//                     new Product("Пионы", "peony.jpg", "Пионы", 1200, "Розовые пионы"),
//                     new Product("Лилии", "lily.jpg", "Лилейные", 900, "Букет белых лилий")
//                 );
//                 repository.saveAll(products);
//                 System.out.println("Загружено " + products.size() + " тестовых товаров");
//             }
//         };
//     }
// }