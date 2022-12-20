import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { usePrevious } from './usePrevious'

type TrackedPriceProps = {
  price: string
}

export function TrackedPrice(props: TrackedPriceProps) {
  let increasing = false
  const price = parseFloat(props.price)
  const previous = usePrevious(price)

  if (previous < price) {
    increasing = true
  }

  return (
    <span className={increasing ? 'increasing' : 'decreasing'}>
      ${price.toLocaleString()}
    </span>
  )
}
