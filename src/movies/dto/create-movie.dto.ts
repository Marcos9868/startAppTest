import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsOptional()
  readonly gender: string;

  @IsOptional()
  readonly release: number;

  @IsOptional()
  readonly imdb: number;
}
