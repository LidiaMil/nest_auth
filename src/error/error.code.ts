class CodeAndMsg {
  CODE: number;
  MESSAGE: string;
}

export class ErrorCode {
  static readonly SUCCESS: CodeAndMsg = { CODE: 0, MESSAGE: 'success' };
  static readonly ERROR: CodeAndMsg = { CODE: 1, MESSAGE: 'fail' };
  static readonly ParamsError: CodeAndMsg = { CODE: 2, MESSAGE: 'new' };

  static readonly Forbidden: CodeAndMsg = {
    CODE: 403,
    MESSAGE: 'Forbidden.',
  };
  static readonly NotFound: CodeAndMsg = {
    CODE: 404,
    MESSAGE: 'Schema not found.',
  };

  static readonly LoginError: CodeAndMsg = {
    CODE: 1000,
    MESSAGE: 'Input error.',
  };
  static readonly InActive: CodeAndMsg = {
    CODE: 1002,
    MESSAGE: 'The user is signed in on another device.',
  };

  static readonly TokenError: CodeAndMsg = {
    CODE: 1003,
    MESSAGE: 'Token invalid.',
  };

  static CodeToMessage(code: number): string {
    for (const key of Object.keys(this)) {
      if (this[key].CODE === code) {
        return this[key].MESSAGE;
      }
    }
    return '';
  }

  static HasCode(code: number): boolean {
    for (const key of Object.keys(this)) {
      if (this[key].CODE === code) {
        return true;
      }
    }
    return false;
  }
}
