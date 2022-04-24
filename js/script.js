const getHiddenCard = (cardNumber, startNumber = 4) => {
    
    return "*".repeat(startNumber)+cardNumber.slice(12,16);
  };
  
  console.log(getHiddenCard("1234123412344321",12));