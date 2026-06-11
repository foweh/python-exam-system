/**
 * 万维全自动网络考试平台 - 题库数据（第四套）
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
    question: '以下不属于Python文件操作方法的是()。',
    options: ['A. read()', 'B. write()', 'C. join()', 'D. readline()'],
    answer: 'C',
    analysis: 'join()是字符串方法（用于将序列拼接为字符串），不是文件对象的方法；文件操作常用read/write/readline等。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 2,
    score: 2.0,
    question: '文件a.txt的内容如下：[1,2,3,4]，以下代码的执行结果是()。\nf=open("a.txt","r")\nprint(f.read().split(","))\nf.close()',
    options: [
      'A. "1","2","3","4"',
      'B. [1,2,3,4]',
      'C. ["[1","2","3","4]"]',
      'D. 1,2,3,4',
    ],
    answer: 'C',
    analysis: 'f.read()读取整个文件内容为字符串"[1,2,3,4]"，split(",")按逗号分割后得到["[1", "2", "3", "4]"]。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 3,
    score: 2.0,
    question: '若字符串s="a\\nb\\tc"，则len(s)的值是()。',
    options: ['A. 7', 'B. 6', 'C. 5', 'D. 4'],
    answer: 'C',
    analysis: '转义符\\n（换行）和\\t（制表符）各占1个字符，总长度：a(1)+\\n(1)+b(1)+\\t(1)+c(1)=5。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 4,
    score: 2.0,
    question: '下面()是非法变量名。',
    options: ['A. my-name', 'B. complex', 'C. _address', 'D. ID'],
    answer: 'A',
    analysis: '变量名只能包含字母、数字和下划线，不能包含连字符（-）；complex是合法变量名（虽为内置函数名，但不违规）。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 5,
    score: 2.0,
    question: '以下代码的输出结果是()。\nx=12+3*((5 * 8)-14)//6\nprint(x)',
    options: ['A. 25.0', 'B. 65', 'C. 25', 'D. 24'],
    answer: 'D',
    analysis: '计算步骤：5 * 8=40 → 40-14=26 → 26//6=4（整数除法） → 3 * 4=12 → 12+12=24。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 6,
    score: 2.0,
    question: '下面()不是合法的整数数字。',
    options: ['A. 0x1e', 'B. 0o27', 'C. 0b1001', 'D. 1e2'],
    answer: 'D',
    analysis: '1e2是科学计数法，表示100.0（浮点数）；0x1e（十六进制30）、0o27（八进制23）、0b1001（二进制9）均为整数。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 7,
    score: 2.0,
    question: '以下叙述中正确的是()。',
    options: [
      'A. Python3.x与Python2.x兼容',
      'B. Python语句只能以程序方式执行',
      'C. Python是解释型语言',
      'D. Python语言出现得晚，具有其他高级语言的一切优点',
    ],
    answer: 'C',
    analysis: 'Python是解释型语言；A错误（3.x不兼容2.x）；B错误（支持交互式执行）；D错误（并非“一切优点”）。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 8,
    score: 2.0,
    question: '以下关于Python的描述中，错误的是()。',
    options: [
      'A. 对于需要更高执行速度的功能，如数值计算和动画，Python可以调用C语言编写的底层代码',
      'B. Python比大部分编程语言具有更高的软件开发产量和简洁性',
      'C. Python是解释执行型语言，因此执行速度比编译型语言慢',
      'D. Python是脚本语言，主要用作系统编程和Web开发的开发语言',
    ],
    answer: 'D',
    analysis: 'Python应用领域广泛（数据科学、AI、自动化等），并非“主要用作系统编程和Web开发”；A/B/C均为正确描述。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 9,
    score: 2.0,
    question: '下面运算结果不是浮点型的有()。',
    options: ['A. 2 * 0.5', 'B. 2**-1', 'C. 5//2', 'D. 18/3'],
    answer: 'C',
    analysis: '5//2是整数除法，结果为2（int类型）；A（1.0）、B（0.5）、D（6.0）均为浮点型。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 10,
    score: 2.0,
    question: 'round(2.5)结果为()。',
    options: ['A. 2', 'B. 2.5', 'C. 3', 'D. 2.0'],
    answer: 'A',
    analysis: 'Python的round()函数对.5采用“银行家舍入法”（向最近的偶数舍入），2.5→2。',
    path: BASE_PATH + '\\CK',
  },

  // ═══════════════════════════════════════════
  //  二、填空题（共5题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '填空',
    id: 1,
    score: 2.0,
    question: '数值列表可使用Python提供的内置函数进行简单统计。求和可使用sum()函数，计算最大值可使用max()函数，计算最小值可使用min()函数。假设已有列表a=[1,2,3,4,5]，则表达式sum(a)的值为[1]，表达式max(a)的值为[2]，表达式min(a)的值为[3]。',
    blanks: ['15', '5', '1'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 2,
    score: 2.0,
    question: '字典中的键一旦增加就[1]（能/不能）修改，只能[2]。',
    blanks: ['不能', '删除后重新添加'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 3,
    score: 2.0,
    question: '列表与字符串一样，也支持"+"和"*"两种运算，结果为一个新的列表。假设已有列表myList=["a","b","c"]，则myList*3的结果为[1]，myList+["d","e"]的结果为[2]。这两种运算均[3]（改变/不改变）列表本身。如需将列表["d","e"]中的所有元素一次性添加至列表myList中，可使用列表的[4]方法。',
    blanks: ['["a","b","c","a","b","c","a","b","c"]', '["a","b","c","d","e"]', '不改变', 'extend'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 4,
    score: 2.0,
    question: '由于Series对象的索引和值有着一一对应的关系，且索引和值经常一起出现，这个特点和字典非常像，所以在创建Series对象时，经常利用[1]来创建Series对象，但需清楚：字典是[2]（无序/有序）的，而Series对象是[3]（无序/有序）的。',
    blanks: ['字典', '无序', '有序'],
    path: BASE_PATH + '\\TK',
  },
  {
    type: '填空',
    id: 5,
    score: 2.0,
    question: 'pyplot模块中提供了很多绘制不同种类图形的函数。例如，[1]函数可以绘制箱形图，[2]函数可以绘制条形图，[3]函数可以绘制直方图，[4]函数可以绘制饼图，[5]函数可以绘制极坐标图，[6]函数可以绘制散点图。',
    blanks: ['boxplot', 'bar', 'hist', 'pie', 'polar', 'scatter'],
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
    path: BASE_PATH + '\\CK\\113',
  },
  {
    type: '程序填空',
    id: 2,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\149',
  },
  {
    type: '程序填空',
    id: 3,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\141',
  },
  {
    type: '程序填空',
    id: 4,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********SPACE**********处填空。',
    blanks: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\CK\\90',
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
    path: BASE_PATH + '\\GC\\99',
  },
  {
    type: '程序改错',
    id: 2,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\90',
  },
  {
    type: '程序改错',
    id: 3,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\93',
  },
  {
    type: '程序改错',
    id: 4,
    score: 5.0,
    question: '按“答题”按钮进入程序环境调试，在**********FOUND**********处修改错误。',
    fixes: ['待补充（原题未显示具体代码）'],
    path: BASE_PATH + '\\GC\\91',
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
    path: BASE_PATH + '\\BC\\110',
  },
  {
    type: '程序设计',
    id: 2,
    score: 10.0,
    question: '按“答题”按钮进入程序环境调试，在**********Program**********到**********End**********范围内编写程序。',
    answer: '待补充（原题未显示具体要求）',
    path: BASE_PATH + '\\BC\\1141',
  },
  {
    type: '程序设计',
    id: 3,
    score: 10.0,
    question: '按“答题”按钮进入程序环境调试，在**********Program**********到**********End**********范围内编写程序。',
    answer: '待补充（原题未显示具体要求）',
    path: BASE_PATH + '\\BC\\1145',
  },
];

// 辅助函数：按题型筛选
const getByType = (type) => questions.filter(q => q.type === type);

// 导出（Node环境可用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, getByType };
}