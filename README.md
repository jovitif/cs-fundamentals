# Learning Dart

## Introduction

Dart is a client-optimized programming language for developing fast apps on any platform. Created by Google, Dart is the language behind Flutter - Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Dart is also used for server-side development and can compile to JavaScript for web applications.

## Why Learn Dart?

- **Flutter Integration**: Primary language for Flutter app development
- **Cross-Platform Development**: Build for iOS, Android, Web, Desktop with one codebase
- **Performance**: Compiled language with excellent performance
- **Modern Features**: Object-oriented with functional programming support
- **Google Backing**: Strong support and continuous development
- **Easy to Learn**: Familiar syntax for JavaScript/TypeScript developers
- **Hot Reload**: Fast development cycle with instant UI updates

## Prerequisites

Before learning Dart, you should have:

- Basic programming knowledge
- Understanding of object-oriented concepts (helpful but not required)
- Familiarity with command line/terminal
- Basic understanding of mobile/web development concepts

## Installation and Setup

### Install Dart SDK

#### Windows
```bash
# Download from https://dart.dev/get-dart
# Or use Chocolatey
choco install dart-sdk
```

#### macOS
```bash
# Using Homebrew
brew tap dart-lang/dart
brew install dart

# Or download from https://dart.dev/get-dart
```

#### Linux
```bash
# Using apt (Ubuntu/Debian)
sudo apt update
sudo apt install apt-transport-https
sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt update
sudo apt install dart
```

### Verify Installation
```bash
dart --version
```

### Development Environment
- **VS Code** with Dart extension
- **Android Studio** with Flutter plugin
- **IntelliJ IDEA** with Dart plugin

## Basic Syntax and Concepts

### Hello World
```dart
void main() {
  print('Hello, World!');
}
```

### Variables and Data Types

```dart
void main() {
  // Variables
  var name = 'Dart';        // Inferred type
  String language = 'Dart'; // Explicit type
  const pi = 3.14159;       // Compile-time constant
  final now = DateTime.now(); // Runtime constant

  // Data types
  int age = 25;
  double height = 5.9;
  bool isStudent = true;
  String greeting = 'Hello';

  // Dynamic type
  dynamic flexible = 'Can be anything';
  flexible = 42;
  flexible = true;

  print('$name is $age years old');
}
```

### Operators

```dart
void main() {
  // Arithmetic
  int a = 10, b = 3;
  print(a + b); // 13
  print(a - b); // 7
  print(a * b); // 30
  print(a / b); // 3.333...
  print(a ~/ b); // 3 (integer division)
  print(a % b); // 1 (modulo)

  // Comparison
  print(a == b); // false
  print(a != b); // true
  print(a > b); // true
  print(a < b); // false

  // Logical
  bool x = true, y = false;
  print(x && y); // false (AND)
  print(x || y); // true (OR)
  print(!x); // false (NOT)

  // Assignment
  int c = 5;
  c += 2; // c = c + 2
  c *= 3; // c = c * 3
}
```

### Control Flow

```dart
void main() {
  // If-else
  int score = 85;
  if (score >= 90) {
    print('A');
  } else if (score >= 80) {
    print('B');
  } else {
    print('C');
  }

  // Switch
  String grade = 'A';
  switch (grade) {
    case 'A':
      print('Excellent');
      break;
    case 'B':
      print('Good');
      break;
    default:
      print('Needs improvement');
  }

  // Loops
  // For loop
  for (int i = 0; i < 5; i++) {
    print('Count: $i');
  }

  // For-in loop
  List<String> fruits = ['apple', 'banana', 'orange'];
  for (String fruit in fruits) {
    print(fruit);
  }

  // While loop
  int counter = 0;
  while (counter < 3) {
    print('While: $counter');
    counter++;
  }

  // Do-while loop
  int num = 0;
  do {
    print('Do-while: $num');
    num++;
  } while (num < 3);
}
```

## Functions

