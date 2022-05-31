// action
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

// initial state
const initialState = {
  list: [
    { text: "영화관 가기", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "수영 배우기", completed: false },
    { text: "코딩하기", completed: false },
  ],
};


// action creator
export const createBucket = (bucket) => {
  return {type : CREATE, bucket : bucket};
};

export const deleteBucket = (idx) => {
  return {type : DELETE, idx : idx}
}

export const updateBucket = (idx) => {
  return {type : UPDATE, idx : idx}
}

// reducer
export default function reducer(state = initialState, action = {}){
  switch (action.type) {
    // do create
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket]
      return { list : new_bucket_list}
    }

    // do delete
    case "bucket/DELETE" : {
      const new_bucket_list = state.list.filter((a,idx) => {
        return parseInt(action.idx) !== idx
      })
      return {list : new_bucket_list}
    }

    // do delete
    case "bucket/UPDATE" : {
      console.log("upadte reducer!")
      return null
    }
    default:
      return state;
  }
}


