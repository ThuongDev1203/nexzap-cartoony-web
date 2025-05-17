
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define language types
export type Language = "vi" | "en";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
  t: (key) => key,
});

// Create translations for both languages
const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Navigation
    "nav.home": "Trang Chủ",
    "nav.games": "Trò Chơi",
    "nav.about": "Về Chúng Tôi",
    "nav.contact": "Liên Hệ",
    "nav.recruitment": "Tuyển Dụng",

    // Hero Section
    "hero.slogan": "Kết nối. Sáng tạo. Bùng nổ!",
    "hero.subtitle": "Phát triển trò chơi đỉnh cao",
    "hero.cta": "Khám phá trò chơi",

    // About Section
    "about.title": "Về NexZap Studio",
    "about.description":
      "NexZap Studio là công ty phát triển trò chơi chuyên tạo ra những trải nghiệm tương tác hấp dẫn và sáng tạo. Chúng tôi kết hợp nghệ thuật, công nghệ và cốt truyện để mang đến những trò chơi đầy màu sắc và thú vị.",

    // Features
    "features.title": "Điểm Mạnh Của Chúng Tôi",
    "features.creativity.title": "Sáng Tạo Không Giới Hạn",
    "features.creativity.desc":
      "Chúng tôi đẩy mạnh ranh giới của thiết kế trò chơi với ý tưởng sáng tạo và độc đáo.",
    "features.tech.title": "Công Nghệ Tiên Tiến",
    "features.tech.desc":
      "Sử dụng công nghệ mới nhất để tạo ra trò chơi chất lượng cao với đồ họa tuyệt đẹp.",
    "features.fun.title": "Ưu Tiên Sự Thú Vị",
    "features.fun.desc":
      "Chúng tôi luôn đặt niềm vui của người chơi lên hàng đầu trong mọi dự án.",

    // Games Section
    "games.title": "Trò Chơi Mới Nhất",
    "games.viewAll": "Xem tất cả",

    // Footer
    "footer.rights": "© 2024 NexZap Studio. Tất cả quyền được bảo lưu.",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản sử dụng",
    "footer.contact": "Liên hệ",

    // Job Details
    "job.requirements": "Yêu Cầu",
    "job.responsibilities": "Trách Nhiệm",
    "job.benefits": "Quyền Lợi",
    "job.applyBy": "Ứng tuyển trước ngày",
    "job.apply": "Ứng tuyển vị trí này"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.games": "Games",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.recruitment": "Careers",

    // Hero Section
    "hero.slogan": "Connect. Create. Explode!",
    "hero.subtitle": "Premium Game Development",
    "hero.cta": "Explore Games",

    // About Section
    "about.title": "About NexZap Studio",
    "about.description":
      "NexZap Studio is a game development company focused on creating engaging and innovative interactive experiences. We combine art, technology, and storytelling to deliver colorful and exciting games.",

    // Features
    "features.title": "Our Strengths",
    "features.creativity.title": "Boundless Creativity",
    "features.creativity.desc":
      "We push the boundaries of game design with creative and unique ideas.",
    "features.tech.title": "Advanced Technology",
    "features.tech.desc":
      "Using the latest technology to create high-quality games with stunning graphics.",
    "features.fun.title": "Fun First",
    "features.fun.desc":
      "We always prioritize player enjoyment in every project we undertake.",

    // Games Section
    "games.title": "Latest Games",
    "games.viewAll": "View all",

    // Footer
    "footer.rights": "© 2024 NexZap Studio. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",

    // Job Details
    "job.requirements": "Requirements",
    "job.responsibilities": "Responsibilities",
    "job.benefits": "Benefits",
    "job.applyBy": "Apply by",
    "job.apply": "Apply for this position"
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("vi");

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
