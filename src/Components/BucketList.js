import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BucketList = () => {
  let history = useHistory();
  const bucket_lists = useSelector((state) => state.bucket.list);
  return (
    <ListStyle>
      {bucket_lists.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            completed={list.completed}
            onClick={() => {
                history.push(`/detail/${index}`);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
  background-color: ${(props) => (props.completed ? "orange" : "aliceblue")};
`;

export default BucketList;