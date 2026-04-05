import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, Github, MessageCircle, User, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';
// 视频文件路径 - 使用条件导入避免构建错误
let lightingVideo;

// 只在开发环境尝试导入本地视频
if (process.env.NODE_ENV === 'development') {
  try {
    // 动态导入视频文件
    lightingVideo = '../assets/videos/7.mp4';
  } catch (error) {
    console.log('Lighting video file not found, using placeholder');
  }
}
import design1 from '../assets/images/design1.png';
import design2 from '../assets/images/design2.png';
import design3 from '../assets/images/design3.png';
import design4 from '../assets/images/design4.png';
import design5 from '../assets/images/design5.png';
import design6 from '../assets/images/design6.png';

export const About = () => {
  const [showLightingVideo, setShowLightingVideo] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(false);
  const [showDesignInfo, setShowDesignInfo] = useState(false);
  const [currentDesignImage, setCurrentDesignImage] = useState(0);
  
  const designImages = [design1, design2, design3, design4, design5, design6];
  
  return (
    <section id="about" className="py-32 px-4 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-32">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-8">
            关于<span className="bg-neo-pink text-white neo-border px-4 inline-block transform -rotate-2 transition-all duration-300 hover:bg-neo-blue hover:scale-110 hover:rotate-0 hover:shadow-lg">我</span>
          </h2>
          <div className="neo-card bg-neo-yellow mb-8">
            <h3 className="text-2xl font-black mb-4 uppercase">使用说明书 v1.0</h3>
            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-neo-black text-white flex items-center justify-center text-xs shrink-0 mt-1">1</div>
                <span>驱动内核： 兼容电影学院派审美与大模型 Prompt 逻辑，支持将视听逻辑运用于AI制作。</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-neo-black text-white flex items-center justify-center text-xs shrink-0 mt-1">2</div>
                <span>极限性能：具备多线程统筹能力 ，可以并发处理多个任务；支持高频快节奏产出。</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-neo-black text-white flex items-center justify-center text-xs shrink-0 mt-1">3</div>
                <span>故障排除：默认开启"艺术创作"模式，偶尔会触发Bug 。系统运行缓慢时，可以尝试投喂巧克力激发潜能。</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="space-y-12">
          <div className="neo-card bg-white">
            <p className="text-xl font-bold leading-relaxed mb-6">
              我是姚沁彤，一名将电影学院派审美注入 AI 算法的视觉探索者。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="neo-border p-4 bg-neo-blue/10">
                <p className="text-4xl font-black mb-1">3+</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">创作年份</p>
              </div>
              <div className="neo-border p-4 bg-neo-green/10">
                <p className="text-4xl font-black mb-1">10w+</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">流量与社群覆盖</p>
              </div>
            </div>
          </div>

          <div className="neo-card bg-neo-blue text-white">
            <h4 className="text-xl font-black mb-4 uppercase">我的技能栈</h4>
            <div className="flex flex-wrap gap-3">
              {['导演', '摄像', '剪辑', '调色', '灯光', 'AIGC', '游戏', '设计'].map(skill => (
                <span 
                  key={skill} 
                  className={`neo-border px-4 py-1 font-black text-sm ${
                    skill === '灯光' || skill === '游戏' || skill === '设计'
                      ? 'bg-neo-pink text-white cursor-pointer hover:bg-neo-yellow hover:text-black transition-all interactive'
                      : 'bg-white text-neo-black'
                  }`}
                  onClick={() => {
                    if (skill === '灯光') setShowLightingVideo(true);
                    if (skill === '游戏') setShowGameInfo(true);
                    if (skill === '设计') setShowDesignInfo(true);
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="neo-border p-4 bg-white neo-shadow neo-shadow-hover interactive">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="neo-border p-4 bg-white neo-shadow neo-shadow-hover interactive">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="neo-border p-4 bg-white neo-shadow neo-shadow-hover interactive">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* 灯光视频模态框 */}
      {showLightingVideo && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowLightingVideo(false)}
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full"
               onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-neo-black text-white p-2 rounded-full z-10"
              onClick={() => setShowLightingVideo(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="neo-border bg-white p-8">
              <div className="text-4xl font-black mb-6 text-center">MA3D舞台灯光制作</div>
              <div className="aspect-video bg-black flex items-center justify-center">
                <video 
                  src={lightingVideo} 
                  className="max-w-full max-h-full object-contain"
                  controls
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* 游戏信息模态框 */}
      {showGameInfo && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowGameInfo(false)}
        >
          <div className="relative max-w-2xl max-h-[80vh] w-full overflow-y-auto"
               onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-neo-black text-white p-2 rounded-full z-10"
              onClick={() => setShowGameInfo(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="neo-border bg-white p-8">
              <div className="text-4xl font-black mb-6 text-center">游戏经历</div>
              <div className="space-y-4 font-bold">
                <p>游戏涉猎广泛，近期常玩：</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-neo-pink font-black">•</span>
                    <span>非对称性竞技：第五人格，求生阵营巅峰七阶，多个角色认知分达到过全服前500，充值金额1w+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neo-pink font-black">•</span>
                    <span>FPS：无畏契约、三角洲游戏时长均有600+小时；无畏契约段位铂金二</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neo-pink font-black">•</span>
                    <span>大逃杀：永劫无间、刺激战场；永劫无间三排无双修罗</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neo-pink font-black">•</span>
                    <span>RPG：博德之门、逆水寒</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neo-pink font-black">•</span>
                    <span>MOBA：英雄联盟</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* 设计信息模态框 */}
      {showDesignInfo && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDesignInfo(false)}
        >
          <div className="relative max-w-4xl max-h-[80vh] w-full"
               onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-neo-black text-white p-2 rounded-full z-10"
              onClick={() => setShowDesignInfo(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="neo-border bg-white p-8">
              <div className="text-4xl font-black mb-6 text-center">海报制作与物料设计</div>
              
              {/* 图片轮播 */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={designImages[currentDesignImage]} 
                    alt={`设计作品 ${currentDesignImage + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* 轮播控制按钮 */}
                <div className="flex justify-between items-center">
                  <button 
                    className="neo-button bg-neo-black text-white flex items-center gap-2"
                    onClick={() => setCurrentDesignImage((prev) => (prev === 0 ? designImages.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="w-4 h-4" /> 上一张
                  </button>
                  <div className="flex gap-2">
                    {designImages.map((_, index) => (
                      <button 
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentDesignImage ? 'bg-neo-yellow' : 'bg-gray-300'}`}
                        onClick={() => setCurrentDesignImage(index)}
                      />
                    ))}
                  </div>
                  <button 
                    className="neo-button bg-neo-black text-white flex items-center gap-2"
                    onClick={() => setCurrentDesignImage((prev) => (prev === designImages.length - 1 ? 0 : prev + 1))}
                  >
                    下一张 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
