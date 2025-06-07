const productos = [
  {
    id: 1,
    nombre: "Afterimage",
    precio: 24.99,
    descripcion:
      "Afterimage es una aventura de acción 2D dibujada a mano centrada en combates con diversos estilos de personajes, niveles no lineales y una narrativa ambientada en las ruinas de un mundo de fantasía.",
    imagen: "./afterimage.avif",
    categoria: ["Hack and Slash", "Plataformas", "Metroidvania", "Rol"],
  },
  {
    id: 2,
    nombre: "Age of Empires",
    precio: 19.99,
    descripcion:
      "Presenta 'Los últimos Khanes' con 3 nuevas campañas y 4 nuevas Civilizaciones. Las actualizaciones frecuentes incluyen eventos, contenido adicional, nuevos modos de juego y características mejoradas con la reciente adición del modo cooperativo.",
    imagen: "../ageOfEmpires.jpg",
    categoria: ["Rol", "Estrategia", "Mundo Abierto"],
  },
  {
    id: 3,
    nombre: "Assetto Corsa",
    precio: 10.49,
    descripcion:
      "Assetto Corsa v1.16 introduce el nuevo circuito escaneado por láser «Laguna Seca», 7 nuevos coches entre los que se encuentra el esperado Alfa Romeo Giulia Quadrifoglio. Consulta el registro de cambios para más información.",
    imagen: "../assettoCorsa.jpg",
    categoria: ["Simulación", "Deportes y carreras", "Mundo Abierto"],
  },
  {
    id: 4,
    nombre: "Astroneer",
    precio: 14.99,
    descripcion:
      "Interactúa con extraños mundos nuevos de una forma única y táctil, moldeando el entorno con tus manos como si fuera arcilla. Construye tu base, domina la gestión de recursos, automatiza tus líneas de producción y más a medida que descubres los misterios del universo a solas o con amigos.",
    imagen: "../astroneer.avif",
    categoria: ["Roguelikes y Roguelites", "Defensa de Torres"],
  },
  {
    id: 5,
    nombre: "Balatro",
    precio: 7.99,
    descripcion:
      "El roguelike de póquer. Balatro es un creador de mazos hipnotizante donde juegas manos de póquer ilegal, descubres comodines que cambian tu juego y activas combinaciones hilarantes y llenas de adrenalina.",
    imagen: "../balatro.avif",
    categoria: [
      "Casuales",
      "Roguelikes y Roguelites",
      "Estrategia",
      "Cartas y mesa",
    ],
  },
  {
    id: 6,
    nombre: "Brawlhalla",
    precio: 7.19,
    descripcion:
      "Un épico juego de plataformas para hasta 8 jugadores en línea o en modo local. Prueba combates casuales, partidas igualadas o invita a tus amigos a una sala privada. Juega multiplataforma con millones de jugadores. Actualizaciones frecuentes. Más de sesenta Leyendas.",
    imagen: "../brawlhalla.jpg",
    categoria: ["Plataformas", "Casuales"],
  },
  {
    id: 7,
    nombre: "Brotato",
    precio: 1.79,
    descripcion:
      "Brotato es un shooter roguelite de vista cenital en el que encarnas a una patata que empuña hasta 6 armas a la vez para luchar contra hordas de alienígenas. Elige entre una gran variedad de rasgos y objetos para crear personajes únicos y sobrevivir hasta que llegue la ayuda.",
    imagen: "../brotato.png",
    categoria: [
      "Arcade",
      "Disparos",
      "Hack and Slash",
      "Roguelikes y Roguelites",
    ],
  },
  {
    id: 8,
    nombre: "Call of Duty",
    precio: 69.99,
    descripcion:
      "La experiencia de Call of Duty es compatible con Call of Duty: Black Ops 6, Call of Duty: Modern Warfare III, Call of Duty: Modern Warfare II y Call of Duty: Warzone.",
    imagen: "../callOfDuty.jpg",
    categoria: ["Acción", "Disparos", "Mundo Abierto"],
  },
  {
    id: 9,
    nombre: "Casino Simulator",
    precio: 3.76,
    descripcion:
      "Amplíe su casino desde cero, contrate empleados, personalícelo, apueste y disfrute de su propio casino.",
    imagen: "../casinoSimulator.jpg",
    categoria: ["Disparos", "Simulación", "Cartas y mesa"],
  },
  {
    id: 10,
    nombre: "Celeste",
    precio: 10.49,
    descripcion:
      "Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje a la cima de Celeste Mountain, en este juego de plataformas superduro de los creadores de TowerFall. Enfréntate a cientos de desafíos hechos a mano, descubre secretos enrevesados y desvela el misterio de la montaña.",
    imagen: "../celeste.avif",
    categoria: ["Plataformas", "Aventura"],
  },
  {
    id: 11,
    nombre: "Civilization VII",
    precio: 69.99,
    descripcion:
      "La galardonada franquicia de juegos de estrategia regresa con un nuevo capítulo revolucionario. ¡Sid Meier's Civilization® VII te da las herramientas para que construyas el imperio más grande que el mundo haya visto!",
    imagen: "../civilization.jpg",
    categoria: ["Rol", "Estrategia"],
  },
  {
    id: 12,
    nombre: "Dark Souls III",
    precio: 47.99,
    descripcion:
      "Dark Souls sigue superando los límites con el último y ambicioso capítulo de la serie aclamada por la crítica y que define el género. ¡Prepárate y abraza la oscuridad!",
    imagen: "../darkSouls.jpg",
    categoria: ["Acción", "Aventura", "Buena Trama", "Rol", "Mundo Abierto"],
  },
  {
    id: 13,
    nombre: "Darkest Dungeon 2",
    precio: 18.99,
    descripcion:
      "Darkest Dungeon II es la aventura roguelike de un grupo de condenados. Forma un equipo, pertrecha tu carruaje y aventúrate hacia los páramos asolados en un último intento por impedir el apocalipsis. Pero cuidado: el peligro podría acechar también desde dentro…",
    imagen: "../darkestDungeon.webp",
    categoria: ["Rol", "Estrategia"],
  },
  {
    id: 14,
    nombre: "Dead By Daylight",
    precio: 14.99,
    descripcion:
      "Atrapados para siempre en un reino de maldad eldritch donde ni siquiera la muerte es una escapatoria, cuatro decididos Supervivientes se enfrentan a un sanguinario Asesino en un despiadado juego de nervios e ingenio. Elige un bando y adéntrate en un mundo de tensión y terror con el mejor multijugador asimétrico de los juegos de terror.",
    imagen: "../deadByDaylight.jpg",
    categoria: ["Acción", "Supervivencia", "Terror"],
  },
  {
    id: 15,
    nombre: "Dead Cells",
    precio: 12.49,
    descripcion:
      "Dead Cells es un juego de plataformas y acción de inspiración roguelite y metroidvania. Explorarás un extenso castillo en constante cambio... suponiendo que seas capaz de abrirte paso entre sus guardianes en combates 2D souls-lite. Sin puntos de control. Mata, muere, aprende, repite.",
    imagen: "../deadCells.jpg",
    categoria: [
      "Hack and Slash",
      "Aventura",
      "Metroidvania",
      "Roguelikes y Roguelites",
    ],
  },
  {
    id: 16,
    nombre: "Descenders",
    precio: 12.49,
    descripcion:
      "Descenders es un descenso extremo de freeride para la era moderna, con mundos generados proceduralmente, y donde los errores tienen consecuencias reales. ¿Llevarás a tu equipo a la gloria y te convertirás en el próximo Descender legendario?",
    imagen: "../descenders.jpg",
    categoria: ["Acción", "Deportes y carreras"],
  },
  {
    id: 17,
    nombre: "Devil May Cry 5",
    precio: 4.49,
    descripcion:
      "El cazador de demonios definitivo vuelve por todo lo alto, en el juego de acción que los fans estaban esperando.",
    imagen: "../devilMayCry.jpg",
    categoria: ["Acción", "Hack and Slash", "Aventura"],
  },
  {
    id: 18,
    nombre: "Dota 2",
    precio: 1.99,
    descripcion:
      "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima o su milésima hora de juego: siempre hay algo nuevo que descubrir.",
    imagen: "../dota.jpg",
    categoria: ["Arcade", "Rol", "Estrategia", "Defensa de Torres"],
  },
  {
    id: 19,
    nombre: "Dynasty Warriors 9",
    precio: 58.29,
    descripcion:
      "Vive emocionantes batallas como un héroe sin nombre en los Tres Reinos.",
    imagen: "../dynastyWarriors.jpg",
    categoria: ["Hack and Slash", "Rol"],
  },
  {
    id: 20,
    nombre: "EA Sports FC 25",
    precio: 69.99,
    descripcion:
      "EA SPORTS FC™ 25 te ofrece más formas de ganar para el club. Forma equipo con amistades en tus modos favoritos con el nuevo Rush 5 vs. 5 y lidera a tu club hacia la victoria gracias a FC IQ, que te ofrece más control táctico que nunca.",
    imagen: "../eaSportFc.jpg",
    categoria: ["Simulación", "Deportes y carreras"],
  },
];

let error = false;

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        let product = productos.find((prod) => prod.id === id);
        resolve(product);
      } else {
        reject("Hubo un error al obtener el producto");
      }
    }, 2000);
  });
};

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve(productos);
      } else {
        reject("Hubo un error al obtener los productos");
      }
    }, 2000);
  });
};
