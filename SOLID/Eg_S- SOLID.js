class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Responsibility: Managing user information
  }
  
  class UserService {
    constructor(user) {
      this.user = user;
    }
  
    sendWelcomeEmail() {
      console.log(`Sending welcome email to ${this.user.email}`);
    }
  
    // Responsibility: User-related operations
  }
  