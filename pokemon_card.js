document.addEventListener("DOMContentLoaded", () => {
  let cards = [
      { id: 1, frontImageUrl: 'https://store.401games.ca/cdn/shop/files/Pikachu-1968-Common_501x.jpg?v=1698454079', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 2, frontImageUrl: 'https://store.401games.ca/cdn/shop/files/Pikachu-1968-Common_501x.jpg?v=1698454079', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 3, frontImageUrl: 'https://commondatastorage.googleapis.com/images.pricecharting.com/b657851998d20835db0d6de485bc80b891dd3a8bcd906de7af533ad1202a4d95/1600.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 4, frontImageUrl: 'https://commondatastorage.googleapis.com/images.pricecharting.com/b657851998d20835db0d6de485bc80b891dd3a8bcd906de7af533ad1202a4d95/1600.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 5, frontImageUrl: 'https://www.trainerhub.net.au/assets/full/GO-001-P.png?20230620180402', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 6, frontImageUrl: 'https://www.trainerhub.net.au/assets/full/GO-001-P.png?20230620180402', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 7, frontImageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW7/BW7_EN_29.png', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 8, frontImageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW7/BW7_EN_29.png', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 9, frontImageUrl: 'https://images.pokemoncard.io/images/sma/sma-SV7_hiresopt.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 10, frontImageUrl: 'https://images.pokemoncard.io/images/sma/sma-SV7_hiresopt.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 11, frontImageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM10/SM10_EN_67.png', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 12, frontImageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM10/SM10_EN_67.png', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 13, frontImageUrl: 'https://i.ebayimg.com/images/g/lHMAAOSwNgZfP19t/s-l1200.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 14, frontImageUrl: 'https://i.ebayimg.com/images/g/lHMAAOSwNgZfP19t/s-l1200.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 15, frontImageUrl: 'https://m.media-amazon.com/images/I/71x6QsZ1TwL._AC_SL1500_.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 16, frontImageUrl: 'https://m.media-amazon.com/images/I/71x6QsZ1TwL._AC_SL1500_.jpg', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 17, frontImageUrl: 'https://www.pokemon-zone.com/assets/uploads/2024/08/Venusaur-ex-genetic-apex-1.webp', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false },
      { id: 18, frontImageUrl: 'https://www.pokemon-zone.com/assets/uploads/2024/08/Venusaur-ex-genetic-apex-1.webp', backImageUrl: 'https://i.ebayimg.com/00/s/MTU5OVgxMTMw/z/ROoAAOSw~7Nf7ibu/$_57.JPG?set_id=8800005007', isFlipped: false, isMatched: false }
  ];
  
 
  
    let flippedCards = [];
    let moves = 0;
    let matchedPairs = 0;
    const totalPairs = cards.length / 2;
    const maxMoves = 20;
    const grid = document.getElementById("cardGrid");
    const movesCount = document.getElementById("movesCount");
    const gameOverPopup = document.getElementById("gameOverPopup");
    const congratulationsPopup = document.getElementById("congratulationsPopup");
    const restartGameButtons = document.querySelectorAll("#restartGame");
  
    function shuffleCards() {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
  
    function initializeGame() {
      shuffleCards();
      flippedCards = [];
      moves = 0;
      matchedPairs = 0;
      movesCount.textContent = `You Have 20 Moves, Left: ${maxMoves - moves}`;
      grid.innerHTML = '';
      cards.forEach((card) => {
        card.isFlipped = false;
        card.isMatched = false;
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
  
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');
  
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        const frontImg = document.createElement('img');
        frontImg.src = card.frontImageUrl;
        frontImg.alt = "Pokémon Front";
        cardFront.appendChild(frontImg);
  
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        const backImg = document.createElement('img');
        backImg.src = card.backImageUrl;
        backImg.alt = "Pokémon Back";
        cardBack.appendChild(backImg);
  
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        grid.appendChild(cardElement);
  
        cardElement.addEventListener('click', () => handleCardClick(cardElement));
      });
  
      gameOverPopup.style.display = 'none';
      congratulationsPopup.style.display = 'none';
    }
  
    function handleCardClick(cardElement) {
      const cardId = cardElement.dataset.id;
      const card = cards.find((c) => c.id == cardId);
  
      if (flippedCards.length === 2 || card.isFlipped || card.isMatched) return;
  
      card.isFlipped = true;
      cardElement.classList.add('flipped');
      flippedCards.push(card);
  
      if (flippedCards.length === 2) {
        moves++;
        movesCount.textContent = `You Have 20 Moves, Left: ${maxMoves - moves}`;
        setTimeout(checkForMatch, 1000);
      }
  
      if (moves >= maxMoves && matchedPairs < totalPairs) {
        setTimeout(showGameOverPopup, 500);
      }
    }
  
    function checkForMatch() {
      const [firstCard, secondCard] = flippedCards;
  
      if (firstCard.frontImageUrl === secondCard.frontImageUrl) {
        firstCard.isMatched = true;
        secondCard.isMatched = true;
        matchedPairs++;
  
        if (matchedPairs === totalPairs) {
          setTimeout(showCongratulationsPopup, 500);
        }
      } else {
        firstCard.isFlipped = false;
        secondCard.isFlipped = false;
  
        const firstElement = document.querySelector(`[data-id="${firstCard.id}"]`);
        const secondElement = document.querySelector(`[data-id="${secondCard.id}"]`);
  
        firstElement.classList.remove('flipped');
        secondElement.classList.remove('flipped');
      }
  
      flippedCards = [];
    }
  
    function showGameOverPopup() {
      gameOverPopup.style.display = 'flex';
    }
  
    function showCongratulationsPopup() {
      congratulationsPopup.style.display = 'flex';
    }
  
    restartGameButtons.forEach((button) => {
      button.addEventListener('click', initializeGame);
    });
  
    initializeGame();
  });
  