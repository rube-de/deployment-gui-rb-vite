

export function blockExplorerLink(chainId: number | undefined) {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/`;
    case 137:
      return `https://polygonscan.com/`;
    case 11155111:
      return `https://sepolia.etherscan.io/`;
    default:
      return `https://etherscan.io/`;
  }
}

export function getZCHFAddress(chainId: number | undefined) {
  switch (chainId) {
    case 1:
      return '0xB58E61C3098d85632Df34EecfB899A1Ed80921cB';
    case 137:
      return '0x02567e4b14b25549331fCEe2B56c647A8bAB16FD';
    case 11155111:
      return '0xB58E61C3098d85632Df34EecfB899A1Ed80921cB';
    default:
      return '0xB58E61C3098d85632Df34EecfB899A1Ed80921cB';
  }
}