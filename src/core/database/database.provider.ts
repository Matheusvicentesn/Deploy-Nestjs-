import { CourseRefactoringTest1669907989451 } from 'src/migrations/1669907989451-CourseRefactoringTest';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'babar.db.elephantsql.com',
        port: 5432,
        username: 'esafqzrj',
        password: 'i_YtsPfqBJIGNY_XGm0dBTCDq61ccHp-',
        database: 'esafqzrj',
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
