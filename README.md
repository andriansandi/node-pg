## Node + PostgreSQL

#### Teknologi yang Digunakan
- NodeJS > 12
- PostgreSQL > 10
- [Sequelize](https://sequelize.org/)
- [Faker](https://github.com/marak/Faker.js/)

#### Cara Instalasi
- Clone repository ini
- Install dependencies
  ```shell
  $ npm install --save
  ```
- Konfigurasi koneksi ke database PostgreSQL di `config/config.json`
- Migrasi database
  ```shell
  sequelize db:migrate
  ``` 
- Seed inisial data
  ```shell
  sequelize db:seed:all
  ```
- Jalankan server, server dapat diakses di [http://localhost:3000](http://localhost:3000)
  ```shell
  npm run start
  ```

### Routing
- [Articles](http://localhost:3000/articles)