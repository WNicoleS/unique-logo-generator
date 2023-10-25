const { Triangle, Square, Circle } = require('./shapeClass.js');

describe('Triangle', () => {
    describe("render", () => {
        it("should create a green triangle that says SVG", () => {
        const newTriangle = new Triangle("SVG", "green");
        expect(newTriangle.render()).toEqual(
        `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 0 0, 250 300, 250" fill="green" />

    <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">SVG</text>
             
</svg>`
            );
        });
    });
});

describe('Square', () => {
    describe("render", () => {
        it("should create a blue square that says svg", () => {
        const newSquare = new Square("svg", "blue")
        expect(newSquare.render()).toEqual(
    `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
    <rect width="150" height="150" fill="blue" />
                    
    <text x="75" y="95" font-size="60" text-anchor="middle" fill="white">svg</text>
                    
</svg>`
            );
        });
    });
});

describe('Circle', () => {
    describe("render", () => {
        it("should create a pink circle that says new", () => {
        const newCircle = new Circle("new", "pink");
        expect(newCircle.render()).toEqual(
    `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="pink" />
                    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">new</text>
                
</svg>`
            );
        });
    });
});
