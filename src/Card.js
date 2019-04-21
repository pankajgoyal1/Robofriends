import React from 'react';
const Card =({name,email,id})=>{
	return (
			<div className='abc grow shadow-5'>
				<img alt='robots' src={`https://robohash.org/a${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
	)
}
export default Card;