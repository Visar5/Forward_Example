import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
User:any;

constructor(private route: ActivatedRoute,
              private userService : UserService,
              private router: Router) { }

ngOnInit(){
const id = +this.route.snapshot.params['id'];
this.User=this.getProfUser(id);
}

getProfUser(id): void {
    this.userService
    .getProfUser(id)
    .subscribe(res => this.User = res)
}
}
