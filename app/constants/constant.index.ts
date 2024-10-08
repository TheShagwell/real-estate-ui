// import { EstateHome } from "/public/_Icon-home-estate.svg"

// Index page 
export const NavItems = [
    {
        id: 'nav-01',
        title: 'Home',
        link: '/',
    },
    {
        id: 'nav-02',
        title: 'About Us',
        link: '/about-us',
    },
    {
        id: 'nav-03',
        title: 'Properties',
        link: '/properties',
    },
    {
        id: 'nav-04',
        title: 'Services',
        link: '/services',
    }
]
 
export const Rental = [
    {
        id: 'rent-01',
        title: 'Seaside Serenity Villa',
        text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
    },
    {
        id: 'rent-02',
        title: 'Seaside Serenity Villa',
        text: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
    },
]

interface ThreeBoxed {
    id: string
    header: string
    testament: string
}

export const Inview:ThreeBoxed[] = [
    {
        id: 'item-1',
        header: '200+',
        testament: 'Happy Customers',
    },
    {
        id: 'item-2',
        header: '10k+',
        testament: 'Properties For Clients',
    },
    {
        id: 'item-3',
        header: '16+',
        testament: 'Years of Experience',
    },
]

interface FourBoxed {
    id: string
    icon: string
    text: string
    absoluteIcon: string
}

export const Package:FourBoxed[] = [
    {
        id: 'package-1',
        icon: "/Icon-home-estate.svg",
        absoluteIcon: '/IconAbsolute-Arrow.svg',
        text: 'Find your dream home'
    },
    {
        id: 'package-2',
        icon: "/_Icon-money-value.svg",
        absoluteIcon: '/IconAbsolute-Arrow.svg',
        text: 'Unlock property value'
    },
    {
        id: 'package-3',
        icon: "/_Icon-property.svg",
        absoluteIcon: '/IconAbsolute-Arrow.svg',
        text: 'Effortless Property Management'
    },
    {
        id: 'package-4',
        icon: "/_icon-sunlight.svg",
        absoluteIcon: '/IconAbsolute-Arrow.svg',
        text: 'Unlock property value'
    }
]

export const FAQ = [
    {
        id: '1',
        title: 'How do I search for properties on Estatein?',
        question: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
        btn: '',
    },
    {
        id: '2',
        title: 'What documents do I need to sell my property through Estatein?',
        question: 'Find out about the necessary documentation for listing your property with us..',
        btn: '',
    },
    {
        id: '3',
        title: 'How can I contact an Estatein agent?',
        question: 'Discover the different ways you can get in touch with our experienced agents.',
        btn: '',
    },
]