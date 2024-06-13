import React from 'react'
import { useRecoilValue } from 'recoil'
import { CharCountState } from '../App'

const CharacterCount = () => {

  const count = useRecoilValue(CharCountState)
  return (
    <div>
      Character Count: {count}
    </div>
  )
}

export default CharacterCount
