import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly httpService: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const res = context.switchToHttp().getRequest();
    console.log(res);
    const secretKey = '6Leo80YmAAAAAGE6BkzWhFTLdgvH9rDyLwMJ40tc';
    //const url = `https://www.google.com/recaptcha/api/siteverify?response=${recaptcha}&secret=${secretKey}`;
    //const { data } = await lastValueFrom(this.httpService.post(url));

    // console.log(data.success);

    // if (!data.success) {
    //   throw new ForbiddenException(`${recaptcha}, ${secretKey}, ${data}`);
    // }

    return res;
  }
}
