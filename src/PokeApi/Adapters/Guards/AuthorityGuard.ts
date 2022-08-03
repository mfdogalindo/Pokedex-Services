import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorityGuard implements CanActivate {
  constructor(private readonly httpService: HttpService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const token = context.switchToHttp().getRequest().headers.authorization;
        const data = await this.httpService.axiosRef.post(
          `${process.env.AUTH_SERVER}/validate`,
          null,
          { headers: { Authorization: token } },
        );
        if (data.data) {
          resolve(true);
        }
        reject(data);
      } catch (e) {
        reject(e);
      }
    });
  }
}
