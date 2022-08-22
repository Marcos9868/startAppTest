import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMoviesTable1660829318061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'gender',
            type: 'varchar',
          },
          {
            name: 'release',
            type: 'int',
          },
          {
            name: 'imdb',
            type: 'float',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
