import React from 'react';
import fakerExperts from './faker_experts';

function Card(props){
    return(
        <div className="column">
            <img src= {props.avatar} alt="expert"/>
            <h5> {props.name}</h5>
            <p> {props.position} </p>
        </div>
    )}

function cardCompnent (Expert){
	return(
        <Card
            key ={Expert.key}
            avatar = {Expert.avatar}
            name   = {Expert.firstName}
            position ={Expert.jobArea}
        />
    )}

function Cards(){
	return(
        <div className="row">  
            {fakerExperts.map(cardCompnent)}
        </div>
    )}

export default Cards;