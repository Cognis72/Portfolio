// Language translations
const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-roadmap': 'Roadmap',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Hero section
    'hero-title': 'Welcome to Cognis',
    'hero-subtitle': 'Innovative projects and cutting-edge solutions',
    'stat-projects': 'Projects',
    'stat-years': 'Years',
    'stat-clients': 'Clients',
    
    // Projects
    'projects-title': 'Featured Projects',
    'projects-page-title': 'Our Projects',
    'projects-page-subtitle': 'Discover our innovative solutions and cutting-edge developments',
    'all-projects-title': 'All Projects',
    'select-project': 'Select Project:',
    
    // Roadmap
    'roadmap-title': 'Development Roadmap',
    'time-since-launch': 'Time Since Launch',
    'progress-title': 'Current Progress',
    'stat-completion': 'Completion',
    'stat-milestones': 'Milestones',
    'stat-team': 'Team Members',
    'stat-months': 'Months',
    
    // Roadmap phases
    'roadmap-phase1-title': 'Phase 1: Foundation',
    'roadmap-phase1-desc': 'Project initialization, core architecture design, and initial development setup.',
    'roadmap-phase1-item1': 'Core framework development',
    'roadmap-phase1-item2': 'Database architecture',
    'roadmap-phase1-item3': 'Authentication system',
    
    'roadmap-phase2-title': 'Phase 2: Core Features',
    'roadmap-phase2-desc': 'Implementation of core functionalities and user interface development.',
    'roadmap-phase2-item1': 'User dashboard',
    'roadmap-phase2-item2': 'Data visualization',
    'roadmap-phase2-item3': 'API integration',
    
    'roadmap-phase3-title': 'Phase 3: Advanced Features',
    'roadmap-phase3-desc': 'Advanced analytics, machine learning integration, and performance optimization.',
    'roadmap-phase3-item1': 'AI-powered insights',
    'roadmap-phase3-item2': 'Real-time analytics',
    'roadmap-phase3-item3': 'Performance optimization',
    
    'roadmap-phase4-title': 'Phase 4: Expansion',
    'roadmap-phase4-desc': 'Platform expansion, mobile applications, and third-party integrations.',
    'roadmap-phase4-item1': 'Mobile applications',
    'roadmap-phase4-item2': 'Third-party integrations',
    'roadmap-phase4-item3': 'Enterprise features',
    
    'roadmap-phase5-title': 'Phase 5: Global Launch',
    'roadmap-phase5-desc': 'Global deployment, multi-language support, and international partnerships.',
    'roadmap-phase5-item1': 'Global infrastructure',
    'roadmap-phase5-item2': 'Multi-language support',
    'roadmap-phase5-item3': 'Partnership program',
    
    // Contact
    'contact-title': 'Get In Touch',
    'contact-subtitle': 'Ready to start your next project? Let\'s talk!',
    'contact-info-title': 'Contact Information',
    'contact-email-title': 'Email',
    'contact-phone-title': 'Phone',
    'contact-location-title': 'Location',
    'contact-location': 'San Francisco, CA',
    'contact-hours-title': 'Business Hours',
    'contact-hours': 'Mon - Fri: 9:00 AM - 6:00 PM PST',
    'contact-form-title': 'Send us a Message',
    
    // Form
    'form-name': 'Name *',
    'form-email': 'Email *',
    'form-company': 'Company',
    'form-subject': 'Subject *',
    'form-select-subject': 'Select a subject',
    'form-subject-general': 'General Inquiry',
    'form-subject-project': 'Project Collaboration',
    'form-subject-support': 'Technical Support',
    'form-subject-partnership': 'Partnership',
    'form-message': 'Message *',
    'form-submit': 'Send Message',
    
    // FAQ
    'faq-title': 'Frequently Asked Questions',
    'faq-q1': 'What services do you offer?',
    'faq-a1': 'We offer full-stack web development, mobile app development, AI/ML solutions, and cloud infrastructure services.',
    'faq-q2': 'How long does a typical project take?',
    'faq-a2': 'Project timelines vary depending on complexity, but most projects range from 4-16 weeks from conception to deployment.',
    'faq-q3': 'Do you provide ongoing support?',
    'faq-a3': 'Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally.',
    'faq-q4': 'Can you work with existing systems?',
    'faq-a4': 'Absolutely! We specialize in integrating new solutions with existing infrastructure and legacy systems.',
    
    // Footer
    'footer-description': 'Building the future with innovative technology solutions.',
    'footer-links': 'Quick Links',
    'footer-connect': 'Connect',
    'footer-rights': 'All rights reserved.'
  },
  th: {
    // Navigation
    'nav-home': 'หน้าแรก',
    'nav-roadmap': 'แผนการดำเนินงาน',
    'nav-projects': 'โครงการ',
    'nav-contact': 'ติดต่อ',
    
    // Hero section
    'hero-title': 'ยินดีต้อนรับสู่ Cognis',
    'hero-subtitle': 'โครงการนวัตกรรมและโซลูชันล้ำสมัย',
    'stat-projects': 'โครงการ',
    'stat-years': 'ปี',
    'stat-clients': 'ลูกค้า',
    
    // Projects
    'projects-title': 'โครงการเด่น',
    'projects-page-title': 'โครงการของเรา',
    'projects-page-subtitle': 'ค้นพบโซลูชันนวัตกรรมและการพัฒนาล้ำสมัยของเรา',
    'all-projects-title': 'โครงการทั้งหมด',
    'select-project': 'เลือกโครงการ:',
    
    // Roadmap
    'roadmap-title': 'แผนการพัฒนา',
    'time-since-launch': 'เวลาตั้งแต่เปิดตัว',
    'progress-title': 'ความคืบหน้าปัจจุบัน',
    'stat-completion': 'ความสำเร็จ',
    'stat-milestones': 'เป้าหมาย',
    'stat-team': 'สมาชิกทีม',
    'stat-months': 'เดือน',
    
    // Roadmap phases
    'roadmap-phase1-title': 'ระยะที่ 1: พื้นฐาน',
    'roadmap-phase1-desc': 'การเริ่มต้นโครงการ การออกแบบสถาปัตยกรรมหลัก และการตั้งค่าการพัฒนาเบื้องต้น',
    'roadmap-phase1-item1': 'การพัฒนาเฟรมเวิร์กหลัก',
    'roadmap-phase1-item2': 'สถาปัตยกรรมฐานข้อมูล',
    'roadmap-phase1-item3': 'ระบบการยืนยันตัวตน',
    
    'roadmap-phase2-title': 'ระยะที่ 2: ฟีเจอร์หลัก',
    'roadmap-phase2-desc': 'การพัฒนาฟังก์ชันหลักและการพัฒนาส่วนติดต่อผู้ใช้',
    'roadmap-phase2-item1': 'แดชบอร์ดผู้ใช้',
    'roadmap-phase2-item2': 'การแสดงข้อมูลเชิงภาพ',
    'roadmap-phase2-item3': 'การเชื่อมต่อ API',
    
    'roadmap-phase3-title': 'ระยะที่ 3: ฟีเจอร์ขั้นสูง',
    'roadmap-phase3-desc': 'การวิเคราะห์ขั้นสูง การรวมระบบแมชชีนเลิร์นนิง และการปรับปรุงประสิทธิภาพ',
    'roadmap-phase3-item1': 'ข้อมูลเชิงลึกขับเคลื่อนด้วย AI',
    'roadmap-phase3-item2': 'การวิเคราะห์แบบเรียลไทม์',
    'roadmap-phase3-item3': 'การปรับปรุงประสิทธิภาพ',
    
    'roadmap-phase4-title': 'ระยะที่ 4: การขยาย',
    'roadmap-phase4-desc': 'การขยายแพลตฟอร์ม แอปพลิเคชันมือถือ และการเชื่อมต่อบุคคลที่สาม',
    'roadmap-phase4-item1': 'แอปพลิเคชันมือถือ',
    'roadmap-phase4-item2': 'การเชื่อมต่อบุคคลที่สาม',
    'roadmap-phase4-item3': 'ฟีเจอร์องค์กร',
    
    'roadmap-phase5-title': 'ระยะที่ 5: เปิดตัวระดับโลก',
    'roadmap-phase5-desc': 'การติดตั้งระดับโลก การสนับสนุนหลายภาษา และหุ้นส่วนระหว่างประเทศ',
    'roadmap-phase5-item1': 'โครงสร้างพื้นฐานโลก',
    'roadmap-phase5-item2': 'การสนับสนุนหลายภาษา',
    'roadmap-phase5-item3': 'โปรแกรมหุ้นส่วน',
    
    // Contact
    'contact-title': 'ติดต่อเรา',
    'contact-subtitle': 'พร้อมเริ่มโครงการถัดไปของคุณแล้วหรือ? มาคุยกัน!',
    'contact-info-title': 'ข้อมูลการติดต่อ',
    'contact-email-title': 'อีเมล',
    'contact-phone-title': 'โทรศัพท์',
    'contact-location-title': 'ที่ตั้ง',
    'contact-location': 'ซานฟรานซิสโก, แคลิฟอร์เนีย',
    'contact-hours-title': 'เวลาทำการ',
    'contact-hours': 'จันทร์ - ศุกร์: 9:00 น. - 18:00 น. PST',
    'contact-form-title': 'ส่งข้อความหาเรา',
    
    // Form
    'form-name': 'ชื่อ *',
    'form-email': 'อีเมล *',
    'form-company': 'บริษัท',
    'form-subject': 'หัวข้อ *',
    'form-select-subject': 'เลือกหัวข้อ',
    'form-subject-general': 'สอบถามทั่วไป',
    'form-subject-project': 'ความร่วมมือโครงการ',
    'form-subject-support': 'การสนับสนุนทางเทคนิค',
    'form-subject-partnership': 'หุ้นส่วน',
    'form-message': 'ข้อความ *',
    'form-submit': 'ส่งข้อความ',
    
    // FAQ
    'faq-title': 'คำถามที่พบบ่อย',
    'faq-q1': 'คุณให้บริการอะไรบ้าง?',
    'faq-a1': 'เราให้บริการการพัฒนาเว็บแบบเต็มรูปแบบ การพัฒนาแอปมือถือ โซลูชัน AI/ML และบริการโครงสร้างพื้นฐานคลาวด์',
    'faq-q2': 'โครงการทั่วไปใช้เวลานานแค่ไหน?',
    'faq-a2': 'กรอบเวลาโครงการแตกต่างกันไปตามความซับซ้อน แต่โครงการส่วนใหญ่ใช้เวลา 4-16 สัปดาห์ตั้งแต่แนวคิดจนถึงการปรับใช้',
    'faq-q3': 'คุณให้การสนับสนุนอย่างต่อเนื่องหรือไม่?',
    'faq-a3': 'ใช่ เราเสนอแพ็คเกจการบำรุงรักษาและการสนับสนุนที่ครอบคลุมเพื่อให้โซลูชันของคุณยังคงทำงานได้อย่างดีที่สุด',
    'faq-q4': 'คุณสามารถทำงานร่วมกับระบบที่มีอยู่ได้หรือไม่?',
    'faq-a4': 'แน่นอน! เราเชี่ยวชาญในการรวมโซลูชันใหม่เข้ากับโครงสร้างพื้นฐานที่มีอยู่และระบบดั้งเดิม',
    
    // Footer
    'footer-description': 'สร้างอนาคตด้วยโซลูชันเทคโนโลยีนวัตกรรม',
    'footer-links': 'ลิงก์ด่วน',
    'footer-connect': 'เชื่อมต่อ',
    'footer-rights': 'สงวนลิขสิทธิ์'
  }
};

