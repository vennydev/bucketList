// library
import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// module
import { deleteBucket, updateBucket } from "../redux/modules/bucket";



const Detail = () => {
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_lists = useSelector((state) => state.bucket.list);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{bucket_lists[bucket_index].text}.</h3>
            <button onClick={() => {
                history.push("/");
                dispatch(updateBucket(bucket_index))
            }}>완료</button>
            <button onClick={() => {
                history.push("/");
                // sotre에 있는 deleteBucket 함수 실행
                dispatch(deleteBucket(bucket_index))
            }}>삭제</button>
        </div>
    )
}

export default Detail;

