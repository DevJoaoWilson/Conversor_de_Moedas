const click = document.getElementById('btn')
const select = document.getElementById('select')

const dolar = 5.2
const eur = 5.3

const calcular = () => {
    const input = document.getElementById('mount').value
    const Value1 = document.getElementById('cash1')
    const Value2 = document.getElementById('cash2')

    if (select.value === "R$ Real Brasileiro") {
        Value1.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: "BRL" }
        ).format(input)
    } else if (select.value === "USD Dólar") {

        Value2.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(input / dolar);
    } else{
        Value2.innerHTML = new Intl.NumberFormat('de-DE',
            {style:"currency", currency:'EUR'}
        ).format(input / eur)
    }


}

const troca = () => {

    const TextValue2 = document.getElementById('text-value2')



    if (select.value === "€ Euro") {
        TextValue2.innerHTML = "Euro"
    } else if (select.value === "USD Dólar") {
        TextValue2.innerHTML = "Dolar Americano"

    } else {
        TextValue2.innerHTML = "Real Brasileiro"

    }

    calcular()
}

click.addEventListener("click", calcular)
select.addEventListener("change", troca)