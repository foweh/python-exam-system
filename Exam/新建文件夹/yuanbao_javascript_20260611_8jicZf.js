/**
 * 万维全自动网络考试平台 - 题库数据（第三套）
 * 试卷编号：15000058
 * 题型分布：单选10 + 填空5 + 程序填空4 + 程序改错4 + 程序设计3
 * 路径已替换：C:\Exam → C:\Users\Administrator\Desktop\新建文件夹\Exam
 */
const BASE_PATH = 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000058';

const questions = [
  // ═══════════════════════════════════════════
  //  一、单选题（共10题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '单选',
    id: 1,
    score: 2.0,
    question: '在Python中，使用open()打开Windows操作系统D盘下的一个文件，路径名错误的是()。',
    options: [
      'A. D:\\PythonTest\\a.txt',
      'B. D:\\\\PythonTest\\\\a.txt',
      'C. D:/PythonTest/a.txt',
      'D. D://PythonTest//a.txt',
    ],
    answer: 'A',
    analysis: 'Windows路径需用双反斜杠（\\）或正斜杠（/），单反斜杠会被解析为转义符；D选项使用//不符合路径规范。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 2,
    score: 2.0,
    question: '以下关于Python文件打开模式的描述中，错误的是()。',
    options: [
      'A. 只读模式是r',
      'B. 覆盖写模式是w',
      'C. 追加写模式是a',
      'D. 创建写模式是n',
    ],
    answer: 'D',
    analysis: 'Python文件创建写模式为x（exclusive），若文件已存在则报错；无n模式。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 3,
    score: 2.0,
    question: '5.0//2.0结果为()。',
    options: ['A. 2', 'B. 2.5', 'C. 3', 'D. 2.0'],
    answer: 'D',
    analysis: '//是整除运算符，返回不大于商的最大整数，5.0//2.0=2.0（保留浮点类型）。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 4,
    score: 2.0,
    question: 'len(\'a\\nb\\\\c\')打印在屏幕上为()。',
    options: ['A. 4', 'B. 3', 'C. 5', 'D. 7'],
    answer: 'C',
    analysis: '字符串包含：a（1）、\\n（换行符，1）、b（1）、\\\\（反斜杠，1）、c（1），共5个字符。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 5,
    score: 2.0,
    question: 'x=0; x=1.5; x=True; x=\'abc\'，则x值为()。',
    options: ['A. 0', 'B. 1.5', 'C. True', 'D. \'abc\''],
    answer: 'D',
    analysis: 'Python变量后赋值覆盖前赋值，最终x被赋值为字符串\'abc\'。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 6,
    score: 2.0,
    question: '下列选项中合法的标识符是()。',
    options: ['A. _7a_b', 'B. Break', 'C. _a$b', 'D. 7ab'],
    answer: 'A',
    analysis: '标识符规则：仅含字母、数字、下划线，不能以数字开头；$非法；Break虽非关键字但非最优解（本题标准答案为A）。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 7,
    score: 2.0,
    question: '表达式3*(2+12%3)**3/5的结果是()。',
    options: ['A. 129.6', 'B. 4', 'C. 43.2', 'D. 4.8'],
    answer: 'D',
    analysis: '计算顺序：12%3=0 → 2+0=2 → 2**3=8 → 3 * 8=24 → 24/5=4.8。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 8,
    score: 2.0,
    question: 'Python语句 print(0xA+0xB)的输出结果是()。',
    options: ['A. 0xA+0XB', 'B. A+B', 'C. 0xA0xB', 'D. 21'],
    answer: 'D',
    analysis: '0xA=10，0xB=11，10+11=21。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 9,
    score: 2.0,
    question: '拟在屏幕上输出Hello World，使用的Python语句是()。',
    options: [
      'A. printf(\' Hello World\')',
      'B. print(Hello World)',
      'C. print(" Hello World")',
      'D. printf(" Hello World")',
    ],
    answer: 'C',
    analysis: 'Python输出函数为print()，字符串需用引号包裹；printf是C语言函数。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 10,
    score: 2.0,
    question: '换行的转义符为()。',
    options: ['A. \\b', 'B. \\n', 'C. \\t', 'D. \\f'],
    answer: 'B',
    analysis: '\\n是换行符；\\b退格，\\t制表符，\\f换页符。',
    path: BASE_PATH + '\\CK',
  },

  // ═══════════════════════════════════════════
  //  二、填空题（共5题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '填空',
    id: 1,
    score: 2.0,
    question: '列表的count()方法用于统计指定值在列表中的元素个数。已知myList=[\'a\',\'b\',\'b\',\'b\',\'c\',\'c\']，则myList.count(\'b\')的值为[1]，myList.count(\'d\')的值为[2]。',
    blanks: ['3', '0'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 2,
    score: 2.0,
    question: '假设arr=np.array([[1,2,3],[4,5,6],[7,8,9]])，运行下列代码，填写输出结果：\n>>> print(arr[1, 1])\n[1]\n>>> print(arr[:, 1])\n[2]\n>>> print(arr[0:2, 0:2])\n[3]',
    blanks: ['5', '[2, 5, 8]', '[[1, 2], [4, 5]]'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 3,
    score: 2.0,
    question: '在使用pyplot模块时，一般采用如下方式导入matplotlib中的pyplot模块：[1]',
    blanks: ['import matplotlib.pyplot as plt'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 4,
    score: 2.0,
    question: 'Series对象最重要的一个功能就是[1]，即多个Series对象中的数据按索引进行匹配运算，运算结果常包含NaN。',
    blanks: ['索引对齐（或对齐）'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 5,
    score: 2.0,
    question: 'ndarray的基本属性：\n轴(axes)[1]；\n秩(rank)[2]；\n大小(size)[3]；\n形状(shape)[4]；\n类型(dtype)[5]；\n元素大小(itemsize)[6]。',
    blanks: [
      '轴的方向（或维度的含义）',
      '轴的个数（或维度数量）',
      '元素总数',
      '各维度的大小（元组形式）',
      '元素的数值类型',
      '单个元素的字节数',
    ],
    path: BASE_PATH + '\\TK',
  },

  // ═══════════════════════════════════════════
  //  三、程序填空题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序填空',
    id: 1,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\158',
  },
  {
    type: '程序填空',
    id: 2,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\121',
  },
  {
    type: '程序填空',
    id: 3,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\61',
  },
  {
    type: '程序填空',
    id: 4,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\145',
  },

  // ═══════════════════════════════════════════
  //  四、程序改错题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序改错',
    id: 1,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\101',
  },
  {
    type: '程序改错',
    id: 2,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\98',
  },
  {
    type: '程序改错',
    id: 3,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\（缺失编号，推测为99）',
  },
  {
    type: '程序改错',
    id: 4,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\100',
  },

  // ═══════════════════════════════════════════
  //  五、程序设计题（共3题，每题10.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序设计',
    id: 1,
    score: 10.0,
    question: '按“答题”按钮进入程序环境调试，在**********Program**********到**********End**********范围内编写程序。',
    answer: '待补充（原题未显示具体要求）',
    path: BASE_PATH + '\\BC\\1143',
  },
  {
    type: '程序设计',
    id: 2,
    score: 10.0,
    question: '按“答题”按钮进入程序环境调试，在**********Program**********到**********End**********范围内编写程序。',
    answer: '待补充（原题未显示具体要求）',
    path: BASE_PATH + '\\BC\\1147',
  },
  {
    type: '程序设计',
    id: 3,
    score: 10.0,
    question: '按“答题”按钮进入程序环境调试，在**********Program**********到**********End**********范围内编写程序。',
    answer: '待补充（原题未显示具体要求）',
    path: BASE_PATH + '\\BC\\1224',
  },
];

// 辅助函数：按题型筛选
const getByType = (type) => questions.filter(q => q.type === type);

// 导出（Node环境可用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, getByType };
}