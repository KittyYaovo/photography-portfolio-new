import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Youtube, Tv } from 'lucide-react';
import myImage from '../assets/images/myimage.jpg';
import video1Poster from '../assets/images/1.png';
import video2Poster from '../assets/images/2.png';
import animationCover from '../assets/images/3.png';
// 导入本地视频
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';
import video5 from '../assets/videos/5.mp4';
import video6 from '../assets/videos/6.mp4';
import video6b from '../assets/videos/6b.mov';
import video8 from '../assets/videos/8.mp4';

// YouTube视频ID
const YOUTUBE_VIDEOS = {
  video1: 'YOUR_VIDEO1_ID',
  video2: 'YOUR_VIDEO2_ID',
  video3: 'YOUR_VIDEO3_ID',
  video4: 'YOUR_VIDEO4_ID',
  video5: 'YOUR_VIDEO5_ID',
  video6: 'YOUR_VIDEO6_ID',
  video6b: 'YOUR_VIDEO6B_ID'
};

// 始终使用本地视频文件
const isProduction = false;

const projects = [
  {
    id: 1,
    title: '腾讯星跃实战营',
    category: 'AIGC / 游戏运营',
    image: myImage,
    description: '负责《修仙时代》游戏项目的 AIGC 宣发，保持游戏原生的 "2.5D水墨" 审美。',
    links: [
      { label: 'B站账号', url: 'https://b23.tv/DdXe09Y', icon: Tv },
      { label: '抖音账号', url: 'https://v.douyin.com/3piZWSdF6iw/', icon: ExternalLink },
    ]
  },
  {
    id: 2,
    title: 'AIGC真人短剧',
    category: 'AIGC / 短剧',
    image: 'https://picsum.photos/seed/shortdrama/800/600',
    description: '跑通从角色构建到图片驱动视频的全流程 AI 真人短剧制作，为 TikTok 交付7集完整短剧。',
    links: [
      { label: 'Bilibili', url: 'https://b23.tv/DdXe09Y', icon: Tv },
      { label: '抖音', url: 'https://v.douyin.com/3piZWSdF6iw/', icon: ExternalLink },
    ]
  },
  {
    id: 3,
    title: 'AIGC动画',
    category: 'AIGC / 动画',
    image: animationCover,
    description: '使用Nano Banana、可灵、即梦等AI工具，探索创作的治愈动画作品',
    links: [
      { label: '查看详情', url: 'https://jimeng.jianying.com/s/hKZe1__esrY/', icon: ExternalLink },
    ]
  },
  {
    id: 4,
    title: '实验短片',
    category: '短片 / 实验',
    image: 'https://picsum.photos/seed/experimental/800/600',
    description: '实验性短片作品，探索影像叙事与视觉表达',
  },
  {
    id: 5,
    title: '情绪短片',
    category: '短片 / 情绪',
    image: 'https://picsum.photos/seed/emotion/800/600',
    description: '聚焦光影，以影像为媒介，捕捉和表达内心情绪与情感流动的短片作品',
  },
  {
    id: 6,
    title: '采访与纪录片',
    category: '采访/纪录片',
    image: 'https://picsum.photos/seed/documentary/800/600',
    description: '真实记录人物故事与社会现象，用镜头呈现生活的多元面貌。',
  },
];

export const Portfolio = () => {
  const [currentVideo, setCurrentVideo] = useState<number>(1);
  const [currentVideo4, setCurrentVideo4] = useState<number>(3);
  const [currentVideo6, setCurrentVideo6] = useState<number>(6);
  const video5Ref = React.useRef<HTMLVideoElement>(null);
  
  const handleVideoChange = (videoNumber: number) => {
    setCurrentVideo(videoNumber);
  };
  
  const handleVideo4Change = (videoNumber: number) => {
    setCurrentVideo4(videoNumber);
  };
  
  const handleVideo6Change = (videoNumber: number) => {
    setCurrentVideo6(videoNumber);
  };
  
  const handlePlayVideo5 = () => {
    video5Ref.current?.play();
  };
  
  return (
    <section id="portfolio" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-6">
          我的<span className="bg-neo-blue text-white neo-border px-4 inline-block transform -rotate-1 transition-all duration-300 hover:bg-neo-pink hover:scale-105 hover:rotate-0 hover:shadow-lg">作品</span>
        </h2>
        <p className="text-xl font-bold opacity-60">Take a look at my cinematography portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neo-card group p-0 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden border-b-4 border-black">
              {project.id === 2 ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {isProduction ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentVideo === 1 ? YOUTUBE_VIDEOS.video1 : currentVideo === 2 ? YOUTUBE_VIDEOS.video2 : YOUTUBE_VIDEOS.video3}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={currentVideo === 1 ? video1 : currentVideo === 2 ? video2 : video8} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                      controls
                    />
                  )}
                </div>
              ) : project.id === 4 ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {isProduction ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentVideo4 === 3 ? YOUTUBE_VIDEOS.video3 : YOUTUBE_VIDEOS.video4}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={currentVideo4 === 3 ? video3 : video4} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                      controls
                    />
                  )}
                </div>
              ) : project.id === 5 ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {isProduction ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS.video5}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video 
                      ref={video5Ref}
                      src={video5} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                      controls
                    />
                  )}
                </div>
              ) : project.id === 6 ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {isProduction ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentVideo6 === 6 ? YOUTUBE_VIDEOS.video6 : YOUTUBE_VIDEOS.video6b}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video 
                      src={currentVideo6 === 6 ? video6 : video6b} 
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                      controls
                    />
                  )}
                </div>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
            
            <div className="p-8 bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-neo-pink mb-1">{project.category}</p>
                  <h3 className="text-3xl font-black uppercase">{project.title}</h3>
                </div>
                <div className="w-12 h-12 neo-border bg-neo-yellow flex items-center justify-center font-black">
                  0{project.id}
                </div>
              </div>
              
              <p className="font-bold text-slate-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.id === 2 ? (
                  <>
                    <button 
                      onClick={() => handleVideoChange(1)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo === 1 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      《石破天惊》
                    </button>
                    <button 
                      onClick={() => handleVideoChange(2)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo === 2 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      《宝宝与英雄狗》
                    </button>
                    <button 
                      onClick={() => handleVideoChange(3)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo === 3 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      拥抱怪物
                    </button>
                  </>
                ) : project.id === 4 ? (
                  <>
                    <button 
                      onClick={() => handleVideo4Change(3)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo4 === 3 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      《第二选择》
                    </button>
                    <button 
                      onClick={() => handleVideo4Change(4)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo4 === 4 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      《我们共享的不存在的海岸》
                    </button>
                  </>
                ) : project.id === 5 ? (
                  <button 
                    onClick={handlePlayVideo5}
                    className="neo-button py-2 px-4 text-xs bg-neo-black text-white interactive"
                  >
                    查看详情
                  </button>
                ) : project.id === 6 ? (
                  <>
                    <button 
                      onClick={() => handleVideo6Change(6)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo6 === 6 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      采访
                    </button>
                    <button 
                      onClick={() => handleVideo6Change(7)}
                      className={`neo-button py-2 px-4 text-xs flex items-center gap-2 ${currentVideo6 === 7 ? 'bg-neo-yellow text-black' : 'bg-neo-black text-white'}`}
                    >
                      纪录片
                    </button>
                  </>
                ) : project.links ? (
                  project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-button py-2 px-4 text-xs flex items-center gap-2 bg-neo-black text-white"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))
                ) : (
                  <button className="neo-button py-2 px-4 text-xs bg-neo-black text-white">
                    查看详情
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
