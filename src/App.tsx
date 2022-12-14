import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { TrackedPrice } from './TrackedPrice'

type cryptoItemType = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
  explorer: string
}
export function App(): any {
  const [cryptoList, setCryptoList] = useState<cryptoItemType[]>([])

  // Load the list of cryptocurrency items from the API
  async function loadItems() {
    const response = await axios.get('https://api.coincap.io/v2/assets')

    if (response.status === 200) {
      setCryptoList(response.data.data)
    }
  }

  // Load the crypto items on mount and refresh the list every 10 seconds
  useEffect(() => {
    let interval = setInterval(loadItems, 10000)
    loadItems()
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>CryptoTracker</h1>
      <div className="tracker">
        <table>
          <thead>
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
          </thead>
          <tbody>
            {cryptoList.map(function (cryptoItem) {
              return (
                <tr key={cryptoItem.id}>
                  <td key="rank">{cryptoItem.rank}</td>
                  <td key="symbol">{cryptoItem.symbol}</td>

                  <td key="name">
                    <img
                      src={`https://raw.githubusercontent.com/condacore/cryptocurrency-icons/master/32x32/${cryptoItem.name.toLowerCase()}.png`}
                    />
                    {cryptoItem.name}
                  </td>
                  <td key="supply">{cryptoItem.supply}</td>
                  <td key="maxSupply">{cryptoItem.maxSupply}</td>
                  <td key="marketCapUsd">
                    <TrackedPrice price={cryptoItem.marketCapUsd} />
                  </td>
                  <td key="volumeUsd24Hr">{cryptoItem.volumeUsd24Hr}</td>
                  <td key="priceUsd">
                    <TrackedPrice price={cryptoItem.priceUsd} />
                  </td>
                  <td key="changePercent24Hr">
                    {cryptoItem.changePercent24Hr}
                  </td>
                  <td key="vwap24Hr">{cryptoItem.vwap24Hr}</td>
                  <td key="explorer">
                    <a href={cryptoItem.explorer}>{cryptoItem.explorer}</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
