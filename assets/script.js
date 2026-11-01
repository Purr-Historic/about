const awakenBtn = document.getElementById('awaken-trigger-btn');
const cinemaModal = document.getElementById('cinema-modal');
const fullVideo = document.getElementById('full-awakening-video');
const miniPreview = document.getElementById('mini-preview');
const modalCloseBtn = document.getElementById('modal-close-btn');

// 스킬 데이터 정의
const skills = [
    {
        title: "[기본 스킬 : C++ / DirectX & 멀티 엔진 파이프라인]",
        text: "SGA 심화반을 거치며 DirectX FlappyBird, Unity 태양계 공전, Unreal 시네마틱까지 바닥부터 직접 구현해 낸 탄탄한 기본 스킬입니다."
    },
    {
        title: "[각성기 : ComfyUI-ZLUDA 라데온 개척]",
        text: "CUDA 독점 환경의 한계를 뚫고 AMD 라데온 그래픽카드에서 ZLUDA 런타임을 직접 뜯어고쳐 로컬 생성형 AI 노드 파이프라인을 구축한 돌파 기술입니다."
    },
    {
        title: "[각성 패시브 : PC 하드웨어 이해도 & 홈서버 호스팅]",
        text: "직접 써멀구리스를 도포하고 쿨러를 교체해 풀로드 온도를 완벽히 제어하며, 중계 서버 오버헤드가 없는 다이렉트 IP 커넥션(공인 IP 직결 및 포트포워딩) 구조로 자체 게임 서버를 구축하는 실전 인프라 정비 능력입니다."
    }
];

const slots = document.querySelectorAll('.slot');
const skillTitle = document.getElementById('skill-title');
const skillText = document.getElementById('skill-text');

// 스킬 아이콘 클릭 시 네모칸 내부 텍스트 업데이트
slots.forEach((slot) => {
    slot.addEventListener('click', () => {
        // 1. 활성화 테두리 표시
        slots.forEach((s) => s.classList.remove('active'));
        slot.classList.add('active');

        // 2. 해당 스킬 설명 출력
        const index = slot.getAttribute('data-skill');
        skillTitle.textContent = skills[index].title;
        skillText.textContent = skills[index].text;
    });
});

// 각성하기 버튼 클릭 시 풀스크린 비디오 사운드 100% 재생
awakenBtn.addEventListener('click', () => {
    miniPreview.pause();
    cinemaModal.classList.remove('hidden');
    fullVideo.muted = false;
    fullVideo.volume = 1.0;
    fullVideo.currentTime = 0;
    fullVideo.play();
});

// 영상 종료 또는 건너뛰기 시 모달 닫기
function closeAwakening() {
    fullVideo.pause();
    cinemaModal.classList.add('hidden');
    miniPreview.play();
}

fullVideo.addEventListener('ended', closeAwakening);
modalCloseBtn.addEventListener('click', closeAwakening)