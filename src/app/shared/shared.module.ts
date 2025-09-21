import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecreaseTextPipe } from 'src/app/pipe/decrease-text.pipe';
// import { AlphaNumericDirective } from '../directives/alpha-numeric.directive';
// import { CaseSensitiveDirective } from '../directives/casesensitive.directive';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SafeHtmlPipe } from '../pipe/safeHtml.pipe';
import { sortBySortOrderPipe } from '../pipe/sortByOrderForTax';
import { TimeFormaterPipe } from '../pipe/time-formater.pipe';


@NgModule({
  declarations: [ SafeHtmlPipe, sortBySortOrderPipe, TimeFormaterPipe, DecreaseTextPipe,],
  imports: [
    CommonModule,
         TableModule,
        TabViewModule,
        TabMenuModule,
        DialogModule,
        FormsModule,
          TableModule,
                FileUploadModule,
                ButtonModule,
                RippleModule,
                ToastModule,
                ToolbarModule,
                RatingModule,
                InputTextModule,
                InputTextareaModule,
                DropdownModule,
                RadioButtonModule,
                InputNumberModule,
     FormsModule, ReactiveFormsModule

  ],
  exports: [SafeHtmlPipe, sortBySortOrderPipe,
     CommonModule,
        TableModule,
        TabViewModule,
        TabMenuModule,
        DialogModule,
                FileUploadModule,
                ButtonModule,
                RippleModule,
                ToastModule,
                ToolbarModule,
                RatingModule,
                InputTextModule,
                InputTextareaModule,
                DropdownModule,
                RadioButtonModule,
                InputNumberModule, TimeFormaterPipe, DecreaseTextPipe, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
