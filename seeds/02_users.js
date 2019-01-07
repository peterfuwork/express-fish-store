
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
            password: "$2a$08$zyfH/KFxEgH/fx9hhjMYFOeEsebxyOk91DmHMOfkaU6.qFPZ2rlke"
          },
          { 
            first_name: "Victor",
            last_name: "Edwards",
            birth_year: 1995,
            email: "vi@email.com",
            username: "handsomeman8495",
            password: "$2a$08$5Ui1.1lHBmp6tNQV0.Aewe6mEpplbQd5Zs61tltaejOmnNiHYistu"
          },
          { 
            first_name: "Doris",
            last_name: "Nelson",
            birth_year: 1979,
            email: "do@email.com",
            username: "mycutelittlepuppy1020",
            password: "$2a$08$oIACYyARsFkQluwe7aNln..T0pX/KTIRJgZFpHCMu5dV7a70OvGHi"
          },
          { 
            first_name: "Crystal",
            last_name: "Ice",
            birth_year: 1992,
            email: "cr@email.com",
            username: "prettysweetie9102",
            password: "$2a$08$KSs6M8vdQzpBslMuJEThHOet0WvqSmS1fRRQ4B1AVrQklxJm0zvOC"
          },
          { 
            first_name: "Justin",
            last_name: "Muller",
            birth_year: 1968,
            email: "ju@email.com",
            username: "northwinterguy102",
            password: "$2a$08$.HZaMtEhJxaEG2cFJxFWau0rF29Dd11ebvunu1/abbKc9phELlG.K"
          },
          { 
            first_name: "Rick",
            last_name: "Baker",
            birth_year: 1997,
            email: "ri@email.com",
            username: "spammyguy879s",
            password: "$2a$08$t4P8RONlFFxDmWCDs.ddBeoYsBubl9QBoET1zyHuKMXiMm1p0Pp02"
          },
          { 
            first_name: "Adam",
            last_name: "Gonzalez",
            birth_year: 1997,
            email: "ad@email.com",
            username: "whateverguy1987",
            password: "$2a$08$ShBU1WmZVvs31hOyC7mXAuk8o/CMFe6x.eDk2mkBM9of2asPkBw76"
          },
          { 
            first_name: "Mike",
            last_name: "Richardson",
            birth_year: 1963,
            email: "mi@email.com",
            username: "23fasdfv",
            password: "$2a$08$1NqJOuiEMpwQG3.98pWloe3NsD.YVsrwmqaVkO59lh8b3LnEKW4WO"
          },
          { 
            first_name: "Joanne",
            last_name: "Carter",
            birth_year: 1984,
            email: "fishy099@email.com",
            username: "fishyfishy099",
            password: "$2a$08$wtSZcPHZOmE0z47FFRWHI.NM..wy6vZxliQvMnBnDhF8u6JAcFzTG"
          },
          { 
            first_name: "Katie",
            last_name: "Cox",
            birth_year: 1975,
            email: "ka@email.com",
            username: "s29jghs",
            password: "$2a$08$Zqnjy3h.izXX1VYEAM2Dse8JJaYa2yb6yTnuit3EGTQwu5C0xDG0y"
          },
          { 
            first_name: "Kevin",
            last_name: "O\"Leary",
            birth_year: 1954,
            email: "ke@email.com",
            username: "mrwonderful0910",
            password: "$2a$08$7bJd9mZcvO0Z/3Qm6Z6bxeaW6.rXtXc9iTve3ZNxnvi36ZicnFIB2"
          },
          { 
            first_name: "Duke",
            last_name: "Morris",
            birth_year: 1987,
            email: "du@email.com",
            username: "marineguy239",
            password: "$2a$08$aVoRkdbupqALm3TrTIKX3eR0qLx9bsw4yor8A/og5I5m4YVJmuqsi"
          },
          { 
            first_name: "Casey",
            last_name: "Stewart",
            birth_year: 1985,
            email: "ca@email.com",
            username: "awwwwww847ghf",
            password: "$2a$08$woJCbx1RYlToRl0o/i/aTuFbXoIg4xs9QqGbOhX46PuUDhbzcSi0m"
          },
          { 
            first_name: "Olivia",
            last_name: "Bell",
            birth_year: 1959,
            email: "ol@email.com",
            username: "mamafish7777",
            password: "$2a$08$ne0MdLpKpTGGil19D5/b6eklM/aibg/e/oyZ.Tab5vDEaI/PBVdOe"
          },
          { 
            first_name: "Yale",
            last_name: "Wright",
            birth_year: 1973,
            email: "ya@email.com",
            username: "guy92018f",
            password: "$2a$08$.0b2ZM/bqxrfYhA68AxIc.fAJv8U3ElXN2zWj0v2aXUIE610LxtgW"
          },
          { 
            first_name: "Jim",
            last_name: "Smith",
            birth_year: 1999,
            email: "ji@email.com",
            username: "hatredguy2097",
            password: "$2a$08$xx9Rf5gdDYV/7UPv4KQ3zuL2Ug3d9VyGGCyg5sxxekddQGF2KslmK"
          },
          { 
            first_name: "Toni",
            last_name: "Young",
            birth_year: 1986,
            email: "to@email.com",
            username: "dragon2918",
            password: "$2a$08$Q6WS0wiZ61sqYgQidorzXekb91nSH069jUOFZGBRn7C4it5KWXPLi"
          },
          { 
            first_name: "Roxana",
            last_name: "Butler",
            birth_year: 1996,
            email: "lovelovelove@email.com",
            username: "becauseIloveyou20130212",
            password: "$2a$08$fIRTziVvApCTilHZPQUNSebsqNPPhoXYHRmf3jWe0jjZQ7VkZUp/C"
          },
          { 
            first_name: "Wendy",
            last_name: "Lewis",
            birth_year: 1977,
            email: "emo@email.com",
            username: "emoji102903",
            password: "$2a$08$wMWwUTYJJuH1k9GyrtazQ.o8W48IEzJVdnjnApmw5mSGkdsVUDbOW"
          },
          { 
            first_name: "Cao",
            last_name: "Cao",
            birth_year: 1956,
            email: "caocao@email.com",
            username: "caocaoWAWAWA2012",
            password: "$2a$08$X1.phALzuSEX.eDeshTJMOJCsA4MxePPZBZEOhd9O.fHzONzFCV46"
          },
        ]
      );
    });
};
