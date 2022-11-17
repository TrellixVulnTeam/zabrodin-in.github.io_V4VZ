import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import { TestEmployeesListItem } from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
            <TestEmployeesListItem 
                firstName="Vasiliy" 
                lastName="Vasiliev" 
                someText="Text" 
                defaultValue="$800"/>
            <TestEmployeesListItem 
                firstName="Ivan" 
                lastName="Sidorov" 
                someText="Description" 
                defaultValue="$1800"/>
            <TestEmployeesListItem 
                firstName="Mathew" 
                lastName="Ivanov" 
                someText="Position" 
                defaultValue="$2800"/>
        </ul>
    )
}

export default EmployeesList;