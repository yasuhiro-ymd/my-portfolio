import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ヒトの動作と脳活動の双方向予測モデルの開発',
    description: '運動中の脳活動をfMRIを用いて計測し、行っている運動から脳活動を予測するモデル（エンコーディングモデル）および脳活動から行っている運動を予測するモデル（デコーディングモデル）を開発しました。',
    image: '/nishimoto_lab.png',
  },
  {
    id: 2,
    title: '教師なし学習を用いたデノイズ技術の開発',
    description: 'CNNとVAEを用いた光学計測信号の教師なしデノイズ技術の開発を行いました。ノイズの特徴を学習することで高精度なデノイズを実現しました。',
    image: '/vae.png',
  },
  {
    id: 3,
    title: '生体計測データから人間の行動やストレスを定量',
    description: '大阪大学の学部学生による自主研究奨励制度を利用し、ウェアラブルデバイスで計測した加速度や心拍データを用いて、機械学習を用いた行動推定と心拍変動解析による人間の行動とストレスの評価を行いました。',
    image: '/beat.png',
  },
  {
    id: 4,
    title: '脳波を用いたワークショップ効果の定量',
    description: 'アートに関連するワークショップの前後で参加者の脳波を計測し、脳波を用いたワークショップ効果の定量に取り組みました。',
    image: '/brain_wave.png',
  },
  {
    id: 5,
    title: 'データベースを参照するチャットボットの開発',
    description: 'AWS Lambda・DynamoDB・API Gateway と LLM API を連携し、AWS 上のデータベースを参照して回答するチャットボットを開発しました。',
    image: '/LLM.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-5">プロジェクト / 研究</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col gap-2 sm:gap-3 pb-3">
              <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-lg overflow-hidden bg-[#1e1e3f] flex items-center justify-center">
                {index < 2 ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-contain p-2 w-full h-full"
                    loading={index === 0 ? "eager" : "lazy"}
                    unoptimized={true}
                  />
                ) : (
                  <div className="text-[#a8a8c8] text-xs text-center px-4">
                    画像（デバッグ用に非表示）
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="text-xs sm:text-sm md:text-base font-medium text-white leading-tight">{project.title}</h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-[#a8a8c8] leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

