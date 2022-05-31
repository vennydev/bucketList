const AddListItem = ({text, addBucketList}) => {

    return (
        <div>
            <input type="text" ref={text} />
            <button onClick={addBucketList}>추가하기</button>
        </div>
    )
}

export default AddListItem;