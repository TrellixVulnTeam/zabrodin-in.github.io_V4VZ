import './employees-list-item.css';

// const EmployeesListItem = ({name, salary, increase}) => {
const EmployeesListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         classes: 'list-group-item d-flex justify-content-between'
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onLike = () => {
    //     // console.log(this.state.classes.includes('like'));
    //     if (this.state.classes.includes('like')) {
    //         this.setState(({classes}) => ({
    //             classes: classes.replace(' like', '')
    //         }))
    //     } else {
    //         this.setState(({classes}) => ({
    //             classes: classes + ' like'
    //         }))
    //     }
    // }

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    let classes = 'list-group-item d-flex justify-content-between';
    // let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        // classNames += ' increase';
        classes += ' increase';
    }
    if (rise) {
        // classNames += ' increase';
        classes += ' like';
    }

    return (
        // <li className={classNames}>
        <li className={classes}>
            <span className='list-group-item-label' onClick={onToggleProp} data-toggle='rise'>{name}</span>
            <input type="text" defaultValue={'$' + salary} className="list-group-item-input" />
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    type="button" 
                    onClick={onToggleProp} 
                    data-toggle='increase' >
                        <i className="fas fa-cookie"></i>
                </button>
                <button 
                    className="btn-trash btn-sm"
                    type="button" 
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;