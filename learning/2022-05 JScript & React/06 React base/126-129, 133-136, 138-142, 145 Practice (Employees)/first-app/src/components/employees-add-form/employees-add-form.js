import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length >= 3 && this.state.salary && this.state.salary % 1 === 0) {
            this.props.onAdd(this.state.name, this.state.salary);
        }
        // this.setState({  // I'm not sure if the following four lines are need to be uncommented
        //     name: '',
        //     salary: ''
        // })
    }

    render() {
        const {name, salary} = this.state;
        let classesText = 'form-control new-post-label',
            classesNumber = 'form-control new-post-label';
        if (name.length < 3 && name !== '') {
            classesText += ' red-border';
        }
        if (salary % 1 > 0) {
            classesNumber += ' red-border';
        }
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    onSubmit={this.onSubmit} 
                    className="add-form d-flex">
                        <input 
                            type="text" 
                            className={classesText} 
                            placeholder="What's his name?" 
                            onChange={this.onValueChange} 
                            name="name" 
                            value={name} />
                        <input 
                            type="number" 
                            className={classesNumber} 
                            placeholder="$$ Salary" 
                            onChange={this.onValueChange} 
                            name="salary" 
                            value={salary} />
                        <button className="btn btn-outline-light">
                            Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;