import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'name' })
  username: string;

  @ApiProperty({ example: 'qwertyui' })
  password: string;
}
