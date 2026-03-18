import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-gray-800 mb-1">
              환경창업 아이디어 상시모집 운영사무국
            </h5>
            <p className="text-sm text-gray-600 mb-1">
              인천시 서구 정서진로 410, 창업·벤처 녹색융합클러스터(창업·사업화실)
            </p>
            <p className="text-sm text-gray-600">
              📞 <span className="ml-1">032-540-2145</span>
              &nbsp;&nbsp;
              📧{" "}
              <a
                href="mailto:narani012@keiti.re.kr"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                narani012@keiti.re.kr
              </a>
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="https://keiti-ecostart-up.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logo_footer_1.png"
                alt="KEITI 푸터 로고"
                width={120}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
