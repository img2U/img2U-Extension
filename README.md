## 이미지 캡셔닝을 이용한 크롬 확장프로그램(Extension) img2U

:arrows_counterclockwise:	**update@2021.12.21**

![img2U Logo](https://github.com/img2U/img2U-Extension/blob/main/image2U/images/logo1.png?raw=true)



-----

- **:warning:사전설명:**
  - **연구개발 진행은 연구실 서버를 통하여 진행하였으며, 2021년 12월 1일기준으로 서버를 반납하여 실제 본 저장소의 확장프로그램을 사용하기 위해서는 [사전의 서버구축 및 API세팅](https://github.com/img2U/img2U-API)이 필요합니다.**

- **최종보고서:** 
  - :page_facing_up: [최종보고서](https://github.com/img2U/img2U-API/blob/main/img2U_%EC%B5%9C%EC%A2%85%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf)

- **API Repository:**
  - :page_facing_up: [img2U-API](https://github.com/img2U/img2U-API)
  
- **영상링크:**
  - :film_strip: [Youtube](https://www.youtube.com/watch?v=3N2XEK0JUtE)

-----
- **모델 구조 및 API 구조**
    <details> 
      <summary><b>모델구조: (클릭하여 확인) </b></summary>
        <img src="https://github.com/img2U/img2U-API/blob/main/structure_2.png">
    </details>

    <details> 
      <summary><b>API구조: (클릭하여 확인)</b></summary>
        <img src="https://github.com/img2U/img2U-API/blob/main/structure_1.png">
    </details>

-----

- **A. 파일구조**

  - [image2U](https://github.com/img2U/img2U-Extension/tree/main/image2U): 확장프로그램 코드 저장된 폴더
      - `popup.js`: 확장프로그램 팝업창을 위한 코드 구현
      - `content.js`: 웹 페이지에서 Tab키를 통한 웹 페이지 음성지원 코드 구현
-----

- **B. 사용방법**

  - 본 Repository를 ZIP형식으로 다운받아서 압축해제 하여 image2U폴더와 README.md 파일을 얻게됨
  - 크롬 브라우저에서 확장프로그램 관리 -> 오른쪽 상단(개발자 모드 ON)
  - "압축해제된 확장프로그램을 로드합니다" 클릭하여 image2U폴더를 선택하여 확장프로그램 로드
  - image2U 확장프로그램 활성화 됨

-----

- **C. 실행방법:**
    - **:warning: 본 Repo의 확장프로그램을 정상적으로 실행하기 위해서 API설정과 서버세팅이 필요합니다**
    - 위 **B.사용방법** 단계에서 설치된 확장프로그램을 크롬브라우저를 통해 실행가능하며, 아래의 hot-key를 가지고 있습니다.
      - Ctrl+Shift+F: 확장프로그램의 팝업창 열/닫기 기능 (음성으로 작동 중임을 알려주며, 실제 사용방법을 음성으로 알려줍니다)
      - Tab: 웹페이지에서 Tab키를 사용하여 text부분은 음성으로 읽어주고, image부분(현재는 png, jpg, jpeg 형식을 지원함)은 API를 통하여 request/response를 통해 캡션을 음성으로 읽어줌.
    - 더 상세한 내용은 최종보고서 및 영상 참고 부탁드립니다.
    
      
