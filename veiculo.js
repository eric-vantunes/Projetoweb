class Veiculo {
    constructor(){
        this.veiculos = localStorage.getItem('tbVeiculos') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbVeiculos'))
    }
    salva(veiculo){
        if(document.getElementById('modelo').getAttribute('disabled')==='disabled'){
            this.apaga(veiculo.modelo)
        }
    
      this.veiculos.push(veiculo)
      alert('Veiculo registrado!')  
      localStorage.setItem('tbVeiculos', JSON.stringify(this.veiculos))
    }

    edita(veiculo) {
        document.getElementById('modelo').value = veiculo.modelo
        document.getElementById('modelo').setAttribute('disabled','disabled')
        document.getElementById('pessoa').value = veiculo.pessoa
        document.getElementById('placa').value = veiculo.placa
        document.getElementById('telefone').value = veiculo.telefone 
        document.getElementById('cor').value = veiculo.cor
        document.getElementById('box').value = veiculo.box
        document.getElementById('entrada').value = veiculo.entrada
        document.getElementById('observacoes').value = veiculo.observacoes
    }
    apaga(veiculo){
        let index = this.veiculos.findIndex(veiculo => veiculo.modelo == modelo)
        this.veiculos.splice(index, 1)
        localStorage.setItem('tbVeiculos', JSON.stringify(this.veiculos))
        veiculo.atualiza()
    }

    lista(){
        const listagem = this.veiculos.map((veiculo) => (
            `<tr>
                <td>${veiculo.modelo}</td>    
                <td>${veiculo.pessoa}</td>
                <td>${veiculo.placa}</td>       
                <td>${veiculo.telefone}</td>
                <td>${veiculo.cor}</td>    
                <td>${veiculo.box}</td>
                <td>${veiculo.entrada}</td>
                <td>${veiculo.observacoes}</td>
                <td>
        <button id='apagar' onClick='veiculo.apaga(${veiculo.modelo})'>
        🗑️Apagar </button>
        <button id='editar' onClick='veiculo.edita(${JSON.stringify(veiculo)})'>
        🗒️Editar </button>
                </td>
             </tr>
            `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption>Controle de Veiculos</caption>
        <thead>
            <th>Modelo</th>      
            <th>Pessoa</th>
            <th>Placa</th>         
            <th>Telefone</th>
            <th>Cor</th>      
            <th>Box</th>
            <th>Entrada</th>
            <th>Observações</th> 
            <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>
        </table>    
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = veiculo.lista()
    }
}
//instanciamos um novo objeto
const veiculo = new Veiculo()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function(){
    const registro = {
        modelo: document.getElementById('modelo').value,
        pessoa: document.getElementById('pessoa').value,
        placa: document.getElementById('placa').value,
        telefone:document.getElementById('telefone').value,
        cor: document.getElementById('cor').value,
        box: document.getElementById('box').value,
        entrada: document.getElementById('entrada').value,
        observacoes: document.getElementById('observacoes').value
    }
    veiculo.salva(registro)
    
}
//tratamos a listagem
window.onload = function() {
    veiculo.atualiza()
}


