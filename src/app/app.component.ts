import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formRef:NgForm;
  // onSubmit(){
  //   console.log(this.formRef);
  // }
  petname:string='pet';
  submit:boolean = false;

  genders= ['male','female'];
  gen='male';
   user={
    username:'',
    email:'',
    secretQuestion:'',
    gender:''
  }
  setData(){
    const name='gg';
    // this.formRef.setValue({
    //   userdata:{
    //     username:name,
    //     email:'gg@gmail.com'
    //   },
    //   secret:'pet',
    //   gender:'male'

    // })
    this.formRef.form.patchValue({
      userdata{
        username:name
      }
    })

  }

  onSubmit(){
 this.user.username=this.formRef.value.userdata.username;
 this.user.email=this.formRef.value.userdata.email;
 this.user.secretQuestion=this.formRef.value.secret;
 this.user.gender=this.formRef.value.gender;
 this.submit=true;
 this.formRef.reset();
 console.log(this.formRef);


  }
}

