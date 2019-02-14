import React from 'react';
import "./search_panel.css"


class SearchPanel extends React.Component{
    state={
        term:''
    };

    onSearch =(e)=> {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term)
    };
    icon(){

    }


    render() {
        return(
            <div className="d-flex">
                <input className='search' placeholder= "      поиск авторов по имени"
                value={this.state.term}
                       onChange={this.onSearch}
                />


            </div>
        )
    }
}

export default SearchPanel;