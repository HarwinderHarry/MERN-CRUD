import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dataList: any = [];

  activeId: any = '';
  formName: string = '';
  formEmail: string = '';

  constructor(private ds: DataService) {
    this.getData();
  }

  getData() {
    this.ds.getDataFromServer().subscribe((response: any) => {
      this.dataList = response;
    });
  }

  handleSubmit() {
    let data = { name: this.formName, email: this.formEmail };

    this.ds.submitDataToServer(data).subscribe((response: any) => {
      alert('added');
      this.formName = '';
      this.formEmail = '';
      this.getData();
    });
  }

  deleteUser(id: any) {
    let data = { id: id };

    this.ds.deleteDataFromServer(data).subscribe((response: any) => {
      alert('deleted');
      this.getData();
    });
  }

  editUser(id: any) {
    this.activeId = id;
    this.dataList.map((x: any) => {
      if (x._id == id) {
        this.formName = x.name;
        this.formEmail = x.email;
      }
    });
  }

  UpdateSubmit() {
    let data = {
      id: this.activeId,
      name: this.formName,
      email: this.formEmail,
    };

    this.ds.UpdateDataToServer(data).subscribe((response: any) => {
      this.formName = '';
      this.formEmail = '';
      this.getData();
    });
  }
}
