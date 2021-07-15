import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {loadCommentsByCar} from '../../redux/actions/carsAction'
const Item = (props) => {
    const { car, loadCommentsByCar, loader, comments } = props
    console.log('====================================');
    console.log(props);
    console.log('====================================');

    useEffect(() => {
        loadCommentsByCar(car._id)
    }, [loadCommentsByCar, car._id])

    return (
       <div className="container" style={{paddingTop:20}}>
            <Row>
                <Col md="5">
                    <div className="project-info-box mt-0">
                        <h5>PROJECT DETAILS</h5>
                        <p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
                    </div>

                    <div className="project-info-box">
                        <p style={{ marginBottom: 10 }}><b>Commentaires</b></p>
                        {
                            !loader && comments.length > 0 ?
                                // eslint-disable-next-line array-callback-return
                                comments.map((comment, key) => {
                                    
                                    <p key={key }>
                                        <b>Date:</b> 14.02.2020
                                    </p>
                                }) :
                                <p>Pas encore de commentaire por cette voiture</p>
                                
                        }
                     
                     
                    </div>

                    
                </Col>

                <Col md="7">
                    <img src={ car.image} alt="car" className="rounded"/>
                    <div className="project-info-box">
                        <p><b>Couleur:</b>   <span className="color" style={{backgroundColor:car.color}}></span></p>
                        <p><b>Matricule:</b> { car.matricule}</p>
                    </div>
                </Col>
            </Row>
        </div>
   
        )
}

const mapStateToProps = state => ({
    car: state.cars.car,
    comments: state.comments.comments,
    loader:state.loader.loader
})

export default connect(mapStateToProps, {loadCommentsByCar})(Item)