import icons from "./icons";
import images from "./images";

export const socials = [
    {
        icon: icons.facebook,
        url: ""
    },
    {
        icon: icons.google,
        url: ""
    },
    {
        icon: icons.apple,
        url: ""
    },
]

export const helpers = [
    {
        label: 'Calculator',
        icon: icons.calculator,
        url: ''
    },
    {
        label: 'Convert',
        icon: icons.convert,
        url: 'Convert'
    },
    {
        label: 'Compare',
        icon: icons.compare,
        url: ''
    },
    {
        label: 'Price Alert',
        icon: icons.priceAlert,
        url: ''
    },
]

export const trending = [
    {
        name: 'Bitcoin',
        shortName: 'BTC',
        price: '32,128.80',
        rate: 2.5,
        icon: icons.bitcoin,
    },
    {
        name: 'Neo',
        shortName: 'NEO',
        price: '13,221.55',
        rate: 2.2,
        icon: icons.neo,
    },
    {
        name: 'Achain',
        shortName: 'ACT',
        price: '28,312.80',
        rate: -2.2,
        icon: icons.achain,
    },
]

export const marketLinks = [
    {
        label: 'Watchlists',
        icon: icons.watchlists,
    },
    {
        label: 'Trending',
        icon: icons.trending,
    },
    {
        label: 'Best Value',
        icon: icons.goodValue,
    },
]

export const cryptoMarket = [
    {
        icon: icons.vechain,
        label: 'Vechain',
        rate: 2.1,
        price: '14,112.86',
        mcap: '$893.43 Bn',
        graphic: 1,
    },
    {
        icon: icons.bitcoin,
        label: 'Bitcoin',
        rate: 2.5,
        price: '32,128.80',
        mcap: '$893.43 Bn',
        graphic: 2,
    },
    {
        icon: icons.achain,
        label: 'Achain',
        rate: 2.2,
        price: '28,312.22',
        mcap: '$893.43 Bn',
        graphic: 1,
    },
    {
        icon: icons.bytecoin,
        label: 'Bytecoin',
        rate: 2.2,
        price: '15,313.81',
        mcap: '$893.43 Bn',
        graphic: 2,
    },
    {
        icon: icons.vitae,
        label: 'Vitae',
        rate: 2.1,
        price: '14,112.86',
        mcap: '$893.43 Bn',
        graphic: 1,
    },
]

export const transactions = [
    {
        date: '12 June 2021',
        transactions: [
            {
                icon: icons.bitcoin,
                name: 'Bitcoin',
                time: '11:34 AM',
                price: 'BTC 0.0056',
                get: '950.50',
            },
            {
                icon: icons.receive,
                name: 'Withdraw',
                time: '10:12 AM',
                price: '2,700.00',
            },
        ]
    },
    {
        date: '10 June 2021',
        transactions: [
            {
                icon: icons.achain,
                name: 'Achain',
                time: '12:30 PM',
                price: 'ACH 1.3000',
                get: '1,223.00',
            },
            {
                icon: icons.send,
                name: 'Deposit',
                time: '8:30 AM',
                price: '250.00',
            },
            {
                icon: icons.bytecoin,
                name: 'Bytecoin',
                time: '07:13 AM',
                price: 'BCN 2.5400',
                get: '340.00',
            },
        ]
    },
]

export const news = [
    {
        title: 'Achain news',
        icon: icons.achain,
        news: [
            {
                image: images.achainNews,
                title: 'Participate in the Corra Finance Airdrop on CoinMarketCap',
                dateAgo: '3 days ago',
                size: 'lg',
            }
        ]
    },
    {
        title: 'Bitcoin news',
        icon: icons.bitcoin,
        news: [
            {
                image: images.bitcoinNews1,
                title: 'Participate in the Corra Finance Airdrop on CoinMarketCap',
                dateAgo: '3 days ago',
            },
            {
                image: images.bitcoinNews2,
                title: 'Participate in the Corra Finance Airdrop on CoinMarketCap',
                dateAgo: '3 days ago',
            }
        ]
    }
]

export const keyboard = [
    [icons.one,
    icons.two,
    icons.three],
    [icons.four,
    icons.five,
    icons.six],
    [icons.seven,
    icons.eight,
    icons.nine],
    [icons.star,
    icons.zero,
    icons.remove],
]