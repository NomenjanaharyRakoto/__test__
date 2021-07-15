import {useSelector} from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { getCar } from '../../../redux/actions/carsAction'
import {useDispatch} from 'react-redux'
const Cars = () => {

    const datas = useSelector((state) => state.cars.cars)
    const dispatch = useDispatch()
    const selectCar = (car) => {
        dispatch(getCar(car))
    }
    
    return (
        <Row>
            {datas.map((data, key) => (   
                <Col md="4" key={ key}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.brand}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button onClick={()=>{selectCar(data)}} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}

        </Row>
    )
}

export default Cars