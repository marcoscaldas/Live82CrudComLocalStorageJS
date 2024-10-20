function limparLocalStorage(){
    localStorage.clear();
   // carregarTarefas();
    alert('Todas as tarefas foram excluidas!');
}

 function carregarTarefas(){
    const tarefas = JSON.parse( localStorage.getItem('tarefas')) || [];
    const listaDeTarefas =
    document.getElementById('listaDeTarefas');

    listaDeTarefas.innerHTML = '';

    tarefas.forEach( (tarefa, indice) =>{ 

        const elementoTarefa = document.createElement('div');
        elementoTarefa.className = 'task';
        elementoTarefa.innerHTML = `
        <span>${tarefa}</span>
        <button onclick="editarTarefa(${indice})"> Editar </button>
        <button onclick="excluirTarefa(${indice})"> Excluir </button>
        `;
        listaDeTarefas.appendChild(elementoTarefa);
    });  
}

function adicionarTarefa(){
    const inputTarefa = document.getElementById('taskInput');
    const tarefa = inputTarefa.value.trim();      

    if (tarefa) {
       const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(tarefa);  
            localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
            inputTarefa.value = '';  
            carregarTarefas();  
    }else{
        alert('Digite uma tarefa!');
    }
}



function editarTarefa(){
    const tarefas = JSON.parse( localStorage.getItem('tarefas')) || [];
    const novaTarefa = prompt('Edite a tarefa:', tarefas[indice]);

    if(novaTarefa !== null && novaTarefa.trim() !==''){
        tarefas[indice] = novaTarefa;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();

    }
}

function excluirTarefa( indice ){
    const tarefas = JSON.parse( localStorage.getItem('tarefas')) || [];

    tarefas.splice(indice, 1);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    carregarTarefas();
}

carregarTarefas();
