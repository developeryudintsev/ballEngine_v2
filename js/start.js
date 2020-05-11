
// let Ball = function () {
//     this.x = 0;
//     this.y = 0;
//     this.xSpeed = -2;
//     this.ySpeed = 3;

//     this.arrayX = [25, 50];
//     this.arrayY = [25, 50];

//     this.arrayXSpeed = [-1, -2];
//     this.arrayYSpeed = [2, 3];
// };

// Ball.prototype.start = function () {
//     setInterval(() => {
//         this.canvas = document.querySelector('#canvas');
//         this.element = canvas.getContext('2d');

//         this.element.beginPath();


//         for (let i = 0; i <= 1; i++) {
//             this.element.clearRect(0, 0, 200, 200);
//             this.x = this.arrayX[i];
//             this.y = this.arrayY[i];

//             this.xSpeed = this.arrayXSpeed[i];
//             this.ySpeed = this.arrayYSpeed[i];

//             this.x = (this.arrayX[i] = this.arrayX[i] + this.arrayXSpeed[i]);
//             this.y = (this.arrayY[i] = this.arrayY[i] + this.arrayYSpeed[i]);

//             console.log(this.x)
//             this.element.arc(this.arrayX[i], this.arrayY[i], 3, 0, Math.PI * 2);
//             this.element.stroke();

//             if (this.arrayX[i] < 0 || this.arrayX[i] > 200) {
//                 this.arrayXSpeed[i] = -this.arrayXSpeed[i];
//             }
//             if (this.arrayY[i] < 0 || this.arrayY[i] > 200) {
//                 this.arrayYSpeed[i] = -this.arrayYSpeed[i];
//             }
//         }
//         this.element.strokeRect(0, 0, 200, 200);
//     }, 30);
// };
