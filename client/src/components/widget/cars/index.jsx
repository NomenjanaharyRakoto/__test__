
import React, {useEffect}  from 'react'
import { Row ,Col, Card, Button} from 'react-bootstrap'

import { loadCars, loadCar } from '../../../redux/actions/carsAction'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
const Cars = (props) => {
    const { loadCars, loader, cars, loadCar } = props
    const history = useHistory()

    useEffect(() => {
        loadCars()
    }, [loadCars])

    const getCar = (data) => {
         loadCar(data).then(res => {
             if (res) {
                history.push('/car')
           }
        })
    }

    return (
        <Row>
            {!loader ? 
                cars.map((data, key) => (   
                        <Col md="4" key={ key}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.brand}</Card.Title>
                                <Row>
                                    <Col md="6">Couleur : </Col>
                                    <Col md="4"> <span className="color" style={{backgroundColor:data.color}}></span></Col>
                                </Row>
                                <Row>
                                    <Col md="6">matricule : </Col>
                                    <Col md="6" className="matricule">{data.matricule}</Col>
                                </Row>
                                <div style={{marginTop:15}}>
                                    <Button onClick={() => { getCar(data)}} variant="primary">view comments</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))
                :null}

        </Row>
    )
}
const mapStateToProps = state => ({
    loader: state.loader.loader,
    cars:state.cars.cars
})



export default connect(mapStateToProps, {loadCars, loadCar})(Cars)