import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ngForm: FormGroup;
  value: string;
  myModel: string = undefined;
  motivaziones = [
    'Mobile phone',
    'Laptop',
    'Router',
  ];
  allUser: object;
  userObj={
    Device1:"",
    Device2:"",
    Launch:"",
    Operating:"",
    Description:"",
    Custom:""
  }
  isEdit= false;

  constructor(private userService : UserService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router)
              {
                
              }

  ngOnInit(){
    this.getLatestUser();
    this.createForm();
  }  
  
  
  onSelect(user){
    this.router.navigate(['/profile', user.id]);
  }

  editUser(user){
    this.isEdit=true;
    this.userObj= user;
}
updateUser(){
  this.isEdit=!this.isEdit;
  this.userService.updateUser(this.userObj).subscribe((response)=>{
  this.getLatestUser();
  this.ngForm.reset();
  this.toastr.success('Device updated');
 
  })
}


  createForm() {
    this.ngForm = this.fb.group({
      Device2: [this.motivaziones['1']],
      Device1:'',
      Operating:'',
      Description:'',
      Launch:'',
      Custom:''
    });
  }


  addUser(formObj){
    console.log(formObj)
    this.userService.createUser(formObj).subscribe((response)=>{
    console.log("User u shtua")
    this.getLatestUser();
    this.ngForm.reset();
    this.toastr.success('Device Added');
  })
      
  }
  getLatestUser(){
    this.userService.getAllUser().subscribe((response)=>{
    this.allUser= response
    })
  }

  deleteUser(user){
    this.userService.deleteUser(user).subscribe((response)=>{
    this.getLatestUser();
    })
  }

}
