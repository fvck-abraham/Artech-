/* PARTICULAS GLOBALES */

const canvas =
document.getElementById("bgCanvas");

if(canvas){

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    let particles = [];

    class Particle{

        constructor(){

            this.x =
            Math.random() * canvas.width;

            this.y =
            Math.random() * canvas.height;

            this.size =
            Math.random() * 2 + 1;

            this.speedX =
            (Math.random() - .5) * .25;

            this.speedY =
            (Math.random() - .5) * .25;
        }

        update(){

            this.x += this.speedX;
            this.y += this.speedY;

            if(this.x > canvas.width)
            this.x = 0;

            if(this.x < 0)
            this.x = canvas.width;

            if(this.y > canvas.height)
            this.y = 0;

            if(this.y < 0)
            this.y = canvas.height;
        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            "rgba(37,99,235,.55)";

            ctx.fill();
        }
    }

    function init(){

        particles = [];

        for(let i = 0; i < 120; i++){

            particles.push(
                new Particle()
            );

        }

    }

    function connect(){

        for(let a = 0; a < particles.length; a++){

            for(let b = a; b < particles.length; b++){

                let dx =
                particles[a].x -
                particles[b].x;

                let dy =
                particles[a].y -
                particles[b].y;

                let distance =
                dx * dx + dy * dy;

                if(distance < 12000){

                    ctx.beginPath();

                    ctx.strokeStyle =
                    "rgba(37,99,235,.08)";

                    ctx.lineWidth = 1;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();
                }
            }
        }
    }

    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        for(let i of particles){

            i.update();
            i.draw();

        }

        connect();

        requestAnimationFrame(
            animate
        );
    }

    init();
    animate();

    window.addEventListener(
    "resize",
    () => {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;

        init();

    });

}