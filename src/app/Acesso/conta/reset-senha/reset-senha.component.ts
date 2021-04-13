import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css']
})
export class ResetSenhaComponent implements OnInit {

  constructor(private activatedRouteoute: ActivatedRoute) { }

  ngOnInit() {

    let userId = '';
    userId= this.activatedRouteoute.snapshot.queryParams['userId'];

    const token = this.activatedRouteoute.snapshot.queryParams['token'];

      console.log(userId, token);

      this.activatedRouteoute.queryParamMap.subscribe(result =>
        {
            console.log(`userId: ${result.get('userId')}`);
            console.log(`token: ${result.get('token')}`);        
        });     
  }

}
