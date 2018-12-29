
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(
        [
          { 
            first_name: "Roman",
            last_name: "Campbell",
            birth_year: 1985,
            email: "ro@email.com",
            username: "superman102",
            password: "1234"
          },
          { 
            first_name: "Victor",
            last_name: "Edwards",
            birth_year: 1995,
            email: "vi@email.com",
            username: "handsomeman8495",
            password: "1234"
          },
          { 
            first_name: "Doris",
            last_name: "Nelson",
            birth_year: 1979,
            email: "do@email.com",
            username: "mycutelittlepuppy1020",
            password: "1234"
          },
          { 
            first_name: "Crystal",
            last_name: "Ice",
            birth_year: 1992,
            email: "cr@email.com",
            username: "prettysweetie9102",
            password: "1234"
          },
          { 
            first_name: "Justin",
            last_name: "Muller",
            birth_year: 1968,
            email: "ju@email.com",
            username: "northwinterguy102",
            password: "1234"
          },
          { 
            first_name: "Rick",
            last_name: "Baker",
            birth_year: 1997,
            email: "ri@email.com",
            username: "spammyguy879s",
            password: "1234"
          },
          { 
            first_name: "Adam",
            last_name: "Gonzalez",
            birth_year: 1997,
            email: "ad@email.com",
            username: "whateverguy1987",
            password: "1234"
          },
          { 
            first_name: "Mike",
            last_name: "Richardson",
            birth_year: 1963,
            email: "mi@email.com",
            username: "23fasdfv",
            password: "1234"
          },
          { 
            first_name: "Joanne",
            last_name: "Carter",
            birth_year: 1984,
            email: "fishy099@email.com",
            username: "fishyfishy099",
            password: "1234"
          },
          { 
            first_name: "Katie",
            last_name: "Cox",
            birth_year: 1975,
            email: "ka@email.com",
            username: "s29jghs",
            password: "1234"
          },
          { 
            first_name: "Kevin",
            last_name: "O\"Leary",
            birth_year: 1954,
            email: "ke@email.com",
            username: "mrwonderful0910",
            password: "1234"
          },
          { 
            first_name: "Duke",
            last_name: "Morris",
            birth_year: 1987,
            email: "du@email.com",
            username: "marineguy239",
            password: "1234"
          },
          { 
            first_name: "Casey",
            last_name: "Stewart",
            birth_year: 1985,
            email: "ca@email.com",
            username: "awwwwww847ghf",
            password: "1234"
          },
          { 
            first_name: "Olivia",
            last_name: "Bell",
            birth_year: 1959,
            email: "ol@email.com",
            username: "mamafish7777",
            password: "1234"
          },
          { 
            first_name: "Yale",
            last_name: "Wright",
            birth_year: 1973,
            email: "ya@email.com",
            username: "guy92018f",
            password: "1234"
          },
          { 
            first_name: "Jim",
            last_name: "Smith",
            birth_year: 1999,
            email: "ji@email.com",
            username: "hatredguy2097",
            password: "1234"
          },
          { 
            first_name: "Toni",
            last_name: "Young",
            birth_year: 1986,
            email: "to@email.com",
            username: "dragon2918",
            password: "1234"
          },
          { 
            first_name: "Roxana",
            last_name: "Butler",
            birth_year: 1996,
            email: "lovelovelove@email.com",
            username: "becauseIloveyou20130212",
            password: "1234"
          },
          { 
            first_name: "Wendy",
            last_name: "Lewis",
            birth_year: 1977,
            email: "emo@email.com",
            username: "emoji102903",
            password: "1234"
          },
          { 
            first_name: "Cao",
            last_name: "Cao",
            birth_year: 1956,
            email: "caocao@email.com",
            username: "caocaoWAWAWA2012",
            password: "1234"
          },
        ]
      );
    });
};
