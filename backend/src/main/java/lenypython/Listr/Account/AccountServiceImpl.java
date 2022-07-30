package lenypython.Listr.Account;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements AccountService {

  private final AccountRepository accountRepository;

  public List<Account> getAllUsers() {
    return this.accountRepository.findAll();
  }

  public Optional<Account> getUserById(Long id) {
    return this.accountRepository.findById(id);
  }

  public Account createUser(@RequestBody Account user) {
    return this.accountRepository.save(user);
  }

}
