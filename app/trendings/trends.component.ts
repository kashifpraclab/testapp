import {Component,OnChanges,EventEmitter,Input,Output} from "angular2/core"
@Component({
    selector:"rank-star",
    templateUrl:"app/shared/star/star.component.html",
    styleUrls:["app/shared/star/star.component.css"]
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    ngOnChanges(){
        this.starWidth = this.rating * 86/5;
    }
    @Output() ratingClicked:EventEmitter<string>=
              new EventEmitter<string>();
              
    onClick() {
        this.ratingClicked.emit('The rating '+this.rating+' was clicked');
    }
}