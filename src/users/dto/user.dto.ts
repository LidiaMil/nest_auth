import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john' })
  username: string;

  @ApiProperty()
  password: string;
}
