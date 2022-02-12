import { CurrencyAmount, Token } from '@sushiswap/core-sdk'
import { useTransactionAdder } from 'app/state/transactions/hooks'
import { useCallback } from 'react'

import { useSushiBarContract } from './useContract'

const useSushiBar = () => {
  const addTransaction = useTransactionAdder()
  const barContract = useSushiBarContract()

  const enter = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await barContract?.enter(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Enter Lab' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, barContract]
  )

  const leave = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await barContract?.leave(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Leave Lab' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, barContract]
  )

  const xOPRForOPR = async (amount: Number | undefined) => {
    const res = await barContract?.xOPRForOPR(amount?.toString())
    console.log(parseInt(res._hex,16))
    return parseInt(res._hex,16)
  }

  return { enter, leave, xOPRForOPR }
}

export default useSushiBar
