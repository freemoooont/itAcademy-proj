import React from "react";
import Layout from "./components/hoc/Layout/Layout";
import ContentContainer from "./components/hoc/ContentContainer/ContentContainer";
import Card from "./components/card/Card";
import Skeleton from "react-loading-skeleton";

import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./redux/action/cards";


function App() {
  const dispatch = useDispatch();
  const items = useSelector(( {cards} ) => cards.items)
  const isLoaded = useSelector(( {cards} )=> cards.isLoaded);
  const query = useSelector(({filters})=> filters.query)

  React.useEffect(()=>{
    dispatch(fetchCards());
  },[])


  const [category, setCategory] = React.useState('Активные');
  const onSelectCategory = React.useCallback((payload)=> {
      setCategory(payload)
  },[])
    //сделай пацанский свич, будь челоевком
  const sortItems = React.useCallback((items) => {
      if (category ==='Активные') return items.filter((obj) => !!obj.status)
      if (category === 'Прошедшие') return items.filter((obj) => !obj.status)
      if (category === 'Все') return items
  },[category])


  const queryItems = (items) => items.filter(item => item.fullname.includes(query));
  const eventAmount = queryItems(sortItems(items)).length;
  const events = queryItems(sortItems(items));


  const scrollRef = React.useRef();
  const scrollToContent = (ref) => window.scrollTo(0,ref.current.offsetTop)


  return (
      <Layout
          scrollToContent = {()=>scrollToContent(scrollRef)}
      >
        <ContentContainer
            eventAmount={eventAmount}
            onSelectHandler={onSelectCategory}
            refToContent={scrollRef}
        >
            {
                !isLoaded ? <Skeleton />
                :
                    events.map((obj,idx)=>
                        <Card key={idx} {...obj}/>
                        )
            }
        </ContentContainer>
      </Layout>
  );
}

export default App;
