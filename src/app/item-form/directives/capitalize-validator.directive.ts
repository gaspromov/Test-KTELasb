import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[capitalize-validator]',
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: CapitalizeValidatorDirective, 
      multi: true
    }
  ]
})
export class CapitalizeValidatorDirective {

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    if ( control.value.charAt(0).toUpperCase() == control.value.charAt(0) )
      return null;

    return {
      capitalizedFirstLetter: { 
        value: control.value, 
        validValue: control.value.charAt(0).toUpperCase() + control.value.slice(1) 
      }
    }    
  }

}
