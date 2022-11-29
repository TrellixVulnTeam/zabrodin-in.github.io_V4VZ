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
                {name: 'Ryan Raynolds', salary: 1600, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'filterToRise'
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

    searchEmployee = (data, term) => {
        if (term.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    filterEmployee = (items, filter) => {
        switch (filter) {
            case 'filterToRise':
                return (items.filter(item => item.rise));
            case 'filterSalary1000':
                return (items.filter(item => item.salary > 1000));
            default:
                return items;
        }
    }

    onEmpSearch = (term) => {
        this.setState({term});
    }

    onEmpFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employeesTotal = data.length,
              employeesToIncrease = data.filter(item => item.increase).length;
        let visibleData = this.filterEmployee(this.searchEmployee(data, term), filter);
        return (
            <div className="app">
                <AppInfo 
                    employees={employeesTotal} 
                    increased={employeesToIncrease} />
                <div className="search-panel">
                    <SearchPanel 
                        onEmpSearch={this.onEmpSearch} />
                    <AppFilter 
                        filter={filter} 
                        onEmpFilter={this.onEmpFilter} />
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm 
                    onAdd={this.addItem} />
            </div>
        )
    };
}

export default App;