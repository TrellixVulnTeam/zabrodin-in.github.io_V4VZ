import {Component} from 'react';
import './employees-list-item.css';

// const EmployeesListItem = ({name, salary, increase}) => {
class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            classes: 'list-group-item d-flex justify-content-between'
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        // console.log(this.state.classes.includes('like'));
        if (this.state.classes.includes('like')) {
            this.setState(({classes}) => ({
                classes: classes.replace(' like', '')
            }))
        } else {
            this.setState(({classes}) => ({
                classes: classes + ' like'
            }))
        }
    }

    render() {
        const {name, salary} = this.props;
        const {increase} = this.state;
        let {classes} = this.state;
        // let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            // classNames += ' increase';
            classes += ' increase';
        }

        return (
            // <li className={classNames}>
            <li className={classes}>
                <span className='list-group-item-label' onClick={this.onLike}>{name}</span>
                <input type="text" defaultValue={'$' + salary} className="list-group-item-input" />
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-cookie btn-sm"
                        type="button" 
                        onClick={this.onIncrease}>
                            <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        className="btn-trash btn-sm"
                        type="button">
                            <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;