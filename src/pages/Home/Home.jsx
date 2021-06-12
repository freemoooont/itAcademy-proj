import React from "react";
import ContentContainer from "../../components/hoc/ContentContainer/ContentContainer";
import Card from "../../components/card/Card";
import MainHeaders from "../../components/MainHeaders/MainHeaders";
import LoadingCard from "../../components/card/LoadingCard";

import {Zoom} from "react-reveal";

import {useSelector} from "react-redux";



function Home({items}) {
    const isLoaded = useSelector(( {cards} )=> cards.isLoaded);
    const query = useSelector(({filters})=> filters.query)


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
        <>
            <MainHeaders
                scrollToContent = {()=>scrollToContent(scrollRef)}
            />
            <Zoom>
                <ContentContainer
                    eventAmount={eventAmount}
                    onSelectHandler={onSelectCategory}
                    refToContent={scrollRef}
                >
                    {
                        !isLoaded ?
                            Array(12)
                                .fill(0)
                                .map((_, index) =>
                                    <LoadingCard key={index}/>)
                            :
                            events.map((obj,idx)=>
                                <Card key={idx} {...obj}/>
                            )
                    }
                </ContentContainer>
            </Zoom>
        </>
    );
}

export default Home;