import { useState } from 'react'
import React from 'react'

export function App(): any {
  const [cryptoList, setCryptoList] = useState([
    {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '19221993.0000000000000000',
      maxSupply: '21000000.0000000000000000',
      marketCapUsd: '326953127523.0384929652780753',
      volumeUsd24Hr: '7639253985.4828935848882537',
      priceUsd: '17009.3250748264497321',
      changePercent24Hr: '-0.9681204042610003',
      vwap24Hr: '17077.2395323712884265',
      explorer: 'https://blockchain.info/',
    },
    {
      id: 'ethereum',
      rank: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      supply: '122373866.2178000000000000',
      maxSupply: null,
      marketCapUsd: '156653269327.2425734252476640',
      volumeUsd24Hr: '2729925707.2297659998232682',
      priceUsd: '1280.1202917658282846',
      changePercent24Hr: '-0.7744260188709912',
      vwap24Hr: '1280.9048831064566132',
      explorer: 'https://etherscan.io/',
    },
    {
      id: 'tether',
      rank: '3',
      symbol: 'USDT',
      name: 'Tether',
      supply: '65362681003.3144000000000000',
      maxSupply: null,
      marketCapUsd: '65454659866.9901075253993787',
      volumeUsd24Hr: '12213931420.4552058026298430',
      priceUsd: '1.0014072076338338',
      changePercent24Hr: '0.0859928993142940',
      vwap24Hr: '1.0004030862026769',
      explorer: 'https://www.omniexplorer.info/asset/31',
    },
  ])

  return (
    <div>
      <h1>CryptoTracker</h1>
      <div className="tracker">
        <table>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Supply</th>
            <th>Max Supply</th>
            <th>Market Cap (USD)</th>
            <th>Volume USD 24Hr</th>
            <th>Price (USD)</th>
            <th>Change % 24Hr</th>
            <th>vwap24Hr</th>
            <th>Explorer</th>
          </tr>
          <tbody>
            {cryptoList.map(function (cryptoItem) {
              return (
                <tr>
                  <td>{cryptoItem.rank}</td>
                  <td>{cryptoItem.symbol}</td>
                  <td>{cryptoItem.name}</td>
                  <td>{cryptoItem.supply}</td>
                  <td>{cryptoItem.maxSupply}</td>
                  <td>{cryptoItem.marketCapUsd}</td>
                  <td>{cryptoItem.volumeUsd24Hr}</td>
                  <td>{cryptoItem.priceUsd}</td>
                  <td>{cryptoItem.changePercent24Hr}</td>
                  <td>{cryptoItem.vwap24Hr}</td>
                  <td>{cryptoItem.explorer}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
