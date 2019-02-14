import React, { Component } from 'react';
import './App.css';
import SearchPanel from './search_panel.js';
import Items from './items';
import data from './data.json';



export default class App extends Component {

    state={
      term:'',
        change: -1,
        changeName: 1,
    };

    search(items, term) {
        if (term.length === 0){
            return items;
        }
        return items.filter((item)=>{
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
}
    onSearch=(term)=>{
        this.setState({term})
    };
    Change=()=> {
        if (this.state.change===1){
           this.setState(({change})=>{
               const x = -1;
               return{
                   change: x,
                   changeName: 1
               }
           })
        }else{this.setState(({change})=>{
            const x = 1;
            return{
                change: x,
                changeName: 1
            }
        })

        }
            };
  ChangeName=()=> {
      if(this.state.change===-1){
          this.setState(({changeName})=>{
              const x = -1;
              return{
                  changeName: x,
                  change: 1
              }
          })
      }else{
          this.setState(({changeName})=>{
              const x = -1;
              return{
                  changeName: x,
                  change: -1
              }
          })
      }

  };

  render() {



      const visibleItems = this.search(data, this.state.term).sort(
          (a,b) => {
            if(this.state.changeName===1)  {
          if (a.pageviews > b.pageviews) {
              return this.state.change;
          }
          if (a.pageviews < b.pageviews) {
              return -this.state.change;
          }
          return 0;}else{
                if (a.name > b.name) {
                    return -this.state.change;
                }
                if (a.name < b.name) {
                    return this.state.change;
                }
                return 0;
            }
      });

      return (
      <div className="App">
          <div className="block1">
              <SearchPanel
              onSearch = {this.onSearch}
              /></div>
          <div className='buttonBlock'>
              <button className='btn btn-success' onClick={this.Change}>Направление cортировки по просмотрам</button>
          </div>
          <div className='buttonBlock'>
              <button className='btn btn-danger' onClick={this.ChangeName}>Направление cортировки по имени</button>
          </div>
          <div className="block2">
              <Items data = {visibleItems}/>
          </div>
      </div>
    );
  }
}

