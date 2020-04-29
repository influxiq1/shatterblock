import {Component, OnInit, ViewChild, Input, Inject, SimpleChange} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs/Observable';
import { ApiService } from '../api.service';
import {Confirmdialog, SnackbarComponent} from "../listing.component";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";
//import {MatSnackBar} from "@angular/material/snack-bar";
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
  loading:boolean=false;
  formfieldrefreshval:boolean=false;
  formdataval: any = {};
  formfieldrefreshdataval: any = {};

  /*for progress bar*/

  color: ThemePalette = 'primary';
  mode: any = 'indeterminate';
  value = 50;
  bufferValue = 75;

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

  constructor(private formBuilder: FormBuilder,public _apiService: ApiService,private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
    this.createForm();


    //this.setChangeValidate()
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    console.log('ngonchange in form !!!',changes,'frv',this.formfieldrefreshdataval);
    for(let v in changes){
      //console.log(v,changes[v],'vv');
      if(v=='formfieldrefreshdata'){
        setTimeout (() => {
          console.log('fff in set tt');
          if (this.formfieldrefreshdataval != null) {
            console.log(this.formfieldrefreshdataval,'m');
            console.log(this.formfieldrefreshdataval.field);
            console.log(this.formfieldrefreshdataval.value);
              if(this.formGroup!=null )this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value)

          }
        },0);
      }
    }
  }

  inputblur(val: any) {
    //console.log('on blur .....');
    this.formGroup.controls[val].markAsUntouched();
  }


  createForm() {
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
         // setTimeout( ()=>{
          if(this.formdataval.fields[n].validations[v].message==null)
            this.formdataval.fields[n].validations[v].message="Not Valid !!"
          if(this.formdataval.fields[n].validations[v].rule=='required')
            temvalidationrule.push(Validators.required);
          if(this.formdataval.fields[n].validations[v].rule=='match') {
              this.formGroup.setValidators(this.checkPasswords);
          }
          if(this.formdataval.fields[n].validations[v].rule=='pattern')
            temvalidationrule.push(Validators.pattern(this.formdataval.fields[n].validations[v].value));
          if(this.formdataval.fields[n].validations[v].rule=='maxLength')
            temvalidationrule.push(Validators.maxLength(this.formdataval.fields[n].validations[v].value));
          if(this.formdataval.fields[n].validations[v].rule=='min')
            temvalidationrule.push(Validators.min(this.formdataval.fields[n].validations[v].value));
          if(this.formdataval.fields[n].validations[v].rule=='max')
            temvalidationrule.push(Validators.max(this.formdataval.fields[n].validations[v].value));
          if(this.formdataval.fields[n].validations[v].rule=='minLength')
            temvalidationrule.push(Validators.minLength(this.formdataval.fields[n].validations[v].value));
          //},0);
        }
      }

     // demoArray[this.formdataval.fields[n].name]=new FormControl('');
      this.formGroup.addControl(this.formdataval.fields[n].name,new FormControl(temcontrolarr[0],temvalidationrule));
      //'newControl', new FormControl('', Validators.required)
    }
    //=this.checkPasswords(this.formGroup);
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


  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmpassword.value;
    if(confirmPass==null || confirmPass==''){
      group.controls.confirmpassword.setErrors({required:true});
      return { required: true };
    }
    if(pass!=confirmPass){
      group.controls.confirmpassword.setErrors({'match':true});
      return {match:true};
    }

    //return pass === confirmPass ? null : { notSame: true }
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

  getError(data:any) {
    console.log('getError',data);
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
    for (let x in this.formGroup.controls) {
      this.formGroup.controls[x].markAsTouched();
      console.log(this.formGroup.controls[x].errors,x,'err');
    }
    console.log(post,'post',this.formGroup.valid,this.formdataval,this.formdataval.apiUrl);

    if(this.formGroup.valid){

      this.loading=true;
      let link:any=this.formdataval.apiUrl +this.formdataval.endpoint;
      let source:any={};
      source['data']=this.formGroup.value;
      this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe(res => {
        let result: any = {};
        result = res;
        if(result.status == 'success'){
          this.formGroup.reset();
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration:   6000,
            data: {errormessage:this.formdataval.successmessage}
          });
          console.log(result,'red',this.formdataval.redirectpath);
          if(this.formdataval.redirectpath!=null){
            this.router.navigate([this.formdataval.redirectpath]);
          }
        }
        if(result.status == 'error'){
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration:   6000,
            data:result
          });
        }

      }, error => {
        //console.log('Oooops!');
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration:   6000,
          data: {errormessage:'Something Went Wrong ,Try Again!!'}
        });
        this.loading=false;
      });
    }

  }

}
