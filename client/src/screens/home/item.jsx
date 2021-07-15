import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { loadCommentsByCar } from '../../redux/actions/carsAction'
import {createComment} from '../../redux/actions/commentsAction'
import Comments from '../../components/widget/comments'
const Item = (props) => {
    const { car, loadCommentsByCar, loader, comments } = props

    console.log(props);

    useEffect(() => {
        loadCommentsByCar(car._id)
    }, [loadCommentsByCar, car._id])

    return (
       <div className="container" style={{paddingTop:20}}>
            <Row>
                <Col md="5">
                    <div className="project-info-box mt-0">
                        <h5>{car.brand}</h5>
                        <p className="mb-0">
                       {car.description}
                        </p>
                    </div>
                    <Comments
                        comments={comments}
                        loader={loader}
                       props={props}
                    />
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
    loader: state.loader.loader,
    user: state.users.user,
    is_authenticated:state.users.is_authenticated
})

export default connect(mapStateToProps, {loadCommentsByCar, createComment})(Item)