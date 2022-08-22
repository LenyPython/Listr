package lenypython.Listr.boostrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lenypython.Listr.Project.Project;
import lenypython.Listr.Project.ProjectRepository;
import lenypython.Listr.Account.Account;
import lenypython.Listr.Account.AccountRepository;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class Bootstrap implements CommandLineRunner {

    private final AccountRepository accountRepository;
    private final ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {

        Account firstUser = new Account().builder()
           .id(0L)
           .name("Bob")
           .secondName("Builder")
           .email("bob@email.com")
           .build();
        Project firstProject = new Project().builder()
           .owner(firstUser.getName())
           .name("First Project")
           .build();

        accountRepository.save(firstUser);
        projectRepository.save(firstProject);

        System.out.println(accountRepository.count());
        System.out.println(projectRepository.count());

    }

}
