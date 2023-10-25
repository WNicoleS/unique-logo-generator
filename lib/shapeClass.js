class shapeClass {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    } 

    message() {
        console.log(`Logo created`);
    }
}

class Triangle extends shapeClass {
    constructor(text, color) {   
        super(text, color);
    }

    message() {
        super.message();
    }

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 0 0, 250 300, 250" fill="${this.color}" />

    <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
             
</svg>`  
    }

}

class Square extends shapeClass {
    constructor(text, color) {   
        super(text, color);    
    }

    message() {
        super.message();
    }    

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
    <rect width="150" height="150" fill="${this.color}" />
                    
    <text x="75" y="95" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
                    
</svg>`
    }
}

class Circle extends shapeClass {
    constructor(text, color) {   
        super(text, color);
    }

    message() {
        super.message();
    }   

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
                    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
                
</svg>`
    
    }
}

module.exports = { Triangle, Square, Circle };