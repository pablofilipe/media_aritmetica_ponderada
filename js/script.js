let mediaArit = false
let mediaPond = false

function mediaAritimetica() {
    mediaArit = true
    displayNoneMenu()
    document.getElementById('media-aritmetica').style.display = 'block'
    document.getElementById('buttons').style.display = 'block'
}

function mediaPonderada() {
    mediaPond = true
    displayNoneMenu()
    document.getElementById('media-ponderada').style.display = 'block'
    document.getElementById('buttons').style.display = 'block'
}

function calcularMedia() {
    if ( mediaArit ) {
        let notama1 = document.getElementById('notama1').value
        let notama2 = document.getElementById('notama2').value

        if ( notama1 === '' || notama2 === '' ) {
            Swal.fire({
                icon: 'warning',
                title: 'Ops...',
                html: `Um ou mais valores não informados! <br> Verifique e tente novamente.`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } else {
            document.getElementById('resultado-calculo').style.display = 'block'
            let resultado = ( parseFloat(notama1) + parseFloat(notama2) ) / 2
            document.getElementById('resultado').innerHTML = resultado.toFixed(2)
        }
    } else {
        let notamp1 = document.getElementById('notamp1').value
        let pesomp1 = document.getElementById('pesomp1').value

        let notamp2 = document.getElementById('notamp2').value
        let pesomp2 = document.getElementById('pesomp2').value

        let notamp3 = document.getElementById('notamp3').value
        let pesomp3 = document.getElementById('pesomp3').value

        if ( (notamp1 === '' || pesomp1 === '') ||
            (notamp2 === '' || pesomp2 === '') ||
            (notamp3 === '' || pesomp3 === '') ) {
            Swal.fire({
                icon: 'warning',
                title: 'Ops...',
                html: `Um ou mais valores não informados! <br> Verifique e tente novamente.`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } else {
            let n1 = ( parseFloat(notamp1) * parseFloat(pesomp1) )
            let n2 = ( parseFloat(notamp2) * parseFloat(pesomp2) )
            let n3 = ( parseFloat(notamp3) * parseFloat(pesomp3) )
            let smPeso = parseFloat(pesomp1) + parseFloat(pesomp2) + parseFloat(pesomp3)

            let resultado = ( n1 + n2 + n3 ) / smPeso

            document.getElementById('resultado-calculo').style.display = 'block'
            document.getElementById('resultado').innerHTML = resultado.toFixed(2)
        }
    }
}

function realizarNovoCalculo() {
    clearCampos()
    document.getElementById('resultado-calculo').style.display = 'none'
}

function clearCampos() {
    if ( mediaArit ) {
        document.getElementById('notama1').value = ''
        document.getElementById('notama2').value = ''
    }

    if ( mediaPond ) {
        document.getElementById('notamp1').value = ''
        document.getElementById('pesomp1').value = ''
        document.getElementById('notamp2').value = ''
        document.getElementById('pesomp2').value = ''
        document.getElementById('notamp3').value = ''
        document.getElementById('pesomp3').value = ''
    }
}

function displayNoneMenu() {
    document.getElementById('menu').style.display = 'none'
}

function closePage() {
    clearCampos()

    if ( mediaArit ) {
        mediaArit = false
    }

    if ( mediaPond ) {
        mediaPond = false
    }

    document.getElementById('resultado').innerHTML = ''
    document.getElementById('media-ponderada').style.display = 'none'
    document.getElementById('media-aritmetica').style.display = 'none'
    document.getElementById('resultado-calculo').style.display = 'none'
    document.getElementById('buttons').style.display = 'none'
    document.getElementById('menu').style.display = 'block'
}