import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const Progress = () => {
    const bucket_list = useSelector((state) => state.bucket.list);

    let trueCount = 0;
    bucket_list.map((l, idx) => {
        if(l.completed){
            trueCount++
        }
    })
    console.log((trueCount / bucket_list.length) * 100)

    return (
        <ProgressBar>
            <HighLight width={`${(trueCount / bucket_list.length) * 100}%`}/>
        </ProgressBar>
    )
}

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 40px;
`;

export default Progress;