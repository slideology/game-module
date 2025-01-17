'use client';

import Link from 'next/link';
import { Gamepad2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold">游戏门户</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              提供最好玩的在线游戏体验
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 游戏门户. 保留所有权利.
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              快速链接
            </h3>
            <ul className="space-y-3">
              {['热门游戏', '最新游戏', '游戏分类', '关于我们'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 游戏分类 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              游戏分类
            </h3>
            <ul className="space-y-3">
              {['动作冒险', '休闲益智', '竞速', '策略', '射击'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              联系我们
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                contact@gameportal.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                400-123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                北京市朝阳区xxx大厦
              </li>
            </ul>
          </div>
        </div>

        {/* 游戏统计 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '游戏总数', value: '1000+' },
              { label: '注册用户', value: '100万+' },
              { label: '每日游戏次数', value: '500万+' },
              { label: '好评率', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-pink-500">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
