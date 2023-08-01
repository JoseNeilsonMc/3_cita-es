const quotes =[
    {
        quote: "É preciso escolher um caminho que não tenha fim, mas, ainda assim, caminhar sempre na expectativa de encontrá-lo.",
        author:"Geraldo Magela Amaral",
    },
    {
        quote: "A constância não consiste sempre em fazer as mesmas coisas, mas aquelas que tendem para o mesmo fim.",
        author:"Luís XIV",
    },
    {
        quote: "O futuro é incerto e o fim está sempre perto!",
        author:"Jim Morrison",
    },
    {
        quote: "Chorei no fim de tudo, assim é a vida, uma morte a cada dia. Depois, como sempre, limpei o rosto e continuei.",
        author:"Tati Bernardi",
    },
    {
        quote: "No fim, é sempre assim. Tudo que for bom, verdadeiro, tudo o que realmente nos fizer bem, permanece.",
        author:"Tati Bernardi",
    },
    {
        quote: "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
        author:"Zig Ziglar",
    },
    {
        quote: "Estar focado em resultados antigos e em cicatrizes, vingar-se e ficar por cima, sempre fazem de você menos do que você é.",
        author:"Malcolm Forbes",
    },
    {
        quote: "O efeito da morte sobre aqueles que continuam vivos é sempre estranho, e muitas vezes terrível, pela destruição de desejos inocentes.",
        author:"Virginia Woolf",
    },
    {
        quote: "Tipo efeito borboleta, tento voltar pra concertar, mas sempre dá alguma treta.",
        author:"Emicida",
    },
    {
        quote: "Há sempre um fim de tarde disposto a pacificar um coração turbulento.",
        author:"Tato Villanova",
    },

];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
}
quoteBtn.addEventListener("click", getQuote);