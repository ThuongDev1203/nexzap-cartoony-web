import { Users, Palette } from "lucide-react";
import { JobPosition } from "@/types/job";

export const jobPositions: JobPosition[] = [
  {
    id: "game-design-intern",
    title: "Game Design",
    icon: Users,
    department: "Thiết Kế",
    locationType: "Làm từ xa",
    description:
      "Tham gia đội ngũ thiết kế để hỗ trợ xây dựng ý tưởng gameplay, cấp độ và hệ thống trò chơi. Đây là cơ hội tuyệt vời để học hỏi quy trình phát triển game chuyên nghiệp.",
    requirements: [
      "Đam mê game và thiết kế trò chơi",
      "Kỹ năng giao tiếp và làm việc nhóm tốt",
      "Hiểu cơ bản về cơ chế gameplay và tâm lý người chơi",
      "Biết sử dụng công cụ thiết kế cơ bản (Google Docs, Figma, v.v.)",
      "Khả năng học hỏi nhanh và tiếp nhận phản hồi",
    ],
    responsibilities: [
      "Hỗ trợ lên ý tưởng gameplay, level và tính năng",
      "Viết tài liệu thiết kế cơ bản",
      "Thử nghiệm và đưa phản hồi về game",
      "Phối hợp với các bộ phận khác như lập trình và họa sĩ",
      "Tham gia các cuộc họp và cập nhật tiến độ",
    ],
    benefits: [
      "Cơ hội trở thành nhân viên chính thức",
      "Làm việc trong môi trường sáng tạo và năng động",
      "Được hướng dẫn trực tiếp bởi các chuyên gia trong ngành",
      "Tham gia dự án thực tế",
      "Linh hoạt thời gian làm việc",
    ],
  },
  {
    id: "artist-intern",
    title: "Artist",
    icon: Palette,
    department: "Mỹ Thuật",
    locationType: "Làm từ xa",
    description:
      "Hỗ trợ đội ngũ mỹ thuật trong việc tạo ra các tài sản hình ảnh cho game như nhân vật, đạo cụ và UI. Phù hợp với sinh viên hoặc người mới bắt đầu muốn tích lũy kinh nghiệm thực tế.",
    requirements: [
      "Có kiến thức cơ bản về mỹ thuật và phần mềm vẽ kỹ thuật số (Photoshop, Clip Studio, v.v.)",
      "Tư duy thẩm mỹ và khả năng quan sát tốt",
      "Ham học hỏi, chăm chỉ và tiếp thu nhanh",
      "Ưu tiên có portfolio hoặc các sản phẩm cá nhân",
      "Biết lắng nghe và làm việc nhóm",
    ],
    responsibilities: [
      "Vẽ concept nhân vật, vật phẩm, môi trường theo yêu cầu",
      "Hỗ trợ dựng hình hoặc làm UI đơn giản",
      "Tham gia brainstorm ý tưởng cùng đội ngũ",
      "Nhận phản hồi và chỉnh sửa sản phẩm",
      "Tuân thủ deadline và định hướng phong cách của dự án",
    ],
    benefits: [
      "Được đào tạo và kèm cặp trong quá trình làm việc",
      "Cơ hội trở thành họa sĩ chính thức trong studio",
      "Tham gia dự án game thực tế",
      "Thời gian làm việc linh hoạt, phù hợp sinh viên",
      "Môi trường sáng tạo, thân thiện",
    ],
  },
];
