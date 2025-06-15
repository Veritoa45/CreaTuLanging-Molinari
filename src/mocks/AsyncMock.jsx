const productos = [
  {
    id: "01",
    nombre: "Afterimage",
    precio: 24.99,
    descripcion:
      "Afterimage es una aventura de acción 2D dibujada a mano centrada en combates con diversos estilos de personajes, niveles no lineales y una narrativa ambientada en las ruinas de un mundo de fantasía.",
    imagen: "../afterimage.avif",
    categoria: ["Hack and Slash", "Plataformas", "Metroidvania", "Rol"],
    stock: 10,
  },
  {
    id: "02",
    nombre: "Age of Empires",
    precio: 19.99,
    descripcion:
      "Presenta 'Los últimos Khanes' con 3 nuevas campañas y 4 nuevas Civilizaciones. Las actualizaciones frecuentes incluyen eventos, contenido adicional, nuevos modos de juego y características mejoradas con la reciente adición del modo cooperativo.",
    imagen: "../ageOfEmpires.jpg",
    categoria: ["Rol", "Estrategia", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "03",
    nombre: "Assetto Corsa",
    precio: 10.49,
    descripcion:
      "Assetto Corsa v1.16 introduce el nuevo circuito escaneado por láser «Laguna Seca», 7 nuevos coches entre los que se encuentra el esperado Alfa Romeo Giulia Quadrifoglio. Consulta el registro de cambios para más información.",
    imagen: "../assettoCorsa.jpg",
    categoria: ["Simulación", "Deportes y carreras", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "04",
    nombre: "Astroneer",
    precio: 14.99,
    descripcion:
      "Interactúa con extraños mundos nuevos de una forma única y táctil, moldeando el entorno con tus manos como si fuera arcilla. Construye tu base, domina la gestión de recursos, automatiza tus líneas de producción y más a medida que descubres los misterios del universo a solas o con amigos.",
    imagen: "../astroneer.avif",
    categoria: ["Roguelikes y Roguelites", "Defensa de Torres"],
    stock: 10,
  },
  {
    id: "05",
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
    stock: 10,
  },
  {
    id: "06",
    nombre: "Brawlhalla",
    precio: 7.19,
    descripcion:
      "Un épico juego de plataformas para hasta 8 jugadores en línea o en modo local. Prueba combates casuales, partidas igualadas o invita a tus amigos a una sala privada. Juega multiplataforma con millones de jugadores. Actualizaciones frecuentes. Más de sesenta Leyendas.",
    imagen: "../brawlhalla.jpg",
    categoria: ["Plataformas", "Casuales"],
    stock: 10,
  },
  {
    id: "07",
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
    stock: 10,
  },
  {
    id: "08",
    nombre: "Call of Duty",
    precio: 69.99,
    descripcion:
      "La experiencia de Call of Duty es compatible con Call of Duty: Black Ops 6, Call of Duty: Modern Warfare III, Call of Duty: Modern Warfare II y Call of Duty: Warzone.",
    imagen: "../callOfDuty.jpg",
    categoria: ["Acción", "Disparos", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "09",
    nombre: "Casino Simulator",
    precio: 3.76,
    descripcion:
      "Amplíe su casino desde cero, contrate empleados, personalícelo, apueste y disfrute de su propio casino.",
    imagen: "../casinoSimulator.jpg",
    categoria: ["Disparos", "Simulación", "Cartas y mesa"],
    stock: 10,
  },
  {
    id: "10",
    nombre: "Celeste",
    precio: 10.49,
    descripcion:
      "Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje a la cima de Celeste Mountain, en este juego de plataformas superduro de los creadores de TowerFall. Enfréntate a cientos de desafíos hechos a mano, descubre secretos enrevesados y desvela el misterio de la montaña.",
    imagen: "../celeste.avif",
    categoria: ["Plataformas", "Aventura"],
    stock: 10,
  },
  {
    id: "11",
    nombre: "Civilization VII",
    precio: 69.99,
    descripcion:
      "La galardonada franquicia de juegos de estrategia regresa con un nuevo capítulo revolucionario. ¡Sid Meier's Civilization® VII te da las herramientas para que construyas el imperio más grande que el mundo haya visto!",
    imagen: "../civilization.jpg",
    categoria: ["Rol", "Estrategia"],
    stock: 10,
  },
  {
    id: "12",
    nombre: "Dark Souls III",
    precio: 47.99,
    descripcion:
      "Dark Souls sigue superando los límites con el último y ambicioso capítulo de la serie aclamada por la crítica y que define el género. ¡Prepárate y abraza la oscuridad!",
    imagen: "../darkSouls.jpg",
    categoria: ["Acción", "Aventura", "Buena Trama", "Rol", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "13",
    nombre: "Darkest Dungeon 2",
    precio: 18.99,
    descripcion:
      "Darkest Dungeon II es la aventura roguelike de un grupo de condenados. Forma un equipo, pertrecha tu carruaje y aventúrate hacia los páramos asolados en un último intento por impedir el apocalipsis. Pero cuidado: el peligro podría acechar también desde dentro…",
    imagen: "../darkestDungeon.webp",
    categoria: ["Rol", "Estrategia"],
    stock: 10,
  },
  {
    id: "14",
    nombre: "Dead By Daylight",
    precio: 14.99,
    descripcion:
      "Atrapados para siempre en un reino de maldad eldritch donde ni siquiera la muerte es una escapatoria, cuatro decididos Supervivientes se enfrentan a un sanguinario Asesino en un despiadado juego de nervios e ingenio. Elige un bando y adéntrate en un mundo de tensión y terror con el mejor multijugador asimétrico de los juegos de terror.",
    imagen: "../deadByDaylight.jpg",
    categoria: ["Acción", "Supervivencia", "Terror"],
    stock: 10,
  },
  {
    id: "15",
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
    stock: 10,
  },
  {
    id: "16",
    nombre: "Descenders",
    precio: 12.49,
    descripcion:
      "Descenders es un descenso extremo de freeride para la era moderna, con mundos generados proceduralmente, y donde los errores tienen consecuencias reales. ¿Llevarás a tu equipo a la gloria y te convertirás en el próximo Descender legendario?",
    imagen: "../descenders.jpg",
    categoria: ["Acción", "Deportes y carreras"],
    stock: 10,
  },
  {
    id: "17",
    nombre: "Devil May Cry 5",
    precio: 4.49,
    descripcion:
      "El cazador de demonios definitivo vuelve por todo lo alto, en el juego de acción que los fans estaban esperando.",
    imagen: "../devilMayCry.jpg",
    categoria: ["Acción", "Hack and Slash", "Aventura"],
    stock: 10,
  },
  {
    id: "18",
    nombre: "Dota 2",
    precio: 1.99,
    descripcion:
      "Cada día, millones de jugadores de todo el mundo entran en batalla como uno de los más de cien héroes de Dota. Y no importa si es su décima o su milésima hora de juego: siempre hay algo nuevo que descubrir.",
    imagen: "../dota.jpg",
    categoria: ["Arcade", "Rol", "Estrategia", "Defensa de Torres"],
    stock: 10,
  },
  {
    id: "19",
    nombre: "Dynasty Warriors 9",
    precio: 58.29,
    descripcion:
      "Vive emocionantes batallas como un héroe sin nombre en los Tres Reinos.",
    imagen: "../dynastyWarriors.jpg",
    categoria: ["Hack and Slash", "Rol"],
    stock: 10,
  },
  {
    id: "20",
    nombre: "EA Sports FC 25",
    precio: 69.99,
    descripcion:
      "EA SPORTS FC™ 25 te ofrece más formas de ganar para el club. Forma equipo con amistades en tus modos favoritos con el nuevo Rush 5 vs. 5 y lidera a tu club hacia la victoria gracias a FC IQ, que te ofrece más control táctico que nunca.",
    imagen: "../eaSportFc.jpg",
    categoria: ["Simulación", "Deportes y carreras"],
    stock: 10,
  },
  {
    id: "21",
    nombre: "Elden Ring",
    precio: 47.99,
    descripcion:
      "EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.",
    imagen: "../eldenRing.jpg",
    categoria: ["Acción", "Buena Trama", "Rol", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "22",
    nombre: "Expedition 33",
    precio: 34.99,
    descripcion:
      "Guía a la expedición 33 en su misión de acabar con la Peintresse para que no pinte la muerte. Explora un mundo inspirado en la Francia de la Belle Époque y lucha contra rivales únicos en este juego de rol por turnos con mecánicas en tiempo real.",
    imagen: "../expedition33.jpg",
    categoria: ["Aventura", "Buena Trama", "Rol"],
    stock: 10,
  },
  {
    id: "23",
    nombre: "Forza Horizon 5",
    precio: 16.39,
    descripcion:
      "Explora los coloridos paisajes del mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo.",
    imagen: "../forzaHorizon5.jpg",
    categoria: ["Arcade", "Deportes y carreras", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "24",
    nombre: "Gris",
    precio: 7.99,
    descripcion:
      "Gris es una joven esperanzada perdida en su propio mundo, que se enfrenta a una experiencia dolorosa en su vida. Su viaje a través del dolor se manifiesta en su vestido, que le otorga nuevas habilidades para navegar mejor por su desvanecida realidad.",
    imagen: "../gris.avif",
    categoria: ["Plataformas", "Aventura", "Casuales", "Puzzles"],
    stock: 10,
  },
  {
    id: "25",
    nombre: "GTA V",
    precio: 59.99,
    descripcion:
      "Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros.",
    imagen: "../gta5.webp",
    categoria: ["Acción", "Disparos", "Aventura"],
    stock: 10,
  },
  {
    id: "26",
    nombre: "Hades",
    precio: 4.99,
    descripcion:
      "Desafía al dios de los muertos y sal a machetazos del inframundo en este juego de exploración de mazmorras de los creadores de Bastion, Transistor y Pyre.",
    imagen: "../hades.jpg",
    categoria: ["Metroidvania", "Roguelikes y Roguelites"],
    stock: 10,
  },
  {
    id: "27",
    nombre: "Haste",
    precio: 8.99,
    descripcion:
      "Corre rápido, vuela por los aires y domina los aterrizajes mientras atraviesas mundos procedimentales para escapar del fin del universo.",
    imagen: "../haste.jpg",
    categoria: ["Arcade", "Plataformas"],
    stock: 10,
  },
  {
    id: "28",
    nombre: "Hollow Knight",
    precio: 4.99,
    descripcion:
      "¡Forja tu propio camino en Hollow Knight! Una épica aventura de acción a través de un vasto reino en ruinas de insectos y héroes. Explora cavernas retorcidas, lucha contra criaturas contaminadas y hazte amigo de extraños bichos, todo ello en un clásico estilo 2D dibujado a mano.",
    imagen: "../hollowKnight.jpg",
    categoria: ["Plataforma", "Metroidvania"],
    stock: 10,
  },
  {
    id: "29",
    nombre: "Inscryption",
    precio: 4.19,
    descripcion:
      "Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...",
    imagen: "../inscryption.jpg",
    categoria: ["Buena Trama", "Puzzles", "Roguelikes y Roguelites"],
    stock: 10,
  },
  {
    id: "30",
    nombre: "It Takes Two",
    precio: 39.99,
    descripcion:
      "Emprende el viaje más alocado de tu vida en It Takes Two. Invita a un amigo a unirse gratis con el Pase de amigo* y trabajen en conjunto para afrontar una gran variedad de desafíos de juego alegremente disruptivos.",
    imagen: "../itTakesTwo.jpg",
    categoria: ["Plataformas", "Puzzles"],
    stock: 10,
  },
  {
    id: "31",
    nombre: "League of Legends",
    precio: 29.99,
    descripcion:
      "League of Legends es un juego de estrategia por equipos en el que dos equipos de cinco campeones se enfrentan para ver quién destruye antes la base del otro. Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.",
    imagen: "../leagueOfLegends.jpg",
    categoria: ["Acción", "Aventura", "Buena Trama", "Rol"],
    stock: 10,
  },
  {
    id: "32",
    nombre: "NBA 2K 25",
    precio: 69.99,
    descripcion:
      "Domina cada cancha con autenticidad y realismo con tecnología ProPLAY™, que te brinda el máximo control sobre cómo juegas en NBA 2K25. Define tu legado en MyCAREER, MyTEAM, MyNBA y The W.",
    imagen: "../nba2k25.jpg",
    categoria: ["Simulación", "Deportes y carreras"],
    stock: 10,
  },
  {
    id: "33",
    nombre: "Need for Speed Heat",
    precio: 69.99,
    descripcion:
      "Apúrate de día y arriésgalo todo de noche en Need for Speed™ Heat Deluxe Edition, un juego de carreras callejeras dinámico, donde las líneas de la ley se desvanecen a medida que se pone sol.",
    imagen: "../needForSpeedHeat.jpg",
    categoria: ["Arcade", "Deportes y carreras"],
    stock: 10,
  },
  {
    id: "34",
    nombre: "No Man's Sky",
    precio: 23.99,
    descripcion:
      "No Man's Sky es un juego de exploración y supervivencia en un universo infinito generado proceduralmente.",
    imagen: "../noMansSky.jpg",
    categoria: ["Acción", "Aventura", "Espacio"],
    stock: 10,
  },
  {
    id: "35",
    nombre: "Outer Wilds",
    precio: 12.99,
    descripcion:
      "Outer Wilds, nombrado juego del año 2019 por Giant Bomb, Polygon, Eurogamer y The Guardian, es un galardonado título de mundo abierto, que se desarrolla en un enigmático sistema solar confinado a un bucle temporal infinito.",
    imagen: "../outerWilds.jpg",
    categoria: ["Puzzles", "Mundo Abierto", "Espacio"],
    stock: 10,
  },
  {
    id: "36",
    nombre: "Palworld",
    precio: 14.99,
    descripcion:
      "Captura misteriosas criaturas llamadas Pals, capaces de combatir, construir, cultivar y trabajar en fábricas, en este juego de supervivencia multijugador con un vasto y original mundo abierto.",
    imagen: "../palworld.png",
    categoria: ["Acción", "Disparos", "Supervivencia"],
    stock: 10,
  },
  {
    id: "37",
    nombre: "Pathologic 2",
    precio: 17.99,
    descripcion:
      "Pathologic 2 es un innovador RPG de terror de mundo abierto. Resiste a la plaga. Fabrica medicinas. Cura a la gente. Realiza autopsias. Comercia para conseguir lo que necesites. Lucha y mata si es necesario. Sobrevive. Lucha contra un brote en un pueblo rural aislado que se está convirtiendo rápidamente en un infierno.",
    imagen: "../pathologic2.jpg",
    categoria: ["Buena Trama", "Terror"],
    stock: 10,
  },
  {
    id: "38",
    nombre: "Persona 5",
    precio: 50.99,
    descripcion:
      "Ponte la máscara y únete a los Phantom Thieves of Hearts mientras organizan grandes atracos, se infiltran en las mentes de los corruptos y les hacen cambiar de aires.",
    imagen: "../persona5.jpg",
    categoria: ["Buena Trama", "Rol", "Simulación"],
    stock: 10,
  },
  {
    id: "39",
    nombre: "The Planet Crafter",
    precio: 12.49,
    descripcion:
      "Un juego de supervivencia espacial y terraformación, diseñado para entre 1 y 10 jugadores. Altera el ecosistema de un planeta inhóspito para que sea habitable para la humanidad. Sobrevive, obtén recursos y monta tu base. Luego, genera oxígeno, calor y presión para crear una nueva biosfera.",
    imagen: "../planetCrafter.jpg",
    categoria: ["Buena Trama", "Espacio"],
    stock: 10,
  },
  {
    id: "40",
    nombre: "Planta vs Zombies",
    precio: 29.99,
    descripcion:
      "Prepárate tu Lanzaguisantes para el juego de disparos más alocado y divertido del universo: Plants vs. Zombies Garden Warfare 2.",
    imagen: "../plantsVsZombies.jpg",
    categoria: ["Casuales", "Puzzles", "Defensa de Torres"],
    stock: 10,
  },
  {
    id: "41",
    nombre: "Bad North",
    precio: 7.99,
    descripcion:
      "Bad North es un encantador pero brutal roguelite táctico en tiempo real. Defiende tu idílico reino isleño contra una horda de invasores vikingos, al tiempo que lideras el desesperado éxodo de tu pueblo. Dirige a tus leales súbditos para que aprovechen las ventajas tácticas de la orografía de cada isla.",
    imagen: "../badNorth.jpg",
    categoria: ["Roguelikes y Roguelites", "Defensa de Torres"],
    stock: 10,
  },
  {
    id: "42",
    nombre: "Project Zomboid",
    precio: 10.49,
    descripcion:
      "Project Zomboid es lo último en supervivencia zombi. Solo o en grupo: saquea, construye, fabrica, lucha, cultiva y pesca para sobrevivir. Un conjunto de habilidades RPG, un mapa enorme, un sandbox personalizable y un simpático mapache tutorial aguardan a los incautos. ¿Cómo morirás? Sólo hace falta un mordisco...",
    imagen: "../projectZomboid.jpg",
    categoria: ["Mundo Abierto", "Supervivencia"],
    stock: 10,
  },
  {
    id: "43",
    nombre: "Red Dead Redemption 2",
    precio: 59.99,
    descripcion:
      "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
    imagen: "../redDeadRedemption.jpg",
    categoria: ["Aventura", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "44",
    nombre: "Resident Evil",
    precio: 12.49,
    descripcion:
      "La supervivencia es solo el comienzo. A seis años del desastre biológico en Raccoon City, Leon S. Kennedy, uno de los sobrevivientes, rastreó a la hija secuestrada del presidente hasta una aldea europea aislada, donde algo terrible le ha ocurrido a los lugareños.",
    imagen: "../residentEvil.jpg",
    categoria: ["Acción", "Disparos", "Buena Trama", "Terror"],
    stock: 10,
  },
  {
    id: "45",
    nombre: "Sekiro: Shadows Die Twice",
    precio: 29.99,
    descripcion:
      "Juego del año - The Game Awards 2019 Mejor juego de acción de 2019 - IGN Forja tu propio camino en busca de venganza en la galardonada aventura del desarrollador From Software, creadores de Bloodborne y de la serie Dark Souls. Véngate. Restituye tu honor. Mata con ingenio.",
    imagen: "../sekiro.jpg",
    categoria: ["Hack and Slash", "Buena Trama", "Rol"],
    stock: 10,
  },
  {
    id: "46",
    nombre: "Stardew Valley",
    precio: 4.99,
    descripcion:
      "Has heredado la vieja granja de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y unas pocas monedas, te dispones a comenzar tu nueva vida. ¿Podrás aprender a vivir de la tierra y convertir estos campos cubiertos de maleza en un próspero hogar?",
    imagen: "../stardewValley.jpg",
    categoria: ["Casuales", "Rol", "Simulación", "Mundo Abierto"],
    stock: 10,
  },
  {
    id: "47",
    nombre: "Stellaris",
    precio: 23.99,
    descripcion:
      "Explora una galaxia llena de maravillas en este juego de gran estrategia de ciencia ficción de Paradox Development Studios. Interactúa con diversas razas alienígenas, descubre extraños mundos nuevos con acontecimientos inesperados y amplía el alcance de tu imperio. Cada nueva aventura encierra posibilidades casi ilimitadas.",
    imagen: "../stellaris.jpg",
    categoria: ["Simulación", "Estrategia", "Espacio"],
    stock: 10,
  },
  {
    id: "48",
    nombre: "Stray",
    precio: 8.99,
    descripcion:
      "Perdido, solo y separado de su familia, un gato callejero debe resolver un misterio ancestral para escapar de una ciudad caída en el olvido y encontrar el camino a casa.",
    imagen: "../stray.jpg",
    categoria: ["Puzzles", "Terror"],
    stock: 10,
  },
  {
    id: "49",
    nombre: "Street Fighter 6",
    precio: 29.99,
    descripcion:
      "¡Llega el nuevo contendiente de Capcom! Street Fighter™ 6 se lanzará en todo el mundo el 2 de junio de 2023 y representa la próxima evolución de la serie Street Fighter™. Street Fighter 6 tiene tres modos de juego diferenciados: World Tour, Fighting Ground y Battle Hub.",
    imagen: "../streetFighter6.jpg",
    categoria: ["Arcade", "Rol"],
    stock: 10,
  },
  {
    id: "50",
    nombre: "Subnáutica",
    precio: 20.99,
    descripcion:
      "Desciende a las profundidades de un mundo submarino alienígena lleno de maravillas y peligros. Construye equipamiento, pilota submarinos y sé más listo que la fauna para explorar exuberantes arrecifes de coral, volcanes, sistemas de cuevas y mucho más, todo ello mientras intentas sobrevivir.",
    imagen: "../subnautica.jpg",
    categoria: ["Aventura", "Mundo Abierto", "Supervivencia", "Terror"],
    stock: 10,
  },
  {
    id: "51",
    nombre: "Supermarket Simulator",
    precio: 9.99,
    descripcion:
      "Dirige tu propio supermercado. Abastece las estanterías, fija los precios a tu gusto, acepta pagos, contrata personal, expande, enfréntate a los ladrones y diseña tu tienda. Compra productos en línea o en mercados locales de la ciudad. Próximamente podrás realizar pedidos y entregas online.",
    imagen: "../supermarketSimulator.webp",
    categoria: ["Casuales", "Simulación"],
    stock: 10,
  },
  {
    id: "52",
    nombre: "Tabletop Simulator",
    precio: 10.49,
    descripcion:
      "Tabletop Simulator es el único simulador en el que puedes dar rienda suelta a tu agresividad volteando la mesa. No hay reglas que seguir: sólo tú, un sandbox de física y tus amigos. Crea tus propios juegos de mesa online o juega a los miles de mods creados por la comunidad. ¡Posibilidades de juego ilimitadas!",
    imagen: "../tabletopSimulator.jpg",
    categoria: ["Estrategia", "Cartas y Mesa"],
    stock: 10,
  },
  {
    id: "53",
    nombre: "The Last Of Us Part II",
    precio: 39.99,
    descripcion:
      "Experimenta al ganador de más de 300 premios Game of the Year, ahora en PC. Descubre la historia de Ellie y Abby con mejoras gráficas, modos de supervivencia de estilo roguelike en Sin retorno y mucho más.",
    imagen: "../theLastOfUs.avif",
    categoria: ["Acción", "Aventura"],
    stock: 10,
  },
  {
    id: "54",
    nombre: "They Are Billions",
    precio: 29.99,
    descripcion:
      "They Are Billions es un juego de estrategia Steampunk ambientado en un planeta postapocalíptico. Construye y defiende colonias para sobrevivir contra los miles de millones de infectados que buscan aniquilar a los pocos humanos vivos que quedan. ¿Podrá sobrevivir la humanidad tras el apocalipsis zombi?",
    imagen: "../theyAreBillions.jpg",
    categoria: ["Estrategia", "Defensa de Torres"],
    stock: 10,
  },
  {
    id: "55",
    nombre: "Travellers Rest",
    precio: 9.29,
    descripcion:
      "¡Fabrica, cultiva, construye y cocina! En Travellers Rest tendrás que usar todas las herramientas disponibles para convertirte en el mejor cantinero del reino. Crea platos y bebidas únicos para complacer a tus clientes mientras descubres el mundo y sus coloridos personajes.",
    imagen: "../travellersRest.jpg",
    categoria: ["Casuales", "Simulación"],
    stock: 10,
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