```dart
// Function declaration
int add(int a, int b) {
  return a + b;
}

// Optional parameters
void greet(String name, [String? title]) {
  if (title != null) {
    print('Hello $title $name');
  } else {
    print('Hello $name');
  }
}

// Named parameters
void createUser({required String name, int age = 18, String? email}) {
  print('Name: $name, Age: $age, Email: $email');
}

// Arrow functions
int multiply(int a, int b) => a * b;

// Higher-order functions
List<int> numbers = [1, 2, 3, 4, 5];
List<int> doubled = numbers.map((n) => n * 2).toList();
print(doubled); // [2, 4, 6, 8, 10]

void main() {
  print(add(5, 3)); // 8
  greet('John');
  greet('Dr. Smith', 'Dr.');
  createUser(name: 'Alice', age: 25, email: 'alice@example.com');
}
```

## Object-Oriented Programming

### Classes and Objects

```dart
class Person {
  // Properties
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Named constructor
  Person.fromBirthYear(String name, int birthYear) {
    this.name = name;
    this.age = DateTime.now().year - birthYear;
  }

  // Method
  void introduce() {
    print('Hi, I\'m $name and I\'m $age years old.');
  }

  // Getter
  String get description => '$name is $age years old';

  // Setter
  set newAge(int newAge) {
    if (newAge > 0) {
      age = newAge;
    }
  }
}

void main() {
  // Create objects
  Person person1 = Person('Alice', 30);
  Person person2 = Person.fromBirthYear('Bob', 1990);

  person1.introduce();
  print(person2.description);

  person1.newAge = 31;
  print(person1.description);
}
```

### Inheritance

```dart
class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print('Some sound');
  }
}

class Dog extends Animal {
  String breed;

  Dog(String name, this.breed) : super(name);

  @override
  void makeSound() {
    print('Woof!');
  }

  void fetch() {
    print('$name is fetching!');
  }
}

class Cat extends Animal {
  Cat(String name) : super(name);

  @override
  void makeSound() {
    print('Meow!');
  }
}

void main() {
  Dog dog = Dog('Buddy', 'Golden Retriever');
  Cat cat = Cat('Whiskers');

  dog.makeSound(); // Woof!
  dog.fetch(); // Buddy is fetching!

  cat.makeSound(); // Meow!
}
```

### Abstract Classes and Interfaces

```dart
// Abstract class
abstract class Shape {
  double get area;
  double get perimeter;

  void draw() {
    print('Drawing shape');
  }
}

// Interface (implemented via abstract class)
abstract class Printable {
  void printInfo();
}

class Circle extends Shape implements Printable {
  double radius;

  Circle(this.radius);

  @override
  double get area => 3.14159 * radius * radius;

  @override
  double get perimeter => 2 * 3.14159 * radius;

  @override
  void printInfo() {
    print('Circle with radius $radius');
  }
}

class Rectangle extends Shape implements Printable {
  double width, height;

  Rectangle(this.width, this.height);

  @override
  double get area => width * height;

  @override
  double get perimeter => 2 * (width + height);

  @override
  void printInfo() {
    print('Rectangle ${width}x${height}');
  }
}
```

### Mixins

```dart
mixin Swimmer {
  void swim() {
    print('Swimming...');
  }
}

mixin Flyer {
  void fly() {
    print('Flying...');
  }
}

class Duck with Swimmer, Flyer {
  String name;

  Duck(this.name);

  void quack() {
    print('Quack!');
  }
}

void main() {
  Duck duck = Duck('Donald');
  duck.swim(); // Swimming...
  duck.fly(); // Flying...
  duck.quack(); // Quack!
}
```

## Collections

### Lists

```dart
void main() {
  // Creating lists
  List<int> numbers = [1, 2, 3, 4, 5];
  List<String> fruits = ['apple', 'banana', 'orange'];

  // Adding elements
  numbers.add(6);
  fruits.addAll(['grape', 'kiwi']);

  // Accessing elements
  print(numbers[0]); // 1
  print(fruits.length); // 5

  // Iterating
  for (int num in numbers) {
    print(num);
  }

  // List methods
  numbers.remove(3);
  numbers.insert(0, 0);
  print(numbers.contains(5)); // true

  // List comprehension (similar)
  List<int> squares = numbers.map((n) => n * n).toList();
  print(squares);
}
```

