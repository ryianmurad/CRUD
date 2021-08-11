import {React, useEffect, useState} from 'react'
import Table from "react-bootstrap/Table"
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Barang = () => {
    const [hasil, setHasil] = useState("");
    console.log('hasil', hasil)
    let history = useHistory()

    const getHasil = async () => {
        const result = await axios(`http://backendpkl.spacearts.id/api/barang/get_list`);
        console.log("res barang",result)
        setHasil(result.data._data)
    };
    
    useEffect(() => {
        getHasil();
    }, [])
    
    function handleDelete(id) {
        axios.delete( `http://backendpkl.spacearts.id/api/barang/delete/${id}`)
            .then(() => {
                getHasil()
            })
    }

    function handleUpdate(id) {
        history.push(`/update/${id}`)
    }

    if(!hasil) return "No data!";

    return(
        <div className="mx-5 my-3">
            <h1>Barang</h1>
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Kategori</th>
                        <th>Tanggal Dibuat</th>
                        <th>Terakhir Diubah</th>
                    </tr>
                </thead>
                <tbody>
                    {hasil.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.nama}</td>
                            <td>{item.harga}</td>
                            <td>{item.kategori}</td>
                            <td>{item.created_at}</td>
                            <td>{item.updated_at}</td>
                            <td>
                                <button onClick={ () => handleUpdate(item.id) } type="button" className="btn btn-primary btn-sm m-1">
                                    Update
                                </button>
                                <button onClick={ () => handleDelete(item.id) } type="button" className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                
            <div>

            </div>
        </div>
    )
}

export default Barang;