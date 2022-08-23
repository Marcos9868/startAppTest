import {
  Injectable,
  ConflictException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const existingMovie = await this.movieRepository.findOne({
      where: { title: createMovieDto.title },
    });

    if (existingMovie) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: `Movie "${createMovieDto.title}" already registered.`,
        element: 'title',
      });
    }

    const newMovie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(newMovie);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Movie>> {
    const queryBuilder = this.movieRepository.createQueryBuilder('m');
    queryBuilder.select(['*']);
    queryBuilder.orderBy('m.id', 'ASC');
    return paginate<Movie>(this.movieRepository, options);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieRepository.preload({
      id: id,
      ...updateMovieDto,
    });
    console.log(movie);
    if (!movie) {
      throw new NotFoundException(`Movie #${id} not found`);
    }

    return this.movieRepository.save(movie);
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
