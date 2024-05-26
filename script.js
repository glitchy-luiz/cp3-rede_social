const btnCriar = document.querySelector("#btnCriar")
const listaPosts = document.querySelector('#listaPosts')
const inputTexto = document.querySelector('#inputTexto')
const selectCategoria = document.querySelector('#selectCategoria')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const filtroCategoria = document.querySelector('#filtroCategoria')

const posts = []

var filtrado = posts.filter(function(filtro) { return filtro.categoria === filtroCategoria.value})

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault()

    criaPost()
})

filtroCategoria.addEventListener('click', function(filtro){
    filtro.preventDefault()

    renderizarNaTela()
})

//create
function criaPost(){
    const postNovo = {
        texto: inputTexto.value,
        categoria: selectCategoria.value,
        img1: img1.value,
        img2: img2.value,
        img3: img3.value,
        hora: new Date().toLocaleString()
    }

    posts.unshift(postNovo)

    renderizarNaTela()
}

//read
window.onload = renderizarNaTela()
let listaFiltrada = []
function filtroCat(){
    posts.forEach(
        post =>{
            if (post.categoria === filtroCategoria.value){
                listaFiltrada.append(post)
            }
        }
    )
}

function renderizarNaTela(){

    listaPosts.innerHTML = ''

    posts.forEach(
        post => {
            let novoPost = document.createElement('li')
            novoPost.innerHTML = `
            
            <div class='post'>
                <div class='infopost'>
                    <h1>${post.texto}</h1>

                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active tamanhoimg">
                            <img src="${post.img1}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item tamanhoimg">
                            <img src="${post.img2}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item tamanhoimg">
                            <img src="${post.img3}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <p>Categoria: ${post.categoria}</p>
                    <p>Data e hora: ${post.hora}</p>
                    <button onClick='editarPost(${posts.indexOf(post)})'> Editar </button>
                    <button onClick='apagarPost(${posts.indexOf(post)})'> Apagar </button>
                </div>
            </div>`

            if (post.categoria === filtroCategoria.value){
                listaPosts.append(novoPost)
            }
            if (filtroCategoria.value === 'todos'){
                listaPosts.append(novoPost)
            }

        }
    )
}

//update
function editarPost(idPost){
    const textoModificado = prompt('digite o novo nome: ', posts[idPost].texto)

    posts[idPost].texto = textoModificado

    renderizarNaTela()
}

//delete
function apagarPost(idPost){
    posts.splice(idPost, 1)

    renderizarNaTela()

}

console.log(date.toLocaleString)