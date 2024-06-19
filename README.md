# Learning_oop_javascript

#OOP

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as properties or attributes), and code in the form of procedures (often known as methods). The four main pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.

# 1. Encapsulation

Encapsulation is the mechanism of restricting direct access to some of an object's components and can prevent the accidental modification of data. This is usually achieved by making some fields private and providing public getter and setter methods to access and update the value of private fields.

# 2. Abstraction

Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of the object. It allows the programmer to focus on interactions at a higher level of abstraction without needing to understand all the low-level details.

# 3. Inheritance

Inheritance is a mechanism where a new class inherits properties and behavior (methods) from an existing class. The class that inherits is called the derived or child class, and the class being inherited from is the base or parent class. This promotes code reuse.

# 4. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common super class. It is the ability to present the same interface for different data types. Polymorphism can be achieved through method overriding (in derived classes) and method overloading (though JavaScript doesn't support method overloading directly).

# In summary 

These four pillars of OOP (Encapsulation, Abstraction, Inheritance, and Polymorphism) help in creating a modular, reusable, and maintainable codebase by promoting the organization of software design around objects rather than functions or logic.

# SOLID PRINCIPLES 


# 1. Single Responsibility Principle (SRP)

Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.

Explanation: Each class should focus on a single task or piece of functionality. If a class has more than one responsibility, those responsibilities become coupled, and changes to one responsibility could impair or impede the functionality of another.

# 2. Open/Closed Principle (OCP)

Definition: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

Explanation: You should be able to add new functionality to a class without changing its existing code. This is often achieved through inheritance or interfaces.

# 3. Liskov Substitution Principle (LSP)

Definition: Subtypes must be substitutable for their base types without altering the correctness of the program.

Explanation: Derived classes must be replaceable for their base classes without affecting the functionality of the code. This ensures that a derived class can stand in for its base class.

# 4. Interface Segregation Principle (ISP)

Definition: Clients should not be forced to depend on interfaces they do not use.

Explanation: It is better to have multiple small, specific interfaces than a single, general-purpose interface. This helps in avoiding implementing methods that are not needed.

# 5. Dependency Inversion Principle (DIP)

Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

Explanation: This principle emphasizes the importance of relying on interfaces or abstract classes rather than concrete implementations. This makes the system more modular and flexible.