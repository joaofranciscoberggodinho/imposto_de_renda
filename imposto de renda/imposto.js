const sbruto = document.getElementById("salario")
const nome = document.getElementById("nome")
const botao = document.getElementById("enviar")
const tabela = document.getElementById("tabela")
const resultado = document.getElementById("resultado")

botao.addEventListener('click', function(evento){
    evento.preventDefault()
    let nomeValor = nome.value
    let salarioValor = Number(sbruto.value)
    if(nome.value == "" || sbruto.value == 0){
        alert("Insira os campos de maneira adequada")
    }
    else{
        let porcentagemINSS, valorINSS, porcentagemIRPF, valorIRPF, salarioLiquido, flagINSS = 0, flagIRPF = 0

        if(salarioValor<=1751.81){
            porcentagemINSS = 0.08
            valorINSS = salarioValor * porcentagemINSS;
            porcentagemINSS *= 100
        }else if(salarioValor>=1751.82 && salarioValor<=2919.72){
            porcentagemINSS = 0.09
            valorINSS = salarioValor * porcentagemINSS;
            porcentagemINSS *= 100
        }else if(salarioValor>=2919.73 && salarioValor<=5839.45){
            porcentagemINSS = 0.11
            valorINSS = salarioValor * porcentagemINSS;
            porcentagemINSS *= 100
        }else{
            porcentagemINSS = 621.04
            valorINSS = 621.04
        }
        if(salarioValor - valorINSS <=1903.98){
            porcentagemIRPF = 0
            valorIRPF = 0
        }else if(salarioValor - valorINSS >=1903.99 && salarioValor - valorINSS <=2826.65){
            porcentagemIRPF = 0.075
            valorIRPF = (salarioValor - valorINSS) * porcentagemIRPF;
            porcentagemIRPF *= 100
        }else if(salarioValor - valorINSS >=2826.66 && salarioValor - valorINSS <=3751.05){
            porcentagemIRPF = 0.15
            valorIRPF = (salarioValor - valorINSS) * porcentagemIRPF;
            porcentagemIRPF *= 100
        }else if(salarioValor - valorINSS >=3751.06 && salarioValor - valorINSS <=4664.68){
            porcentagemIRPF = 0.225
            valorIRPF = (salarioValor - valorINSS) * porcentagemIRPF;
            porcentagemIRPF *= 100
        }else{
            porcentagemIRPF = 0.275
            valorIRPF = (salarioValor - valorINSS) * porcentagemIRPF; 
            porcentagemIRPF *= 100
        }

        porcentagemIRPF = parseFloat(porcentagemIRPF);
        porcentagemINSS = parseFloat(porcentagemINSS);
        valorIRPF = parseFloat(valorIRPF)
        valorINSS = parseFloat(valorINSS)
        porcentagemIRPF = porcentagemIRPF.toFixed(1)
        porcentagemINSS = porcentagemINSS.toFixed(1)
        valorIRPF = valorIRPF.toFixed(2)
        valorINSS = valorINSS.toFixed(2)
        
        salarioLiquido = salarioValor - valorINSS - valorIRPF
        salarioLiquido = salarioLiquido.toFixed(2)

        tabela.innerHTML += `<tr>
                            <td>${nome.value}</td>
                            <td>${salarioValor}</td>
                            <td>${porcentagemINSS}</td>
                            <td>${valorINSS}</td>
                            <td>${porcentagemIRPF}</td>
                            <td>${valorIRPF}</td>
                            <td>${salarioLiquido}</td>
                            </tr>`

        resultado.innerHTML += `<p> Nome: ${nome.value} <br/>
                                Salário Bruto: ${salarioValor} <br/>
                                Porcentagem INSS: ${porcentagemINSS} <br/>
                                Valor INSS: ${valorINSS} <br/>
                                Porcentagem IRPF: ${porcentagemIRPF} <br/>
                                Valor IRPF: ${valorIRPF} <br/>
                                Salário Líquido: ${salarioLiquido} <br/>
                                </p>
                                `
}})