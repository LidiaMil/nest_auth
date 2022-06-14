import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: '1', description: 'The id of the user' })
  userId: string | number;

  @ApiProperty({ example: 'john', description: 'The name of the user' })
  username: string;

  @ApiProperty({ example: 'changeme', description: 'The password' })
  password: string;
}
