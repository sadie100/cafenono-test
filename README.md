# cafenono-test

## UI 요구사항

1. 상단에는 1층부터 15층까지의 층계 버튼이 가로 방향으로 나열되어 있다.
   - 층계 버튼은 네모 안에 까만 글자로 층수가 쓰여 있는 모양이며, hover 시 포인터 커서를 보인다.
   - 클릭된 버튼은 빨간색 글자로 변하고 글자가 bold 처리된다.
   - 클릭된 버튼이 3개가 될 경우 버튼은 회색으로 disabled 처리된다.
2. 층계 버튼 하단에는 세 개의 엘리베이터 섹션이 세로 방향으로 나열되어 있다.
   - 각 엘리베이터 섹션은 엘리베이터 라인을 뜻하는 세로로 긴 직사각형과 엘리베이터를 의미하는 까반 네모 박스로 구성되어 있다.
   - 엘리베이터 박스 안에는 현재 위치한 층계가 기록되어 있다.
   - 이동 중인 엘리베이터는 빨간 테두리와 빨간 글자로 변한다.

## 기능 요구사항

1. 사용자는 상단의 층계 버튼 중 하나를 클릭할 수 있다.
   1. 이미 클릭된 상태의 층 버튼을 다시 클릭하는 것은 무시된다.
   2. 버튼 클릭은 총 세개까지 가능하다.
2. 층계 버튼이 클릭될 경우 엘리베이터 하나가 해당 층으로 출발한다. 엘리베이터 선택 알고리즘은 다음과 같다.
   1. 현재 이동 중이지 않은 엘리베이터가 하나뿐이면 해당 엘리베이터가 선택된다.
   2. 현재 이동 중이지 않은 엘리베이터가 둘 이상이면, 현재 위치한 층계가 선택한 층계에서 가장 가까운 엘리베이터가 선택된다.
   3. 선택한 층계까지의 거리가 같을 경우, 왼쪽에 있는 엘리베이터가 우선권을 갖는다.
3. 엘리베이터가 선택한 층계에 도착하면 도착한 층계 버튼과 엘리베이터가 다시 활성화된다.