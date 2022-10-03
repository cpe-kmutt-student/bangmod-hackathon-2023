export type SameSiteCookieOption = 'Lax' | 'Strict' | 'None';

export type CookieOptions = {
  expiryDate?: Date,
  httpOnly?: boolean,
  domain?: string,
  path?: string,
  sameSite?: SameSiteCookieOption,
};

export class Cookie {

  private name: string;
  private value: string;
  private expiryDate: Date = new Date();
  private httpOnly: boolean = true;
  private domain: string = '';
  private path: string = '/';
  private sameSite: SameSiteCookieOption = 'Lax';

  public constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): Cookie {
    this.name = name;
    return this;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): Cookie {
    this.value = value;
    return this;
  }

  public getExpiryDate(): Date {
    return this.expiryDate;
  }

  public setExpiryDate(expiryDate: Date): Cookie {
    this.expiryDate = expiryDate;
    return this;
  }

  public getMaxAge(): number {
    return this.expiryDate.getTime() - Date.now();
  }

  public setMaxAge(milliseconds: number): Cookie {
    this.expiryDate = new Date(Date.now() + milliseconds);
    return this;
  }

  public getHttpOnly(): boolean {
    return this.httpOnly;
  }

  public setHttpOnly(httpOnly: boolean): Cookie {
    this.httpOnly = httpOnly;
    return this;
  }

  public getDomain(): string {
    return this.domain;
  }

  public setDomain(domain: string): Cookie {
    this.domain = domain;
    return this;
  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string): Cookie {
    this.path = path;
    return this;
  }

  public getSameSite(): SameSiteCookieOption {
    return this.sameSite;
  }

  public setSameSite(sameSite: SameSiteCookieOption): Cookie {
    this.sameSite = sameSite;
    return this;
  }

  public serialize(): string {
    const encodedValue = encodeURIComponent(this.value);
    let attributes = `${this.name}=${encodedValue}`;

    if (this.expiryDate) {
      attributes += `; Expires=${this.expiryDate.toUTCString()}`;
    }

    if (this.httpOnly) {
      attributes += '; HttpOnly';
    }

    if (this.domain) {
      attributes += `; Domain=${this.domain}`;
    }

    if (this.path) {
      attributes += `; Path=${this.path}`;
    }

    if (this.sameSite) {
      switch (this.sameSite) {
        case 'Lax':
          attributes += '; SameSite=Lax';
          break;
        case 'Strict':
          attributes += '; SameSite=Strict';
          break;
        case 'None':
          attributes += '; SameSite=None';
          break;
        default:
      }
    }

    return attributes;
  }

}
