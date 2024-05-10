import { createContext, useContext } from "react";

//context 생성
export const CounterContext = createContext()

//provider 생성
export const CounterProvider = CounterContext.Provider

//store에 있는 value를 사용하기 위한 hooks

export const useCounterStore = () => useContext(CounterContext)