// Project data
const projects = [
  {
    id: 1,
    title: 'Cognis AI Platform',
    description: 'Advanced AI-powered analytics platform for enterprise data insights',
    image: '🤖',
    technologies: ['Python', 'TensorFlow', 'React', 'Docker'],
    liveLink: 'https://ai.cognis.dev',
    readme: {
      en: {
        title: 'Cognis AI Platform',
        description: 'An advanced AI-powered analytics platform designed to provide enterprise-level data insights and machine learning capabilities.',
        features: [
          'Real-time data processing and analysis',
          'Advanced machine learning algorithms',
          'Interactive dashboards and visualizations',
          'API-first architecture for easy integration',
          'Scalable cloud infrastructure'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
        architecture: 'The platform follows a microservices architecture with containerized deployment, ensuring scalability and maintainability.',
        installation: 'Installation requires Docker and Docker Compose. Full documentation available in the project repository.',
        usage: 'The platform provides RESTful APIs for data ingestion, model training, and prediction serving.'
      },
      th: {
        title: 'แพลตฟอร์ม Cognis AI',
        description: 'แพลตฟอร์มการวิเคราะห์ขับเคลื่อนด้วย AI ขั้นสูงที่ออกแบบมาเพื่อให้ข้อมูลเชิงลึกระดับองค์กรและความสามารถด้านแมชชีนเลิร์นนิง',
        features: [
          'การประมวลผลและวิเคราะห์ข้อมูลแบบเรียลไทม์',
          'อัลกอริทึมแมชชีนเลิร์นนิงขั้นสูง',
          'แดชบอร์ดและการแสดงภาพแบบโต้ตอบ',
          'สถาปัตยกรรม API-first สำหรับการผสานรวมที่ง่าย',
          'โครงสร้างพื้นฐานคลาวด์ที่ปรับขนาดได้'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
        architecture: 'แพลตฟอร์มเป็นไปตามสถาปัตยกรรม microservices พร้อมการปรับใช้แบบคอนเทนเนอร์ เพื่อให้มั่นใจในการปรับขนาดและการบำรุงรักษา',
        installation: 'การติดตั้งต้องใช้ Docker และ Docker Compose เอกสารครบถ้วนมีในที่เก็บโครงการ',
        usage: 'แพลตฟอร์มให้ RESTful APIs สำหรับการนำเข้าข้อมูล การฝึกอบรมโมเดล และการให้บริการการทำนาย'
      }
    }
  },
  {
    id: 2,
    title: 'DataFlow Analytics',
    description: 'Real-time data streaming and visualization dashboard',
    image: '📊',
    technologies: ['JavaScript', 'D3.js', 'Node.js', 'MongoDB'],
    liveLink: 'https://dataflow.cognis.dev',
    readme: {
      en: {
        title: 'DataFlow Analytics',
        description: 'A comprehensive real-time data streaming and visualization platform that enables organizations to monitor, analyze, and act on their data in real-time.',
        features: [
          'Real-time data streaming from multiple sources',
          'Interactive and customizable dashboards',
          'Advanced data filtering and aggregation',
          'Alert and notification system',
          'Export capabilities for reports and data'
        ],
        technologies: ['JavaScript', 'D3.js', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebSockets'],
        architecture: 'Event-driven architecture with real-time data processing pipelines and responsive web interface.',
        installation: 'Requires Node.js 16+ and MongoDB. Installation guide available in README.',
        usage: 'Connect your data sources via API or direct database connections to start streaming data visualizations.'
      },
      th: {
        title: 'DataFlow Analytics',
        description: 'แพลตฟอร์มการสตรีมข้อมูลและการแสดงภาพแบบเรียลไทม์ที่ครอบคลุม ที่ช่วยให้องค์กรสามารถตรวจสอบ วิเคราะห์ และดำเนินการกับข้อมูลแบบเรียลไทม์',
        features: [
          'การสตรีมข้อมูลแบบเรียลไทม์จากหลายแหล่ง',
          'แดชบอร์ดแบบโต้ตอบและปรับแต่งได้',
          'การกรองและการรวมข้อมูลขั้นสูง',
          'ระบบการแจ้งเตือนและการแจ้งเตือน',
          'ความสามารถในการส่งออกสำหรับรายงานและข้อมูล'
        ],
        technologies: ['JavaScript', 'D3.js', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebSockets'],
        architecture: 'สถาปัตยกรรมขับเคลื่อนด้วยเหตุการณ์พร้อมไปป์ไลน์การประมวลผลข้อมูลแบบเรียลไทม์และส่วนติดต่อเว็บที่ตอบสนอง',
        installation: 'ต้องใช้ Node.js 16+ และ MongoDB คู่มือการติดตั้งมีใน README',
        usage: 'เชื่อมต่อแหล่งข้อมูลของคุณผ่าน API หรือการเชื่อมต่อฐานข้อมูลโดยตรงเพื่อเริ่มการแสดงภาพข้อมูลสตรีม'
      }
    }
  },
  {
    id: 3,
    title: 'CloudSync Pro',
    description: 'Seamless cloud storage synchronization across multiple platforms',
    image: '☁️',
    technologies: ['Go', 'AWS', 'gRPC', 'Redis'],
    liveLink: 'https://cloudsync.cognis.dev',
    readme: {
      en: {
        title: 'CloudSync Pro',
        description: 'A powerful cloud storage synchronization service that enables seamless file sync across multiple cloud platforms and devices.',
        features: [
          'Multi-platform cloud storage sync',
          'Real-time file synchronization',
          'Conflict resolution and version control',
          'Bandwidth optimization and compression',
          'Enterprise-grade security and encryption'
        ],
        technologies: ['Go', 'gRPC', 'AWS S3', 'Google Cloud Storage', 'Azure Blob', 'Redis', 'PostgreSQL', 'Docker'],
        architecture: 'Microservices architecture with event-driven synchronization and distributed file system management.',
        installation: 'Requires Go 1.19+ and Docker. Cloud provider credentials needed for operation.',
        usage: 'Configure cloud storage providers and start syncing files across platforms with automatic conflict resolution.'
      },
      th: {
        title: 'CloudSync Pro',
        description: 'บริการซิงโครไนเซชันพื้นที่จัดเก็บคลาวด์ที่ทรงพลัง ที่ช่วยให้การซิงค์ไฟล์ข้ามหลายแพลตฟอร์มคลาวด์และอุปกรณ์เป็นไปอย่างราบรื่น',
        features: [
          'การซิงค์พื้นที่จัดเก็บคลาวด์หลายแพลตฟอร์ม',
          'การซิงโครไนเซชันไฟล์แบบเรียลไทม์',
          'การแก้ไขความขัดแย้งและการควบคุมเวอร์ชัน',
          'การปรับปรุงแบนด์วิดธ์และการบีบอัด',
          'ความปลอดภัยระดับองค์กรและการเข้ารหัส'
        ],
        technologies: ['Go', 'gRPC', 'AWS S3', 'Google Cloud Storage', 'Azure Blob', 'Redis', 'PostgreSQL', 'Docker'],
        architecture: 'สถาปัตยกรรม Microservices พร้อมการซิงโครไนเซชันขับเคลื่อนด้วยเหตุการณ์และการจัดการระบบไฟล์แบบกระจาย',
        installation: 'ต้องใช้ Go 1.19+ และ Docker ต้องการข้อมูลประจำตัวผู้ให้บริการคลาวด์สำหรับการดำเนินงาน',
        usage: 'กำหนดค่าผู้ให้บริการพื้นที่จัดเก็บคลาวด์และเริ่มซิงค์ไฟล์ข้ามแพลตฟอร์มพร้อมการแก้ไขความขัดแย้งอัตโนมัติ'
      }
    }
  },
  {
    id: 4,
    title: 'SmartDash',
    description: 'Intelligent dashboard builder with AI-powered insights',
    image: '🎯',
    technologies: ['TypeScript', 'Vue.js', 'Python', 'FastAPI'],
    liveLink: 'https://smartdash.cognis.dev',
    readme: {
      en: {
        title: 'SmartDash',
        description: 'An intelligent dashboard builder that uses AI to automatically generate insights and visualizations from your data.',
        features: [
          'Drag-and-drop dashboard builder',
          'AI-powered automatic insights generation',
          'Smart data visualization recommendations',
          'Real-time collaboration features',
          'Custom widget development framework'
        ],
        technologies: ['TypeScript', 'Vue.js 3', 'Composition API', 'Python', 'FastAPI', 'SQLAlchemy', 'Pandas', 'scikit-learn'],
        architecture: 'Modern frontend with Vue.js 3 and TypeScript, Python backend with FastAPI for AI processing.',
        installation: 'Requires Node.js 16+ and Python 3.9+. Installation scripts provided for development setup.',
        usage: 'Connect your data sources and let AI automatically suggest the best visualizations and insights for your data.'
      },
      th: {
        title: 'SmartDash',
        description: 'ตัวสร้างแดชบอร์ดอัจฉริยะที่ใช้ AI เพื่อสร้างข้อมูลเชิงลึกและการแสดงภาพจากข้อมูลของคุณโดยอัตโนมัติ',
        features: [
          'ตัวสร้างแดชบอร์ดแบบลากและวาง',
          'การสร้างข้อมูลเชิงลึกอัตโนมัติขับเคลื่อนด้วย AI',
          'คำแนะนำการแสดงภาพข้อมูลอัจฉริยะ',
          'ฟีเจอร์การทำงานร่วมกันแบบเรียลไทม์',
          'กรอบการพัฒนาวิดเจ็ตแบบกำหนดเอง'
        ],
        technologies: ['TypeScript', 'Vue.js 3', 'Composition API', 'Python', 'FastAPI', 'SQLAlchemy', 'Pandas', 'scikit-learn'],
        architecture: 'ส่วนหน้าทันสมัยด้วย Vue.js 3 และ TypeScript, แบ็กเอนด์ Python ด้วย FastAPI สำหรับการประมวลผล AI',
        installation: 'ต้องใช้ Node.js 16+ และ Python 3.9+ สคริปต์การติดตั้งมีให้สำหรับการตั้งค่าการพัฒนา',
        usage: 'เชื่อมต่อแหล่งข้อมูลของคุณและปล่อยให้ AI แนะนำการแสดงภาพและข้อมูลเชิงลึกที่ดีที่สุดสำหรับข้อมูลของคุณโดยอัตโนมัติ'
      }
    }
  }
];

// Global state
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let launchDate = new Date('2024-01-15T00:00:00Z'); // Project launch date

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeLanguage();
  initializeNavigation();
  initializePageSpecificContent();
  startLaunchTimer();
});

// Theme management
function initializeTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeToggle();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeToggle();
}

function updateThemeToggle() {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  }
}

