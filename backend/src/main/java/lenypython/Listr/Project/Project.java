package lenypython.Listr.Project;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lenypython.Listr.Epic.Epic;
import lenypython.Listr.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private User owner;
    private Set<User> team;
    private Set<Epic> epics;

}
