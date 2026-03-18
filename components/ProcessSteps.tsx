const steps = [
  { num: "01", title: "신청서 접수", desc: "신청인 → KEITI" },
  { num: "02", title: "접수내용 검토 및 아이템 진단", desc: "KEITI ↔ 운영사" },
  { num: "03", title: "(분기별)아이템 선별 및 맞춤형 멘토링", desc: "운영사 ↔ 신청인" },
  { num: "04", title: "(분기별)멘토링 일지 제출", desc: "운영사 → KEITI" },
  { num: "05", title: "(필요시)환경창업 지원사업 연계", desc: "KEITI → 신청인" },
];

export default function ProcessSteps() {
  return (
    <div className="relative mt-4">
      {/* 연결선 (데스크탑) */}
      <div className="process-connector hidden md:block" />

      <div className="flex flex-row justify-between items-stretch flex-nowrap gap-1 md:gap-0">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col items-center text-center w-[18%] relative z-10"
          >
            {/* 번호 원 */}
            <div
              className="rounded-full bg-white border-2 border-green-500 text-green-500 font-bold flex items-center justify-center flex-shrink-0 mb-2"
              style={{ width: "clamp(40px,8vw,100px)", height: "clamp(40px,8vw,100px)", fontSize: "clamp(0.7rem,1.5vw,1.8rem)" }}
            >
              {step.num}
            </div>
            {/* 제목 — flex-1로 늘려서 높이 통일, 내용은 중앙 정렬 */}
            <p
              className="font-bold leading-tight break-keep flex-1 flex flex-col items-center justify-center"
              style={{ fontSize: "clamp(0.55rem,1.2vw,1rem)" }}
            >
              {(() => {
                const match = step.title.match(/^(\([^)]+\))(.+)$/);
                if (match) {
                  return (
                    <>
                      <span className="block text-green-500">{match[1]}</span>
                      <span>{match[2].trim()}</span>
                    </>
                  );
                }
                return step.title;
              })()}
            </p>
            {/* desc — 항상 하단에 고정 */}
            <p
              className="text-gray-500 break-keep mt-2 flex-shrink-0"
              style={{ fontSize: "clamp(0.45rem,1vw,0.9rem)" }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="txt-notice mt-3">
        ※ 신청 시기와 아이템 상황에 따라 전문가 멘토링은 생략할 수 있음
      </p>
    </div>
  );
}
