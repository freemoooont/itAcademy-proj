import React from "react";
import Layout from "./components/hoc/Layout/Layout";
import { Home, Event} from "./pages";

import { Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./redux/action/cards";
import {fetchEventById} from "./redux/action/event";

import smoothscroll from "smoothscroll-polyfill";

function App() {
    smoothscroll.polyfill();

    const dispatch = useDispatch();
    const items = useSelector(( {cards} ) => cards.items);

    const [ebator, ebatorOn] = React.useState(false);

    React.useEffect(()=>{
        dispatch(fetchCards());
    },[])

    const fetchById = (id,itemsInState) => {
        const itemInStateById = itemsInState.filter(obj => id===obj.course_id)
        if(itemInStateById.length === 0) {
            return(
                [false, dispatch(fetchEventById(id))]
            )
        }else{
            return([true, itemInStateById])
        }
    }

  return (
      <Layout
          ebator={ebator}
      >

          <Route path="/"
                 exact
                 render={(props)=>
                     <Home
                        {...props}
                        items={items}
                        onManClick={()=>ebatorOn(true)}
                     />}
          />

          <Route path="/event/:id"
                 exact
                 render={
                     (props)=> {
                         return(
                             <Event {...props}
                             stateHandler={()=>fetchById(props.match.params.id, items)}
                             />
                             )}}
          />
      </Layout>
  );
}

export default App;
