type Target = '_blank' | '_self' | '_top' | '_parent'

export const NAVIGATION_ITEMS = [
  {
    name: 'El Club',
    href: '/el-club',
    submenu: [
      { name: 'Historia', href: '/historia' },
      { name: 'Institucional', href: '/institucional' },
      { name: 'Estadio', href: '/estadio' },
      { name: 'Museo', href: '/museo' },
      { name: 'Comisión Directiva', href: '/comision-directiva' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Accesos a UNO', href: '/accesos-uno' },
      { name: 'Género y diversidad', href: '/genero-diversidad' },
      { name: 'Filiales', href: '/filiales' },
      { name: 'Secretarías', href: '/secretarias' },
      { name: 'Sede - Pedro Osacar', href: '/sede-osacar' },
      { name: 'Country Club - Mariano Mangano', href: '/country-mangano' },
      { name: 'Fundación', href: '/fundacion' },
      { name: 'ADN', href: '/adn' },
      { name: 'Cultura', href: '/cultura' },
    ],
  },
  {
    name: 'Fútbol',
    href: '/futbol',
    submenu: [
      { name: 'Fútbol Profesional', href: '/futbol-profesional' },
      { name: 'Reserva', href: '/reserva' },
      { name: 'Fútbol Juvenil', href: '/futbol-juvenil' },
      { name: 'Fútbol Infantil', href: '/futbol-infantil' },
      { name: 'Fútbol Femenino', href: '/futbol-femenino' },
      { name: 'Escuelita de Fútbol', href: '/escuelita-futbol' },
      { name: 'Equipos Históricos', href: '/equipos-historicos' },
      { name: 'Logros', href: '/logros' },
    ],
  },
  {
    name: 'Deportes',
    href: '/deportes',
    submenu: [{ name: '', href: '/' }],
  },
  {
    name: 'Estadio',
    href: '/estadio',
  },
  {
    name: 'Socios',
    href: '/socios',
    submenu: [
      { name: 'Asociate', href: '/asociate' },
      { name: 'Autogestión', href: '/autogestion' },
      { name: 'Abonos de platea', href: '/abonos-platea' },
      { name: 'Club de Beneficios', href: '/club-beneficios' },
      { name: 'Atención al socio', href: '/atencion-socio' },
      { name: 'Débito automático', href: '/debito-automatico' },
      { name: 'Novedades', href: '/novedades-socios' },
      { name: 'Aranceles', href: '/aranceles' },
      { name: 'Agrupaciones', href: '/agrupaciones' },
      { name: 'Socios protectores', href: '/socios-protectores' },
    ],
  },
] satisfies Array<{
  name: string
  href: string
  submenu?: Array<{ name: string; href: string; target?: Target }>
  target?: Target
}>

export const MEGA_MENU_DATA = [
  {
    title: 'DEPORTES',
    items: [
      { name: 'Aeróbica y Danzas', href: '#aerobica-danzas' },
      { name: 'Artística', href: '#artistica' },
      { name: 'Básquetbol', href: '#basquetbol' },
      { name: 'Boxeo', href: '#boxeo' },
      { name: 'Buceo', href: '#buceo' },
      { name: 'Gaming', href: '#gaming' },
      { name: 'Golf', href: '#golf' },
      { name: 'Handball', href: '#handball' },
      { name: 'Hockey', href: '#hockey' },
      { name: 'Judo', href: '#judo' },
      { name: 'Natación', href: '#natacion' },
      { name: 'Patín Artístico', href: '#patin-artistico' },
      { name: 'Pesas', href: '#pesas' },
      { name: 'Running', href: '#running' },
      { name: 'Salvamento acuático', href: '#salvamento-acuatico' },
      { name: 'Taekwondo', href: '#taekwondo' },
      { name: 'Tenis', href: '#tenis' },
      { name: 'Voleibol', href: '#voleibol' },
    ],
  },
  {
    title: 'EDUCACIÓN',
    items: [
      { name: 'Comunicados', href: '#comunicados-educacion' },
      { name: 'Establecimiento', href: '#establecimiento-educacion' },
      { name: 'Ideario', href: '#ideario' },
      { name: 'Inicial', href: '#inicial' },
      { name: 'Primario', href: '#primario' },
      { name: 'Secundario', href: '#secundario' },
      { name: 'Secundario para jugadores', href: '#secundario-jugadores' },
      { name: 'Autoridades', href: '#autoridades' },
      { name: 'Contacto', href: '#contacto-educacion' },
    ],
  },
  {
    title: 'PRENSA',
    items: [
      { name: 'Acreditaciones', href: '#acreditaciones' },
      { name: 'Medios de Comunicación', href: '#medios-comunicacion' },
      { name: 'Reglamento de Prensa', href: '#reglamento-prensa' },
    ],
  },
  {
    title: 'ESTUDIANTES INNOVA',
    items: [{ name: 'Ver más', href: '#estudiantes-innova' }],
  },
  {
    title: 'ESTUDIANTES PLAY',
    items: [{ name: 'Ver más', href: '#estudiantes-play' }],
  },
] satisfies Array<{
  title: string
  items?: Array<{ name: string; href: string; target?: Target }>
  target?: Target
}>

export const NEWS_DATA = [
  {
    title: 'Cierre de pretemporada en UNO',
    category: 'Fútbol Profesional',
    image: '/placeholder.svg?height=200&width=300',
    date: 'Hace 2 horas',
  },
  {
    title: 'Socios Interior: información importante',
    category: 'Filiales',
    image: '/placeholder.svg?height=200&width=300',
    date: 'Hace 5 horas',
  },
  {
    title: 'Un paso histórico para nuestras filiales',
    category: 'Filiales',
    image: '/placeholder.svg?height=200&width=300',
    date: 'Hace 1 día',
  },
] satisfies Array<{
  title: string
  category: string
  image: string
  date: string
}>

export const STANDINGS_DATA = [
  { pos: 1, team: 'ESTUDIANTES', pts: 6 },
  { pos: 2, team: 'BARRACAS CENTRAL', pts: 6 },
  { pos: 3, team: 'C.CÓRDOBA (SE)', pts: 5 },
  { pos: 4, team: 'UNIÓN', pts: 5 },
  { pos: 5, team: 'INDEP.MZA.', pts: 4 },
  { pos: 6, team: 'BELGRANO', pts: 4 },
  { pos: 7, team: 'DEFENSA', pts: 4 },
] satisfies Array<{
  pos: number
  team: string
  pts: number
}>

export const UPCOMING_MATCHES = [
  {
    id: 1,
    opponent: 'RIVAL',
    opponentLogo: '/placeholder.svg?height=60&width=60',
    competition: 'Torneo Clausura',
    phase: 'Fecha 2',
    date: '07/08/2025',
    time: '21:00',
    venue: 'Estadio UNO',
    matchDate: '2025-08-07T21:00:00',
    color: 'from-red-500 to-red-600',
  },
] satisfies Array<{
  id: number
  opponent: string
  opponentLogo: string
  competition: string
  phase: string
  date: string
  time: string
  venue: string
  matchDate: string
  color: string
}>

export const SPONSORS_DATA = [
  {
    name: 'Mejor Crédito',
    logo: '/sponsors/mejorcredito.svg',
    url: 'https://mejorcredito.com.ar/',
  },
  {
    name: 'Flow',
    logo: '/sponsors/flow.svg',
    url: 'https://www.flow.com.ar/',
  },
  {
    name: 'Quilmes',
    logo: '/sponsors/quilmes.svg',
    url: 'https://www.quilmes.com.ar/',
  },
  {
    name: 'Powerade',
    logo: '/sponsors/powerade.svg',
    url: 'https://www.powerade.com/',
  },
  {
    name: 'RUGE',
    logo: '/sponsors/ruge.svg',
    url: 'https://ruge.ar/',
  },
  {
    name: 'Saint-Gobain',
    logo: '/sponsors/saint-gobain.svg',
    url: 'https://www.saint-gobain.ar/es',
  },
  {
    name: 'Bricks',
    logo: '/sponsors/bricks.svg',
    url: 'https://www.bricks.com.ar/',
  },
] satisfies Array<{
  name: string
  logo: string
  url: string
}>

export const MEMBERSHIP_SECTIONS = [
  {
    title: 'RANKING SOCIOS',
    description: 'Consulta tu posición en el ranking de socios',
    icon: 'Trophy',
    color: 'bg-gray-100 hover:bg-gray-200',
    textColor: 'text-gray-800',
  },
  {
    title: 'ABONOS PLATEAS',
    description: 'Información sobre abonos y ubicaciones',
    icon: 'CreditCard',
    color: 'bg-red-600 hover:bg-red-700',
    textColor: 'text-white',
  },
  {
    title: 'AGRUPACIONES',
    description: 'Únete a las agrupaciones oficiales',
    icon: 'Users',
    color: 'bg-gray-100 hover:bg-gray-200',
    textColor: 'text-gray-800',
  },
  {
    title: 'CLUB DE BENEFICIOS',
    description: 'Descubre todos los beneficios exclusivos',
    icon: 'Star',
    color: 'bg-red-600 hover:bg-red-700',
    textColor: 'text-white',
  },
  {
    title: 'SOCIOS PROTECTORES',
    description: 'Programa especial de socios protectores',
    icon: 'Shield',
    color: 'bg-yellow-600 hover:bg-yellow-700',
    textColor: 'text-white',
  },
  {
    title: 'VER ARANCELES',
    description: 'Consulta las cuotas y aranceles vigentes',
    icon: 'DollarSign',
    color: 'bg-gray-100 hover:bg-gray-200',
    textColor: 'text-gray-800',
  },
] satisfies Array<{
  title: string
  description: string
  icon: string
  color: string
  textColor: string
}>

export const LATEST_NEWS_SOCIOS = [
  {
    title: 'Socios Interior: información importante',
    image: '/placeholder.svg?height=200&width=300',
    category: 'FILIALES',
  },
  {
    title: 'Actualización de la cuota social',
    image: '/placeholder.svg?height=200&width=300',
    category: 'SOCIOS',
  },
  {
    title: '¡Últimos paquetes a Santiago del Estero!',
    image: '/placeholder.svg?height=200&width=300',
    category: 'VIAJES',
  },
] satisfies Array<{
  title: string
  image: string
  category: string
}>

export const FOOTER_DATA = {
  brand: {
    name: 'Estudiantes',
    description: 'Club Estudiantes de La Plata - Sitio NO Oficial',
  },
  sections: [
    {
      title: 'SEDE SOCIAL PEDRO OSÁCAR',
      items: ['Av. 51 N° 1050 (DPTOS)', '(1900) 120 7704', 'La Plata', 'Provincia de Buenos Aires'],
    },
    {
      title: 'COUNTRY CLUB MARIANO MANGANO',
      items: [
        'Calle 460 (Gonnet) esq. 29',
        '(0221) 484 7704',
        'La Plata',
        'Provincia de Buenos Aires',
      ],
    },
    {
      title: 'ESTADIO JORGE LUIS HIRSCHI',
      items: ['Av. 1 entre 55 y 57', '(0221) 421 7704', 'La Plata', 'Provincia de Buenos Aires'],
    },
    {
      title: 'COLEGIO DE ESTUDIANTES DE LA PLATA',
      items: [
        'Calle 462 (Alvear) esquina 28',
        '(+54 221) 521 7108',
        '(1896) City Bell',
        'Provincia de Buenos Aires.',
      ],
    },
  ],
} satisfies {
  [key: string]:
    | {
        name: string
        description: string
      }
    | Array<{
        title: string
        items: Array<string>
      }>
}
