import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})
export class CovertToSpacesPipe implements PipeTransform {
  transform(target: string, character: string): string {
    return target.replace(character, ' ');
  }
}
