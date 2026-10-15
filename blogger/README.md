# okluckday9009 블로그 · 모바일 우선 테마 (ST011 · 노벨피아)

`okluckday9009.blogspot.com` 을 기본 테마에서 **모바일 우선 웹소설 블로그 테마**로 바꾸기 위한 파일입니다.
대문(홈 상단)에는 st011 홍보용으로 만들었던 **주인공/표지 이미지**를 사용합니다.

## 파일

| 파일 | 용도 |
|---|---|
| `okluckday-theme.xml` | Blogger 에 올릴 테마 전체 (대문 + 상단바 + 글 카드 + 푸터) |
| `preview.html` | 적용 전 브라우저 미리보기 (정적 사본 · 이미지는 `../assets/` 로컬 경로) |
| `README.md` | 이 문서 |

## 대문 구성 (홈에서만 표시)

1. **배너** — `hero_novelpia.png` (1600×864, 노벨피아 문구가 들어간 주인공 배너) — 클릭 시 노벨피아로 이동
2. **소설 카드** — `cover.jpg` 표지 + 제목/태그/한 줄 소개 + CTA 버튼 (📖 무료로 읽기 / 최신 글 보기)
3. **이미지 메뉴 2카드** — 16:9 썸네일 + 제목/설명, 모바일 2열
   - ▶ **YouTube 재생목록** — `https://www.youtube.com/playlist?list=PLRJI6sIC6s7Q` (일본애니) · 썸네일 `https://i.ytimg.com/vi/Z-WdGYi9Pv4/mqdefault.jpg`
   - 📖 **노벨피아 무료로 읽기** — `https://novelpia.com/novel/458237` · 썸네일 `hero_novelpia.png`
4. **가이드 칩 3개** — 🎯 노래방 가이드 · 🇰🇷 한국 70곡 · 🇯🇵 일본 목록 (실제 글 URL 연결, 가로 스크롤)
5. 글 목록은 Blogger 기본 위젯을 **다크 카드**로 스타일만 바꿔서 그대로 노출 (YouTube 플레이어·쿠팡 링크·댓글 모두 유지)
6. 푸터 — 노벨피아(금색) + YouTube 재생목록(테두리) 버튼

이미지는 이미 공개되어 있는 GitHub Pages 주소를 씁니다(새 호스팅 불필요):

- `https://nicewjs0526-sudo.github.io/st011-homepage/assets/hero_novelpia.png`
- `https://nicewjs0526-sudo.github.io/st011-homepage/assets/cover.jpg`

## 적용 방법 (5분)

1. **백업**: Blogger 대시보드 → **테마** → 우측▾ **백업/복원** → 지금 테마 백업 (복구용)
2. **미리보기**: `preview.html` 을 브라우저로 열고, F12 → 모바일 기기 아이콘(📱)으로 375px 폭 확인
3. **적용**: 테마 → **테마 편집기(HTML 편집기)** → 기존 코드 **전체 삭제** → `okluckday-theme.xml` 전체를 붙여넣기 → **저장**
4. 홈(https://okluckday9009.blogspot.com/) 새로고침해서 대문 확인

> 저장 시 XML 오류가 나면 대화로 알려주세요(위치 표시 후 수정해 드립니다).
> 마음에 안 들면 1번의 백업 파일로 **복원**하면 원래대로 돌아갑니다.

## 자주 바꾸는 곳

- **색상**: `okluckday-theme.xml` 의 `<b:skin>` 안 `:root` 변수 9개 (`--bg`, `--gold`, `--red`, `--purple` …)
- **대문 문구/버튼 링크**: `<b:if cond='data:blog.url == data:blog.homepageUrl'>` 안의 `ok-hero` 영역
  - 노벨피아 주소: `https://novelpia.com/novel/458237`
- **대문 이미지 교체**: `st011-homepage` 저장소의 `assets/` 를 새로 만든 이미지로 교체 후 push 하면 URL 그대로 반영됩니다.
  블로그에 직접 올린 이미지를 쓰려면 글 편집기에서 이미지 업로드 후 나오는 URL 로 `src` 를 바꾸면 됩니다.
- **상단 메뉴**: `<nav class='ok-nav'>` 안의 `<a>` 목록 (홈 · ▶ 재생목록 · 노래방 가이드 · 한국 70곡 · 일본 목록 · 📖 노벨피아)
- **이미지 메뉴 카드**: `<section class='ok-menu'>` 안 2개 `<a class='ok-menu__card'>`
  - YouTube 카드 썸네일은 재생목록 영상 ID 로 바꿀 수 있습니다 (`https://i.ytimg.com/vi/<영상ID>/mqdefault.jpg`, 320×180)
  - 재생목록 주소: `https://www.youtube.com/playlist?list=PLRJI6sIC6s7Q` (채널 "일본애니")

## 참고

- 글 본문의 기존 스타일(`.y6p` 흰 카드)은 글 안에서 그대로 유지됩니다 — 어두운 배경과 대비가 좋아 그대로 잘 보입니다.
- 글 안의 iframe(YouTube)은 폭 100% · 16:9 로 모바일에 맞춰 표시됩니다.
- 히어로 이미지 아래 그라데이션(`.ok-hero__art:after`)과 카드 겹침(`margin:-30px`)이 대문 자연스러운 이어짐을 만듭니다.

## 검증 상태

- XML 선언/네임스페이스/`b:skin`/`b:section`·`b:widget` 구조 작성, `python` XML 파서로 **well-formed 검사** 완료.
- `preview.html` 로 레이아웃 확인 가능(구글 폰트·이미지 로딩은 인터넷 필요).
- **미검증**: 실제 Blogger 테마 편집기 저장/실기기 모바일 렌더링은 브라우저 계정이 없어 확인하지 못했습니다. 적용 후 화면이 어긋나면 알려주세요.
