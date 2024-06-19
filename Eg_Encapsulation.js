class BankAccount {
    #balance = 0; // private field
  
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }
  
    get balance() {
      return this.#balance;
    }
  
    set balance(amount) {
      this.#balance = amount;
    }
  }
  