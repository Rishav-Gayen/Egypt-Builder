export const destinations = [
  {
    id: 'cairo',
    name: 'Cairo',
    imageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc: 'The historical capital of Egypt',
    activities: [
      {
        id: 'great_pyramids_of_giza',
        name: 'Great Pyramids of Giza',
        imageUrl: "https://nitsaholidays.in/uploads/blog/951953Great_Pyramid_of_Giza.jpg",
        selected: false
      },
      {
        id: 'sakkara_and_memphis',
        name: 'Sakkara and memphis',
        imageUrl: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/58682/2000x2000-0-70-37b99cdcc5ca424d90518db3019ff353.jpg',
        selected: false
      },
      {
        id: 'egyptian_museum',
        name: 'Egyptian Museum',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/1585432486502-GUXZOO5POMJY31F3QKOE/egyptianmuseumcolossi.jpg',
        selected: false
      },
      {
        id: 'Old_cairo_city_tour',
        name: 'Old Cairo City Tour',
        imageUrl: 'https://veronikasadventure.com/wp-content/uploads/2024/07/5_enjoy-egyptian-museum-magic-of-old-cairo-city-tour.jpg',
        selected: false
      },
      {
        id: 'Khan_el_Khalili',
        name: 'Khan El Khalili',
        imageUrl: 'https://www.vounajanela.com/wp-content/uploads/2023/04/EGITO_20.jpg',
        selected: false
      },
      {
        id: 'grand_bazaar_and_spice_market',
        name: 'Grand Bazaar And Spice Market',
        imageUrl: 'https://www.thebarefootnomad.com/wp-content/uploads/2020/03/Walking-Khan-el-Khalili-bazaar-in-Cairo-Egypt-DP.jpg',
        selected: false
      },
      {
        id: 'Papyrus Museum',
        name: 'Papyrus Museum',
        imageUrl: 'https://www.bwm.at/media/images/projects/papyrusmuseum/4cmTJ9N23_8Q_1200x2400.jpg',
        selected: false
      },
      {
        id: 'bellydance',
        name: 'Nile Dinner River Cruise with bellydance show',
        imageUrl: 'https://traveltoursegypt.com/wp-content/uploads/2021/04/cruise-dinner-800x600-1.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'Mainland',
      popular: true,
      idealFor: ['history', 'culture']
    }
  },
  {
    id: 'luxor',
    name: 'Luxor',
    imageUrl: 'https://images.unsplash.com/photo-1668947191831-387e3ad7e715?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc:"Renowned for it's grand temples and valley of kings",
    activities: [
      {
        id: 'valley_of_kings',
        name: 'Valley of Kings',
        imageUrl: 'https://toptripsegypt.com/wp-content/uploads/2022/05/Valley-of-Kings-2-1.jpg',
        selected: false
      },
      {
        id: 'valley_of_queens',
        name: 'Valley of Queens',
        imageUrl: 'http://gootatravel.com/wp-content/uploads/2022/06/Valley-of-the-Queens.jpg',
        selected: false
      },
      {
        id: 'temple_of_karnak',
        name: 'Temple of Karnak',
        imageUrl: 'https://egypttourz.com/wp-content/uploads/2021/09/Karnak-Temples-1.jpg',
        selected: false
      },
      {
        id: 'temple_of_Hatshepshut',
        name: 'Temple of Hatshepshut',
        imageUrl: 'https://i.pinimg.com/originals/da/58/2a/da582a731a6366e9c04c05583ac059d7.jpg',
        selected: false
      },
      {
        id: 'hot_air_balloon_ride',
        name: 'Hot air Balloon Ride',
        imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7f/f1/10.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'upper_egypt',
      popular: true,
      idealFor: ['romance', 'photography']
    }
  },

  {
    id: 'aswan',
    name: 'Aswan',
    imageUrl: 'https://images.unsplash.com/photo-1670352689974-24a50828a54c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc: 'Serene Nile Views and ancient Nubian Heritage',
    activities: [
      {
        id: 'aswan_high_dam',
        name: 'Aswan High Dam',
        imageUrl: 'https://images.memphistours.com/large/676a69d66239dfb5bb72579293463474.jpg',
        selected: false
      },
      {
        id: 'philae_temple',
        name: 'Philae Temple Tour',
        imageUrl: 'https://www.intrepidscout.com/wp-content/uploads/sites/530/2020/02/Temple-of-philae-130.jpg',
        selected: false
      },
      {
        id: 'abu_simbel',
        name: 'Abu simbel Tour',
        imageUrl: 'https://global-geography.org/attach/Geography/Africa/Egypt/Pictures/Abu_Simbel/Abu_Simbel_-_Great_Temple_5/scaled-900x598-ay743_Ramsestempel_Abu_Simbeljpg.jpg',
        selected: false
      },
      {
        id: 'edfu_and_kom_ombo',
        name: 'Edfu & Kom Ombo',
        imageUrl: 'https://unitedguidestravel.com/wp-content/uploads/2022/08/Edfu-and-Kom-Ombo5.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Upper Egypt',
      popular: false,
      idealFor: ['history', 'heritage']
    }
  },

  {
    id: 'nile_cruise_stay',
    name: 'Nile Cruise Stay',
    imageUrl: 'https://images.unsplash.com/photo-1575501376367-6711b9b5756b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDesc: "Greece's largest island",
    activities: [
      {
        id: 'three_day_cruise_sightseeing_Luxor_Aswan',
        name: 'Three day cruise with sightseeing between Luxor and Aswan',
        imageUrl: 'https://egyptescapes.com/wp-content/uploads/2017/10/43042-Nile_cruise_ship_Emilio_2.jpg',
        selected: false
      },
    ],
    accommodationOptions: [
      '3 Star Cruise',
      '4 Star Cruise',
    ],
    metadata: {
      region: 'nile',
      popular: false,
      idealFor: ['cruise', 'chilling']
    }
  },

  {
    id: 'Hurghada',
    name: 'Hurghada',
    imageUrl: 'https://www.toursfromhurghada.com/wp-content/uploads/2018/11/Hurghada-mosque-Hurghada-City-Day-Tour-Tours-From-Hurghada.jpg',
    shortDesc: "Greece's largest island",
    activities: [
      {
        id: 'local_sightseeing',
        name: 'Hurghada Local Sightseeing',
        imageUrl: 'https://memnon-reisen.com/wp-content/uploads/2021/11/99-1024x618.jpg',
        selected: false
      },
      {
        id: 'submarine_cruise',
        name: 'Submarine Cruise',
        imageUrl: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_674/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/y9hohzubqjxmozfsmfzq/Hurghada:RoyalSeascopeSubmarineCruisewithSnorkelStoppickup.jpg',
        selected: false
      },
      {
        id: 'snorkelling',
        name: 'Snorkelling',
        imageUrl: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/301209/2000x2000-0-70-b858495d8a264c6e498a03a98d22f1a0.jpg',
        selected: false
      },
      {
        id: 'dolphin_house',
        name: 'Dolphin House',
        imageUrl: 'https://legendtours-egypt.com/wp-content/uploads/2022/10/dolphin-house-hurghada-5.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Beach Resort',
      'Villa'
    ],
    metadata: {
      region: 'Upper Egypt',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  },
  {
    id: 'alexandria',
    name: 'Alexandria',
    imageUrl: 'https://cdn.britannica.com/37/189737-050-FC9A75B3/palace-gardens-Al-Muntazah-Egypt-Alexandria.jpg',
    shortDesc: "Mediterranean gem blending history and coastal charm",
    activities: [
      {
        id: 'roman_theatre',
        name: 'Roman Theatre',
        imageUrl: 'https://visitourgreece.com/wp-content/uploads/2021/09/Lindos-Acropolis-1-scaled.jpg',
        selected: false
      },
      {
        id: 'catacombs',
        name: 'Catacombs',
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.R3UIi7E5z6p45c0DQJbhPgHaEo?pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'library_of_alexandria',
        name: 'Library of Alexandria',
        imageUrl: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2022/09/shutterstock_2144547169-1024x688.jpg',
        selected: false
      },
      {
        id: 'ancient_city_ruins',
        name: 'Ancient City Ruins',
        imageUrl: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2022/09/shutterstock_2144547169-1024x688.jpg',
        selected: false
      },
      {
        id: 'modern_city_port_visit',
        name: 'Modern City Port Visit',
        imageUrl: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2022/09/shutterstock_2144547169-1024x688.jpg',
        selected: false
      },
      {
        id: 'citadel',
        name: 'Citadel',
        imageUrl: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2022/09/shutterstock_2144547169-1024x688.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Beach Resort',
      'Villa'
    ],
    metadata: {
      region: 'Lower Egypt',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  }
];

// Optional: Helper functions for data access
export const getDestinationById = (id) => 
  destinations.find(dest => dest.id === id);

export const getPopularDestinations = () => 
  destinations.filter(dest => dest.metadata.popular);

export const getDestinationsByRegion = (region) => 
  destinations.filter(dest => dest.metadata.region === region);