const notesContainer = document.querySelector('.notes-container')
const crateBtn = document.querySelector('.btn')
let notes = document.querySelector('input-box')

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateStoreage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}

crateBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p')
    let img  = document.createElement('img')
    inputBox.className = 'input-box'
    inputBox.setAttribute('contenteditable', 'true')
    img.src = 'images/delete.png'
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStoreage()
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStoreage()
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})


