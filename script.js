fetch("https://api.chucknorris.io/jokes/6zbljdhqtd2oqdxxfe9tpq")
.then(data => data.json())
.then(factData => {
    const fact_text = factData.value;
    const factElem = document.getElementById('factElement');

    factElem.innerHTML = fact_text;
})
