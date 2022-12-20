import { useEffect } from 'react'
import { useRef } from 'react'

export function usePrevious<T>(price: T): T {
  const ref: any = useRef<T>()

  useEffect(() => {
    ref.current = price
  }, [price])

  return ref.current
}
