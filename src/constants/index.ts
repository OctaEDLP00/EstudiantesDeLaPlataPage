type Target = '_blank' | '_self' | '_top' | '_parent'

interface NavigationItems {
  name: string
  href: string
  submenu?: Array<{ name: string; href: string; target?: Target }>
  target?: Target
}

interface MegaMenuData {
  title: string
  items?: Array<{ name: string; href: string; target?: Target }>
  target?: Target
}

interface NewsData {
  title: string
  category: string
  image: string
  date: string
}

interface StandingsData {
  pos: number
  team: string
  pts: number
}

interface UpcomingNatches {
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
}

interface SponsorsData {
  name: string
  logo: string
  url: string
}

interface MembershipSections {
  title: string
  description: string
  icon: string
  color: string
  textColor: string
}

interface LatestNewsSocios {
  title: string
  image: string
  category: string
}

type A = { name: string; description: string }
type B = { title: string; items: Array<string> }
type Value = A | Array<B>
interface FooterData {
  [key: string]: Value
}

export const NAVIGATION_ITEMS = [] satisfies Array<NavigationItems>
export const MEGA_MENU_DATA = [] satisfies Array<MegaMenuData>
export const NEWS_DATA = [] satisfies Array<NewsData>
export const STANDINGS_DATA = [] satisfies Array<StandingsData>
export const UPCOMING_MATCHES = [] satisfies Array<UpcomingNatches>
export const MEMBERSHIP_SECTIONS = [] satisfies Array<MembershipSections>
export const LATEST_NEWS_SOCIOS = [] satisfies Array<LatestNewsSocios>
export const FOOTER_DATA = {} satisfies FooterData

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
] satisfies Array<SponsorsData>
