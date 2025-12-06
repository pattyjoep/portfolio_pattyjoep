import { Component } from "@angular/core";
import { WindowService } from "../../services/window/window.service";
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetExampleComponent } from '../../bottom-sheet-example/bottom-sheet-example.component';

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
    constructor(public windowService: WindowService, private bottomSheet: MatBottomSheet) {}

    openBottomSheet(): void {
        this.bottomSheet.open(BottomSheetExampleComponent);
    }
}
