
const DOM = {
    characterPonzi : document.querySelector('.character-ponzi'),
    characterSolzi : document.querySelector('.character-solzi')
};

const ponziBlack = '';
const solziBlack = '';

function addCharacterEffectPonzi() {
    DOM.characterPonzi.insertAdjacentHTML('afterend', ponziBlack);
};
function addCharacterEffectSolzi() {
    DOM.characterSolzi.insertAdjacentHTML('afterend', solziBlack);
};



DOM.characterPonzi.addEventListener('mouseover',addCharacterEffectPonzi);
DOM.characterSolzi.addEventListener('mouseover',addCharacterEffectSolzi);