import {Component, OnInit, ViewChild, Input, Inject, SimpleChange} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';
@Component({
  selector: 'lib-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.css']
})
export class ShowformComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  showform:boolean=false;
  formfieldrefreshval:boolean=false;
  formdataval: any = {};
  formfieldrefreshdataval: any = {};
  @Input()
  set formdata(formdata: any) {
    this.formdataval = formdata;
    console.log(this.formdataval);
  }
  @Input()
  set formfieldrefreshdata(formfieldrefreshdata: any) {
    this.formfieldrefreshdataval = formfieldrefreshdata;
    console.log(this.formfieldrefreshdataval);
  }
  @Input()
  set formfieldrefresh(formfieldrefresh: any) {
    this.formfieldrefreshval = formfieldrefresh;
    console.log(this.formfieldrefreshval);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();


    //this.setChangeValidate()
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

   // console.log('ngonchange',changes);
    for(let v in changes){
      //console.log(v,changes[v],'vv');
      if(v=='formfieldrefresh'){
        setTimeout (() => {
          if (this.formfieldrefreshdataval != null) {
            /*console.log(this.formfieldrefreshdataval,'m');
            console.log(this.formfieldrefreshdataval.field);
            console.log(this.formfieldrefreshdataval.value);*/
              if(this.formGroup!=null )this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value)

          }
        },10);
      }
    }
  }


  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    /*this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'fullname': [null, Validators.required],
     // 'password': [null, [Validators.required, this.checkPassword]],
      //'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      //'validate': ''
    });*/
    //let demoArray:any=[];
    this.formGroup = this.formBuilder.group({
    });
    console.log(this.formGroup,'fg')
    for(let n in this.formdataval.fields){
      let temcontrolarr:any=[];
      let temvalidationrule:any=[];
      if(this.formdataval.fields[n].value!=null)
      temcontrolarr.push(this.formdataval.fields[n].value)
      else
        temcontrolarr.push('');

      if(this.formdataval.fields[n].validations!=null && this.formdataval.fields[n].validations.length>0){
        for(let v in this.formdataval.fields[n].validations ){
          if(this.formdataval.fields[n].validations[v].rule=='required')
            temvalidationrule.push(Validators.required);
          if(this.formdataval.fields[n].validations[v].rule=='email')
            temvalidationrule.push(Validators.pattern(emailregex));
          if(this.formdataval.fields[n].validations[v].rule=='max')
            temvalidationrule.push(Validators.maxLength(this.formdataval.fields[n].validations[v].value));
          if(this.formdataval.fields[n].validations[v].rule=='min')
            temvalidationrule.push(Validators.minLength(this.formdataval.fields[n].validations[v].value));
        }
      }

     // demoArray[this.formdataval.fields[n].name]=new FormControl('');
      this.formGroup.addControl(this.formdataval.fields[n].name,new FormControl(temcontrolarr[0],temvalidationrule));
      //'newControl', new FormControl('', Validators.required)
    }
    //this.formGroup = this.formBuilder.group(demoArray);

    setTimeout (() => {
      //console.log(this.formGroup,'fg',demoArray);
      this.showform=true;
      if(this.formdataval.submitactive==null)
        this.formdataval.submitactive=true;
    }, 100);

  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
        (validate) => {
          if (validate == '1') {
            this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
            this.titleAlert = "You need to specify at least 3 characters";
          } else {
            this.formGroup.get('name').setValidators(Validators.required);
          }
          this.formGroup.get('name').updateValueAndValidity();
        }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
        this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
            this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
        this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
    console.log(post,'post',this.formGroup.valid,this.formdataval);
  }

}
