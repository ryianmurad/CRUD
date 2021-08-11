import {React, useEffect, useState} from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from "react-router-dom";

const UpdateBarang = (params) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [IdBarang, setIdBarang] = useState('');
    const {register,handleSubmit} = useForm();
    let history = useHistory();
    let { id } = useParams();
    
    
    const onSubmit = (data, e) => {
        console.log('ini e :', data)
        axios.put( `http://backendpkl.spacearts.id/api/barang/update`, {
            id: IdBarang,
            nama: name,
            harga: price,
            kategori: category
        })
        
        .then(function (response) {
            console.log('push : ', response)
            history.push("/barang")
        });
    }
    
    useEffect(() => {
        function getHasil() {
            axios.get( `http://backendpkl.spacearts.id/api/barang/detail/${id}`)
            .then(function (response) {
                console.log('errorrr', response)
                    setName(response.data._data.nama);
                    setPrice(response.data._data.harga);
                    setCategory(response.data._data.kategori);
                    setIdBarang(response.data._data.id);
            })
        }
        getHasil()
    }, [id])
    
    return(
        <div className="container mt-5">
            <Form onSubmit={handleSubmit(onSubmit)} className="container">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Nama Barang</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register('nama', { required: true })} value={name || ''} onChange={e => setName(e.target.value)} placeholder="Masukkan Nama Barang" />
                    </Col>
                </Form.Group>
            
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Harga Barang</Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" {...register('harga', { required: true })} value={price || ''} onChange={e => setPrice(e.target.value)} placeholder="Masukkan Harga Barang" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Kategori Barang</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register('kategori', { required: true })} value={category || ''} onChange={e => setCategory(e.target.value)} placeholder="Masukkan Kategori Barang" />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default UpdateBarang;