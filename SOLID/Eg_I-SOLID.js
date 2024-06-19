class Document {}

class Printer {
  print(doc) {
    console.log('Printing document');
  }
}

class Scanner {
  scan(doc) {
    console.log('Scanning document');
  }
}

class MultiFunctionPrinter {
  constructor() {
    this.printer = new Printer();
    this.scanner = new Scanner();
  }

  print(doc) {
    this.printer.print(doc);
  }

  scan(doc) {
    this.scanner.scan(doc);
  }
}
