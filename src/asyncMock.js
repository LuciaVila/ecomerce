const product = [
    {
        id: "1",
        name: "Corp Boxer Negro",
        price: 8000,
        category: "Boxer",
        img: "https://acdn.mitiendanube.com/stores/002/713/424/products/corp-boxers-negro-ea55d0add7c1649ed016759019897563-1024-1024.webp",
        stock: 20,
        description: "Boxer liso de algodón y lycra con elástico tejido personalizado.",
    },

    {
        id: "2",
        name: "Boxer Calzoncillos G3",
        price: 6500,
        category: "Boxer",
        img: "https://http2.mlstatic.com/D_NQ_NP_734899-MLA69292617504_052023-O.webp",
        stock: 20,
        description: "Boxer G3 son elaborados en algodón, con tecnología seamless, ideales si buscas confort día a día.",
    },

    {
        id: "3",
        name: "Boxers X4 G3",
        price: 29999,
        category: "Pack",
        img: "https://http2.mlstatic.com/D_NQ_NP_910564-MLA50596813103_072022-O.webp",
        stock: 20,
        description: "Pack de 4 juegos de boxer elásticos con costura marca G3. Calidad superior para tu máximo confort.",
    },

    {
        id: "4",
        name: "Boxers X2 Dim",
        price: 15000,
        category: "Pack",
        img: "https://encantos.es/17022-large_default/pack-2-boxer-dim-a6c-a9s.jpg",
        stock: 20,
        description: "Fabricado con 95% Algodón Orgánico, 5% Spandex",
    },

    {
        id: "5",
        name: "Boxer",
        price: 8000,
        category: "Boxer",
        img:" https://acdn.mitiendanube.com/stores/001/073/394/products/_mg_116411-bf4df9f347b9d62d8b16287798169333-1024-1024.webp",
        stock: 20,
        description: "Calzoncillo Boxer de Algodón y Lycra, Calzoncillos cómodos sin costuras.",
    },

    {
        id: "6",
        name: "Boxers",
        price: 8000,
        category: "Boxer",
        img: "https://rusty.com.ar/cdn/shop/products/BoxerCompetition_3.png?v=1663338374&width=823",
        stock: 20,
        description: "Calzoncillo Boxer de Algodón y Lycra, Calzoncillos cómodos sin costuras.",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 500)
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productoId));
        }, 1000);
    });
};