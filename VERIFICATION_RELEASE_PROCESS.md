# 검증·배포 절차

이 저장소는 회사 웹사이트와 GitHub Pages용 `docs/` 산출물을 함께 관리한다. 패키지 release는 없으므로 `release-or-deploy` 단계는 아래 `deploy-gate`가 담당한다. 각 gate는 같은 의미로 섞어 쓰지 않으며, 결과는 항상 full source SHA와 GitHub Actions run ID에 귀속한다.

## Gate 경계

| Gate | 실행 시점과 명령 | 고유 신호 | 다음 단계 차단 조건 |
|---|---|---|---|
| `quick-check` | 수정 중 변경 파일에 대해 `npx eslint <files>`와 관련 Vitest node인 `npm run test:run -- <test-file>`를 실행한다. 빌드 설정·정적 자산 경계를 바꿨으면 `npm run build`도 한 번 실행한다. | 변경 범위의 lint/test/build 결과 | 실패를 해결하기 전 `main`에 push하지 않는다. 이 결과만으로 전체 회귀 통과를 주장하지 않는다. |
| `full-ci` | `main` push에서만 `.github/workflows/ci.yml`의 **Full CI**를 실행한다. `npm ci`, `npm run lint`, `npm run test:run`, `npm run build`는 각각 별도 step 신호다. PR·수동 trigger를 두지 않아 같은 SHA의 중복 실행 경로를 만들지 않는다. | exact SHA의 `Verify source and committed Pages output` check와 run ID | 하나라도 실패하면 배포 완료 판정 금지. runner가 없으면 `BLOCKED`다. |
| `deploy-gate` | 이 저장소에는 배포 명령을 실행하는 workflow가 없다. GitHub Pages가 repository 설정의 branch/folder source(현재 저장소 계약은 `main`의 `/docs`)를 별도로 게시한다. | 동일 `main` SHA의 full-ci 성공과 GitHub Pages deployment 성공/URL | Pages 설정·권한·deployment 상태를 확인할 수 없으면 `BLOCKED`; CI 성공을 배포 성공으로 부르지 않는다. |
| `test1-e2e` | **해당 없음(N/A)**. 이 웹사이트는 현장 PC 설치본, 스캐너, 프린터 또는 오프라인 동기화 대상이 아니다. | 없음 | `PASS`로 대체 기록하지 않는다. 웹 배포 확인은 `deploy-gate`에서 끝낸다. |

상태 용어는 `NOT_RUN`, `PASS`, `BLOCKED`, `FAIL`만 사용한다. credential·repository setting·runner 같은 전제조건 부재는 성공이 아니라 `BLOCKED`다.

## `docs/` 산출물 계약

`npm run build`는 `docs/`를 다시 만든다. Full CI는 모든 후보를 빌드하지만, 다음 입력 또는 산출물이 바뀐 후보에서만 committed-output drift를 차단한다.

- `src/**`, `public/**`, `locales/**`, `index.html`
- `package.json`, `package-lock.json`, `vite.config.*`
- `docs/**`

문서나 workflow만 바뀐 후보에서는 의미 없는 `docs/` drift 판정을 추가하지 않는다. drift 대상 후보는 빌드 후 `git status --porcelain --untracked-files=all -- docs`가 비어 있고 `docs/index.html`이 있어야 한다. 산출물을 갱신해야 한다면 로컬에서 한 번 빌드해 변경된 `docs/`를 source 변경과 함께 리뷰한다.

## UI 변경

레이아웃, 반응형 동작, 내비게이션, 애니메이션, 번역 표시 또는 사용자 입력 UI가 바뀌면 headless unit test 외에 변경 화면을 브라우저에서 한 번 확인하고 변경 기록에 viewport와 결과를 남긴다. 현재 이 저장소에는 canonical browser automation script가 없으므로 Full CI가 브라우저 증거를 가장하지 않는다. 로컬에서는 `npm run build` 후 `npm run preview -- --host 127.0.0.1`을 사용하며, 같은 후보에 대해 dev/preview 브라우저 smoke를 중복 실행하지 않는다.

## 운영 순서

1. `quick-check`로 변경 범위를 확인한다.
2. UI 변경이면 위의 단일 browser smoke 증거를 남기고 `main`에 push한다.
3. 그 exact `main` SHA의 `full-ci`가 성공했는지 확인한다.
4. GitHub Pages의 별도 deployment가 같은 SHA의 committed `docs/`를 게시했는지 확인한 뒤에만 배포 완료로 기록한다. branch/folder 방식의 Pages 게시 자체는 CI보다 먼저 시작될 수 있으므로, repository 설정을 Actions 기반 gate로 바꾸기 전까지 full-ci는 사전 차단 장치가 아니라 사후 완료 판정 신호다.

Repository ruleset에 required check를 연결할 때는 workflow 표시명 `Verify source and committed Pages output`을 지정한다. full-ci를 deploy 단계에서 다시 실행하지 않는다.

릴리스 workflow와 build 계약은 `.github/CODEOWNERS`에 `@KMTechn` 소유로
지정했지만 현재 독립 write reviewer가 없다. Code Owner review를 required로
강제하려면 별도 reviewer를 먼저 추가해야 하며, 그 전까지 승인 게이트는
`BLOCKED`다.

실패한 full-ci를 같은 SHA에서 수동 반복하지 않는다. 관련 focused check로 원인을 재현·수정하고 새 SHA를 `main`에 push해 새 full-ci 신호를 만든다.
