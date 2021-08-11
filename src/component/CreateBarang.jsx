import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

function CreateBarang() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const {register,handleSubmit} = useForm();
  let history = useHistory();

  const onSubmit = (data, e) => {
    console.log('ini e :', e)
    axios.post(`http://backendpkl.spacearts.id/api/barang/create`, {
      nama: name,
      harga: price,
      kategori: category,
    })
    
    .then(function (response) {
      console.log('push : ', response)
      history.push("/barang")
    });

  };
  
  return (
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

export default CreateBarang;