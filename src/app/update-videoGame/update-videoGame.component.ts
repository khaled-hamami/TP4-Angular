import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGame } from '../model/videoGame.model';
import { VideoGameService } from '../services/videoGame.service';

@Component({
  selector: 'app-update-videoGame',
  templateUrl: './update-videoGame.component.html',
})
export class UpdatevideoGameComponent {
  currentVideoGame = new VideoGame();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private videoGameService: VideoGameService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentVideoGame = this.videoGameService.consulterVideoGame(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentVideoGame);
  }
  updateVideoGame() {
    //console.log(this.currentVideoGame);
    this.videoGameService.updateVideoGame(this.currentVideoGame);
    this.router.navigate(['videoGames']);
  }
}
