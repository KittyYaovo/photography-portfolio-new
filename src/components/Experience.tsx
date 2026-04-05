import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

const experiences = [
  {
    year: '影像制作能力',
    title: '视频创作剪辑 & AIGC运用',
    company: '',
    description: '查看详情',
    color: 'bg-neo-yellow'
  },
  {
    year: '运营与统筹',
    title: '账号运营 & 赛事管理',
    company: '',
    description: '查看详情',
    color: 'bg-neo-pink'
  },
  {
    year: '影像实拍能力',
    title: '现场直转播 & 多类型短片创作',
    company: '',
    description: '查看详情',
    color: 'bg-neo-blue'
  }
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-32 px-4 max-w-7xl mx-auto relative">
      <h2 className="text-6xl md:text-8xl font-black uppercase mb-24 text-center">
        我的<span className="bg-neo-green neo-border px-4 inline-block transform rotate-2 transition-all duration-300 hover:bg-neo-yellow hover:scale-105 hover:rotate-0 hover:shadow-lg">经历</span>
      </h2>
      
      <div className="relative">
        {/* Vertical Dashed Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-neo-black -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-16 md:space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] z-10"
              >
                <div className={`neo-card ${exp.color} transition-all duration-300`} onMouseEnter={() => setHoveredDot(index)} onMouseLeave={() => setHoveredDot(null)}>
                  <div className="text-2xl font-black neo-border bg-white px-4 py-1 inline-block mb-4">
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-2">{exp.title}</h3>
                  {exp.company && <p className="text-sm font-black uppercase mb-2 opacity-60 tracking-widest">{exp.company}</p>}
                  
                  {index === 0 ? (
                    <>
                      {expandedIndex === 0 ? (
                        <div className="space-y-4">
                          <p className="font-bold text-black border-b-2 border-black pb-2">2026.01 | 腾讯星跃实战营 · AIGC在游戏运营中的应用</p>
                          <p className="font-bold text-gray-600">核心模块： 负责《修仙时代》游戏项目的 AIGC 宣发 。</p>
                          <p className="font-bold text-gray-600">高光成就： 保持游戏原生的 "2.5D水墨" 审美，精准控制 Prompt 确保人物与画风的高度一致性。</p>
                          <p className="font-bold text-gray-600">分发表现： 独立产出视频在抖音、B 站、视频号累计获 <AnimatedCounter target={100000} suffix="+" /> 浏览量 。</p>
                          <p className="font-bold text-black border-b-2 border-black pb-2 mt-6">2026.01 - 2026.03 | 南京网眼信息 · AIGC 制作实习生</p>
                          <p className="font-bold text-gray-600">核心模块： 跑通从角色构建到图片驱动视频的全流程 AI 真人短剧制作 。</p>
                          <p className="font-bold text-gray-600">产出量级： 为 TikTok 交付7集完整短剧，独立完成从制作到剪辑的全流程创作 。</p>
                          <p 
                            className="font-bold text-lg opacity-80 mt-6 cursor-pointer hover:underline interactive"
                            onClick={() => handleToggleExpand(0)}
                          >
                            收起详情
                          </p>
                        </div>
                      ) : (
                        <p 
                          className="font-bold text-lg opacity-80 cursor-pointer hover:underline interactive"
                          onClick={() => handleToggleExpand(0)}
                        >
                          查看详情
                        </p>
                      )}
                    </>
                  ) : index === 1 ? (
                    <>
                      {expandedIndex === 1 ? (
                        <div className="space-y-4">
                          <p className="font-bold text-black border-b-2 border-black pb-2">2024.01 - 2025.07 | CIL 第五人格高校邀请赛</p>
                          <p className="font-bold text-gray-600">规模化统筹：担任 32 支战队裁判，负责近 200 名选手的联络、规则监督及赛程保障 。</p>
                          <p className="font-bold text-gray-600">账号运营：协助运营 B 站官方账号，通过赛事内容剪辑与分发，累计获取 <AnimatedCounter target={12000} suffix="" /> 粉丝及 <AnimatedCounter target={29000} suffix="" /> 点赞 。</p>
                          <p className="font-bold text-black border-b-2 border-black pb-2 mt-6">2023 | 校园赛事执行</p>
                          <p className="font-bold text-gray-600">规则制定：作为赛事负责人制定 ZCEL 比赛规则，监督队伍执行，并配合社群进行品牌推广 。</p>
                          <p 
                            className="font-bold text-lg opacity-80 mt-6 cursor-pointer hover:underline interactive"
                            onClick={() => handleToggleExpand(1)}
                          >
                            收起详情
                          </p>
                        </div>
                      ) : (
                        <p 
                          className="font-bold text-lg opacity-80 cursor-pointer hover:underline interactive"
                          onClick={() => handleToggleExpand(1)}
                        >
                          查看详情
                        </p>
                      )}
                    </>
                  ) : index === 2 ? (
                    <>
                      {expandedIndex === 2 ? (
                        <div className="space-y-4">
                          <p className="font-bold text-black border-b-2 border-black pb-2">2023 - 今 | 剧情片与广告片全流程制作</p>
                          <p className="font-bold text-gray-600">多维职能：担任摄像、美术、灯光、后期等核心岗位，完成剧情片、广告片、纪录片等 <AnimatedCounter target={20} suffix="+" /> 部短片创作 。</p>
                          <p className="font-bold text-gray-600">影像底蕴：系统学习影视剪辑、影视摄影及视听语言等课程，具备扎实的学院派实拍功底 。</p>
                          <p className="font-bold text-black border-b-2 border-black pb-2 mt-6">2024-今 | 高清现场转播与执行</p>
                          <p className="font-bold text-gray-600">直面现场：参与学校音乐会、电竞比赛等大型活动转播，担任并掌握摄像与导播、字幕等多个岗位，向全网输出稳定高质量画面。</p>
                          <p className="font-bold text-gray-600">技术执行：熟练操作 DaVinci、MA3D 等专业剪辑调色与灯光软件，完成从前期拍摄到后期执行的闭环 。</p>
                          <p 
                            className="font-bold text-lg opacity-80 mt-6 cursor-pointer hover:underline interactive"
                            onClick={() => handleToggleExpand(2)}
                          >
                            收起详情
                          </p>
                        </div>
                      ) : (
                        <p 
                          className="font-bold text-lg opacity-80 cursor-pointer hover:underline interactive"
                          onClick={() => handleToggleExpand(2)}
                        >
                          查看详情
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="font-bold text-lg opacity-80">{exp.description}</p>
                  )}
                </div>
              </motion.div>

              {/* Timeline Dot with Hover Effects */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 w-8 h-8 ${hoveredDot === 0 ? 'bg-red-500' : 'bg-neo-black'} border-4 border-white rounded-full z-20 hidden md:block transition-all duration-300 hover:scale-110`}
                onMouseEnter={() => setHoveredDot(index)}
                onMouseLeave={() => setHoveredDot(null)}
              >
                {hoveredDot === index && index === 0 && (
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                    REC
                  </div>
                )}
                {hoveredDot === index && index === 1 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                )}
                {hoveredDot === index && index === 2 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="white" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Empty Side for Spacing */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
