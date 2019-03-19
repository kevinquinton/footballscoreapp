import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Match } from '../model/match';
import { Observable } from 'rxjs';
import { map, find, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProtectedSettings } from 'src/app/protected/protectedsettings';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private readonly URL_COMPETITION: string = 'competitions';

  constructor(private http: HttpClient) { }

  /**
   * Get matches corresponding to competition and match day
   * @param competitionCode : Code of competition
   * @param matchDay : number of match day
   */
  getMatches(competitionCode: string, matchDay: string): Observable<Match[]> {
    const url = `${environment.apiBaseUrl}/${this.URL_COMPETITION}/${competitionCode}/matches`;
    const requestOptions: Object = {
      headers: { 'X-Auth-Token':  ProtectedSettings.tokenApi },
      responseType: 'json',
      observe: 'body',
      params: new HttpParams().set('matchday', matchDay)
    };

    // TODO Create interceptor.

    return this.http.get<Match[]>(url, requestOptions).pipe(
      map(data => {
        return data['matches'];
      })
    );
  }

}