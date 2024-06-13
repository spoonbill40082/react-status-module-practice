import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUsersAsync, incrementAsync } from './counterSlice'

const Test = () => {

const dispatch = useAppDispatch()
useEffect(() => {
  const promise = dispatch(fetchUsersAsync()) //함수가 실행되는 부분
  // const promise = dispatch(incrementAsync(10)) //함수가 실행되는 부분
  
return() => {
 promise.abort() //abort를 사용하면 함수 실행이 중단된다.
} //clear dispatch되는 부분
}, [])


  return (
    <div>
      Test
    </div>
  )
}

export default Test