// Language management
function initializeLanguage() {
  updateLanguageToggle();
  updatePageLanguage();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
  localStorage.setItem('language', currentLanguage);
  updateLanguageToggle();
  updatePageLanguage();
  updatePageSpecificContent();
}

function updateLanguageToggle() {
  const langText = document.getElementById('langText');
  if (langText) {
    langText.textContent = currentLanguage.toUpperCase();
  }
}

function updatePageLanguage() {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    const translation = translations[currentLanguage][key];
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// Navigation management
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
}

// Page-specific content initialization
function initializePageSpecificContent() {
  const currentPage = getCurrentPage();
  
  switch (currentPage) {
    case 'index':
      loadFeaturedProjects();
      break;
    case 'project-detail':
      initializeProjectDetailPage();
      break;
    case 'contact':
      initializeContactForm();
      break;
    case 'roadmap':
      // Timer already initialized
      break;
  }
}

function updatePageSpecificContent() {
  const currentPage = getCurrentPage();
  
  switch (currentPage) {
    case 'project-detail':
      updateProjectContent();
      break;
  }
}

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/') return 'index';
  if (path.endsWith('roadmap.html')) return 'roadmap';
  if (path.endsWith('project-detail.html')) return 'project-detail';
  if (path.endsWith('contact.html')) return 'contact';
  return 'index';
}

