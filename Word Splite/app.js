function searchWordFc() {
  const inputSentence = document.querySelector('#inputValue')
  const inputSearch = document.querySelector('#inputSearch')
  const word = inputSentence.value.split(' ')

  for (let i = 0; i <= word.length; i++) {
    if (inputSearch.value == word[i]) {
      const showDetails = `Your Sentence : ${inputSentence.value} </br>
      Your Search Word : ${word[i]} </br> 
      sentence index Number : ${i}`;
      newPra.innerHTML = showDetails;
      inputSentence.value = '';
      inputSearch.value = '';
      break;
    } else {
      const FountText = `Search keyboards is not found`;
      newPra.innerHTML = FountText;
    };
  };
};
const Btnshow = document.querySelector('#showBtn');
const mainDin = document.querySelector('#showWord');
const newPra = document.createElement('p');
mainDin.appendChild(newPra);
Btnshow.addEventListener('click', searchWordFc);
