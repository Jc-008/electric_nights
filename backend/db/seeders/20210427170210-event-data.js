'use strict';
// const { Random } = require("random-js")
const faker = require("faker")
// new Date();
// const random = new Random();


module.exports = {
  up: (queryInterface, Sequelize) => {

    // const randomDescription = () => {
    //   const descriptions = [
    //     "Great Dj from the europe ",
    //     "A hobby shop looking for players to enjoy some good times!",
    //     "Hobby shop look and feel!",
    //     "complementary meatloaf made by my mom!",
    //     "just frat guys who play dnd",
    //     "place smells like hookah. pretty good",
    //     "the lodge is great dor a dnd setting!",
    //     "Come down to my mom's basement!",
    //     "My therapist said I need friends!"
    //   ]
    //   return descriptions[random.integer(0, 10)]

    // }




    return queryInterface.bulkInsert('Events', [          // will add event seeders once completed.

      {
        title: 'Deep and heavy sound presented by Alpha J ',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619561032/Electric_Nights-pictures/picture18_ndv47g.jpg',
        host: 'SF Records',
        location: 'Marquee',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 50.00,
        ticketCount: 300,
        categoryId: 1
      },
      {
        title: 'The cosmic sounds of Nishi Neptune',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619561032/Electric_Nights-pictures/picture20_yhj6bj.jpg',
        host: 'SF Records',
        location: 'Avenue',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 35.00,
        ticketCount: 250,
        categoryId: 1
      },
      {
        title: 'Booming sounds presented by Nat Boom',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1625603500/Electric_Nights-pictures/picture6_wezmki.jpg',
        host: 'SF Records',
        location: 'Lavo',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 45.00,
        ticketCount: 250,
        categoryId: 5
      },
      {
        title: 'PurpleCraze with Bamm-bamm',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619561032/Electric_Nights-pictures/picture16_h1fsnl.jpg',
        host: 'SF Records',
        location: 'Central bar lounge',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 35.00,
        ticketCount: 200,
        categoryId: 1
      },
      {
        title: 'Nero presented by U-Nice',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619582438/Electric_Nights-pictures/picture22_pake9s.jpg',
        host: 'aA records',
        location: 'Mission NYC',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 45.00,
        ticketCount: 200,
        categoryId: 1
      },
      {
        title: 'Flying high with Mimi key',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619561031/Electric_Nights-pictures/picture13_zl52ky.jpg',
        host: 'HighFly Music',
        location: 'Webster Hall',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 30.00,
        ticketCount: 350,
        categoryId: 2
      },
      {
        title: 'Smooth waves presented by Josh Rhythm',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1625604529/Electric_Nights-pictures/picture35_rfluy9.jpg',
        host: 'HighFly Music',
        location: 'Webster Hall',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 30.00,
        ticketCount: 350,
        categoryId: 2
      },
      {
        title: 'High beats with Deicide',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619582716/Electric_Nights-pictures/picture23_yf0spq.jpg',
        host: 'Rolling Records',
        location: 'House of Yes',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 30.00,
        ticketCount: 300,
        categoryId: 3
      },
      {
        title: 'The shaking waves of Kasper',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619582933/Electric_Nights-pictures/picture24_r9tdte.jpg',
        host: 'Rolling Records',
        location: 'Good Room',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 25.00,
        ticketCount: 250,
        categoryId: 3
      },
      {
        title: 'Future beats with Jaironetic',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619561032/Electric_Nights-pictures/picture19_byrfbu.jpg',
        host: 'Rolling Records',
        location: 'Caprice',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 25.00,
        ticketCount: 150,
        categoryId: 3
      },
      {
        title: 'The moving sounds of zero',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619560977/Electric_Nights-pictures/picture3_c9open.jpg',
        host: 'aA records',
        location: 'Bossa Nova Civic Club',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 25.00,
        ticketCount: 300,
        categoryId: 3
      },
      {
        title: 'Star lights with Comsmo T',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619583137/Electric_Nights-pictures/picture25_ucppqo.jpg',
        host: 'Rolling Records',
        location: 'Le Bain',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 30.00,
        ticketCount: 250,
        categoryId: 4
      },
      {
        title: 'Rolling beats with A-List ',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619583526/Electric_Nights-pictures/picture27_b50t2w.jpg',
        host: 'Rolling Records',
        location: 'Avant gardner',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 35.00,
        ticketCount: 500,
        categoryId: 4
      },
      {
        title: 'Lucid tunes of TD41',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619583376/Electric_Nights-pictures/picture26_zgr1uc.jpg',
        host: 'Rolling Records',
        location: 'Output',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 45.00,
        ticketCount: 500,
        categoryId: 4
      },
      {
        title: 'GetHeady with Dj VM',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619584494/Electric_Nights-pictures/picture31_hxblwi.jpg',
        host: 'Big&Loud Music',
        location: '1 Oak',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 45.00,
        ticketCount: 250,
        categoryId: 5
      },
      {
        title: 'Big and classics with Dj guny',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619584253/Electric_Nights-pictures/picture30_bpkesf.jpg',
        host: 'Big&Loud Music',
        location: 'Webster Hall',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 35.00,
        ticketCount: 350,
        categoryId: 5
      },
      {
        title: 'Pure drops and sound of Nat Boom',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619584164/Electric_Nights-pictures/picture29_zhfo5q.jpg',
        host: 'Big&Loud Music',
        location: 'TAO downtown',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 40.00,
        ticketCount: 250,
        categoryId: 5
      },
      {
        title: 'The dope sounds of D0p3 Trekt',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619583969/Electric_Nights-pictures/picture28_c0n6d1.jpg',
        host: 'Snare70 sounds',
        location: 'Mister East',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 25.00,
        ticketCount: 200,
        categoryId: 6
      },
      {
        title: 'Moving steps with Jeb Jax',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619560975/Electric_Nights-pictures/picture7_nblksh.jpg',
        host: 'Snare70 sounds',
        location: '46 Lounge',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 25.00,
        ticketCount: 150,
        categoryId: 6
      },
      {
        title: 'The Loud and strong beats of Bay blaze',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1619560975/Electric_Nights-pictures/picture5_ydyobg.jpg',
        host: 'Snare70 sounds',
        location: 'Brooklyn Bowl',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 45.00,
        ticketCount: 400,
        categoryId: 7
      },
      {
        title: 'Hard and strong with Cloudfinity',
        imageUrl: 'https://res.cloudinary.com/dwus7ia33/image/upload/v1625604347/Electric_Nights-pictures/picture34_cozupt.jpg',
        host: 'Snare70 sounds',
        location: 'Barcode',
        time: faker.date.future(),
        description: faker.lorem.sentences(6),
        ticketPrice: 35.00,
        ticketCount: 300,
        categoryId: 7
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
