/**
 * 万维全自动网络考试平台 - 题库数据（第五套）
 * 试卷编号：15000058
 * 题型分布：单选5 + 程序填空4 + 程序改错4 + 程序设计3
 * 路径已替换：C:\Exam → C:\Users\Administrator\Desktop\新建文件夹\Exam
 */
const BASE_PATH = 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000058';

const questions = [
  // ═══════════════════════════════════════════
  //  一、单选题（共5题，每题2.0分）
  // ═══════════════════════════════════════════
  {
    type: '单选',
    id: 1,
    score: 2.0,
    question: '以下关于文件的描述中，正确的是()。',
    options: [
      'A. 使用 open() 打开文件时，必须要用 r 或 w 指定打开方式，不能省略',
      'B. 采用 readlines() 可以读入文件的全部内容，返回一个列表',
      'C. 文件打开后，可以用 write() 控制对文件内容的读写位置',
      'D. 如果没有采用 close() 关闭文件，Python 程序退出时文件将不会自动关闭',
    ],
    answer: 'B',
    analysis: 'A错误：默认模式为 r，可省略；C错误：write() 仅写入，seek() 控制读写位置；D错误：Python 退出时会自动关闭未关闭的文件。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 2,
    score: 2.0,
    question: 'Python 读取文件中一行内容的操作是()。',
    options: ['A. readtext', 'B. readline', 'C. readall', 'D. read'],
    answer: 'B',
    analysis: 'readline() 读取单行；read() 读取全部；readlines() 读取全部并返回列表。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 3,
    score: 2.0,
    question: 'str(int(3.14)) 结果为()。',
    options: ['A. 3.14', 'B. "3.14"', 'C. "3"', 'D. 3.2'],
    answer: 'C',
    analysis: 'int(3.14)=3，str(3)="3"。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 4,
    score: 2.0,
    question: '4 // 3 结果为()。',
    options: ['A. 1', 'B. 1.33', 'C. 0', 'D. 4'],
    answer: 'A',
    analysis: '// 为整数除法，4除以3商1余1，取整数部分1。',
    path: BASE_PATH + '\\CK',
  },
  {
    type: '单选',
    id: 5,
    score: 2.0,
    question: '以下关于 Python 缩进的描述中，错误的是()。',
    options: [
      'A. 缩进表达了所属关系和代码块的所属范围',
      'B. 缩进是可以嵌套的，从而形成多层缩进',
      'C. 判断、循环、函数等都能够通过缩进包含一批代码',
      'D. Python 用严格的缩进表示程序的格式框架，所有代码都需要在行前至少加一个空格',
    ],
    answer: 'D',
    analysis: 'D错误：顶级代码无需缩进；缩进量通常为4个空格，但并非强制“至少一个空格”。',
    path: BASE_PATH + '\\CK',
  },

  // ═══════════════════════════════════════════
  //  二、程序填空题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序填空',
    id: 1,
    score: 5.0,
    title: '等差数列生成',
    question: '获得用户输入的以英文逗号分隔的三个数字，记为 a、b、c，以 a 为起始数值，b 为差，c 为数值的数量，产生一个递增的等差数列，以列表格式输出。',
    sample: '输入：15,3,3 → 输出：[15, 18, 21]',
    blanks: [
      { position: 16, code: 'eval(input())', desc: '接收逗号分隔的输入并转为元组' },
      { position: 20, code: 'append(a + b * i)', desc: '计算等差项并添加到列表' },
    ],
    fullCode: `a, b, c = eval(input())
ls = []
for i in range(c):
    ls.append(a + b * i)
print(ls)`,
    path: BASE_PATH + '\\CK\\（未标注编号，依上下文补）',
  },
  {
    type: '程序填空',
    id: 2,
    score: 5.0,
    title: '成绩单格式化输出',
    question: '将列表中的姓名和成绩拼接成一段话输出。',
    sample: '输入：[["张三",90,87,95],["李四",83,80,87]] → 输出：亲爱的张三，你的考试成绩是：英语90，数学87，Python语言95，总成绩272.特此通知。',
    blanks: [
      { position: 22, code: 'st[1] + st[2] + st[3]', desc: '计算总成绩' },
      { position: 24, code: '4', desc: '循环4个元素（姓名+3科成绩）' },
      { position: 26, code: 'st[i]', desc: '依次取列表中的元素' },
    ],
    fullCode: `std = [['张三',90,87,95],['李四',83,80,87],['王五',73,57,55]]
modl = "亲爱的{}，你的考试成绩是：英语{}，数学{}，Python语言{}，总成绩{}。特此通知。"
for st in std:
    cnt = st[1] + st[2] + st[3]
    for i in range(4):
        cnt += st[i]  # 注：此处原代码逻辑有误，正确应为直接格式化输出
    print(modl.format(st[0], st[1], st[2], st[3], cnt))`,
    note: '原代码第26行逻辑冗余，正确实现无需内层循环，直接用 st[1]+st[2]+st[3] 计算总分即可。',
    path: BASE_PATH + '\\CK\\87',
  },
  {
    type: '程序填空',
    id: 3,
    score: 5.0,
    title: '字符串逆序与长度输出',
    question: '获得用户输入的一个字符串，将字符串逆序输出，同时紧接着输出字符串的个数。',
    blanks: [
      { position: 14, code: 's[::-1]', desc: '字符串切片逆序' },
      { position: 16, code: 'len(s)', desc: '输出字符串长度' },
    ],
    fullCode: `s = input()
print(s[::-1], end='')
print(len(s))`,
    path: BASE_PATH + '\\CK\\78',
  },
  {
    type: '程序填空',
    id: 4,
    score: 5.0,
    title: '单词居中输出',
    question: '获得用户输入的一个长度小于20的英文单词，以20字符宽居中输出，第一行输出20个"="，第二行左右两边输出"|"，单词居中，其他位置用"*"填充。',
    sample: '输入：python → 输出：\n====================\n|******python******|',
    blanks: [
      { position: 20, code: '='*20', desc: '生成20个等号' },
      { position: 23, code: '|{:*^18}|', desc: '居中对齐，宽度18，两侧补*' },
    ],
    fullCode: `f = input("请输入一个单词:")
print("{}".format('='*20))
print("|{:*^18}|".format(f))`,
    path: BASE_PATH + '\\CK\\99',
  },

  // ═══════════════════════════════════════════
  //  三、程序改错题（共4题，每题5.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序改错',
    id: 1,
    score: 5.0,
    title: '奇偶数列求和',
    question: '当输入 n 为偶数时，求 1/2 + 1/4 + ... + 1/n；当输入 n 为奇数时，求 1/1 + 1/3 + ... + 1/n。',
    errors: [
      { line: 19, original: 'for i in range(2,n+1):', corrected: 'for i in range(2, n+1, 2):', reason: '漏写步长2，应只遍历偶数' },
      { line: 27, original: 's = peven(n)', corrected: 's = fp(n)', reason: 'fp 是传入的函数指针，应调用 fp 而非固定 peven' },
    ],
    fullCode: `def peven(n):
    s = 0
    for i in range(2, n+1, 2):
        s += 1/i
    return s

def podd(n):
    s = 0
    for i in range(1, n+1, 2):
        s += 1/i
    return s

def dcall(fp, n):
    s = fp(n)
    return s

n = int(input('input a number:\\n'))
if n % 2 == 0:
    sum = dcall(peven, n)
else:
    sum = dcall(podd, n)
print(sum)`,
    path: BASE_PATH + '\\GC\\83',
  },
  {
    type: '程序改错',
    id: 2,
    score: 5.0,
    title: '公式计算（1 - 1/2² - 1/3² - ... - 1/m²）',
    question: '根据整型形参 m 的值，计算 1 - 1/(2×2) - 1/(3×3) - ... - 1/(m×m)。',
    errors: [
      { line: 20, original: 'for i in range(2,m):', corrected: 'for i in range(2, m+1):', reason: 'range 终点需包含 m' },
      { line: 22, original: 'y -= 1.0/i', corrected: 'y -= 1.0/(i*i)', reason: '分母应为 i 的平方' },
      { line: 28, original: 'print(\'结果为:%.6f\', fun(m))', corrected: 'print(\'结果为:%.6f\' % fun(m))', reason: '格式化输出符号错误，应为 % 而非 ,' },
    ],
    fullCode: `def fun(m):
    y = 1.0
    for i in range(2, m+1):
        y -= 1.0/(i*i)
    return y

m = int(input("请输入整型形参m的值:"))
print('结果为:%.6f' % fun(m))`,
    path: BASE_PATH + '\\GC\\92',
  },
  {
    type: '程序改错',
    id: 3,
    score: 5.0,
    title: '折半查找',
    question: '在有序数组中折半查找整数 m，找到返回下标，否则返回 -1。',
    errors: [
      { line: 26, original: 'mid=(low+high)/2', corrected: 'mid=(low+high)//2', reason: '索引必须为整数，用 // 整除' },
      { line: 30, original: 'else if(m<a[mid]):', corrected: 'elif m>a[mid]:', reason: 'Python 无 else if，应为 elif；且逻辑应为 m 大于中间值时向右查找' },
    ],
    fullCode: `def fun(a, m):
    low = 0
    high = len(a)-1
    while low <= high:
        mid = (low + high) // 2
        if m < a[mid]:
            high = mid - 1
        elif m > a[mid]:
            low = mid + 1
        else:
            return mid
    return -1

a = [-3,4,7,9,13,45,67,89,100,180]
k = fun(a, int(input("请输入要查找的整数m:")))
print(f"m={m}, index={k}" if k>=0 else "没有找到！")`,
    path: BASE_PATH + '\\GC\\96',
  },
  {
    type: '程序改错',
    id: 4,
    score: 5.0,
    title: '年龄递推',
    question: '第5个人比第4个人大2岁，第4个人比第3个人大2岁……第1个人10岁，求第5个人的年龄。',
    errors: [
      { line: 18, original: 'if n=1:', corrected: 'if n == 1:', reason: '赋值运算符误用为比较运算符' },
      { line: 22, original: 'c = age(n) + 2', corrected: 'c = age(n-1) + 2', reason: '应调用 n-1 岁的年龄再加2' },
      { line: 27, original: 'print(age())', corrected: 'print(age(5))', reason: '需传入参数5，求第5个人的年龄' },
    ],
    fullCode: `def age(n):
    if n == 1:
        return 10
    else:
        return age(n-1) + 2

print(age(5))  # 输出18`,
    path: BASE_PATH + '\\GC\\105',
  },

  // ═══════════════════════════════════════════
  //  四、程序设计题（共3题，每题10.0分）
  // ═══════════════════════════════════════════
  {
    type: '程序设计',
    id: 1,
    score: 10.0,
    title: '倒三角形图案',
    question: '使用 for 循环输出倒三角形（4行，从上到下星号数：7、5、3、1）。',
    sample: `*******
 *****
  ***
   *`,
    answer: `for i in range(1,5):
    for j in range(4-i):
        print(" ", end="")
    for j in range(1, 2*i):
        print("*", end="")
    print()`,
    path: BASE_PATH + '\\BC\\102',
  },
  {
    type: '程序设计',
    id: 2,
    score: 10.0,
    title: '正三角形图案',
    question: '使用 for 循环输出正三角形（5行，从上到下星号数：1、3、5、7、9）。',
    sample: `    *
   ***
  *****
 *******
*********`,
    answer: `for i in range(1,6):
    for j in range(5-i):
        print(" ", end="")
    for j in range(2*i-1):
        print("*", end="")
    print()`,
    path: BASE_PATH + '\\BC\\（未标注，依上下文补）',
  },
  {
    type: '程序设计',
    id: 3,
    score: 10.0,
    title: '1-10的平方列表',
    question: '将1-10的平方依次添加到列表，并分阶段输出列表。',
    sample: `[1]
[1, 4]
[1, 4, 9]
...
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`,
    answer: `squares = []
for x in range(1, 11):
    squares.append(x**2)
    print(squares)`,
    path: BASE_PATH + '\\BC\\112',
  },
];

// 辅助函数：按题型筛选
const getByType = (type) => questions.filter(q => q.type === type);

// 导出（Node环境可用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, getByType };
}