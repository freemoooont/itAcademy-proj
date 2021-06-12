import React from "react";
import Layout from "./components/hoc/Layout/Layout";
import { Home, Event} from "./pages";

import { Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCards} from "./redux/action/cards";

function App() {
    const dispatch = useDispatch();
    const items = useSelector(( {cards} ) => cards.items)

    React.useEffect(()=>{
        dispatch(fetchCards());
    },[])

  return (
      <Layout>
          <Route path="/"
                 exact
                 render={(props)=>
                     <Home
                        {...props}
                        items={items}
                     />}
          />
          <Route path="/event/:id"
                 exact
                 render={
                     (props)=>
                         items.map((obj,idx)=>
                             props.match.params.id===obj.course_id &&
                             <Event
                                 key={idx}
                                 {...props}
                                 description={obj.description}
                                 daysRemain={obj.daysRemain}
                                 image={obj.image}
                                 organizers={obj.organizers}
                                 fullName={obj.normalName}
                                 status={obj.status}
                                 //dateInfo={obj.dateInfo}
                             />)}
          />
      </Layout>
  );
}

export default App;
