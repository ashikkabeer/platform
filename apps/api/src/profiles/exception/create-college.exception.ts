import { HttpException, HttpStatus } from '@nestjs/common';

export class CreateCollegeException extends HttpException {
  constructor(err: any) {
    super({ success: false, error: 'College Exists' }, HttpStatus.BAD_REQUEST);
    /* eslint-disable */
    console.log({ err });
  }
}
