import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class SupportRequestListDto {
  @IsOptional()
  @IsString()
  user?: string;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  isActive: boolean;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  limit?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  offset?: number;
}
