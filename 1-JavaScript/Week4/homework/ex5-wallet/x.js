const eurosFormatter = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  });
  
  function createWallet(name, cash = 0) {
    function deposit(amount) {
      cash += amount;
    }
  
    function withdraw(amount) {
      if (cash - amount < 0) {
        console.log(`Insufficient funds!`);
        return 0;
      }
  
      cash -= amount;
      return amount;
    }
  
    function transferInto(wallet, amount) {
      console.log(
        `Transferring ${eurosFormatter.format(amount)} from ${name} to ${
          wallet.name
        }`
      );
      const withdrawnAmount = withdraw(amount);
      wallet.deposit(withdrawnAmount);
    }
  
    function reportBalance() {
      console.log(`Name: ${name}, balance: ${eurosFormatter.format(cash)}`);
    }
  
    const getName = () => name;
  
    return {
      deposit,
      withdraw,
      transferInto,
      reportBalance,
      getName,
    };
  }
  
  console.log(createWallet('Jack', 100));