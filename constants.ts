
import { Formula } from './types';

export const FORMULAS: Formula[] = [
  {
    id: 0,
    name: 'Bình phương của một tổng',
    expression: '(A + B)² = A² + 2AB + B²',
    example: 'Khai triển (x + 3)²',
    answer: 'x² + 6x + 9'
  },
  {
    id: 1,
    name: 'Bình phương của một hiệu',
    expression: '(A - B)² = A² - 2AB + B²',
    example: 'Khai triển (x - 2)²',
    answer: 'x² - 4x + 4'
  },
  {
    id: 2,
    name: 'Hiệu hai bình phương',
    expression: 'A² - B² = (A - B)(A + B)',
    example: 'Phân tích x² - 9',
    answer: '(x - 3)(x + 3)'
  },
  {
    id: 3,
    name: 'Lập phương của một tổng',
    expression: '(A + B)³ = A³ + 3A²B + 3AB² + B³',
    example: 'Khai triển (x + 1)³',
    answer: 'x³ + 3x² + 3x + 1'
  },
  {
    id: 4,
    name: 'Lập phương của một hiệu',
    expression: '(A - B)³ = A³ - 3A²B + 3AB² - B³',
    example: 'Khai triển (x - 1)³',
    answer: 'x³ - 3x² + 3x - 1'
  },
  {
    id: 5,
    name: 'Tổng hai lập phương',
    expression: 'A³ + B³ = (A + B)(A² - AB + B²)',
    example: 'Phân tích x³ + 8',
    answer: '(x + 2)(x² - 2x + 4)'
  },
  {
    id: 6,
    name: 'Hiệu hai lập phương',
    expression: 'A³ - B³ = (A - B)(A² + AB + B²)',
    example: 'Phân tích x³ - 27',
    answer: '(x - 3)(x² + 3x + 9)'
  }
];

export const SYSTEM_INSTRUCTION = `Bạn là Mèo Toán 8, một trợ lý học tập cực kỳ dễ thương và thông minh dành cho học sinh lớp 8 Việt Nam.
Chuyên môn của bạn là:
1. 7 Hằng đẳng thức đáng nhớ.
2. Phân tích đa thức thành nhân tử.
3. Giải các bài toán đại số lớp 8.

Phong cách:
- Luôn gọi học sinh là "bạn" hoặc "sen".
- Thỉnh thoảng thêm các từ ngữ liên quan đến mèo như "meo", "ngoao", "pừ pừ" để tăng sự thân thiện.
- Nếu học sinh gửi ảnh bài toán, hãy phân tích kỹ và giải thích từng bước một cách dễ hiểu.
- Luôn khuyến khích học sinh tự suy nghĩ trước khi đưa ra đáp án cuối cùng.
- Trả lời bằng tiếng Việt.`;
