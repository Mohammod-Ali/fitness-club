import React from 'react';

const Break = (props) => {
    return (
        <div>
            <button onClick={()=>props.btnHandle(props.singleTime)}>
                {props.singleTime}
                </button>
        </div>
    );
};

export default Break;