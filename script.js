//Inicia canvas
var c = document.getElementById('canvas'),
    ctx = c.getContext('2d'),
    LARGURA = c.width = 500,
    ALTURA = c.height = 500,
        t=0;
var DesenhaGrade = function () {

            //Pinta canvas
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, LARGURA, ALTURA);


            //Desenha a grade
            var i, qtdQuadrados = 2;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#EEEEEE';
            for (i = -qtdQuadrados; i <= qtdQuadrados; i++) {
                ctx.moveTo((LARGURA / 2) - (LARGURA / (qtdQuadrados*2)) * i, 0);
                ctx.lineTo((LARGURA / 2) - (LARGURA / (qtdQuadrados * 2)) * i, ALTURA);
            }
            for (i = -qtdQuadrados; i <= qtdQuadrados; i++) {
                ctx.moveTo(0, (ALTURA / 2) - (ALTURA / (qtdQuadrados * 2)) * i);
                ctx.lineTo(LARGURA, (ALTURA / 2) - (ALTURA / (qtdQuadrados * 2)) * i);
            }
            ctx.stroke();
            ctx.closePath();
        }

        var onda = {
            x: 0,
            y: 0,
            k: 0,
            w: 0,
            amplitude:50,
            lambda: 125,
            frequencia: 0,
            velocidade: 0,
            periodo: 0,
            progressiva:true
        };


        onda.periodo = 1 / onda.frequencia;
        onda.k = (2 * Math.PI) / onda.lambda;
        onda.w = (2 * Math.PI) / onda.periodo;
        onda.velocidade = onda.lambda * onda.frequencia;
        if (onda.progressiva)
            onda.x = 0;
        else
            onda.x = LARGURA;
    //Desenha a onda
        var DesenhaOnda = function () {

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(0, ALTURA / 2);
            ctx.fillStyle = '#EEEE00';
            if (onda.progressiva) {
                onda.y = Math.round(onda.amplitude * Math.sin((onda.k * onda.x) - (onda.w * t)));
                ctx.fillRect(onda.x, onda.y, 2, 2);
                onda.x++;
                t++;
                if (onda.x < LARGURA)
                    setTimeout(DesenhaOnda, 10);
            }
            else {
                onda.y = Math.round(onda.amplitude * Math.sin((onda.k * onda.x) + (onda.w * t)));
                ctx.fillRect(onda.x, onda.y, 2, 2);
                onda.x--;
                t++;
                if(onda.x>0)
                setTimeout(DesenhaOnda, 10);
            }


        }

        DesenhaGrade();

        DesenhaOnda();
