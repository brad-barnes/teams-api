const Table = ({ tableHeader1, tableHeader2, tableData }) => {

    const tableItems = (Array.isArray(tableData)) ? tableData.map((item, index) => {
        return (
            <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
            </tr>
        )
        }) : 
        <tr>
            <th scope="row">{tableData.id}</th>
            <td>{tableData.name}</td>
        </tr>
        

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                <th scope="col">{tableHeader1}</th>
                <th scope="col">{tableHeader2}</th>
                </tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    )
}

export default Table