const productos = [
  {
    img: "images/social.52657.jpg",
    alt: "Fragancia Bath & Body Works Champagne",
    titulo: "Fragancia Bath & Body Works Champagne",
    precio: "$249",
    descripcion: "Fragancia Femenina Para Cualquier Ocasión",
    mensaje: "Fragancia Bath & Body Works Champagne $249"
  },
  {
    img: "images/Vestido Denim/1..PNG",
    alt: "Vestido Levi's Denim Negro",
    titulo: "Vestido Levi's Denim Negro",
    precio: "$449",
    descripcion: "Vestido Levi's De Mezclilla En Color Negro Talla M",
    mensaje: "Vestido Levi's Denim Negro $449"
  },
  {
    img: "images/Vestido F21 Sati/1.PNG",
    alt: "Vestido Satín Forever 21",
    titulo: "Vestido Satín Fucsia Forever 21",
    precio: "$249",
    descripcion: "Vestido Forever 21 Tela De Satín Color Fucsia Talla M-L",
    mensaje: "Vestido Satín Fucsia Forever 21 $249"
  },
  {
    img: "images/Vestido F21 Beige/unnamed.jpg",
    alt: "Vestido Stretch Beige Forever 21",
    titulo: "Vestido Stretch Beige Forever 21",
    precio: "$249",
    descripcion: "Vestido Forever 21 Tela Stretch Color Beige Talla XS",
    mensaje: "Vestido Stretch Beige Forever 21 $249"
  },
  {
    img: "images/Vestido F21/Captura.PNG",
    alt: "Vestido Floral Forever 21",
    titulo: "Vestido Floral Forever 21",
    precio: "$249",
    descripcion: "Vestido Floral Forever 21 Talla M.",
    mensaje: "Vestido Floral Forever 21 $249"
  },
  {
    img: "images/Trajes de baño P&B/Screenshot_20250605-173926.Moto App Launcher.png",
    alt: "Bikini Azul Pull&Bear",
    titulo: "Bikini Azul Pull&Bear",
    precio: "Top $220",
    descripcion: "Bikini Azul Pull&Bear<br>Top Talla XL",
    mensaje: "Bikini Azul Pull&Bear Top $220"
  },
  {
    img: "images/Trajes de baño P&B/images (14).jpeg",
    alt: "Bikini Zebra Pull&Bear",
    titulo: "Bikini Zebra Pull&Bear",
    precio: "Parte Baja Bikini $250",
    descripcion: "Bikini Zebra Pull&Bear<br>Talla XL",
    mensaje: "Bikini Zebra Pull&Bear Parte Baja Bikini $250"
  },
  {
    img: "images/Trajes de baño P&B/images (12).jpeg",
    alt: "Bikini Rosa Pull&Bear",
    titulo: "Bikini Rosa Pull&Bear",
    precio: "Top $250",
    descripcion: "Bikini Rosa Pull&Bear<br>Top Talla L",
    mensaje: "Bikini Rosa Pull&Bear Top $250"
  },
  {
    img: "images/Trajes de baño P&B/images (11).jpeg",
    alt: "Bikini Verde Agua Pull&Bear",
    titulo: "Bikini Verde Agua Pull&Bear",
    precio: "Parte Baja Bikini $250",
    descripcion: "Bikini Verde Agua Pull&Bear<br>Parte Baja Bikini Talla M",
    mensaje: "Bikini Verde Agua Pull&Bear Parte Baja Bikini $250"
  },
  {
    img: "images/Trajes de baño P&B/images (10).jpeg",
    alt: "Bikini Negro Pull&Bear",
    titulo: "Bikini Negro Pull&Bear",
    precio: "Top $250 / Parte Baja $250",
    descripcion: "Top Talla XL<br>Parte Baja S",
    mensaje: "Bikini Negro Pull&Bear Top $250 Parte Baja $250"
  },
  {
    img: "images/Trajes de baño P&B/images (8).jpeg",
    alt: "Bikini Verde Pull&Bear",
    titulo: "Bikini Verde Pull&Bear",
    precio: "Parte Baja Bikini $250",
    descripcion: "Bikini Verde Pull&Bear<br>Talla M",
    mensaje: "Bikini Verde Pull&Bear Parte Baja Bikini $250"
  },
  {
    img: "images/Trajes de baño P&B/17183693279830 (1).jpg",
    alt: "Bikini Floral Pull&Bear",
    titulo: "Bikini Floral Pull&Bear",
    precio: "Top $250 / Bikini Parte Baja $250",
    descripcion:
      "Top Talla XL<br>Bikini Parte Baja Talla M, S",
    mensaje: "Bikini Floral Pull&Bear Top $250 Bikini $250"
  },
  {
    img: "images/Top F21 Flores/unnamed.jpg",
    alt: "Top Floral Forever 21",
    titulo: "Top Floral Forever 21",
    precio: "$189",
    descripcion: "Top Floral Forever 21<br>Talla S/M",
    mensaje: "Top Floral Forever 21 $189"
  },
  {
    img: "images/Top F21 Azul/unnamed (1).jpg",
    alt: "Top Azul Forever 21",
    titulo: "Top Azul Forever 21",
    precio: "$179",
    descripcion: "Top Azul Forever 21<br>Talla M",
    mensaje: "Top Azul Forever 21 $179"
  },
  {
    img: "images/Short Levis Mid-Thigh/3.PNG",
    alt: "Short Levi's Mid-Thigh",
    titulo: "Short Levi's Mid-Thigh",
    precio: "$429",
    descripcion: "Short Levi's Mid-Thigh<br>Tallas 24, 31",
    mensaje: "Short Levi's Mid-Thigh $429"
  },
  {
    img: "images/Short Levis Baggy AC/1.PNG",
    alt: "Short Levi's Baggy",
    titulo: "Short Levi's Baggy",
    precio: "$429",
    descripcion: "Short Levi's Baggy<br>Talla 29",
    mensaje: "Short Levi's Baggy $429"
  },
  {
    img: "images/Short Levis Baggy/4.PNG",
    alt: "Short Levi's Baggy Black",
    titulo: "Short Levi's Baggy Black",
    precio: "$429",
    descripcion: "Tallas 24, 30, 34",
    mensaje: "Short Levi's Baggy Black $429"
  },
  {
    img: "images/Short Levis 501 Original/1304014-1200-auto.jpeg",
    alt: "Short Levi's 501 Original",
    titulo: "Short Levi's 501 Original",
    precio: "$429",
    descripcion: "Talla 28",
    mensaje: "Short Levi's 501 Original $429"
  },
  {
    img: "images/Pants F21/1.PNG",
    alt: "Pants Teddy Forever 21",
    titulo: "Pants Teddy Forever 21",
    precio: "$230",
    descripcion: "Pants Teddy Forever 21<br>Talla S/M",
    mensaje: "Pants Teddy Forever 21 $230"
  },
  {
    img: "images/Overol Denim Levi's/3.PNG",
    alt: "Overol Levi's Denim",
    titulo: "Overol Levi's Denim",
    precio: "$449",
    descripcion: "Overol Levi's Denim De Mezclilla<br>Talla M",
    mensaje: "Overol Levi's Denim $449"
  },
  {
    img: "images/Jeans Levis 501/2.jpg",
    alt: "Jeans Levi's 501 Rectos",
    titulo: "Pantalón Levi's 501 Rectos",
    precio: "$499",
    descripcion: "Talla 7",
    mensaje: "Pantalón Levi's 501 Rectos $499"
  },
  {
    img: "images/Jeans Levis 94 Baggy Wide leg/1..PNG",
    alt: "Pantalón Levi's 94 Baggy Wide Leg",
    titulo: "Pantalón Levi's 94 Baggy Wide Leg",
    precio: "$499",
    descripcion: "Talla 25X31",
    mensaje: "Pantalón Levi's 94 Baggy Wide Leg $499"
  },
  {
    img: "images/Falda Denim Levis Nueva/3.PNG",
    alt: "Falda Denim Levi's",
    titulo: "Falda Denim Levi's",
    precio: "$499",
    descripcion: "Falda Denim Levi's Talla 32",
    mensaje: "Falda Denim Levi's $499"
  },
  {
    img: "images/Calentadores.jpg",
    alt: "Calentadores",
    titulo: "Calentadores",
    precio: "$35",
    descripcion: "Calentadores Para Estas Temporadas De Fríos<br>Unitalla",
    mensaje: "Calentadores $35"
  }
];


const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("producto");

  const mensajeCodificado = encodeURIComponent(`Hola! Quiero comprar ${p.mensaje}`);

  div.innerHTML = `
    <img src="${p.img}" alt="${p.alt}">
    <h3>${p.titulo}<br>${p.precio}</h3>
    <p>${p.descripcion}</p>
    <a
      href="https://wa.me/2311147010?text=${mensajeCodificado}"
      target="_blank"
      class="btn-comprar"
    >Comprar</a>
  `;

  contenedor.appendChild(div);
});