// Project management
function loadFeaturedProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '';
  
  // Show first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);
  
  featuredProjects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

function loadAllProjects() {
  const allProjectsGrid = document.getElementById('allProjectsGrid');
  if (!allProjectsGrid) return;

  allProjectsGrid.innerHTML = '';
  
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    allProjectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const card = document.createElement('a');
  card.href = `project-detail.html?id=${project.id}`;
  card.className = 'project-card';
  card.style.textDecoration = 'none';
  
  card.innerHTML = `
    <div class="project-image">${project.image}</div>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tech">
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <span class="project-link">View Project →</span>
  `;
  
  card.classList.add('fade-in');
  return card;
}

// Project detail page
function initializeProjectDetailPage() {
  loadAllProjects();
  
  const projectSelect = document.getElementById('projectSelect');
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectSelect) {
    // Set initial selection
    if (projectId) {
      const projectIndex = projects.findIndex(p => p.id === parseInt(projectId));
      if (projectIndex !== -1) {
        projectSelect.selectedIndex = projectIndex;
      }
    }
    
    projectSelect.addEventListener('change', (e) => {
      const selectedIndex = parseInt(e.target.value);
      displayProjectDetail(selectedIndex);
    });
    
    // Display initial project
    const initialIndex = projectSelect.selectedIndex;
    displayProjectDetail(initialIndex);
  }
}

