package lenypython.authModule.Account;

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
  public Optional<Account> getUserByEmail(String email) {
    return this.accountRepository.findByEmail(email);
  }

  public Account updateUser(@RequestBody Account user) throws NullPointerException{
    try {
      Optional<Account> accOptional = this.accountRepository.findById(user.getId());
      Account updatedAccount = accOptional.orElseThrow(() -> new NullPointerException("No such user to update"));
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
    } catch(NullPointerException e) {
        //what should be returned if user doesn't exist
        return new Account();
    }
  }

  public Account createUser(RegisterRequest newUser) throws IllegalArgumentException {
    Optional<Account> accOptional = this.accountRepository.findByEmail(newUser.getEmail());
    if(accOptional.isPresent()) {
      throw new IllegalArgumentException("Such user already exists!");
    }
    Account user = new Account().builder()
       .id(0L)
       .name(newUser.getName())
       .secondName(newUser.getSecondName())
       .email(newUser.getEmail())
       .build();

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
