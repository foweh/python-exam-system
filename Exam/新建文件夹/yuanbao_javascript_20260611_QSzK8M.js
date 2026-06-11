/**
 * 万维全自动网络考试平台 - 题库数据
 * 共 26 题：单选10 + 填空5 + 程序填空4 + 程序改错4 + 程序设计3
 * 路径均已替换：C:\Exam → C:\Users\Administrator\Desktop\新建文件夹\Exam
 */
const BASE = 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059';

const questions = [
  // ═══════════════════════════════════════════
  //  一、单选题（共10题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '单选',
    id: 1,
    score: 2.0,
    question: '在读/写文件之前，需要打开文件，使用的函数是()。',
    options: ['A. read', 'B. fopen', 'C. open', 'D. CFile'],
    answer: 'C',
    analysis: 'Python 内置函数 open() 用于打开文件，返回文件对象。fopen 是 C 语言的文件打开函数。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 2,
    score: 2.0,
    question: '以下代码运行后文件 book.txt 中的内容是()。\n\nto = open("book.txt", "w")\nls = [\'C语言\', \'Java\', \'C#\', \'Python\']\nto.writelines(ls)\nto.close()',
    options: [
      'A. \'C语言\'"Java"C#"Python\'',
      'B. C语言JavaC#Python',
      'C. [C语言,Java,C#,Python]',
      'D. [\'C语言\',\'Java\',\'C#\',\'Python\']',
    ],
    answer: 'B',
    analysis: 'writelines() 直接将每个字符串元素拼接写入，不添加逗号、引号或换行，最终文件中内容为 C语言JavaC#Python。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 3,
    score: 2.0,
    question: '函数 type(1 + 0xf * 3.14) 的返回结果是()。',
    options: [
      'A. <class \'int\'>',
      'B. <class \'long\'>',
      'C. <class \'str\'>',
      'D. <class \'float\'>',
    ],
    answer: 'D',
    analysis: '0xf = 15（int），15 * 3.14 中有 float，结果变为 float，1 + float 仍是 float，所以 type 返回 <class \'float\'>。Python3 没有 long 类型。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 4,
    score: 2.0,
    question: '下列选项中，不属于 Python 特点的是()。',
    options: ['A. 面向对象', 'B. 运行效率高', 'C. 可读性好', 'D. 开源'],
    answer: 'B',
    analysis: 'Python 是解释型高级语言，运行效率相对较低（远低于 C/C++），这是它不为人诟病的短板，也是其"特点"中唯一不属于优势的。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 5,
    score: 2.0,
    question: 'bool(\'a\') 结果为()。',
    options: ['A. False', 'B. a', 'C. \'a\'', 'D. True'],
    answer: 'D',
    analysis: '非空字符串的布尔值为 True，只有空字符串 \'\' 的 bool 值为 False。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 6,
    score: 2.0,
    question: 'int(3.14) 结果为()。',
    options: ['A. 3', 'B. 3.14', 'C. 3.1', 'D. 3.2'],
    answer: 'A',
    analysis: 'int() 截断取整（向零取整），不是四舍五入，int(3.14) = 3。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 7,
    score: 2.0,
    question: '以下代码的输出结果是()。\n\na = 10.99\nprint(complex(a))',
    options: ['A. 0.99', 'B. 10.99i+j', 'C. 10.99', 'D. (10.99+0j)'],
    answer: 'D',
    analysis: 'complex(a) 将实数 a 构造为复数，虚部为 0，输出格式为 (10.99+0j)。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 8,
    score: 2.0,
    question: 'float(\'1.38\') 结果为()。',
    options: ['A. 1.38', 'B. \'1.38\'', 'C. 1.4', 'D. 1'],
    answer: 'A',
    analysis: 'float(\'1.38\') 将数字字符串解析为浮点数 1.38，返回值是 float 类型而非字符串。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 9,
    score: 2.0,
    question: '以下关于语言类型的描述中，正确的是()。',
    options: [
      'A. 静态语言采用解释方式执行，脚本语言采用编译方式执行',
      'B. C语言是静态语言，Python是脚本语言',
      'C. 编译是将目标代码转换成源代码的过程',
      'D. 解释是将源代码一次性转换成目标代码同时逐条运行目标代码的过程',
    ],
    answer: 'B',
    analysis: 'C 语言需要先编译再执行（静态编译型）；Python 一般解释执行（脚本/动态语言）。A 搞反了；C 编译是源→目标；D 解释是逐条翻译执行，不是一次性转换。',
    path: BASE + '\\CK',
  },
  {
    type: '单选',
    id: 10,
    score: 2.0,
    question: 'Python 中用来表示代码块所属关系的语法是()。',
    options: ['A. 花括号 {}', 'B. 圆括号 ()', 'C. 缩进', 'D. 冒号'],
    answer: 'C',
    analysis: 'Python 用缩进来划分代码块层级，而不是花括号。冒号 : 标志代码块开始，但"所属关系"靠缩进。',
    path: BASE + '\\CK',
  },

  // ═══════════════════════════════════════════
  //  二、填空题（共5题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '填空',
    id: 1,
    score: 2.0,
    question: '除列表本身的 sort() 方法以外，Python 还提供了内置函数【1】对指定的列表进行排序并返回一个新的列表，其 reverse 参数与 sort() 方法的用法相同。与 sort() 方法不同的是，该函数【2】（改变 / 不改变）列表本身。',
    blanks: ['sorted()', '不改变'],
    path: BASE + '\\TK', // TK=填空（题中无明确子编号，归类到填空区）
  },
  {
    type: '填空',
    id: 2,
    score: 2.0,
    question: 'Python 中的字符串本质上是一个类，字符串类中提供了大量的方法。例如，【1】方法可以把原字符串中的大写字母全部转换为小写字母并生成一个新的字符串；【2】方法可以把字符串按某种分隔符分割成若干个子串，生成一个由这些子串构成的列表。字符串类的方法有一个共同特点：不会对原字符串做任何修改。',
    blanks: ['.lower()', '.split()'],
    note: '也可答 lower / split（不带点写法通常也给分）',
    path: BASE + '\\TK',
  },
  {
    type: '填空',
    id: 3,
    score: 2.0,
    question: '当成员运算符 "in" 和 "not in" 作用于字典时，判断的是【1】是否在字典中。',
    blanks: ['键（key）'],
    path: BASE + '\\TK',
  },
  {
    type: '填空',
    id: 4,
    score: 2.0,
    question: 'numpy 库是第三方库，安装好以后，一般采用如下方式引用 numpy 库：【1】',
    blanks: ['import numpy as np'],
    path: BASE + '\\TK',
  },
  {
    type: '填空',
    id: 5,
    score: 2.0,
    question:
      '列表属于可迭代类型，可通过 for 循环对列表元素进行遍历。\n假设已有列表 a=[1,2,3,4,5]，变量 n=len(a)，则可以使用以下两种方式对列表 a 中所有元素进行遍历输出：\n\n(1) 使用 range() 生成索引序列，然后通过索引遍历：\n【1】\n    print(a[i])\n\n(2) 直接通过元素遍历：\n【2】\n    print(element)',
    blanks: ['for i in range(len(a)):', 'for element in a:'],
    path: BASE + '\\TK',
  },

  // ═══════════════════════════════════════════
  //  三、程序填空题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序填空',
    id: 1,
    score: 5.0,
    title: '字符串反转应用',
    question: '按"答题"按钮进入程序环境调试，在 **********SPACE********** 处填空。',
    blanks: ['str[::-1]', 'str_change(str)'],
    path: BASE + '\\CK\\150',
  },
  {
    type: '程序填空',
    id: 2,
    score: 5.0,
    title: '列表追加与循环边界',
    question: '按"答题"按钮进入程序环境调试，在 **********SPACE********** 处填空。',
    blanks: ['10', 'append(n)'],
    path: BASE + '\\CK\\263',
  },
  {
    type: '程序填空',
    id: 3,
    score: 5.0,
    title: '累加控制与跳出循环',
    question: '按"答题"按钮进入程序环境调试，在 **********SPACE********** 处填空。',
    blanks: ['cs=0', 'break', '条件补全（cs>10 之类，依原题语境）'],
    note: '第[3]空 PDF 识别残损，显示为 "[3]:*>10"，结合语境应为控制累加上限的条件判断，如 if cs > 10: break',
    path: BASE + '\\CK\\117',
  },
  {
    type: '程序填空',
    id: 4,
    score: 5.0,
    title: '随机选品牌',
    question: '按"答题"按钮进入程序环境调试，在 **********SPACE********** 处填空。',
    blanks: ['random', 'name = brandlist[random.randint(0,4)]   # 或 name = random.choice(brandlist)'],
    path: BASE + '\\CK\\65',
  },

  // ═══════════════════════════════════════════
  //  四、程序改错题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序改错',
    id: 1,
    score: 5.0,
    title: '打印星号图案 - 条件修正',
    fixes: [
      { line: "while n<= 7:  （或 while n<8:）", label: '[1]' },
      { line: "while a<1 or a>50:", label: '[2]' },
      { line: "print(a*'*')", label: '[3]' },
    ],
    path: BASE + '\\GC\\104',
  },
  {
    type: '程序改错',
    id: 2,
    score: 5.0,
    title: '函数定义与调用修正',
    fixes: [
      { line: 'def f(n):', label: '[1] — 补全函数定义头' },
      { line: 'print(f(9))', label: '[2] — 调用并输出' },
    ],
    path: BASE + '\\GC\\58',
  },
  {
    type: '程序改错',
    id: 3,
    score: 5.0,
    title: '四位数各位数字拆分修正',
    fixes: [
      { line: "a = int(input('请输入一个四位数字:\\n'))", label: '[1]' },
      { line: 'aa.append(a % 100 // 10)', label: '[2]' },
      { line: 'for i in range(4):', label: '[3]' },
    ],
    path: BASE + '\\GC\\103',
  },
  {
    type: '程序改错',
    id: 4,
    score: 5.0,
    title: '范围与条件表达式修正',
    fixes: [
      { line: 'for i in range(10, 100):', label: '[1]' },
      {
        line: 'if b>=1000 and b<=10000 and 8*i<100 and 9*i>=100:  （等价: if 999<b<10001 and...）',
        label: '[2]',
      },
      { line: "print(b+1, '= 800*', i, '+ 9*', i, '+ 1')", label: '[3]' },
    ],
    note: 'PDF 中 [2] 的公式含 LaTeX 残留 $b>=1000$，实际代码中去掉 $，写为普通 Python 比较表达式即可。',
    path: BASE + '\\GC\\107',
  },

  // ═══════════════════════════════════════════
  //  五、程序设计题（共3题，每题10.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序设计',
    id: 1,
    score: 10.0,
    title: '九九乘法表',
    desc: '打印 1×1 ~ 9×9 的完整乘法表，每行从 j=1 到 j=9（或 i=1~9 依平台模板）。',
    answer: `for i in range(1, 10):\n    for j in range(1, 10):\n        print('%s*%s=%2s' % (i, j, i*j), end='  ')\n    print()`,
    path: BASE + '\\BC\\103',
  },
  {
    type: '程序设计',
    id: 2,
    score: 10.0,
    title: '斐波那契数列（递归写法）',
    desc: '在 Program ~ End 范围内补全斐波那契函数：f(1)=f(2)=1，其余 f(n)=f(n-1)+f(n-2)。',
    answer: `def Fibonacci(i):\n    if i == 1 or i == 2:\n        return 1\n    else:\n        return Fibonacci(i-1) + Fibonacci(i-2)`,
    path: BASE + '\\BC\\108',
  },
  {
    type: '程序设计',
    id: 3,
    score: 10.0,
    title: '三位数排列（数字不重复）',
    desc: '用 1、2、3 三个数字组成所有互不相同且无重复数字的三位数，并输出。',
    answer: `for i in [1,2,3]:\n    for j in [1,2,3]:\n        for k in [1,2,3]:\n            if i!=j and j!=k and i!=k:\n                print(i*100 + j*10 + k)`,
    path: BASE + '\\BC\\100',
  },
];

/* ============================================================
 *  可选：按题型分组读取
 * ============================================================ */
const byType = (type) => questions.filter((q) => q.type === type);

//  Node 环境导出（如需）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, byType };
}