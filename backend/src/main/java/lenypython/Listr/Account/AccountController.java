package lenypython.Listr.Account;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api_v1/user/")
@AllArgsConstructor
public class AccountController {

  private final AccountService accountService;

  @GetMapping("/users")
  private List<Account> getAllUsers() {
    return this.accountService.getAllUsers();
  }

  @GetMapping("/{id}")
  private Account getUser(@RequestParam String id) throws NullPointerException {
    Long numId = Long.parseLong(id);
    Optional<Account> accOptional = this.accountService.getUserById(numId);
    if(accOptional.isPresent()) {
      return accOptional.get();
    } else {
      throw new NullPointerException("No such user exists");
    }
  }

  @GetMapping("/email/{email}")
  private Account getUserByEmail(@RequestParam String email) throws NullPointerException {
      Optional<Account> accOptional = this.accountService.getUserByEmail(email);
      if(accOptional.isPresent()){
        return accOptional.get();
      } else {
        throw  new NullPointerException("No user with such email exists");
      }
  }

  @PostMapping("/create")
  private Account createUser(@RequestBody Account account) {
    return this.accountService.createUser(account);
  }

  @PostMapping("/update")
  private Account updateUser(@RequestBody Account account) {
    return this.accountService.updateUser(account);
  }

  @DeleteMapping("/{id}")
  private String deleteUser(@RequestParam String id) {

    return this.accountService.deleteUserById(id);
  }

}
