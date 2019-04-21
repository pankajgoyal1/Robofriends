import React from 'react';
const SearchBox =({search,searchChange})=>{
	return (
		<div>
			<input
			  className ='pa3 ba b--green bg-blue'
			  type='search'
			  placeholder='search robot'
			  onChange={searchChange} 
			/>
		</div>
	);
}
export default SearchBox;