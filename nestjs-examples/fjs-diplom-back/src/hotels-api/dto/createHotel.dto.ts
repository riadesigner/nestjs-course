import { ApiProperty } from '@nestjs/swagger';

export class CreateHotelDto {
  @ApiProperty({ example: 'Киев', description: 'Название гостиницы' })
  readonly title: string;
  @ApiProperty({ example: '4 звезды', description: 'Описание гостиницы' })
  readonly description: string;
}
