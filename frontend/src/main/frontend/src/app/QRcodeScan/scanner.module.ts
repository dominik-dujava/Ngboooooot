import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {ScannerComponent} from "./scanner.component";
import {NgQrScannerModule} from "angular2-qrscanner";
import {ScannerService} from "./scannerservice";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgQrScannerModule,
  ],
  providers: [ScannerService],
  declarations: [ScannerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScannerModule { }
