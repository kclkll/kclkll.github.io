export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <div className="w-64 h-80 md:w-80 md:h-96 flex-shrink-0">
            <img
              src="/photo.jpg"
              alt="Xiong Kaiyi"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hi there, I&apos;m Xiong Kaiyi.
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              I&apos;m an undergraduate student in SJTU, major in ECE.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              I&apos;m interested in Embodied AI, Robotic Manipulation.
            </p>

            {/* News */}
            <div className="space-y-2 text-left">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">News</p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  [2026.4] Joined Machine Vision and Intelligence Group{' '}
                  <a href="https://www.mvig.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    (MVIG)
                  </a>
                </li>
                <li>
                    [2025.8] Interned at{' '}
                  <a href="https://www.eitech.edu.cn/hai-lab" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    EIT
                  </a>
                    {' '}HAI Lab
                </li>
                <li>
                  [2025.4] Started{' '}
                  <a href="https://junzheng.sjtu.edu.cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    13th Junzheng Program
                  </a>
                </li>
                <li>
                  [2024.2] Joined{' '}
                  <a href="https://sites.gc.sjtu.edu.cn/qulab/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                     QU Lab
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* GazeVLA */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/gazevla.png"
              alt="GazeVLA"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                GazeVLA: Learning Human Intention for Robotic Manipulation
              </h2>
              <p className="text-gray-600">
                Chengyang Li, <strong>Kaiyi Xiong</strong>, Yuan Xu, Lei Qian, Yizhou Wang, Wentao Zhu
              </p>
            </div>
          </div>

          {/* QU Lab Research */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/qu.png"
              alt="Population-Scale Research"
              className="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Population-Scale Advancing Interface Modeling Reveals How Bacterial Swarms Encode Future Spatial Architecture
              </h2>
              <p className="text-gray-600">
                Shengyou Duan, Zhaoyang Wang, <strong>Kaiyi Xiong</strong>, Jin Zhu, Pengxi Gu, Weijie Chen, Hongyi Xin, Zijie Qu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
