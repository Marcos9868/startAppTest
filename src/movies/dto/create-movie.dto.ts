import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(4)
  readonly gender: string;

  @ApiProperty()
  @IsOptional()
  readonly release: number;

  @ApiProperty()
  @IsOptional()
  readonly imdb: number;
}
