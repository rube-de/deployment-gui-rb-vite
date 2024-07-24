import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address, chainId, chain } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      {chainId && <div>Connected on {chain?.name} (chain id: {chainId})</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}