import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
constructor(private formBuilder: FormBuilder ){}


info = new FormGroup({
  name: new FormControl('', Validators.required),
  email:new FormControl('', Validators.required),
  phNum: new FormControl('', Validators.required),
  textMes: new FormControl('', [Validators.required, Validators.minLength(8)]),
});
onSubmit(){

  // to take the values from the form you can select the property that have the formGroup and then just add .value
  if(this.info.valid){
    // var a = this.info.value;
    this.msg();
    this.info.reset();
  }else{
    alert('field is empty!')
  }
  }
msg(){
  window.alert("We received your message!");
}
ngOnInit(): void{
}




}
