const loop = ['L', 'p']

const numberInput = document.querySelector('#numberInput')

const loopFunction = () => {
    for (let i = 0; i <= numberInput.value; i++) {
        loop.splice(1, 0, 'o')

        str = loop.toString()
        
        document.querySelector('#output').innerHTML = str.replaceAll(',', '')

    }

}

document.querySelector('#loopButton').addEventListener('click', loopFunction)