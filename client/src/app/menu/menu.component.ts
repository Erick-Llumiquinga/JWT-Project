import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nickname: string
  email: string
  password: string
  name: string
  lastname: string
  age: number
  address: string
  img: string
  dataArray: Array<any>
  userStatus: boolean 
  studentStatus: boolean

  constructor(private dataServices: DataService) {
    this.userStatus = false;
    this.studentStatus = false
   }

  ngOnInit(): void {
  }

  newUser = () => {

    let endPoint = 'insertOne'
    let data = {
      usuario: {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      }
    }

    this.dataServices.postData(endPoint, data)
    .subscribe(response => {
      console.log(response)
    },
    error => {
      console.log(error)
    })
  }

  allUsers = () => {
    this.studentStatus = false;
    let endPoint = 'getUsers';
    this.dataServices.getAll(endPoint)
    .subscribe(response => {
        this.dataArray = response['data'];
        this.userStatus = true
      },
      error => {
        console.log(error)
      }
    )
  }

  newStudent = () => {

    let endPoint = 'insertStudient'
    let data = {
      usuario: {
        nombre: this.name,
        apellido: this.lastname,
        edad: this.age,
        direccion: this.address,
        foto: this.img
      }
    }

    this.dataServices.postData(endPoint, data)
    .subscribe(response => {
      this.dataArray = response['data'];
    },
    error => {
      console.log(error)
    }
  )
  }

  allStudents = () => {
    this.userStatus = false
    let endPoint = 'getStudients';
    this.dataServices.getAll(endPoint)
    .subscribe(response => {
        this.dataArray = response['data'];
        this.studentStatus = true
      },
      error => {
        console.log(error)
      }
    )
  }

}
