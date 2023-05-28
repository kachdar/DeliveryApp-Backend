import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { catchError, firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly httpService: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const res = context.switchToHttp().getRequest();

    const secretKey = '6Leo80YmAAAAAGE6BkzWhFTLdgvH9rDyLwMJ40tc';
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${res.body.recaptcha}`;
    console.log(url);

    const response = await lastValueFrom(this.httpService.post(url));
    console.log(response.data)

    // if (!data.success) {
    //   throw new ForbiddenException(`${recaptcha}, ${secretKey}, ${data}`);
    // }

    return res;
  }
}
