import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  readonly gender: string;

  @ApiProperty()
  @IsOptional()
  readonly release: number;

  @ApiProperty()
  @IsOptional()
  readonly imdb: number;
}
