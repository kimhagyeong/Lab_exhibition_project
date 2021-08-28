# Sample project 30주년 과제

## Using front code kimhagyeong/Lab_exhibition_project [[link]](https://github.com/kimhagyeong/Lab_exhibition_project)

### FrontEnd
- node.js 설치
- ```npm i```
- ```npm start```

### BackEnd
- Anaconda 환경으로 server 폴더 open
- ```. condaenv.sh```
- ```. firststartserver.sh```
- 종료 후 ```. createsuperuser.sh``` 비밀번호 입력 (id : admin)
    - 다른 아이디로 생성 원할 시 ```python manage.py createsuperuser```
- ```. runserver.sh```로 서버 실행
- api 설명
    - BackEnd 실행 IP = ```BIP``` (218.150.xxx.xx)
    
        | HTTP Method | URL                                     | Body                                    | Response          |
        |:-----------:|-----------------------------------------|-----------------------------------------|-------------------|
        | POST        | http://```BIP```:8000/cs                | {img : FrontEnd에서 웹캠으로 촬영한 사진} | 18개의 작품에 대한 결과 url 리스트 |
        | GET         | http://```BIP```:8000/cs                | - | 18개의 작품에 대한 결과 url 리스트 |
        | GET         | http://```BIP```:8000/cv/\<int:art_id\> | - | art_id에 대한 3가지 variation을 포함한 결과 4개 url 리스트 |
        | GET         | http://```BIP```:8000/cp/\<int:art_code\> | - | art_id : ```art_code//10```<br>final selected art : ```art_code%10``` <br>  ```art_id```와 ```final```에 대한 출력물 변환 결과 url |

### 실행 정보
- 프로젝트 화면 ```http://BIP:3000/``` 
- django 객체 관리 화면 ```http://BIP:8000/admin```
- 원격 Backend 실행 시
    - ```server/runserver_remote.sh```의 ip 변경하여 사용 ( {BIP}:8000 )
    - ```server/painter/utils.py```의 ```URL```을 위와 동일하게 변경
    - ```front/src/conponent/theme.js```의 ```BackendServer```를 위와 동일하게 변경