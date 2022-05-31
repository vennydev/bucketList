// 리액트 패키지
import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {db} from "./firebase";

// 모듈
import {createBucket} from "./redux/modules/bucket";

// 컴포넌트 
import BucketList from "./Components/BucketList";
import Detail from "./Components/Detail";
import NotFound from "./Components/NotFound";
import AddListItem from "./Components/AddListItem";
import Progress from "./Components/Progress";

function App() {
  const dispatch = useDispatch();
  const text = React.useRef(null);
  
  const addBucketList = () => {
    dispatch(createBucket(text.current.value));
  }

  console.log(db)
  return (
    <div className="App">
        <Title>내 버킷리스트</Title>
        <Progress/>
        <Line />
      <Container>
        {/* Routing + Switch */}
        {/* detail page에서 error가 나도 NotFound가 나오지 않는다. */}
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <BucketList/>
          )}
        />
        <Route path="/detail/:index" component={Detail} />
        <Route component={NotFound}></Route>
      </Switch>
      </Container>
      <button onClick={() => {
        window.scrollTo({top : 0, left : 0, behavior: "smooth"})
      }}>위로가기</button>
      <Input>
      <AddListItem text={text} addBucketList={addBucketList}/>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;