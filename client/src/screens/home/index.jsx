import React, { useEffect } from 'react';
import { Cars } from '../../components/widget'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getCars } from '../../redux/actions/carsAction'

const Home = () => {
    const dispatch = useDispatch()
    const fetchCars = async () => {
      const reposnse =   await axios.get('http://localhost:5000/api/cars').catch(err => {
            console.log(err);
      })
        dispatch(getCars(reposnse.data))
    }

    useEffect(() => {
        fetchCars()
    })
    return (
        <div className="content">
            <Cars/>
        </div >
    );

}

export default Home;
