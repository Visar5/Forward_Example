import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Visar Borri';
  public ngForm: FormGroup;
  maxLength: number = 4;
  value: string;
  public itemCode;
  motivaziones = [
   { name:'Mobile phone'},
    {name:'Laptop'},
    {name:'Router'},
  ];
  allUser: object;
  userObj={
    Device1:"",
    Device2:"",
    Operating:""
  }

  constructor(private userService : UserService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router)
              {
                this.createForm();
              }

  ngOnInit(){
    this.getLatestUser();
  }  
  
  
  onSelect(user){
    this.router.navigate(['/profile', user.Device1]);
  }


  createForm() {
    this.ngForm = this.fb.group({
      motivazione1: [this.motivaziones[0]],
    });
  }


  addUser(formObj){
    console.log(formObj)
    this.userService.createUser(formObj).subscribe((response)=>{
    console.log("User u shtua")
    this.getLatestUser();
  })
      
  }
  getLatestUser(){
    this.userService.getAllUser().subscribe((response)=>{
      this.allUser= response
    })
  }
}
