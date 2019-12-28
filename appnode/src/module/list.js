import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class listComponent extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount(){

        const url = 'http://localhost:3000/employee/list';
        axios.get(url)
        .then(res=>{
            if(res.data.success){
                const data = res.data.data
                this.setState({listEmployee: data})
            }else{
                alert('Error web service');
            }
        })
        .catch(error=>{
            alert('Error server' + error)
        })
    }

  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData(){
    return this.state.listEmployee.map((data)=>{
        return(
          <tr>
            <th>{data.id}</th>
            <td>{data.role.role}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            <td>{data.phone}</td>
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr>
        )
      });
  }
}

export default listComponent;