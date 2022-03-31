window.onload = go;
function go() {
  // Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function () {
    genRandQuote();
  });

  $("#tweet-quote").click(function () {});

  // Generate a random quote when window is loaded initially
  genRandQuote();
}

//Quotes//
function genRandQuote() {
  var quotes = [
    {
      id: 1,
      text: '"Aquellos que no aprecian la vida no merecen la vida"',
      source: "-JigSaw",
    },
    {
      id: 2,
      text: '"El tiempo lo cambia todo, eso es lo que la gente dice, pero no es verdad. Hacer cosas cambia las cosas. No hacer nada deja las cosas exactamente como están"',
      source: "-Dr House",
    },
    {
      id: 3,
      text: '"Throw me to the flames,Watch me burn,Set my world ablaze,Watch me burn"',
      source: "-Bring Me the horizon",
    },
    {
      id: 4,
      text: "“Perder a la gente que amas te afecta. Se entierra dentro de ti y se convierte en este gran y profundo agujero de dolor. No desaparece por arte de magia, ni siquiera cuando dejas de estar oficialmente de luto.”",
      source: " -Carrie Jones ",
    },
    {
      id: 5,
      text: '"Si tengo que esperar, yo te espero,Quiero que tú y yo volemos juntos hasta el cielo, Quiero ir a un lugar donde nunca nadie ha pisado, Eres mi presente, serás mi futuro, y eres lo mejor que me ha pasado"',
      source: "-Porta",
    },
  ];
  var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr(
    "href",
    stringToClickToTweetURL("'" + randQuote.text + '"-' + randQuote.source)
  );
}

  //fetching//
function stringToClickToTweetURL(str) {
  var stringToConvert = str
    .split("")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
  return resultString;
}

