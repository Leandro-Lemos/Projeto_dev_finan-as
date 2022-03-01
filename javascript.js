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
        amount: -50001,
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
        amount: -20012,
        date: '32/01/2021'
    },

    {
        id: 4,
        description: 'APP',
        amount: 20000,
        date: '03/01/2021'
    },


]

const Transaction = {
    incomes() {
        let income = 0;
        //somar as entradas
        // pegar todas as transações 
        //para cada transação
        transactions.forEach(transaction =>{
            if (transaction.amount > 0 ) {
                income = income + transaction.amount
            }
        })
        // para cada uma verificar se a transação maior que zero
        // se sim somar a variavel e retornar a variável
        return income
    },
    expenses() {
        let expense = 0;
        //somar as entradas
        // pegar todas as transações 
        //para cada transação
        transactions.forEach(transaction =>{
            if (transaction.amount < 0 ) {
                expense = expense + transaction.amount
            }
        })
        // para cada uma verificar se a transação maior que zero
        // se sim somar a variavel e retornar a variável
        return expense
        
    },
    total() {
        //entradas menos saídas
        return "discover"
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

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transação">
            </td>
        
        `
        return html
    },

    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Transaction.incomes()

        document.getElementById('expenseDisplay').innerHTML = Transaction.expenses()

        document.getElementById('totalDisplay').innerHTML = Transaction.total()
    }
}


const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })


        return signal + value
    }
}


// for each para carregar os indices do arrays

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

DOM.updateBalance()


