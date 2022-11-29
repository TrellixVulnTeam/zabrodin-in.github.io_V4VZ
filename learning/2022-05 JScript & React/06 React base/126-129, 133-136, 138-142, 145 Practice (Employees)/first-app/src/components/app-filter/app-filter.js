import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'filterToRise', label: 'For promotion'},
        {name: 'filterSalary1000', label: 'Salary > $1000'}
    ];

    const buttons = buttonsData.map(btn => {
        const clazz = btn.name === props.filter ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`} 
                type="button" 
                key={btn.name} 
                onClick={(name) => props.onEmpFilter(btn.name)}> {/* key for React */}
                    {btn.label}
            </button>
        );
    })
    return (
        <div className="btn-group">
            {console.log(props.filter)}
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    For promotion
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary {'>'} $1000
            </button> */}
        </div>
    )
}

export default AppFilter;