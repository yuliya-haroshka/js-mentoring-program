class Page {
  get header() {
    return 'header';
  }

  get footer() {
    return 'footer';
  }
}

class LoginPage extends Page {

  get emailField() {
    return '#email';
  }

  get passwordField() {
    return '#password';
  }

  get loginButton() {
    return '#loginButton';
  }

  clickLogin() {
    this.loginButton.click();
  }

  typeEmail(text) {
    this.emailField.type(text);
  }

  typePassword(text) {
    this.passwordField.type(text);
  }

  login(username, password) {
    this.typeEmail(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

const login = new LoginPage();
const basePage = new Page();

console.log(login.footer);