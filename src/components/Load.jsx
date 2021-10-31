import React from 'react';
import ReactLoading from 'react-loading';


const Load = () => {
	return (
		<div className='loader'>
            <ReactLoading 
                type='spinningBubbles' 
                color='burlywood' 
                height={100}
                width={50}
            />
		</div>
	);
};

export default Load;
