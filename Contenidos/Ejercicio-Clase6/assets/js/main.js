let productos = [
    {id: "1", name: "Movil", description: "Un móvil elegante y potente que combina un diseño moderno con un rendimiento excepcional, ofreciendo una experiencia de usuario fluida y una cámara de alta calidad para capturar tus momentos más importantes.", img: "assets/img/mobile-605422_1280.jpg" , precio: "100€" },
    {id: "2", name: "Cascos VR", description: "Cascos VR de vanguardia que te sumergen en mundos virtuales impresionantes. Experimenta la realidad virtual como nunca antes, con una calidad de imagen excepcional y seguimiento preciso para una inmersión total en tus juegos y experiencias favoritas.", img: "assets/img/virtual-3460451_1280.jpg" , precio: "420€" },
    {id: "3", name: "Audifonos", description: "Audífonos de alta calidad que ofrecen un sonido cristalino y potente. Diseñados para brindar comodidad durante horas de uso, son ideales tanto para disfrutar de tu música favorita como para llamadas telefónicas nítidas en cualquier lugar y en cualquier momento.", img: "assets/img/music-4334557_1280.jpg" , precio: "40€" },
    {id: "4", name: "Portatil", description: "Un portátil versátil y potente que combina un diseño elegante con un rendimiento excepcional. Perfecto para trabajar, estudiar o entretenerte, este portátil te ofrece la potencia y la portabilidad que necesitas para estar en tu mejor momento en cualquier lugar.", img: "assets/img/macbook-459196_1280.jpg" , precio: "570€" },
    {id: "5", name: "Lente", description: "Un lente de cámara de alta calidad que te permite capturar imágenes nítidas y vibrantes. Diseñado para ofrecer una claridad excepcional y versatilidad en la fotografía, este lente es una herramienta imprescindible para cualquier fotógrafo en busca de la excelencia en sus imágenes.", img: "assets/img/lens-510527_1280.jpg" , precio: "180€" },
    {id: "6", name: "Relog", description: "Un reloj elegante y funcional que combina estilo y utilidad. Con un diseño atemporal y características precisas, este reloj es el compañero perfecto para mantener el tiempo y lucir sofisticado en cualquier ocasión.", img: "assets/img/hipster-958806_1280.jpg" , precio: "200€" },
    {id: "7", name: "Cascos", description: "Cascos de alta calidad que ofrecen un sonido inmersivo y una comodidad excepcional. Diseñados para brindar una experiencia auditiva superior, son ideales para disfrutar de tu música, películas o juegos favoritos con una calidad de audio excepcional y un ajuste cómodo durante horas.", img: "assets/img/headphones-5596990_1280.jpg" , precio: "250€" },
    {id: "8", name: "Dron", description: "Un dron versátil y fácil de controlar que te permite explorar el cielo y capturar impresionantes vistas desde el aire. Equipado con tecnología avanzada de estabilización y una cámara de alta resolución, este dron es perfecto para fotografía aérea y diversión en el exterior.", img: "assets/img/drone-1080844_1280.jpg" , precio: "320€" },
    {id: "9", name: "Camara", description: "Una cámara de alta calidad que te permite capturar momentos especiales con claridad y precisión. Con características avanzadas de fotografía y video, esta cámara es ideal tanto para fotógrafos aficionados como profesionales que buscan obtener imágenes impresionantes y grabaciones de alta resolución.", img: "assets/img/camera-510524_1280.jpg" , precio: "680€" },
    {id: "10", name: "Ordenador", description: "Un ordenador potente y versátil que combina un rendimiento excepcional con un diseño moderno. Ideal para una amplia gama de tareas, desde trabajo hasta entretenimiento, este ordenador ofrece la potencia y la capacidad de almacenamiento necesarias para satisfacer todas tus necesidades informáticas.", img: "assets/img/apple-606761_1280.jpg" , precio: "950€" },
]

function cargar(){
    let html = "";

    productos.forEach(item => {
        html += "<div class='content-products'>";
        html += "<img src='"+ item.img +"' class='item-img'>";
        html += "<h3 class='title-style black item-name'>" + item.name + "</h3>";
        html += "<p class='text-style black item-desc'>" + item.description + "</p>";
        html += "<p class='subtitle-style black item-prec'>" + item.precio + "</p>";
        html += "<button class='item-button'>Agregar</button>";
        html += "</div>";
    });

    let content = document.getElementById("product");
    content.innerHTML = html;

}