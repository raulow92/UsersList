const Table = ({ data }) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
