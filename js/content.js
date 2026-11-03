const HUB_CONTENT = {
  site: {
    title: "ST011 HUB",
    subtitle: "노래·영상·소설·커뮤니티를 한 화면에서",
    ogImage: "assets/hero/hero_novelpia.png"
  },
  nav: [
    { id: "home", label: "홈" },
    { id: "song", label: "노래" },
    { id: "video", label: "영상" },
    { id: "story", label: "글" },
    { id: "community", label: "커뮤니티" },
    { id: "ai", label: "AI" },
    { id: "settings", label: "설정" }
  ],
  blog: [
    { title: "Week 1 — ST011 HUB 오픈 예고", date: "2026-11-03", link: "#" },
    { title: "ST011 노래 카트리지 팩 10선", date: "2026-11-02", link: "#" },
    { title: "YouTube Shorts에서 ST011 히트하기", date: "2026-11-01", link: "#" }
  ],
  cards: [
    { type: "video", title: "인기 영상", subtitle: "YouTube · Instagram · Facebook Shorts 모음", badge: "NOW" },
    { type: "song", title: "노래 센터", subtitle: "노래방 가이드, 반주곡, 최신 스코어", badge: "NEW" },
    { type: "story", title: "노벨피아 스토리", subtitle: "연재 중, 무료 소설, 모바일 챕터", badge: "IRREVERSIBLE" },
    { type: "ai", title: "AI로 창작하기", subtitle: "AI 스토리, 가사·디자인·영상 아이디어", badge: "NEW" }
  ],
  tabs: {
    song: [
      { title: "노래방 가이드", subtitle: "처음부터 끝까보기", link: "/song/guide.html" },
      { title: "반주곡", subtitle: "한국 · 일본 · 최신반주", link: "/song/covers.html" },
      { title: "최신 스코어", subtitle: "주간 인기 곡, 난이도별", link: "/song/scores.html" }
    ],
    video: [
      { title: "YouTube Shorts", subtitle: "ST011 하이라이트", link: "https://www.youtube.com/playlist?list=PLRJI6sIC6s7Q" },
      { title: "Instagram Reel", subtitle: "릴스 모음", link: "https://www.instagram.com/st011hub" },
      { title: "Facebook Replay", subtitle: "스레드식 영상 기록", link: "/facebook/replays.html" }
    ],
    story: [
      { title: "노벨피아 연재", subtitle: "모바일 우선 소설 카드", link: "https://novelpia.com/novel/458237" },
      { title: "블로그", subtitle: "Blogger · 개인 연재", link: "https://okluckday9009.blogspot.com/" },
      { title: "커뮤니티 스토리", subtitle: "스레드, 댓글, 팬픽", link: "/community/stories.html" }
    ],
    community: [
      { title: "스레드", subtitle: "노래방 · 영상 · 소설, 테마별 토론", link: "/community/threads.html" },
      { title: "댓글 & 리액션", subtitle: "스테이터스, 추천, 공유 반응", link: "/community/replies.html" },
      { title: "팬픽 & 2차 창작", subtitle: "커뮤니티에서 만든 작품 모음", link: "/community/fanworks.html" }
    ],
    ai: [
      { title: "AI 스토리", subtitle: "줄거리 · 등장인물 · 연재 구도 설계", link: "/ai/generate.html" },
      { title: "가사 & 캡션", subtitle: "노래방 가사, 영상 캡션, 발화문 작성", link: "/ai/lyrics.html" },
      { title: "이미지 생성", subtitle: "포스터, 히어로, 썸네일", link: "/ai/image.html" }
    ]
  }
};