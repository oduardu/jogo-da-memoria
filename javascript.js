document.addEventListener('DOMContentLoaded', ()=>{
    
    const grid = document.querySelector('.grid')
    const htmlPontos = document.querySelector('#resultado')
    let cartasEscolhidas = []
    let idCartasEscolhidas = []
    let cartasCertas = []


    const arrayCartas = [
        {
          name: 'batatfrita',
          img: 'cartas/fries.png'
        },
        {
          name: 'hamburguer',
          img: 'cartas/cheeseburger.png'
        },
        {
          name: 'picole',
          img: 'cartas/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'cartas/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'cartas/milkshake.png'
        },
        {
          name: 'cachorroquente',
          img: 'cartas/hotdog.png'
        },
        {
            name: 'batatfrita',
            img: 'cartas/fries.png'
          },
          {
            name: 'hamburguer',
            img: 'cartas/cheeseburger.png'
          },
          {
            name: 'picole',
            img: 'cartas/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'cartas/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'cartas/milkshake.png'
          },
          {
            name: 'cachorroquente',
            img: 'cartas/hotdog.png'
          }
      ]

      arrayCartas.sort(()=> 0.5 - Math.random())

      function criarJogo() {
          for(let x = 0; x < arrayCartas.length; x++){
              const carta = document.createElement('img')
              carta.setAttribute('src', 'cartas/blank.png')
              carta.setAttribute('data-id', x)
              carta.addEventListener('click', girarCarta)
              grid.appendChild(carta)
          }
      }

      function girarCarta() {
          let idCarta = this.getAttribute('data-id')
          cartasEscolhidas.push(arrayCartas[idCarta].name)
          idCartasEscolhidas.push(idCarta)
          this.setAttribute('src', arrayCartas[idCarta].img)
          if (cartasEscolhidas.length === 2){
              setTimeout(verificador, 500)
          }
        }

        function verificador() {
            const cartas = document.querySelectorAll('img')
            const primeira = idCartasEscolhidas[0]
            const segunda = idCartasEscolhidas[1]
            
            if(primeira == segunda) {
                cartas[primeira].setAttribute('src', 'cartas/blank.png')
                cartas[primeira].setAttribute('src', 'cartas/blank.png')
              alert('Você clicou na mesma imagem!!')
            }
            else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
              cartas[primeira].setAttribute('src', 'cartas/white.png')
              cartas[segunda].setAttribute('src', 'cartas/white.png')
              cartas[primeira].removeEventListener('click', girarCarta)
              cartas[segunda].removeEventListener('click', girarCarta)
              cartasCertas.push(cartasEscolhidas)
            } else {
              cartas[primeira].setAttribute('src', 'cartas/blank.png')
              cartas[segunda].setAttribute('src', 'cartas/blank.png')
              alert('Opss! Tente novamente!')
            }
            cartasEscolhidas = []
            idCartasEscolhidas = []
            htmlPontos.textContent = cartasCertas.length
            if  (cartasCertas.length === arrayCartas.length/2) {
                htmlPontos.textContent = 'Parabéns!!! Você conseguiu achar todas elas!!'
            }
          }
        criarJogo()
})
