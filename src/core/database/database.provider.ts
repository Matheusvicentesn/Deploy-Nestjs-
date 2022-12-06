import { CourseRefactoringTest1669907989451 } from 'src/migrations/1669907989451-CourseRefactoringTest';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.USERNAMEDB,
        password: process.env.PASSWORDDB,
        database: process.env.DB_DATABASE,
        synchronize: true,
        entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
      });
      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3001,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: false,
  entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
  migrations: [CourseRefactoringTest1669907989451],
});
