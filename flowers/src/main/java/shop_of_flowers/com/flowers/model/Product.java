package shop_of_flowers.com.flowers.model;
import org.springframework.data.annotation.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;

@Entity
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private int id;
    
    private String title;
    private String photoPath;
    private String type;
    private int price;
    private String description;

    public int getId(){
        return this.id;
    }

    public String getPhotoPath(){
        return "flowers/src/main/resources/static/images" + this.photoPath;
    }

    public String getTitle(){
        return this.title;
    }
    public String getType(){
        return this.type;
    }
    public int getPrice(){
        return this.price;
    }
    public String getDescription(){
        return this.description;
    }
}
