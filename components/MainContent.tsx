"use client";

import ProcessSteps from "./ProcessSteps";
import {
  IconLeaf,
  IconTarget,
  IconLightbulb,
  IconCalendar,
  IconClipboard,
  IconFileText,
  IconArrowsCycle,
  IconSettings,
  IconPhone,
} from "./Icons";

const mentoring = [
  { field: "1. 자금조달", content: "IR, 정부지원사업 등", mentor: "투자자, 컨설턴트, 기관관계자 등" },
  { field: "2. 국내 마케팅", content: "네이밍, 상표출원, 홍보 등", mentor: "홍보 전문가 등" },
  { field: "3. 특허, 인증 등", content: "특허 출원, 인증 등", mentor: "변리사, 기술지도사 등" },
  { field: "4. 기술혁신관리 (재료, 화학, 환경 등)", content: "품질시험방법, 소재선택 등", mentor: "교수, 기술지도사, 선배창업가 등" },
  { field: "5. 사업추진전략", content: "아이디어 구체화 등", mentor: "선배창업가, 컨설턴트 등" },
  { field: "6. 기타", content: "사업추진에 필요한 사항", mentor: "수요를 고려하여 선택" },
];

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h5 className="flex items-center font-bold text-lg text-gray-900 mb-4 pb-3 border-b border-gray-100">
        {icon}
        {title}
      </h5>
      {children}
    </div>
  );
}

function downloadFile(filePath: string, fileName: string) {
  fetch(filePath)
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(() => {
      const a = document.createElement("a");
      a.href = filePath;
      a.download = fileName;
      a.click();
    });
}

export default function MainContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* 공모요강 타이틀 */}
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
        공모요강
      </h2>

      <div className="grid grid-cols-1 gap-4">

        {/* 목적 */}
        <Card icon={<IconLeaf />} title="목적">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              환경창업 지원사업 모집공고 기간<sup className="text-gray-400">*</sup> 외 발생하는
              창의적인 아이디어 발굴 및 지원으로 녹색산업 스타기업 육성 확대
              <p className="txt-notice ml-4 mt-1">
                *모집기간 : 에코스타트업(1~2월) / 2026 기후에너지환경창업대전(4월)
              </p>
            </li>
            <li>
            녹색산업 분야 예비창업자 및 업력 7년 이내 창업기업을 대상으로 환경창업 지원사업 정보 및 맞춤형
              멘토링을 제공하여 창업 역량 제고
            </li>
          </ul>
        </Card>

        {/* 지원대상 */}
        <Card icon={<IconTarget />} title="지원대상">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              녹색산업분야<sup className="text-gray-400">*</sup> 예비창업자 및 업력 7년 이내 기업
              <p className="txt-notice ml-4 mt-1">
                * 녹색산업분야 : 「환경기술 및 환경산업 지원법」 제2조제3호에 따른 환경산업 또는
                「녹색융합클러스터의 조성 및 육성에 관한 법률」 제2조에 따른 녹색산업(첨부 참조)
              </p>
            </li>
          </ul>
        </Card>

        {/* 지원내용 */}
        <Card icon={<IconLightbulb />} title="지원내용">
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>환경창업 지원사업 안내 및 맞춤형 전문가 멘토링</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 w-1/3">멘토링 분야</th>
                  <th className="border border-gray-300 px-3 py-2 w-1/3">주요 내용</th>
                  <th className="border border-gray-300 px-3 py-2 w-1/3">멘토 위원</th>
                </tr>
              </thead>
              <tbody>
                {mentoring.map((row) => (
                  <tr key={row.field} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 text-left font-semibold">{row.field}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.content}</td>
                    <td className="border border-gray-300 px-3 py-2">{row.mentor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="txt-notice mt-2">※ 맞춤형 전문가 멘토링은 예산 상황에 따라 조기 마감 가능</p>
        </Card>

        {/* 신청기간 + 신청방법 좌우 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card icon={<IconCalendar />} title="신청기간">
            <ul className="list-disc list-inside text-gray-700">
              <li>연중 상시</li>
            </ul>
          </Card>

          <Card icon={<IconClipboard />} title="신청방법">
            <ul className="list-disc list-inside text-gray-700">
              <li>
                구글폼을 통한 온라인 접수 (
                <a href="https://link24.kr/GP3VHk8" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">
                  접수 바로가기
                </a>
                )
              </li>
            </ul>
          </Card>
        </div>

        {/* 제출서류 */}
        <Card icon={<IconFileText />} title="제출서류">
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
            <li>① 환경창업 멘토링 신청서(별첨1), ② 사업계획서 또는 사업소개자료(별첨2)</li>
            <li>희망 시, 창업지원사업 신청자격 증빙서류 제출 및 자격검토</li>
          </ul>
          <p className="txt-notice">※ 신청서는 첨부된 양식(별첨1)을 사용하여야 하며, 임의 양식으로 제출 시 지원대상에서 제외 가능</p>
          <p className="txt-notice" style={{ marginBottom: "1.2rem" }}>※ 신청자격 증빙서류는 멘토링 대상자와 자격검토 희망자에 한해 별도 제출</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => downloadFile("/files/(붙임)_환경창업_아이디어_상시_모집_안내.hwp", "(붙임)_환경창업_아이디어_상시_모집_안내.hwp")}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors"
            >
              공고문 다운로드
            </button>
            <button
              onClick={() => downloadFile("/files/(별첨1)_환경창업_멘토링_신청서.hwp", "(별첨1)_환경창업_멘토링_신청서.hwp")}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors"
            >
              신청서 다운로드
            </button>
            <button
              onClick={() => downloadFile("/files/(별첨2)_환경창업 아이디어 상시모집_사업계획서(신청자명).hwp", "(별첨2)_환경창업 아이디어 상시모집_사업계획서(신청자명).hwp")}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow transition-colors"
            >
              사업계획서 양식 다운로드
            </button>
          </div>
        </Card>

        {/* 운영절차 */}
        <Card icon={<IconArrowsCycle />} title="운영절차">
          <ProcessSteps />
        </Card>

        {/* 운영방안 */}
        <Card icon={<IconSettings />} title="운영방안">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>지원기준</strong> 제출된 멘토링 신청서와 사업계획서(사업소개자료)의 내용
              충실도 및 환경창업 지원사업 수혜여부에 따라 지원
              <p className="txt-notice ml-4 mt-1">※ 신청자격 증빙서류는 멘토링 대상자와 자격검토 희망자에 한해 별도 제출</p>
            </li>
            <li>
              <strong>후속지원</strong> 멘토링 일지와 멘토 위원 의견을 참고하여 당해연도 또는
              차년도 환경창업 후속 지원사업<sup className="text-gray-400">*</sup>에 적극 연계
              <p className="txt-notice ml-4 mt-1">* 후속 지원사업 : 환경창업대전, 에코스타트업, 사업화 지원, 입주기업, 인증 등</p>
            </li>
          </ul>
        </Card>

        {/* 문의사항 */}
        <Card icon={<IconPhone />} title="문의 사항">
          <ul className="list-disc list-inside text-gray-700 mb-3">
            <li>&#39;환경창업 아이디어 상시 모집&#39; 운영사무국</li>
          </ul>
          <p className="text-gray-700 ml-4">전화: <span className="ml-1 font-medium">032-540-2145</span></p>
          <p className="text-gray-700 ml-4">이메일: <span className="ml-1 font-medium">narani012@keiti.re.kr</span></p>
        </Card>

      </div>

      {/* 플로팅 버튼 여백 */}
      <div className="h-20" />
    </div>
  );
}
