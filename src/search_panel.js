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

    render() {
        return(
            <div className="divInput">
                <input type = "text" className='search' placeholder= "Поиск авторов по имени"
                value={this.state.term}
                       onChange={this.onSearch}
                />
                <i className="fa fa-search" />
            </div>
        )
    }
}

export default SearchPanel;