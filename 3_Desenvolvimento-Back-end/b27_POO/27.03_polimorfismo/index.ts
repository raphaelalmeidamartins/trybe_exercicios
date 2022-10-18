import Character from "./Character";
// import MeleeCharacter from "./MeleeCharacter";
import LongeRangeCharacter from "./LongeRangeCharacter";

function characterPresentation(character: Character | LongeRangeCharacter) {
  character.talk();
  character.specialMove();
}

const samus = new LongeRangeCharacter('Samus Aran', 'Zero Laser', 'Missel');

[samus].forEach((character) => characterPresentation(character));
