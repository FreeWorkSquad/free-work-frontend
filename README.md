# FreeWork-Frontend
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/eslint-config-google)

This project need after version is [NodeJS](https://nodejs.org/ko) version 18.17.1 or higher.  
And, this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2,  

## Development server
The path to which you should run the prompt should be the same as your package.json path.

### Install
```bash
npm install
```

### Code style check
해당 명령어에서 실패한다면 코드 스타일의 기준에 벗어난 부분이 있으므로 에러 로그를 통해 코드 스타일의 규격을 맞추도록 해야한다.

```bash
npm run lint
```

### Run
```bash
npm run start
```

## Product server
The path to which you should run the prompt should be the same as your package.json path.

### Install
```bash
npm install
```

### Code style check
해당 명령어에서 실패한다면 코드 스타일의 기준에 벗어난 부분이 있으므로 에러 로그를 통해 코드 스타일의 규격을 맞추도록 해야한다.

```bash
npm run lint
```

### Build
After build, deploy file path `/dist`. And is starting from NginX.

```bash
npm run build
```

### Docker Build & Push

```bash
docker build -t freework-frontend:latest .
```

```bash
docker run -d -p 80:80 freework-frontend:latest
```
