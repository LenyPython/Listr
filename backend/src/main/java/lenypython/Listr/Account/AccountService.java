package lenypython.Listr.Account;


import java.util.List;
import java.util.Optional;

public interface AccountService {
  List<Account> getAllUsers();

  Optional<Account> getUserById(Long numId);

  Account createUser(RegisterRequest newUser);

  Account updateUser(Account account);

  String deleteUserById(String id);

  Optional<Account> getUserByEmail(String email);
}
