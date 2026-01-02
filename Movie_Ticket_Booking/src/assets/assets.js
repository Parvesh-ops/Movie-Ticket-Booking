import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo, marvelLogo, googlePlay, appStore, screenImage,
    profile
}

// export const dummyTrailers = [
//     {
//         image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
//         videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
//     },
//     {
//         image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
//         videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
//     },
//     {
//         image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
//         videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
//     },
//     {
//         image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
//         videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
//     },
// ]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

// export const dummyShowsData = [
export const dummyShowsData = [
    {
        _id: "324544",
        id: 324544,
        title: "In the Lost Lands",
        overview:
            "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands...",
        poster_path:
            "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        genres: [
            { id: 28, name: "Action" },
            { id: 14, name: "Fantasy" },
            { id: 12, name: "Adventure" }
        ],
        casts: dummyCastsData,
        release_date: "2025-02-27",
        original_language: "en",
        tagline: "She seeks the power to free her people.",
        vote_average: 6.4,
        vote_count: 15000,
        runtime: 102,
        trailer: "https://www.youtube.com/watch?v=CMyrp5Vk3mU"
    },

    {
        _id: "886056",
        id: 886056,
        title: "Alita: Battle Angel",
        overview:
            "Alita: Battle Angel is a 2019 American cyberpunk action film based on Yukito Kishiro's manga series Battle Angel Alita...",
        poster_path:
            "https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png",
        backdrop_path:
            "https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png",
        genres: [
            { id: 28, name: "Action" },
            { id: 878, name: "Science Fiction" },
            { id: 12, name: "Adventure" }
        ],
        casts: dummyCastsData,
        release_date: "2025-04-30",
        original_language: "en",
        tagline: "Everyone deserves a second shot.",
        vote_average: 7.443,
        vote_count: 23569,
        runtime: 127,
        trailer: "https://www.youtube.com/watch?v=w7pYhpJaJW8"
    }
    ,
    {
        _id: "1232546",
        id: 1232546,
        title: "Until Dawn",
        overview:
            "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers...",
        poster_path:
            "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        genres: [
            { id: 27, name: "Horror" },
            { id: 9648, name: "Mystery" }
        ],
        casts: dummyCastsData,
        release_date: "2025-04-23",
        original_language: "en",
        tagline: "Every night a different nightmare.",
        vote_average: 6.405,
        vote_count: 18000,
        runtime: 103,
        trailer: "https://www.youtube.com/watch?v=2b3vBaINZ7w"
    }
    ,
    {
        _id: "552524",
        id: 552524,
        title: "Lilo & Stitch",
        overview:
            "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        poster_path:
            "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        genres: [
            { id: 10751, name: "Family" },
            { id: 35, name: "Comedy" },
            { id: 878, name: "Science Fiction" }
        ],
        casts: dummyCastsData,
        release_date: "2025-05-17",
        original_language: "en",
        tagline: "Hold on to your coconuts.",
        vote_average: 7.117,
        vote_count: 27500,
        runtime: 108,
        trailer: "https://www.youtube.com/watch?v=VWqJifMMgZE"
    },

    {
        _id: "668489",
        id: 668489,
        title: "Havoc",
        overview:
            "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        poster_path:
            "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        genres: [
            { id: 28, name: "Action" },
            { id: 80, name: "Crime" },
            { id: 53, name: "Thriller" }
        ],
        casts: dummyCastsData,
        release_date: "2025-04-25",
        original_language: "en",
        tagline: "No law. Only disorder.",
        vote_average: 6.537,
        vote_count: 35960,
        runtime: 107,
        trailer: "https://www.youtube.com/watch?v=6txjTWLoSc8"
    },

    {
        _id: "950387",
        id: 950387,
        title: "A Minecraft Movie",
        overview:
            "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld...",
        poster_path:
            "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        genres: [
            { id: 10751, name: "Family" },
            { id: 35, name: "Comedy" },
            { id: 12, name: "Adventure" },
            { id: 14, name: "Fantasy" }
        ],
        casts: dummyCastsData,
        release_date: "2025-03-31",
        original_language: "en",
        tagline: "Be there and be square.",
        vote_average: 6.516,
        vote_count: 15225,
        runtime: 101,
        trailer: "https://www.youtube.com/watch?v=wJO_vIDZn-I"
    },

    {
        _id: "575265",
        id: 575265,
        title: "Mission: Impossible - The Final Reckoning",
        overview:
            "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe...",
        poster_path:
            "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        genres: [
            { id: 28, name: "Action" },
            { id: 12, name: "Adventure" },
            { id: 53, name: "Thriller" }
        ],
        casts: dummyCastsData,
        release_date: "2025-05-17",
        original_language: "en",
        tagline: "Our lives are the sum of our choices.",
        vote_average: 7.042,
        vote_count: 19885,
        runtime: 170,
        trailer: "https://www.youtube.com/watch?v=fsQgc9pCyDU"
    },

    {
        _id: "986056",
        id: 986056,
        title: "Thunderbolts*",
        overview:
            "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        poster_path:
            "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        backdrop_path:
            "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        genres: [
            { id: 28, name: "Action" },
            { id: 878, name: "Science Fiction" },
            { id: 12, name: "Adventure" }
        ],
        casts: dummyCastsData,
        release_date: "2025-04-30",
        original_language: "en",
        tagline: "Everyone deserves a second shot.",
        vote_average: 7.443,
        vote_count: 23569,
        runtime: 127,
        trailer: "https://www.youtube.com/watch?v=-sAOWhvheK8"
    },
    {
        _id: "112233",
        id: 112233,
        title: "John Wick: Chapter 5",
        overview:
            "John Wick faces his most dangerous enemies yet in the final chapter.",
        poster_path:
            "https://i.ytimg.com/vi/HOt0NJ_-gQ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsTiVR4C6hsIDfT6cxh0fikgxn1A",
        backdrop_path:
            "https://i.ytimg.com/vi/HOt0NJ_-gQ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsTiVR4C6hsIDfT6cxh0fikgxn1A",
        genres: [
            { id: 28, name: "Action" },
            { id: 53, name: "Thriller" }
        ],
        casts: dummyCastsData,
        release_date: "2026-06-10",
        original_language: "en",
        tagline: "Every action has consequences.",
        vote_average: 8.2,
        vote_count: 12000,
        runtime: 145,
        trailer: "https://www.youtube.com/watch?v=nAxQ01JJr5c"
    },
    {
        _id: "999888",
        id: 999888,
        title: "FAST & FURIOUS 11 (2026)",
        overview: "As Dante's punishment begins, Dom forms an unlikely alliance with Ronaldo for one final, all-out war to protect his family.",
        poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefWiPD4pVodal1YkwhcGChW0DG1NHrJUyew&s",
        backdrop_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefWiPD4pVodal1YkwhcGChW0DG1NHrJUyew&s",
        genres: [
            { id: 28, name: "Action" },
            { id: 12, name: "Adventure" }
        ],
        casts: dummyCastsData,
        release_date: "2026-04-07",
        original_language: "en",
        tagline: "One last ride.",
        vote_average: 7.9,
        vote_count: 21000,
        runtime: 150,
        trailer: "https://www.youtube.com/watch?v=vWVSOj_k1QA"
    },
    {
        _id: "101010",
        id: 101010,
        title: "Deadpool & Wolverine",
        overview:
            "Deadpool teams up with Wolverine in a multiverse-shattering adventure full of chaos, humor, and brutal action.",
        poster_path:
            "https://m.media-amazon.com/images/M/MV5BOTcxNzNmMzItYTk0ZC00YmM4LThhYTQtOTFhYzE4YjNkODhmXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg",
        backdrop_path:
            "https://m.media-amazon.com/images/M/MV5BOTcxNzNmMzItYTk0ZC00YmM4LThhYTQtOTFhYzE4YjNkODhmXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg",
        genres: [
            { id: 28, name: "Action" },
            { id: 35, name: "Comedy" },
            { id: 878, name: "Science Fiction" }
        ],
        casts: dummyCastsData,
        release_date: "2024-07-26",
        original_language: "en",
        tagline: "Everyone needs a partner.",
        vote_average: 8.0,
        vote_count: 32000,
        runtime: 130,
        trailer: "https://www.youtube.com/watch?v=73_1biulkYk"
    },

    {
        _id: "202020",
        id: 202020,
        title: "Avatar: Fire and Ash ",
        overview:
            "Jake Sully and Neytiri face a new threat as Pandora’s future hangs in the balance.",
        poster_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m6Ril-dDwJr7A2MEPaXykqfou5JOcRnsSA&s",
        backdrop_path:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m6Ril-dDwJr7A2MEPaXykqfou5JOcRnsSA&s",
        genres: [
            { id: 12, name: "Adventure" },
            { id: 878, name: "Science Fiction" },
            { id: 14, name: "Fantasy" }
        ],
        casts: dummyCastsData,
        release_date: "2026-12-18",
        original_language: "en",
        tagline: "Protect the future of Pandora.",
        vote_average: 8.3,
        vote_count: 18000,
        runtime: 185,
        trailer: "https://www.youtube.com/watch?v=nb_fFj_0rq8"
    },

    {
        _id: "303030",
        id: 303030,
        title: "The Batman: Part II",
        overview:
            "Batman uncovers deeper corruption in Gotham while facing a new, ruthless enemy.",
        poster_path:
            "https://m.media-amazon.com/images/M/MV5BMTU2NzhiYWUtYThlZi00OWIyLTk3YWEtZjY3NmJjOTZiZDAyXkEyXkFqcGc@._V1_.jpg",
        backdrop_path:
            "https://m.media-amazon.com/images/M/MV5BMTU2NzhiYWUtYThlZi00OWIyLTk3YWEtZjY3NmJjOTZiZDAyXkEyXkFqcGc@._V1_.jpg",
        genres: [
            { id: 80, name: "Crime" },
            { id: 18, name: "Drama" },
            { id: 53, name: "Thriller" }
        ],
        casts: dummyCastsData,
        release_date: "2025-10-03",
        original_language: "en",
        tagline: "The night gets darker.",
        vote_average: 8.1,
        vote_count: 22000,
        runtime: 155,
        trailer: "https://www.youtube.com/watch?v=T7_zMl_ZhdQ"
    }
]

export const dummyTheatersData = [
  {
    id: "t1",
    name: "QFX Cinemas",
    location: "Civil Mall, Kathmandu",
    shows: ["10:30 AM", "1:45 PM", "5:00 PM", "8:30 PM"]
  },
  {
    id: "t2",
    name: "Big Movies",
    location: "City Center, Kathmandu",
    shows: ["11:00 AM", "2:30 PM", "6:15 PM", "9:45 PM"]
  },
  {
    id: "t3",
    name: "Apple Cinemas",
    location: "KL Tower, Kathmandu",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
  {
    id: "t4",
    name: "City Complex Cinemas",
    location: "centrall mall, Biratnagar",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
  {
    id: "t5",
    name: "City  Cinemas",
    location: "Bhatbateni, Kathmandu",
    shows: ["9:45 AM", "1:00 PM", "4:30 PM", "7:45 PM"]
  },
];

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    },
]