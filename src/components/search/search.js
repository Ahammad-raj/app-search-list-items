
import React from 'react';

class Search extends React.Component{

    render(){
        return (<div> 
            <input type="text" onChange={this.props.onSearch} placeholder="Search.."/>
        </div>)
    }

}

export default Search