
let object = {
    start: function () {
        let canvas = document.querySelector('#canvas');
        let element = canvas.getContext('2d');

        let arr = [];
        for (let i = 0; i < 10; i++) {
            let BallsConstructor = new myConstructor(i * 20, i * 20, i);
            arr.push(BallsConstructor);
        }

        setInterval(() => {
            element.clearRect(0, 0, 200, 200);

            arr.forEach(Myelement => {
                Myelement.draw(element);
            });

            element.strokeRect(0, 0, 200, 200);
        }, 30);
    }
}

let myConstructor = function (x, y, size) {
    this.speedX = 3;
    this.speedY = -2;

    this.colorArray = ['red', 'green', 'blue', 'yellow', 'gold', 'orange', 'purple', 'brown', 'pink', 'grey'];
    this.myRandom = Math.floor(Math.random() * 10);
    console.log(this.myRandom);

    this.draw = function (element) {
        x += this.speedX;
        y += this.speedY;

        element.beginPath();
        element.fillStyle = this.colorArray[this.myRandom];
        element.arc(x, y, size, 0, Math.PI * 2);
        element.fill();


        if (x < 0 || x > 200) {
            this.speedX = - this.speedX;
        }
        if (y < 0 || y > 200) {
            this.speedY = - this.speedY;
        }
    }
}

object.start();

//===========================================================


// let object = {
//     start: function () {
//         let canvas = document.querySelector('#canvas');
//         let element = canvas.getContext('2d');

//         let arr = [];
//         for (let i = 0; i < 10; i++) {
//             let BallsConstructor = new myConstructor(i * 10, i * 10);
//             arr.push(BallsConstructor);
//         }

//         setInterval(() => {
//             element.clearRect(0, 0, 200, 200);

//             arr.forEach(Myelement => {
//                 Myelement.draw(element);
//             });

//             element.strokeRect(0, 0, 200, 200);
//         }, 30);
//     }
// }

// let myConstructor = function (x, y) {
//     this.speedX = 3;
//     this.speedY = -2;
//     this.draw = function (element) {
//         x += this.speedX;
//         y += this.speedY;

//         element.beginPath();
//         element.arc(x, y, 5, 0, Math.PI * 2);
//         element.fill();


//         if (x < 0 || x > 200) {
//             this.speedX = - this.speedX;
//         }
//         if (y < 0 || y > 200) {
//             this.speedY = - this.speedY;
//         }
//     }
// }

// object.start();
//===========================================================

// let object = {
//     start: function () {
//         let canvas = document.querySelector('#canvas');
//         let element = canvas.getContext('2d');

//         let BallsConstructor = new myConstructor();

//         setInterval(() => {
//             element.clearRect(0, 0, 200, 200);
//             element.beginPath();
//             BallsConstructor.draw(element);
//             element.fill();
//             element.strokeRect(0, 0, 200, 200);
//         }, 30);

//     }
// }

// let myConstructor = function () {
//     this.x = 100;
//     this.y = 100;
//     this.speedX = 3;
//     this.speedY = -2;
//     this.draw = function (element) {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         element.arc(this.x, this.y, 5, 0, Math.PI * 2);

//         if (this.x < 0 || this.x > 200) {
//             this.speedX = - this.speedX;
//         }
//         if (this.y < 0 || this.y > 200) {
//             this.speedY = - this.speedY;
//         }


//     }
// }

// object.start();


//===========================================================

// let object = {
//     start: function () {
//         let canvas = document.querySelector('#canvas');
//         let element = canvas.getContext('2d');
//         let BallsConstructor = new myConstructor();
//         element.beginPath();
//         BallsConstructor.draw(element);
//         element.strokeRect(0, 0, 200, 200);
//     }
// }

// let myConstructor = function () {
//     this.draw = function (element) {
//         element.arc(100, 100, 5, 0, Math.PI * 2);
//         element.fill();
//     }
// }

// object.start();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let object = {
//     start: function () {
//         let canvas = document.querySelector('#canvas');
//         let element = canvas.getContext('2d');


//         element.beginPath();
//         element.arc(100, 100, 5, 0, Math.PI * 2);
//         element.fill();
//         element.strokeRect(0, 0, 200, 200);
//     }
// }

// object.start();