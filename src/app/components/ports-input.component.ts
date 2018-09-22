import { Input, Component, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, Validators, ValidationErrors, FormBuilder, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';


/**
 * Custom validator function to check if valid port number or port range is specified
 * @param control Form control
 */
function PortOrPortRangeValidator(required: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const ports: string = control.value || '';
    if (required && !ports.length) {
      return { values: ports, required };
    }

    if (!required && !ports) {
      return null;
    }

    const invalidPorts = ports.split(',').filter((port: string) => {
      // Check if range
      if (!port) {
        return {};
      }
      const portValue = (port && parseInt(port, 10));
      return !(portValue >= 1 && portValue <= 65535);
    });
    return invalidPorts.length ? { values: invalidPorts.join(','), required } : null;
  };
}


export enum InputType {
  SINGLE,
  MULTI
}

@Component({
  selector: 'ports-input-component',
  templateUrl: './ports-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PortsInputComponent, // forwardRef(() => PortInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: PortsInputComponent,
      multi: true
    }
  ]
})
export class PortsInputComponent implements ControlValueAccessor, Validator {

  public singlePortFormCtrl = new FormControl('', [Validators.required, Validators.min(1), Validators.max(65535)]);
  public multiPortsFormCtrl = new FormControl('', PortOrPortRangeValidator(true));

  readonly InputType = InputType;

  @Input()
  inputType: InputType = InputType.SINGLE;

  @ViewChild('singlePort') singlePortInput;
  @ViewChild('multiPorts') multiPortsInput;

  private onChange = (_: any) => { };
  private onTouched = () => { };
  private _value: any;

  constructor(private fb: FormBuilder) {

    this.singlePortFormCtrl.valueChanges.subscribe((value) => {
      const newValue = value && parseInt(value, 10) ? [value] : [];
      this.onChange(newValue);
      this.onTouched();
    });

    this.multiPortsFormCtrl.valueChanges.subscribe((value) => {
      const newValue = (value || '').split(',');
      this.onChange(newValue);
      this.onTouched();
    });

  }

  writeValue(value: any) {
    console.log("Value: ", value);
    this._value = value;
    if (this.singlePortFormCtrl && this.inputType === InputType.SINGLE) {
      const inputValue = (value instanceof Array) && value.length > 0 ? value[0] : '';
      this.singlePortFormCtrl.setValue(value);
    }

    if (this.multiPortsInput && this.inputType === InputType.MULTI) {
      const inputValue = (value || []).join(',');
      this.multiPortsFormCtrl.setValue(inputValue);
    }

  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(control: FormControl): null | ValidationErrors {

    if (this.inputType === InputType.SINGLE) {
      return this.singlePortFormCtrl.valid ? null : this.singlePortFormCtrl.errors;
    }

    if (this.inputType === InputType.MULTI) {
      return this.multiPortsFormCtrl.valid ? null : this.multiPortsFormCtrl.errors;
    }

    return null;
  }
}
