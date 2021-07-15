
import React, {useEffect}  from 'react'
import { Row ,Col, Card, Button} from 'react-bootstrap'

import { loadCars } from '../../../redux/actions/carsAction'
import { connect } from 'react-redux'
const Cars = (props) => {
    const { loadCars, loader, cars } = props
    console.log('====================================');
    console.log(props);
    console.log('====================================');

    useEffect(() => {
        loadCars()
    }, [])


    return (
        <Row>
        
            {!loader ? 
            
        cars.map((data, key) => (   
                <Col md="4" key={ key}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.brand}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button onClick={() => { }} variant="primary">Go somewhere</Button>
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



export default connect(mapStateToProps, {loadCars})(Cars)