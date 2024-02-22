import React, { Component } from "react";
export default class MainContent extends Component {
    state = {
        pageTitle: 'Clientes',
        costumersCount: 5,
        costumers: [
        { id: "1" , nombre: "Daniela", telefono: "115022",adress:{city:"New York"} },
        { id: "2", nombre: "Mario", telefono: "",adress:{city:"Zurich"} },
        { id: "3", nombre: "Julian", telefono: "115024",adress:{city:"Paris"} },
        { id: "4", nombre: "Francisca", telefono: "",adress:{city:"Milan"} },
        { id: "5", nombre: "Esteban", telefono: "115026",adress:{city:"Buenos Aires"} },
        ]
    };
    onRefrescarClick = () => {
        this.setState({customersCount: 7});}

    render(){
    return (
        <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2 text-info">{this.state.costumersCount}</span>
            <button className="btn btn-info" onClick={this.onRefrescarClick}>Refrescar</button></h4>
<table className="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre del Cliente:</th>
            <th>Telefono:</th>
            <th>Ciudad</th>
            </tr>
                </thead>
                <tbody>
                {this.state.costumers.map((cust)=>{
return(
    <tr key={cust.id}>
                <td>{cust.id}</td>
                <td>{cust.nombre}</td>
                <td>
                    {cust.telefono ?(
                    cust.telefono 
                 ):(
                 <div className="bg-warning p-2 text-center">No telefono</div>
                )}
                </td>
                <td>{cust.adress.city}</td>
                </tr>
                );
                })}
            </tbody>
            </table>
            </div >
    
                 ) }};


