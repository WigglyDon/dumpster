const maximumWealth = (accounts: number[][]): number => {
  let maxWealth: number = 0;

  for (const account of accounts) {
    let accountTotal: number = 0;
    for (const balance of account) {
      accountTotal += balance;
    }
    maxWealth = Math.max(accountTotal, maxWealth);
  }

  return maxWealth;
};
