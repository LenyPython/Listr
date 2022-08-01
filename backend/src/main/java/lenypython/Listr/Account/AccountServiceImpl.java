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

  public Account updateUser(@RequestBody Account user) {
    Optional<Account> accOptional = this.accountRepository.findById(user.getId());
    Account updatedAccount = new Account();
    if(accOptional.isPresent()) {
      updatedAccount = accOptional.get();
      //implement type checking
    }
    if(!user.getName().equals(updatedAccount.getName())) {
      updatedAccount.setName(user.getName());
    }
    if(!user.getSecondName().equals(updatedAccount.getSecondName())) {
      updatedAccount.setSecondName(user.getSecondName());
    }
    if(!user.getEmail().equals(updatedAccount.getEmail())) {
      updatedAccount.setEmail(user.getEmail());
    }
    if(user.getLogin() != null && !user.getLogin().equals(updatedAccount.getLogin())) {
      updatedAccount.setLogin(user.getLogin());
    }
    if(user.getAvatarImage() != null && user.getAvatarImage().equals(updatedAccount.getAvatarImage())) {
      updatedAccount.setAvatarImage(user.getAvatarImage());
    }

    return accountRepository.save(updatedAccount);
  }

  public Account createUser(@RequestBody Account user) throws IllegalArgumentException {
    Optional<Account> accOptional = this.accountRepository.findById(user.getId());
    if(accOptional.isPresent()) {
      throw new IllegalArgumentException("Such user already exists!");
    }
    return this.accountRepository.save(user);
  }

  public String deleteUserById(String id) {
    try {
      this.accountRepository.deleteById(Long.parseLong(id));
      return String.format("Account: %s, was deleted", id);
    } catch(IllegalArgumentException err) {
      return "No such account";
    }
  }
}
