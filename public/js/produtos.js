const produtos = [
    {
        id:1,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"

        
    },
    {
        id:2,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:3,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:4,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:5,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:6,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:7,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:8,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    {
        id:9,
        nome:"Tinta automotiva",
        descricao:"500 ml de tinta automotiva",
        cor: "vermelho",
        preco:30.00,
        marca:"suvinil",
        imagem: "public/img/frascotinta.jpg"
        
    },
    
];
//  captura a referência do elemento html onde a lista de produtos será inserida
const listaProdutos = document.getElementById("meusProdutos");

produtos.forEach(produto => {
    const divProduto = document.createElement("div");
    divProduto.classList.add("produto");

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    divProduto.appendChild(imagem);

    const nome = document.createElement("h2");
    nome.textContent = produto.nome;
    divProduto.appendChild(nome);

    const descricao = document.createElement("p");
    descricao.textContent = produto.descricao;
    divProduto.appendChild(descricao);

    const preco = document.createElement("p");
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`; // Formata o preço com duas casas decimais
    divProduto.appendChild(preco);

    listaProdutos.appendChild(divProduto);
});

// Captura a referência para todos os elementos de produto
const produtoset = document.querySelectorAll(".produto");

// Adiciona um ouvinte de evento para cada produto
produtoset.forEach(produtos => {
    produtos.addEventListener("mouseenter", () => {
        produtos.classList.add("hovered"); // Adiciona uma classe CSS quando o mouse entra no produto
    });

    produtos.addEventListener("mouseleave", () => {
        produtos.classList.remove("hovered"); // Remove a classe CSS quando o mouse sai do produto
    });
});
