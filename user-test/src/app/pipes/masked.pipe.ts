import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masked'
})
export class PasswordPipe implements PipeTransform {

  transform(password: string): String {
    var pl = password.length;
    var mask="";
    
    for(let idx = 0; idx < pl; idx++) {
      mask+="#";
    }
    //while(pl>0) {
      //mask+="#";
      //pl--;
    //}
    return mask
  }

}
