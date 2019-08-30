import { NgModule } from '@angular/core';
import { HighlightSearch, CreditCardDirective, SocialSecurityDirective, PhoneNumberDirective, BlockCopyPasteDirective } from './CustomDirectives/CustomValidation';
import { PdfViewerModule } from 'ng2-pdf-viewer'

@NgModule({
    declarations: [
        HighlightSearch,
        CreditCardDirective,
        SocialSecurityDirective,
        PhoneNumberDirective,
        BlockCopyPasteDirective,
    ],
    imports: [
        PdfViewerModule
    ],
    exports: [
        HighlightSearch,
        CreditCardDirective,
        SocialSecurityDirective,
        PhoneNumberDirective,
        BlockCopyPasteDirective,
        PdfViewerModule
    ],
})
export class SharedModule { }