import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Abraham', salary: 300, increase: false, rise: true, id: 1},
                {name: 'Arnold Hey', salary: 100, increase: true, rise: false, id: 2},
                {name: 'Ryan Raynolds', salary: 600, increase: false, rise: false, id: 3}
            ]
        };
        this.maxID = 4;
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index),
            //       after = data.slice(index + 1);
            // const newArray = [...before, ...after];
            return {
                // data: newArray
                data: data.filter(elem => elem.id !== id)
            }
        })
        console.log(`#${id} deleted`);
    }

    addItem = (name, salary) => {
        const newEmployeeItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxID++
        }
        this.setState(({data}) => {
            let newArray = [...data, newEmployeeItem];
            return {
                data: newArray
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index],
        //           newItem = {...old, increase: !old.increase},
        //           newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newData
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const employeesTotal = this.state.data.length,
              employeesToIncrease = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                    employees={employeesTotal} 
                    increased={employeesToIncrease} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm 
                    onAdd={this.addItem} />
            </div>
        )
    };
}

export default App;