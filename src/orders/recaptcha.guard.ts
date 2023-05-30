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

    const secretKey = process.env.GOOGLE_MAPS_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${res.body.recaptcha}`;

    const response = await lastValueFrom(this.httpService.post(url));

    if (!response.data.success) {
      throw new ForbiddenException();
    }

    return true;
  }
}
