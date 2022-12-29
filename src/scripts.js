
function inserirTexto(elemento, texto) {
  // Método 1: innerHTML
  elemento.innerHTML = texto;
  elemento.style.font = "25px bold";


  // Método 2: textContent
  elemento.textContent = texto;

  // Método 3: appendChild
  const novoElemento = document.createElement("p");
  novoElemento.textContent = texto;
  elemento.appendChild(novoElemento);

  // Método 4: createTextNode
  const novoNovoTexto = document.createTextNode(texto);
  elemento.appendChild(novoNovoTexto);

  // Método 5: insertAdjacentHTML
  elemento.insertAdjacentHTML("beforeend", texto);

  // Método 6: insertAdjacentText
  elemento.insertAdjacentText("beforeend", texto);

  // Método 7: setAttribute
  elemento.setAttribute("data-texto", texto);

  // Método 8: style.color
  elemento.style.color = "red";
  elemento.textContent = texto;

  // Método 9: classList.add
  elemento.classList.add("texto-destaque");
  elemento.textContent = texto;


  // Método 10: insertBefore
  const novoElemento2 = document.createElement("p");
  novoElemento2.textContent = texto;
  elemento.parentNode.insertBefore(novoElemento2, elemento);
}

// Chame a função de inserção de texto em diferentes elementos da página
inserirTexto(document.getElementById("elemento1"), "Hello World!");
inserirTexto(document.getElementsByTagName("p")[0], "Hello World!");
inserirTexto(document.querySelector("#elemento2"), "Hello World!");
inserirTexto(document.getElementsByTagName("span")[0], "Hello World!");
inserirTexto(document.getElementsByTagName("li")[0], "Hello World!");
inserirTexto(document.getElementsByTagName("li")[1], "Hello World!");
inserirTexto(document.getElementsByTagName("li")[2], "Hello World!");









