import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly httpService: HttpService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const res = context.switchToHttp().getRequest();

    const secretKey = '6Leo80YmAAAAAGE6BkzWhFTLdgvH9rDyLwMJ40tc';
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${res.body.recaptcha}`;

    const response = await lastValueFrom(this.httpService.post(url));

    if (!response.data.success) {
      throw new ForbiddenException();
    }

    return true;
  }
}
