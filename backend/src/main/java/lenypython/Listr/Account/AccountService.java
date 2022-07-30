package lenypython.Listr.Account;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {

  private final AccountRepository accountRepository;

  public List<Account> getAllUsers() {
    return this.accountRepository.findAll();
  }

  public Optional<Account> getUserById(Long id) {
    return this.accountRepository.findById(id);
  }

  //public Account getUserByEmail(String email) {
  //  return this.accountRepository.findOne(email);
  //}

  public void createUser(Account user) {
    this.accountRepository.save(user);
  }

}
