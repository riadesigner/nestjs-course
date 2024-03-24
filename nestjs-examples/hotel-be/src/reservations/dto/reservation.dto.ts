import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import * as dayjs from 'dayjs';

export class ReservationDto {
  @IsString()
  hotelRoom: string;

  @IsOptional()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @Transform(({ value }) => dayjs(value), { toClassOnly: true })
  startDate: dayjs.Dayjs;

  @IsNotEmpty()
  @Transform(({ value }) => dayjs(value), { toClassOnly: true })
  endDate: dayjs.Dayjs;
}
