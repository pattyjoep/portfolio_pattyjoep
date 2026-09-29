import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class PortfolioComponent {}
