import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes'
})
export class IncludesPipe implements PipeTransform {

  transform(messages: any, text: any): boolean {
    if (!text.lenght) return messages;
    return messages.filter((messages:any) => (messages.title.includes(text)|| messages.author.includes(text)));
    
  }

}
