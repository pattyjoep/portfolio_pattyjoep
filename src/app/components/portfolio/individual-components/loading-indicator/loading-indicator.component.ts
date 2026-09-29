import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-loading-indicator",
    templateUrl: "./loading-indicator.component.html",
    styleUrl: "./loading-indicator.component.scss",
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class LoadingIndicatorComponent {}
