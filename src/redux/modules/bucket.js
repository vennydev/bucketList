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
  ]
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
    case "bucket/CREATE": {
      // do create
      const new_bucket_list = [...state.list, { text: action.bucket, completed: false }];
      return { list : new_bucket_list}
    }

    case "bucket/DELETE" : {
      // do delete
      const new_bucket_list = state.list.filter((a,idx) => {
        return parseInt(action.idx) !== idx
      })
      return {list : new_bucket_list}
    }

    case "bucket/UPDATE" : {
      // do update
      const new_bucket_list =state.list.map((l, idx) => {
        if(parseInt(action.idx) === idx ){
          return {...l, completed : true}
        }else{
          return l
        }
      })
      return {list : new_bucket_list};
    }
    default:
      return state;
  }
}


