const Modal = {
    open() {
        //abrir modal
        //adicionar classe active
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        //fechar modal
        //remover classe active do modal
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '32/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '32/01/2021'
    },

    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '32/01/2021'
    },


]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        //entradas menos saídas
    }
}

//Preciso pegar as transações do objeto (array) javascrip e inserir no html (parte da tabela)


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        
        //criando um elemento tr vazio
        const tr = document.createElement ('tr')
        //para capturar o tr da tabela abaixo
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        //console.log (tr.innerHTML)
        DOM.transactionsContainer.appendChild(tr)
       

    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = 

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transação">
            </td>
        
        `
        return html
    }
}

// for each para carregar os indices do arrays

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})


