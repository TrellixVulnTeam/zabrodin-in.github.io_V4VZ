import './employees-list-item.css';

const EmployeesListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className='list-group-item-label'>John Smith</span>
            <input type="text" defaultValue="$1000" className="list-group-item-input" />
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    type="button">
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

// 127 task
const TestEmployeesListItem = ({firstName, lastName, someText, defaultValue}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className='list-group-item-label'>{firstName} {lastName} {'//'} {someText}</span>
            <input type="text" defaultValue={defaultValue} className="list-group-item-input" />
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-cookie btn-sm"
                    type="button">
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

export default EmployeesListItem;
export {TestEmployeesListItem};