function displayProjectDetail(projectIndex) {
  const project = projects[projectIndex];
  const projectContent = document.getElementById('projectContent');
  
  if (!project || !projectContent) return;
  
  const readme = project.readme[currentLanguage];
  
  projectContent.innerHTML = `
    <div class="project-readme">
      <h1>${readme.title}</h1>
      
      <h2>Description</h2>
      <p>${readme.description}</p>
      
      <h2>Features</h2>
      <ul>
        ${readme.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      
      <h2>Technologies</h2>
      <div class="project-tech">
        ${readme.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      
      <h2>Architecture</h2>
      <p>${readme.architecture}</p>
      
      <h2>Installation</h2>
      <p>${readme.installation}</p>
      
      <h2>Usage</h2>
      <p>${readme.usage}</p>
      
      <a href="${project.liveLink}" target="_blank" class="project-link-btn">
        ${currentLanguage === 'en' ? 'Visit Live Site' : 'เยี่ยมชมเว็บไซต์'}
      </a>
    </div>
  `;
  
  projectContent.classList.add('scale-in');
}

function updateProjectContent() {
  const projectSelect = document.getElementById('projectSelect');
  if (projectSelect) {
    const selectedIndex = projectSelect.selectedIndex;
    displayProjectDetail(selectedIndex);
  }
}

// Launch timer
function startLaunchTimer() {
  const startDate = new Date("2025-05-11T00:00:00");
  const timerElement = document.getElementById('launchTimer');
  const counterElement = document.getElementById('counter');
  
  function updateTimer() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    
    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
    
    // Update counter element if it exists
    if (counterElement) {
      counterElement.textContent = `Time since launch: ${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    }
  }
  
  // Update immediately and then every second
  updateTimer();
  setInterval(updateTimer, 1000);
}

// Mobile menu toggle function
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) {
    nav.classList.toggle("active");
  }
}

// Contact form
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = currentLanguage === 'en' ? 'Sending...' : 'กำลังส่ง...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert(currentLanguage === 'en' 
        ? 'Thank you for your message! We\'ll get back to you soon.' 
        : 'ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
      
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimization
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);
