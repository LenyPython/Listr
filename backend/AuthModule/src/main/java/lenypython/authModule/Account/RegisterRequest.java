package lenypython.authModule.Account;

import lombok.Data;

@Data
public class RegisterRequest {
  String name;
  String secondName;
  String email;
  String login;
}