### Sets

```dart
void main() {
  // Creating sets
  Set<String> colors = {'red', 'green', 'blue'};
  Set<int> numbers = {1, 2, 3, 1}; // Duplicates removed

  // Adding elements
  colors.add('yellow');
  colors.addAll({'purple', 'orange'});

  // Operations
  print(colors.contains('red')); // true
  colors.remove('green');

  // Set operations
  Set<String> primary = {'red', 'blue', 'yellow'};
  Set<String> secondary = {'orange', 'green', 'purple'};

  print(primary.union(secondary)); // Union
  print(primary.intersection(secondary)); // Intersection
  print(primary.difference(secondary)); // Difference
}
```

### Maps

```dart
void main() {
  // Creating maps
  Map<String, int> ages = {
    'Alice': 30,
    'Bob': 25,
    'Charlie': 35
  };

  Map<String, dynamic> person = {
    'name': 'John',
    'age': 28,
    'isStudent': false
  };

  // Accessing values
  print(ages['Alice']); // 30
  print(person['name']); // John

  // Adding/modifying
  ages['David'] = 40;
  person['age'] = 29;

  // Checking existence
  print(ages.containsKey('Alice')); // true
  print(ages.containsValue(25)); // true

  // Iterating
  ages.forEach((name, age) {
    print('$name is $age years old');
  });

  // Keys and values
  print(ages.keys); // (Alice, Bob, Charlie, David)
  print(ages.values); // (30, 25, 35, 40)
}
```

## Generics

```dart
// Generic class
class Box<T> {
  T value;

  Box(this.value);

  T getValue() {
    return value;
  }

  void setValue(T newValue) {
    value = newValue;
  }
}

// Generic function
T findMax<T extends Comparable<T>>(List<T> items) {
  if (items.isEmpty) throw Exception('List is empty');

  T max = items[0];
  for (T item in items) {
    if (item.compareTo(max) > 0) {
      max = item;
    }
  }
  return max;
}

void main() {
  // Using generic class
  Box<int> intBox = Box(42);
  Box<String> stringBox = Box('Hello');

  print(intBox.getValue()); // 42
  print(stringBox.getValue()); // Hello

  // Using generic function
  List<int> numbers = [1, 5, 3, 9, 2];
  print(findMax(numbers)); // 9

  List<String> words = ['apple', 'banana', 'cherry'];
  print(findMax(words)); // cherry
}
```

## Asynchronous Programming

### Futures

```dart
void main() async {
  print('Start');

  // Simple future
  Future<String> fetchData() async {
    await Future.delayed(Duration(seconds: 2));
    return 'Data loaded';
  }

  String result = await fetchData();
  print(result);

  // Future with error handling
  Future<int> divide(int a, int b) async {
    await Future.delayed(Duration(seconds: 1));
    if (b == 0) {
      throw Exception('Cannot divide by zero');
    }
    return a ~/ b;
  }

  try {
    int quotient = await divide(10, 2);
    print('Result: $quotient');
  } catch (e) {
    print('Error: $e');
  }

  print('End');
}
```

### Streams

```dart
Stream<int> countDown(int from) async* {
  for (int i = from; i >= 0; i--) {
    await Future.delayed(Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  // Listen to stream
  countDown(5).listen(
    (value) => print('Countdown: $value'),
    onDone: () => print('Done!'),
    onError: (error) => print('Error: $error')
  );

  // Transform stream
  Stream<int> numbers = Stream.fromIterable([1, 2, 3, 4, 5]);
  Stream<int> squares = numbers.map((n) => n * n);

  await for (int square in squares) {
    print('Square: $square');
  }
}
```

## Error Handling

