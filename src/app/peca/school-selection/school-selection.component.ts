import { Component, OnInit } from "@angular/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-school-selection",
  templateUrl: "./school-selection.component.html",
  styleUrls: ["./school-selection.component.scss"]
})
export class SchoolSelectionComponent implements OnInit {
  backIcon = faArrowLeft;
  title = "Bienvenido a AmbleMa";
  description =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quam pariatur hic dignissimos nam laborum expedita nostrum temporibus adipisci, amet quos neque animi, obcaecati, quisquam officia dolorum inventore deserunt! Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente placeat veritatis, reprehenderit accusantium, illo aspernatur qui, cupiditate magni quis provident! Quibusdam fugiat voluptatum doloribus fugit? Illum dolores dicta eveniet quos neque animi, illo aspernatur qui.";
  schools = [
    {
      name: "Escuela 1",
      addres: ""
    },
    {
      name: "Escuela 2",
      addres: ""
    },
    {
      name: "Escuela 3",
      addres: ""
    }
  ];

  constructor() {}

  ngOnInit() {}
}
