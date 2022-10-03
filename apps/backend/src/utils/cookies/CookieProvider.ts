import { Cookie } from '@/utils/cookies/Cookie';
import crypto from 'crypto';
import { Request, Response } from 'springpress';

export class CookieProvider {

  private static readonly SIGNED_SYMBOL: string = '$:';

  private readonly secret: string;

  public constructor(secret: string) {
    this.secret = secret;
  }

  public setCookie(res: Response, cookie: Cookie): void {
    res.setHeader('Set-Cookie', cookie.serialize());
  }

  public getCookie(req: Request, name: string): string {
    const header = req.headers.cookie;
    let value = '';

    if (header) {
      const cookie = this.parseCookieHeader(header)[name];

      if (cookie) {
        value = cookie;
      }
    }

    return value;
  }

  public setSignedCookie(res: Response, cookie: Cookie): void {
    cookie.setValue([
      CookieProvider.SIGNED_SYMBOL,
      this.sign(cookie.getValue()),
    ].join(''));

    res.setHeader('Set-Cookie', cookie.serialize());
  }

  public getSignedCookie(req: Request, name: string): string {
    const header = req.headers.cookie;
    let value = '';

    if (header) {
      const cookie = this.parseCookieHeader(header)[name];

      if (cookie) {
        const { SIGNED_SYMBOL } = CookieProvider;

        if (cookie.substring(0, SIGNED_SYMBOL.length) === SIGNED_SYMBOL) {
          value = this.unsign(cookie.slice(SIGNED_SYMBOL.length));
        }
      }
    }

    return value;
  }

  public parseCookieHeader(header: string) {
    const reducer = (acc: Record<string, string>, value: string[]) => {
      acc[decodeURIComponent(value[0].trim())] = decodeURIComponent(value[1].trim());
      return acc;
    };

    return header
      .split(';')
      .map((value) => value.split('='))
      .reduce<Record<string, string>>(reducer, {});
  }

  public sign(value: string): string {
    const signature = crypto
      .createHmac('sha256', this.secret)
      .update(value)
      .digest('base64')
      .replace(/=+$/, '');
    return [value, signature].join('.');
  }

  public unsign(value: string): string {
    const tentativeValue = value.slice(0, value.lastIndexOf('.'));
    const expectedValue = this.sign(tentativeValue);
    const expectedBuffer = Buffer.from(expectedValue);
    const valueBuffer = Buffer.from(value);

    return (
      expectedBuffer.length === valueBuffer.length
      && crypto.timingSafeEqual(expectedBuffer, valueBuffer)
    ) ? tentativeValue : '';
  }

}
