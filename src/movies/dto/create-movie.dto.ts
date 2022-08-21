import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly title: string;

  @IsNotEmpty()
  @IsOptional()
  @MinLength(4)
  readonly gender: string;

  @IsOptional()
  readonly release: number;

  @IsOptional()
  readonly imdb: number;
}
