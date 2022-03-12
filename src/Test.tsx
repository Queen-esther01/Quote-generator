import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuotes } from './store/configureStore';
import { getQuote } from './store/quoteSlice';

//Converntional props
function Heading ({title} : { title: string}){
    return(
      <h1>{title}</h1>
    )
  }
  
  function HeadingWithContent ({children} : { children: ReactNode}): ReactElement{
    return(
      <p>{children}</p>
    )
  }
  
  //DEFAULT PROPS
  const defaultContainerProps = {
    heading: <strong>Container Heading</strong>,
  }
  type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
  function Container ({ heading, children } : ContainerProps): ReactElement{
    return(
      <div>
        <h5>{heading}</h5>
        {children}
      </div>
    )
  }
  Container.defaultProps = defaultContainerProps;
  
  
  //FUNCTIONAL PROPS
  function TextWithNumber({ children, header} : {children: (num: number) => ReactNode, header?: (num: number) => ReactNode}): ReactElement{
    const [state, stateSet] = useState<number>(0);
  
    return(
      <div>
        <h2>{header?.(state)}</h2>
        <div>
          {children(state)}
        </div>
        <div>
          <button onClick={() => stateSet(state + 1)}>Add</button>
        </div>
      </div>
    )
  }
  
  
  //List
  function List<ListItem>({ items, render} : { items: ListItem[], render: (item: ListItem) => ReactNode}){
    return(
      <ul>
        {
          items.map((item, index) => {
            return(
              <li key={index}>
                {render(item)}
              </li>
            )
          })
        }
      </ul>
    )
  }

const Test = () => {

    


    return (
        <>
            <div className="App">
                <Heading title='My Typescript App'></Heading>
                <HeadingWithContent>
                    <strong>Test Content</strong>
                </HeadingWithContent>
                <Container>
                    <strong>Test Container</strong>
                </Container>
                <TextWithNumber header={(num: number) => <span>header {num}</span>}>{(num: number) => <div>Today's number is {num}</div>}</TextWithNumber>
                <List items={['Jack', 'Esther', 'Ava']} render={(item: string) => item.toLowerCase()}></List>
            </div>
        </>
    )
}

export default Test