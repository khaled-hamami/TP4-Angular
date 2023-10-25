import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-videoGame',
  templateUrl: './add-videoGame.component.html',
})
export class AddvideoGameComponent implements OnInit {
  newVideoGame = new VideoGame();
  // message: string = '';
  constructor(
    private videoGameService: VideoGameService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addVideoGame() {
    this.videoGameService.ajouterVideoGame(this.newVideoGame);
    window.alert(`videoGame ${this.newVideoGame.nomVideoGame} ajouter avec succes`);
    //this.message = `videoGame ${this.newVideoGame.nomvideoGame} ajouter avec succes`;
    this.router.navigate(['vidoGames']);
  }
}
