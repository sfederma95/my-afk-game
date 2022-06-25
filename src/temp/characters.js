export const dummyCharacters = {
  c1: {
    hp: 100,
    skills: [
      {
        s1: {
          turns: 3,
          type: "hp-up",
          hpChange: 10,
          status: null,
        },
      },
      {
        s2: {
          turns: 2,
          type: "hp-neutral",
          hpChange: 0,
          status: { name: "stun", duration: 2 },
        },
      },
    ],
    baseDamage: 10,
  },
  c2: {
    hp: 100,
    skills: [
      {
        s1: {
          turns: 3,
          type: "hp-down",
          hpChange: -20,
          status: null,
        },
      },
      {
        s2: {
          turns: 2,
          type: "hp-down",
          hpChange: -3,
          status: { name: "poison", duration: 3 },
        },
      },
    ],
    baseDamage: 12,
  },
};
