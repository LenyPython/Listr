package lenypython.Listr.boostrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lenypython.Listr.Epic.Epic;
import lenypython.Listr.Epic.EpicRepository;
import lenypython.Listr.Project.Project;
import lenypython.Listr.Project.ProjectRepository;
import lenypython.Listr.User.User;
import lenypython.Listr.User.UserRepository;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Bootstrap implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final EpicRepository epicRepository;

    @Override
    public void run(String... args) throws Exception {

        User firstUser = new User("Alan", "Joe", "email@Emil.com");
        Project firstProject = new Project();
        Epic fEpic = new Epic("First Story");

        firstProject.setOwner(firstUser);
        userRepository.save(firstUser);
        projectRepository.save(firstProject);
        epicRepository.save(fEpic);

        System.out.println(userRepository.count());
        System.out.println(projectRepository.count());
        System.out.println(epicRepository.count());

    }

}
