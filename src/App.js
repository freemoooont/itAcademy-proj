import React from "react";
import Layout from "./components/hoc/Layout/Layout";
import ContentContainer from "./components/hoc/ContentContainer/ContentContainer";
import Card from "./components/card/Card";

import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./redux/action/cards";


function App() {
  const dispatch = useDispatch();
  const items = useSelector(( {cards} ) => cards.items)

  React.useEffect(()=>{
    dispatch(fetchCards());
  },[])
  console.log(items);


  return (
    <>
      <Layout>
        <ContentContainer eventAmount={items.length}>
          {
            items.map((obj,idx)=>
            <Card key={idx} {...obj}/>)
          }
        </ContentContainer>
      </Layout>
    </>
  );
}

export default App;
