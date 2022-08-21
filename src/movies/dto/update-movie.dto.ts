import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  readonly id: number;

  @ApiProperty()
  @IsOptional()
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
