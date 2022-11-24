import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company N</h1>
            <h2>Total numbers of employees: {employees}</h2>
            <h2>the following will receive the award: {increased}</h2>
        </div>
    )
}

export default AppInfo;