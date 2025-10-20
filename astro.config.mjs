// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'نظم الوسائط المتعددة',
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'root',
			locales: {
				root: {
				label: 'العربية',	
				lang: 'ar',
				dir: 'rtl',
				},
			},
			logo: {
                light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
            },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/withastro' },
				{ icon: 'discord', label: 'Discord', href: 'https://astro.build/chat' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/avobuilds' }
			],
			sidebar: [
				{ label: 'الصفحة الرئيسية', link: '/' },
				{
					label: 'مقدمة في نظم الوسائط المتعددة',
					items: [
						{ label: 'مقدمة عامة', slug: 'multimedia-intro/intro-multimedia' },
					]
				},
				{
					label: 'الفيديو الرقمي',
					items: [
						{ label: 'مقدمة في الفيديو الرقمي', slug: 'digital-video/0-intro-digital-video' },
						{ label: 'مركبات الفيديو', slug: 'digital-video/1-component-video' },
						{ label: 'الفيديو المركب', slug: 'digital-video/2-composite-video' },
						{ label: 'الفيديو المنفصل', slug: 'digital-video/3-svideo' },
						{ label: 'إشارة الفيديو التماثلية - البث التقليدي', slug: 'digital-video/4-analog-broadcast' },
						{ label: 'نظام NTSC', slug: 'digital-video/5-ntsc-system' },
						{ label: 'نظام PAL', slug: 'digital-video/6-pal-system' },
						{ label: 'نظام SECAM', slug: 'digital-video/7-secam-system' },
						{ label: 'الفيديو الرقمي', slug: 'digital-video/8-digital-video' },
						{ label: 'تقنيات التقطيع اللوني', slug: 'digital-video/9-chroma-subsampling' },
						{ label: 'معيار CCIR 601', slug: 'digital-video/10-ccir601-standard' },
					],	
				},
			],
		}),
	],
});
