const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
  alive: true,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
  alive: true,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
  alive: true,
};

const battleMembers = { mage, warrior, dragon };

// Parte I

const dragonAttack = (dragon) => {
  const min = 15;
  const max = dragon.strength;
  return Math.floor(Math.random() * (max - min) + min);
};

const warriorAttack = (warrior) => {
  const min = warrior.strength;
  const max = min * warrior.weaponDmg;
  return Math.floor(Math.random() * (max - min) + min);
};

const mageAttack = (mage) => {
  if (mage.mana < 15) throw new Error('mana suficiente');
  const min = mage.intelligence;
  const max = min * 2;
  const damage = Math.floor(Math.random() * (max - min) + min);
  const spentMana = 15;
  return { damage, spentMana };
};

// Parte II

const gameActions = {
  warriorAction: (warriorAttack) => {
    try {
      warrior.damage = warriorAttack(warrior);
      if (!dragon.alive) throw new Error('Dragão já está morto.');
      dragon.healthPoints -= warrior.damage;
      if (dragon.healthPoints < 0) dragon.alive = false;
    } catch (error) {
      console.log(`Ataque do Guerreiro falhou: ${error.message}`);
    }
  },
  mageAction: (mageAttack) => {
    try {
      const actionResults = mageAttack(mage);
      mage.damage = actionResults.damage;
      mage.mana -= actionResults.spentMana;
      if (!dragon.alive) throw new Error('Dragão já está morto.');
      dragon.healthPoints -= mage.damage;
      if (dragon.healthPoints < 0) dragon.alive = false;
    } catch (error) {
      console.log(`Ataque do Mago falhou: ${error.message}`);
    }
  },
  dragonAction: (dragonAttack) => {
    try {
      dragon.damage = dragonAttack(dragon);
      const damageWarrior = () => {
        if (!warrior.alive) throw new Error('Guerreiro já está morto.');    
        warrior.healthPoints -= dragon.damage;
        if (warrior.healthPoints < 0) warrior.alive = false;  
      };
      const damageMage = () => {
        if (!mage.alive) throw new Error('Mago já está morto.');
        mage.healthPoints -= dragon.damage;
        if (mage.healthPoints < 0) mage.alive = false;
      };
      damageWarrior();
      damageMage();
    } catch (error) {
      console.log(`Ataque do Dragão falhou: ${error.message}`);
    }
  },
  endTurn: () => battleMembers
};

gameActions.warriorAction(warriorAttack);
gameActions.mageAction(mageAttack);
gameActions.dragonAction(dragonAttack);
console.log(gameActions.endTurn());
