//Inicia canvas
var c = document.getElementById('canvas'),
    ctx = c.getContext('2d'),
    LARGURA = c.width = 500,
    ALTURA = c.height = 500,
        t=0, ultimoPreto=false;
var DesenhaGrade = function () {

            //Pinta canvas
            ctx.fillStyle = 'rgba(8, 99, 24, 1)';
            ctx.fillRect(0, 0, LARGURA, ALTURA);


            //Desenha a grade
            var i, qtdQuadrados = 5;
            ctx.beginPath();
            ctx.lineWidth = 0.5;
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
        
        var DesenhaOnda = function () {
            
            ctx.strokeStyle = onda.cor;
            if (onda.progressiva) {
                onda.y = Math.round(onda.amplitude * Math.sin((onda.k * onda.x) - (onda.w * t)))+ALTURA/2;
                ctx.lineTo(onda.x, onda.y);
                onda.x++;
                t++;
                if (onda.x < LARGURA)
                    setTimeout(DesenhaOnda, 1);
                else{

                    document.querySelector('.violeta').disabled=false;
                    document.querySelector('.anil').disabled=false;
                    document.querySelector('.azul').disabled=false;
                    document.querySelector('.verde').disabled=false;
                    document.querySelector('.amarelo').disabled=false;
                    document.querySelector('.laranja').disabled=false;
                    document.querySelector('.vermelho').disabled=false;
                    document.querySelector('.btn').disabled=false;
                 }
            }
            else {
                onda.y = Math.round(onda.amplitude * Math.sin((onda.k * onda.x) + (onda.w * t)))+ALTURA/2;
                ctx.lineTo(onda.x, onda.y);
                onda.x--;
                t++;
                if(onda.x>0)
                    setTimeout(DesenhaOnda, 1);
                else{
                    document.querySelector('.violeta').disabled=false;
                    document.querySelector('.anil').disabled=false;
                    document.querySelector('.azul').disabled=false;
                    document.querySelector('.verde').disabled=false;
                    document.querySelector('.amarelo').disabled=false;
                    document.querySelector('.laranja').disabled=false;
                    document.querySelector('.vermelho').disabled=false;
                    document.querySelector('.btn').disabled=false;
                 }
            }
            
            ctx.lineWidth=4;
            ctx.stroke();
        }

        //passa os dados do campo a variável
        function CriarOnda(amp, lam, cor, fre, vel, per, tipo) {
            
            if(amp<=250 && amp>0 && lam<=1000 && lam>=10 ){
                fre=1;
                var tipo = document.querySelector('input[id="tipo"]:checked').value;
                if(tipo === "progressiva")
                    aux = true;
                
                if(tipo === "regressiva")
                    aux = false;

                var onda = {
                    x: 0,
                    y: 0,
                    k: 0,
                    w: 0,
                    amplitude:amp,
                    lambda: lam,
                    frequencia: fre,
                    velocidade: vel,
                    periodo: per,
                    progressiva: aux,
                    cor:cor
                };
                passaDados(onda);
            
            }
        }

        var onda;
        DesenhaGrade();
        function passaDados(dados)
        {

            this.onda = dados;

            console.log(onda);
            
            if(onda.cor=="#000000" || ultimoPreto){
                DesenhaGrade();
                if(onda.cor=="#000000")
                    ultimoPreto=true;
                else
                    ultimoPreto=false;
            }else
                ultimoPreto=false; 
            
         
            onda.periodo = 1 / onda.frequencia;
            onda.k = (2 * Math.PI) / onda.lambda;
            onda.w = (2 * Math.PI) / onda.periodo;
            onda.velocidade = onda.lambda * onda.frequencia;
            if (onda.progressiva)
                onda.x = 0;
            else
                onda.x = LARGURA;

            document.querySelector('.violeta').disabled=true;
            document.querySelector('.anil').disabled=true;
            document.querySelector('.azul').disabled=true;
            document.querySelector('.verde').disabled=true;
            document.querySelector('.amarelo').disabled=true;
            document.querySelector('.laranja').disabled=true;
            document.querySelector('.vermelho').disabled=true;
            document.querySelector('.btn').disabled=true;
                //Desenha a onda
                ctx.beginPath();
                DesenhaOnda();
            
        } 
        

        

        
