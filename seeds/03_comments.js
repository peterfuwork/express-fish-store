
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("comments").del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert(
        [
          { 
            cid: "IPCBnYIR8iSygSz0Zf4U",
            text: "I like this fish",
            uid: 1,
            rating: 4.5,
            fid: "mvuglrgshurl93cw5nak"
          },
          { 
            cid: "jzSmBK4wCk4N8wPzwJC0",
            text: "Highly recommand",
            uid: 10,
            rating: 5,
            fid: "mvuglrgshurl93cw5nak"
          },
          { 
            cid: "zHmLNJtv8DoEklAQUszs",
            text: "Don't buy it from this store",
            uid: 8,
            rating: 1,
            fid: "mvuglrgshurl93cw5nak"
          },
          {
            cid: "75mh0sO4jY9K3ycB0NoO",
            text: "i am OOOOOUT!",
            uid: 11,
            rating: 0.5,
            fid: "qyblg33mt64xk4tcd9zn"
          },
          {
            cid: "jXbhEqzzs5I7rAjmvNWK",
            text: "Do not be mean!",
            uid: 10,
            fid: "qyblg33mt64xk4tcd9zn"
          },
          {
            cid: "Ykd3PFHl6qn4QNvZDxUW",
            text: "it's cute and very hardy",
            uid: 8,
            rating: 4.5,
            fid: "qyblg33mt64xk4tcd9zn"
          },
          { 
            cid: "7LdbZ8UXKvpvCoZ0xi1c",
            text: "what did I said?",
            uid: 6,
            fid: "zokhoo1stlmubxtuuojp"
          },
          { 
            cid: "Is7tymLrla8s8IAhxPZK",
            text: "AWWWWWWW!! SO CUTE",
            uid: 3,
            rating: 5,
            fid: "zokhoo1stlmubxtuuojp"
          },
          { 
            cid: "Lv6nRjQp01sEEXb5zWoj",
            text: "no idea why it's so expensive.",
            uid: 7,
            rating: 2,
            fid: "zokhoo1stlmubxtuuojp"
          },
          { 
            cid: "RmPX2m1IP46Z19Amu77W",
            text: "looks ugly!",
            uid: 16,
            rating: 0.5,
            fid: "e77mkwtsjqnc1qes8alo"
          },
          { 
            cid: "pxRmsbEmLZ29LmRnsDrx",
            text: "AWWWWWWW!! SO CUTE",
            uid: 3,
            rating: 5,
            fid: "e77mkwtsjqnc1qes8alo"
          },
          { 
            cid: "rItquGUTuSc4vGb1FJ1i",
            text: "you won't regret to buy this fish.",
            uid: 8,
            rating: 4,
            fid: "a6v6ujxkytenza6rluqy"
          },
          { 
            cid: "dZ0dvLttmgyGR5LpnZmU",
            text: "It's a pretty fish. Love it so much!",
            uid: 3,
            rating: 4.5,
            fid: "a6v6ujxkytenza6rluqy"
          },
          { 
            cid: "MAuBjzFaZahyK4ahBebY",
            text: "I bought 2 of them and they get along very well.",
            uid: 3,
            rating: 4.5,
            fid: "dpuxr385qtm6zw9qhkgm"
          },
          { 
            cid: "ffv5uSbnz8EPK6m9r8D7",
            text: "She's a lier! Don't believe her.",
            uid: 6,
            fid: "dpuxr385qtm6zw9qhkgm"
          },
          {
            cid: "7xLjjNdtY4c7ygLITWqA",
            text: "Don't buy it. It's very hard to survive.",
            uid: 10,
            rating: 0.5,
            fid: "ajeiwz27cxtrtutb0umi"
          },
          {
            cid: "4RicEJskLSGjhjvxMElF",
            text: "It's extremely hard to keep it live. Only for expert.",
            uid: 2,
            rating: 1,
            fid: "ajeiwz27cxtrtutb0umi"
          },
          {
            cid: "ZwAJHpP7fFxPuiYDg6RL",
            text: "Dory!!!",
            uid: 4,
            fid: "zlppfjcfzuigpqaagps0"
          },
          { 
            cid: "SsZzZLy5VkXQiI0PbfF6",
            text: "Nice fishy! but beware it EATS A LOT!",
            uid: 6,
            rating: 4,
            fid: "zlppfjcfzuigpqaagps0"
          },
          {
            cid: "EsvDdTwjSbRXPqmtRyPy",
            text: "I feed it algae and some pallets and it is very easy to keep alive.",
            uid: 2,
            rating: 4.5,
            fid: "zlppfjcfzuigpqaagps0"
          },
          { 
            cid: "xkWeiXz8QUhDpPidvdnK",
            text: "It's also a pretty fish. Love it so much!",
            uid: 3,
            rating: 5,
            fid: "zlppfjcfzuigpqaagps0"
          },
          { 
            cid: "goQzi1FFqQY4JduPTRNe",
            text: "it's for any beginner.",
            uid: 5,
            rating: 4,
            fid: "xlo8iaswkdahu3ygek8b"
          },
          {
            cid: "XJf1BCUakg5Yokuo3055",
            text: "just chill...",
            uid: 6,
            fid: "xlo8iaswkdahu3ygek8b"
          },
          { 
            cid: "XMf0DvkYHguv2fHzuiUL",
            text: "hey @spammyguy879s this is not a blog page",
            uid: 5,
            fid: "xlo8iaswkdahu3ygek8b"
          },
          { 
            cid: "sIeeUfdvCB975ZXllVLZ",
            text: "I know @northwinterguy102 but who cares.",
            uid: 6,
            fid: "xlo8iaswkdahu3ygek8b"
          },
          { 
            cid: "0qbpg2HeuXGU02Z7Ssl0",
            text: "Looks pretty! I had three of them in my tank. They like to swim together.",
            uid: 12,
            rating: 5,
            fid: "qtqznmfl05nrblczi4ab"
          },
          { 
            cid: "ZN7boeyKs7ARAwgBx0J9",
            text: "This fish is aggresive. It gave me so much headache. Don't buy it.",
            uid: 5,
            rating: 2.5,
            fid: "fzhtf1uljsp7m88eb0gf"
          },
          { 
            cid: "zWFCrjuiQGqfbToIOeX0",
            text: "Can grow very big. You'll need to have at least 300 gallon tank to keep it calm.",
            uid: 10,
            fid: "fzhtf1uljsp7m88eb0gf"
          },
          { 
            cid: "wXROw3XJzeZ6q93yfMPj",
            uid: 13,
            text: "my daughter loves it so much!",
            rating: 4.5,
            fid: "fzhtf1uljsp7m88eb0gf"
          },
          { 
            cid: "ic0IDFcGmuv0brlSkhP0",
            text: "color looks great!!!",
            uid: 14,
            rating: 4,
            fid: "f9rpeepl0ff2r9t0hzmy"
          },
          { 
            cid: "jg9NmVmDSTVkhRwLA1LF",
            text: "It's probably the most beautiful butterflyfish in the world. However, it's nearly impossible to keep it alive in your own tank. Don't buy it. 🙄",
            uid: 15,
            rating: 3.5,
            fid: "fd4zq7vchwv40cyo8rmm"
          },
          { 
            cid: "lGuU0NGnLMHphWQVikGM",
            text: "Wish I can have it in my tank. 😢",
            uid: 17,
            rating: 1,
            fid: "fd4zq7vchwv40cyo8rmm"
          },
          { 
            cid: "MqE5Y6K7Nw4AnEtXImMU",
            text: "Just bought it and it looks lovely in my small tank.",
            uid: 18,
            rating: 4,
            fid: "pqqpvqyrqi5ukkwymfm4"
          },
          { 
            cid: "EZi4CdUiGt8dpt4mLxHr",
            text: ":)",
            uid: 19,
            fid: "pqqpvqyrqi5ukkwymfm4"
          },
          { 
            cid: "f6riJwdTaYBShm33VycD",
            text: "Not expensive deal! It's a beginner butterflyfish.",
            uid: 20,
            rating: 4.5,
            fid: "pqqpvqyrqi5ukkwymfm4"
          },
          { 
            cid: "CetQYX8VgyUgwjux6e6d",
            text: "You won't regret to buy it!",
            uid: 15,
            rating: 4,
            fid: "pqqpvqyrqi5ukkwymfm4"
          },
          { 
            cid: "Fsqh1ljNCgfhJzVS4PHv",
            text: "Cooooool fish!",
            uid: 17,
            rating: 3,
            fid: "xi1fuyq2xddo4rny3r5t"
          },
          { 
            cid: "lEjJCnJGcyvTfLsECDvu",
            text: "Not bad!",
            uid: 8,
            rating: 3.5,
            fid: "xi1fuyq2xddo4rny3r5t"
          },
          { 
            cid: "THueHx97CvVLIJvWF9M6",
            text: "It's only for experts.",
            uid: 2,
            rating: 1,
            fid: "bmecxldmiyieoi4yupbc"
          },
          { 
            cid: "AmPIAtPA2cBgo850BzLz",
            text: "A nice addition to add to your tank. It's not reef save. You'll need to keep your eye on it.",
            uid: 15,
            rating: 4,
            fid: "vwjzhrijthczn6fiw7mk"
          },
          { 
            cid: "y5eXSt8TyOWWKRSbWkXM",
            text: "It's my first butterflyfish. Love it!",
            uid: 18,
            rating: 5,
            fid: "vwjzhrijthczn6fiw7mk"
          },
          { 
            cid: "DNGI41UuKf3aikrTSCJx",
            text: "This fish is extremely aggressive. If you want more tangs in your tank make sure to add all of them together.",
            uid: 15,
            rating: 1,
            fid: "nrzzu3fj65emv2virlik"
          },
          { 
            cid: "uJx5YeSpY6mPIxoNe17Z",
            text: "Don't like this fish. It killed all of my other tangs in tank.",
            uid: 19,
            rating: 1.5,
            fid: "nrzzu3fj65emv2virlik"
          },
          { 
            cid: "PbW87Dmwvjdarz74XLPs",
            text: "This fish cleans my tank so well and very easy to get along with other fish.",
            uid: 12,
            rating: 5,
            fid: "eijxkhbog4nbhzdjkw1y"
          },
          { 
            cid: "RrxbejI4vXw46QwVrNcz",
            text: "It eats algae and anything. Love it.",
            uid: 1,
            rating: 4,
            fid: "eijxkhbog4nbhzdjkw1y"
          },
          { 
            cid: "fnxSnPMqfvih14UlvmNy",
            text: "My kids love this fish so much!",
            uid: 10,
            rating: 5,
            fid: "eijxkhbog4nbhzdjkw1y"
          },
          { 
            cid: "l3JILL21KZv0r0EfekEh",
            text: "Never seen this fish before. So pretty!",
            uid: 7,
            rating: 4.5,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "J732LkBsSI5uXD0THZr0",
            text: "Looks cool and cute.",
            uid: 20,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "zJ6zaXUX1sK7hduteg1Y",
            text: "It just looks so unique compares to the other fish.",
            uid: 13,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "XNCRrfFkcTB2bt7sqnFS",
            text: "I love it!",
            uid: 19,
            rating: 4.5,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "1G9QAfaOz14Cz7Na9MBK",
            text: "Looks so tasty!",
            uid: 6,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "OUyJUErgYP9U4ygbISZY",
            text: "@spammyguy879s That's not appropriated to about in here!",
            uid: 5,
            fid: "v6ons2r90n1mjayelumu"
          },
          { 
            cid: "IDNGToRpTkS7xcClSWKi",
            text: "Weird",
            uid: 16,
            rating: 0.5,
            fid: "qd3762umgou7yem9ezv9"
          },
          { 
            cid: "nAaRg3YrUuDidPnd4oPf",
            text: "Colorful!",
            uid: 7,
            rating: 5,
            fid: "k644a1pd56j21qgsfzhv"
          },
          { 
            cid: "zvkiD4mGaKJut46Mot8M",
            text: "Pretty!",
            uid: 13,
            rating: 5,
            fid: "pahjh5hpq6lrvsra1bjc"
          },
          { 
            cid: "1231B9K3l12YencuJWUN",
            text: "Looks nice!",
            uid: 2,
            rating: 4,
            fid: "fzpnlpxhn460s103mqdw"
          }
        ]
      );
    });
};