```dart
void main() {
  // Try-catch
  try {
    int result = 10 ~/ 0; // Integer division by zero
    print(result);
  } catch (e) {
    print('Caught error: $e');
  }

  // Custom exception
  class InvalidAgeException implements Exception {
    String message;
    InvalidAgeException(this.message);

    @override
    String toString() => 'InvalidAgeException: $message';
  }

  void setAge(int age) {
    if (age < 0 || age > 150) {
      throw InvalidAgeException('Age must be between 0 and 150');
    }
    print('Age set to $age');
  }

  try {
    setAge(25);
    setAge(-5);
  } catch (e) {
    print(e);
  }

  // Finally block
  try {
    print('Trying...');
    throw Exception('Something went wrong');
  } catch (e) {
    print('Caught: $e');
  } finally {
    print('This always executes');
  }
}
```

## Libraries and Packages

### Using Packages

```yaml
# pubspec.yaml
name: my_app
dependencies:
  http: ^0.13.4
  shared_preferences: ^2.0.15
```

```dart
// Using http package
import 'package:http/http.dart' as http;

Future<void> fetchUserData() async {
  final response = await http.get(Uri.parse('https://api.example.com/users'));

  if (response.statusCode == 200) {
    print('Response: ${response.body}');
  } else {
    print('Failed to load data');
  }
}
```

### Creating Libraries

```dart
// math_utils.dart
library math_utils;

int add(int a, int b) => a + b;
int multiply(int a, int b) => a * b;

// main.dart
import 'math_utils.dart';

void main() {
  print(add(5, 3)); // 8
  print(multiply(4, 2)); // 8
}
```

## Testing

```dart
// Using test package
import 'package:test/test.dart';

int add(int a, int b) => a + b;

void main() {
  group('Math operations', () {
    test('Addition', () {
      expect(add(2, 3), equals(5));
      expect(add(-1, 1), equals(0));
    });

    test('Edge cases', () {
      expect(add(0, 0), equals(0));
      expect(add(100, 200), equals(300));
    });
  });
}
```

## Best Practices

- **Use const constructors** when possible for performance
- **Prefer final** for variables that don't change
- **Use meaningful names** for variables and functions
- **Handle null safety** properly (Dart 2.12+)
- **Write tests** for your code
- **Use async/await** for asynchronous operations
- **Follow Dart style guide** for consistent code
- **Use generics** for type safety
- **Keep functions small** and focused

## Learning Resources

### Official Documentation
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Dart API Reference](https://api.dart.dev/)
- [Dart Packages](https://pub.dev/)

### Tutorials and Courses
- [Dart Codelabs](https://dart.dev/codelabs)
- [Flutter for Beginners](https://flutter.dev/docs/get-started/codelab)
- [Dart Programming Tutorial](https://www.tutorialspoint.com/dart_programming/index.htm)
- [Udemy Dart Courses](https://www.udemy.com/topic/dart-programming/)

### Books
- "Dart in Action" by Chris Buckett
- "Flutter in Action" by Eric Windmill (includes Dart)
- "Dart: Up and Running" by Kathy Walrath and Seth Ladd

### Practice Platforms
- [DartPad](https://dartpad.dev/) - Online Dart editor
- [LeetCode Dart Problems](https://leetcode.com/problemset/all/?search=dart)
- [Exercism Dart Track](https://exercism.org/tracks/dart)

### Communities
- [Dart Reddit](https://www.reddit.com/r/dartlang/)
- [Flutter Community](https://flutter.dev/community)
- [Stack Overflow Dart](https://stackoverflow.com/questions/tagged/dart)
- [Dart Discord](https://discord.gg/dart)

## Next Steps

1. **Build Console Apps**: Practice with command-line applications
2. **Learn Flutter**: Use Dart for mobile app development
3. **Explore Web Development**: Dart for web with AngularDart
4. **Server-Side Dart**: Build backend services with Dart
5. **Contribute to Open Source**: Dart and Flutter projects
6. **Advanced Topics**: Isolates, reflection, and metaprogramming
7. **Testing and CI/CD**: Automated testing and deployment

Dart is a versatile language that serves as the foundation for Flutter development while being powerful enough for standalone applications. Its clean syntax and modern features make it enjoyable to learn and use. Start with the basics, build small projects, and gradually explore more advanced concepts.

Happy coding with Dart!