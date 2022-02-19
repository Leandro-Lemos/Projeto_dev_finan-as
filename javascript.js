const Modal = {
    open(){
        //abrir modal
        //adicionar classe active
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        //fechar modal
        //remover classe active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}