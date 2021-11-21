import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Guild } from 'src/graphql';
import { DiscordProvider } from './discord';

@Injectable()
export class DiscordService implements DiscordProvider {
  constructor(@Inject(HttpService) private readonly httpService: HttpService) {}

  fetchGuilds(accessToken: string): Observable<AxiosResponse<Guild[]>> {
    return this.httpService
      .get('http://discord.com/api/v8/users/@me/guilds', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .pipe(map((response) => response.data));
  }
  fetchGuildRoles(guildId: string) {
    throw new Error('Method not impelemented');
  }
}
