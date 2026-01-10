package shop_of_flowers.com.flowers.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "item")
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


    public Product(){}
    

    public Product(String title, String photoPath, String type, 
                   int price, String description) {
        this.title = title;
        this.photoPath = photoPath;
        this.type = type;
        this.price = price;
        this.description = description;
    }

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

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }


    public void setType(String type) {
        this.type = type;
    }


    public void setPrice(int price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
