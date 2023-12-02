const form = document.getElementById('formFilme');
const outTitulo = document.getElementById('outTitulo');
const outTempo = document.getElementById('outTempo');

form.addEventListener('submit', (event) => {
    event.preventDefault();         // EVITA O COMPORTAMENTO PADRÃO DO SUBMIT

    const titulo = form.inNome.value;
    let tempo = Number(form.inTempo.value);

    const horas = Math.trunc(tempo / 60);
    const minutos = Math.trunc(tempo % 60);

    outTitulo.innerText = titulo
    outTempo.innerText = `o filme possui duração de ${horas}hora (s) e ${minutos} minuto(s)`
})