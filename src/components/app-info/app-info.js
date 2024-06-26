import './app-info.css';

const AppInfo = ({employees, increasedEmployees, risedEmployees}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employee salaries in the company</h1>
            <h2>Number of employees: {employees}</h2>
            <h2>Employees with a bonus: {increasedEmployees}</h2>
            <h2>Employees for promotion: {risedEmployees}</h2>
        </div>
    )
}

export default AppInfo