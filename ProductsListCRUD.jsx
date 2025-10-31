import { Table, Button } from 'react-bootstrap';

function ProductsListCRUD ({products, onEdit, onDelete}){
    if(products.length === 0){
        return <p>No products found.</p>
    }

    return 
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th style={{width: '150 px'}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map(({id, name, price})=> (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{process.toFixed(2)}</td>
                    <td>
                        <Button
                            variant='warning'
                            size='sm'
                            className='me-2'
                            onClick={()=>onEdit({id, name, price})}
                        >
                            Edit
                        </Button>
                        <Button
                            variant='warning'
                            size='sm'
                            className='me-2'
                            onClick={()=>onDelete({id, name, price})}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
}

