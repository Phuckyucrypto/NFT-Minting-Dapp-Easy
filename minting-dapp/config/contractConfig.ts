const ContractConfig = {
  contractAddress: '0x0A1eC646E23A14d44aA28065ff407193F1ea5cA5', // Replace with your actual contract address
  tokenName: 'Fun 3.0', // This will be Page Name update as you wish 
  networkConfig: {
    mainnet: {
      chainId: 1, // Mainnet chain ID
      blockExplorer: {
        name: 'Etherscan',
        generateContractUrl: (address: string) => `https://etherscan.io/address/${address}`,
        generateTransactionUrl: (txHash: string) => `https://etherscan.io/tx/${txHash}`,
      },
    },
    testnet: {
      chainId: 4, // Rinkeby Testnet chain ID
      blockExplorer: {
        name: 'Etherscan',
        generateContractUrl: (address: string) => `https://rinkeby.etherscan.io/address/${address}`,
        generateTransactionUrl: (txHash: string) => `https://rinkeby.etherscan.io/tx/${txHash}`,
      },
    },
  },
  marketplaceConfig: {
    name: 'OpenSea',
    generateCollectionUrl: (identifier: string, isMainnet: boolean) =>
      isMainnet
        ? `https://opensea.io/collection/${identifier}`
        : `https://testnets.opensea.io/collection/${identifier}`,
  },
  marketplaceIdentifier: 'your-collection-identifier', // Replace with your actual collection identifier
};

export default ContractConfig;
