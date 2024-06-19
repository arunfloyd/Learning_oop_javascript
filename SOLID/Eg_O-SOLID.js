class Shape {
    draw() {
      throw new Error('This method should be overridden');
    }
  }
  
  class Circle extends Shape {
    draw() {
      console.log('Drawing a circle');
    }
  }
  
  class Square extends Shape {
    draw() {
      console.log('Drawing a square');
    }
  }
  
  function renderShapes(shapes) {
    shapes.forEach(shape => shape.draw());
  }
  
  const shapes = [new Circle(), new Square()];
  renderShapes(shapes);
  