import { TestComp } from "./test"

export const TestContainer = () => {
   const movie1 = {
      id: '1',
      data: 'data1',
   }
   return(
      <TestComp movie={movie1}/>
   )
}