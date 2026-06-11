// 完整Python考试题库（含所有题型）
const pythonExamBank = {
  // 单选题：共39道
  singleChoice: [
    {
      id: 1,
      type: "single",
      title: "在Python中,使用open()打开Windows操作系统D盘下的一个文件,路径名错误的是()。",
      options: [
        "A. D:\\PythonTest\\a.txt",
        "B. D:\\\\PythonTest\\\\a.txt",
        "C. D:/PythonTest/a.txt",
        "D. D://PythonTest//a.txt"
      ],
      answer: "A",
      analysis: "Windows路径中反斜杠需要转义为\\\\，或使用正斜杠/，选项A未转义会被识别为转义字符。"
    },
    {
      id: 2,
      type: "single",
      title: "以下关于Python文件打开模式的描述中,错误的是()。",
      options: [
        "A. 只读模式是r",
        "B. 覆盖写模式是w",
        "C. 追加写模式是a",
        "D. 创建写模式是n"
      ],
      answer: "D",
      analysis: "Python没有'n'文件打开模式，创建写模式使用'x'，文件不存在则创建，存在则报错。"
    },
    {
      id: 3,
      type: "single",
      title: "5.0//2.0结果为()。",
      options: [
        "A. 2",
        "B. 2.5",
        "C. 3",
        "D. 2.0"
      ],
      answer: "D",
      analysis: "//是整数除法，但操作数为浮点数时结果仍为浮点数，5.0//2.0=2.0。"
    },
    {
      id: 4,
      type: "single",
      title: "len('a\\nb\\tc')打印在屏幕上为()。",
      options: [
        "A. 4",
        "B. 3",
        "C. 5",
        "D. 7"
      ],
      answer: "C",
      analysis: "转义字符'\\n'和'\\t'各算1个字符，总长度为a(1)+\\n(1)+b(1)+\\t(1)+c(1)=5。"
    },
    {
      id: 5,
      type: "single",
      title: "x=0;x=1.5;x=True;x='abc',则x值为()。",
      options: [
        "A. 0",
        "B. 1.5",
        "C. True",
        "D. 'abc'"
      ],
      answer: "D",
      analysis: "Python中变量可以被重复赋值，最后一次赋值的值为变量当前值。"
    },
    {
      id: 6,
      type: "single",
      title: "下列选项中合法的标识符是()。",
      options: [
        "A. 7a_b",
        "B. Break",
        "C. _a$b",
        "D. 7ab"
      ],
      answer: "B",
      analysis: "Python标识符只能包含字母、数字和下划线，且不能以数字开头，不能包含$等特殊字符；Break不是关键字，是合法标识符。"
    },
    {
      id: 7,
      type: "single",
      title: "表达式3*(2+12%3)**3/5的结果是()。",
      options: [
        "A. 129.6",
        "B. 4",
        "C. 43.2",
        "D. 4.8"
      ],
      answer: "D",
      analysis: "运算顺序：先算括号内12%3=0，2+0=2；再算2**3=8；3*8=24；24/5=4.8。"
    },
    {
      id: 8,
      type: "single",
      title: "Python语句print(0xA+0xB)的输出结果是()。",
      options: [
        "A. 0xA+0xB",
        "B. A+B",
        "C. 0xA0xB",
        "D. 21"
      ],
      answer: "D",
      analysis: "0xA是十六进制10，0xB是十六进制11，10+11=21。"
    },
    {
      id: 9,
      type: "single",
      title: "拟在屏幕上输出Hello World,使用的Python语句是()。",
      options: [
        "A. printf('Hello World')",
        "B. print(Hello World)",
        "C. print('Hello World')",
        "D. printf('Hello World')"
      ],
      answer: "C",
      analysis: "Python使用print()函数输出，字符串需要用引号包裹；printf是C语言的输出函数。"
    },
    {
      id: 10,
      type: "single",
      title: "换行的转义符为()。",
      options: [
        "A. \\b",
        "B. \\n",
        "C. \\t",
        "D. \\f"
      ],
      answer: "B",
      analysis: "\\n表示换行，\\b表示退格，\\t表示制表符，\\f表示换页。"
    },
    {
      id: 11,
      type: "single",
      title: "文件描述题：以下不属于Python文件操作方法的是()。",
      options: [
        "A. read()",
        "B. write()",
        "C. join()",
        "D. readline()"
      ],
      answer: "C",
      analysis: "join()是字符串方法，用于连接序列元素；read()、write()、readline()均为文件对象的操作方法。"
    },
    {
      id: 12,
      type: "single",
      title: "读取单行文件题：以下关于readline()方法的描述正确的是()。",
      options: [
        "A. 读取文件全部内容",
        "B. 读取文件的一行内容",
        "C. 读取文件的所有行并返回列表",
        "D. 向文件写入一行内容"
      ],
      answer: "B",
      analysis: "readline()读取一行，read()读取全部，readlines()读取所有行返回列表。"
    },
    {
      id: 13,
      type: "single",
      title: "str(int(3.14))运算题：str(int(3.14))的结果是()。",
      options: [
        "A. '3.14'",
        "B. '3'",
        "C. 3",
        "D. 3.14"
      ],
      answer: "B",
      analysis: "int(3.14)转换为整数3，str(3)转换为字符串'3'。"
    },
    {
      id: 14,
      type: "single",
      title: "4//3整除题：4//3的结果是()。",
      options: [
        "A. 1",
        "B. 1.333",
        "C. 2",
        "D. 1.0"
      ],
      answer: "A",
      analysis: "//是整数除法，向下取整，4//3=1。"
    },
    {
      id: 15,
      type: "single",
      title: "Python缩进描述题：以下关于Python缩进的说法正确的是()。",
      options: [
        "A. 缩进可以用任意数量的空格",
        "B. 缩进只能用4个空格",
        "C. 缩进是Python语法的一部分，必须严格一致",
        "D. 缩进只是为了代码美观，不影响运行"
      ],
      answer: "C",
      analysis: "Python使用缩进表示代码块，必须严格一致，通常使用4个空格。"
    },
    {
      id: 16,
      type: "single",
      title: "数学表达式转Python语法题：数学表达式a²+b²对应的Python语法是()。",
      options: [
        "A. a^2 + b^2",
        "B. a**2 + b**2",
        "C. a*2 + b*2",
        "D. a² + b²"
      ],
      answer: "B",
      analysis: "Python中幂运算使用**运算符，^是按位异或运算符。"
    },
    {
      id: 17,
      type: "single",
      title: "+运算符用法题：以下关于+运算符的说法错误的是()。",
      options: [
        "A. 可以用于数字加法",
        "B. 可以用于字符串拼接",
        "C. 可以用于列表拼接",
        "D. 可以用于字典拼接"
      ],
      answer: "D",
      analysis: "+运算符支持数字加法、字符串和列表拼接，不支持字典拼接。"
    },
    {
      id: 18,
      type: "single",
      title: "5%2取余题：5%2的结果是()。",
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. 2.5"
      ],
      answer: "B",
      analysis: "%是取余运算符，5除以2余1。"
    },
    {
      id: 19,
      type: "single",
      title: "合法变量名判断题：以下哪个是合法的Python变量名？()",
      options: [
        "A. 123abc",
        "B. abc-123",
        "C. _abc123",
        "D. if"
      ],
      answer: "C",
      analysis: "变量名不能以数字开头，不能包含-等特殊字符，不能使用关键字if。"
    },
    {
      id: 20,
      type: "single",
      title: "Python数据类型判断题：以下不属于Python基本数据类型的是()。",
      options: [
        "A. int",
        "B. float",
        "C. array",
        "D. str"
      ],
      answer: "C",
      analysis: "array是numpy库中的数组类型，不是Python基本数据类型。"
    },
    {
      id: 21,
      type: "single",
      title: "打印文件对象(exam.txt)题：print(open('exam.txt'))的输出是()。",
      options: [
        "A. 文件的全部内容",
        "B. 文件的第一行内容",
        "C. 文件对象的内存地址",
        "D. 文件名"
      ],
      answer: "C",
      analysis: "直接打印文件对象会输出其内存地址，需要使用read()等方法读取内容。"
    },
    {
      id: 22,
      type: "single",
      title: "打印文件对象(family.txt)题：以下哪个方法可以读取文件的所有行并返回列表？()",
      options: [
        "A. read()",
        "B. readline()",
        "C. readlines()",
        "D. write()"
      ],
      answer: "C",
      analysis: "readlines()读取所有行并返回列表，每行作为列表的一个元素。"
    },
    {
      id: 23,
      type: "single",
      title: "连续比较表达式-1<x<1题：以下关于Python连续比较的说法正确的是()。",
      options: [
        "A. -1<x<1等价于-1<x and x<1",
        "B. -1<x<1等价于-1<x or x<1",
        "C. Python不支持连续比较",
        "D. -1<x<1等价于x>-1 and x>1"
      ],
      answer: "A",
      analysis: "Python支持连续比较，-1<x<1等价于-1<x and x<1。"
    },
    {
      id: 24,
      type: "single",
      title: "浮点数取余5.0%2.0题：5.0%2.0的结果是()。",
      options: [
        "A. 1",
        "B. 1.0",
        "C. 2",
        "D. 2.0"
      ],
      answer: "B",
      analysis: "浮点数取余结果仍为浮点数，5.0%2.0=1.0。"
    },
    {
      id: 25,
      type: "single",
      title: "Python语言类型题：Python是一种()语言。",
      options: [
        "A. 编译型",
        "B. 解释型",
        "C. 机器语言",
        "D. 汇编语言"
      ],
      answer: "B",
      analysis: "Python是解释型语言，代码逐行解释执行。"
    },
    {
      id: 26,
      type: "single",
      title: "八进制数字判断题：以下哪个是合法的八进制数字？()",
      options: [
        "A. 0o12",
        "B. 0x12",
        "C. 0b12",
        "D. 12"
      ],
      answer: "A",
      analysis: "八进制以0o开头，十六进制以0x开头，二进制以0b开头。"
    },
    {
      id: 27,
      type: "single",
      title: "连续比较4<=5<=6逻辑题：4<=5<=6的结果是()。",
      options: [
        "A. True",
        "B. False",
        "C. 4",
        "D. 6"
      ],
      answer: "A",
      analysis: "4<=5为True，5<=6为True，所以整体结果为True。"
    },
    {
      id: 28,
      type: "single",
      title: "混合运算符3**2*4//6%7计算题：3**2*4//6%7的结果是()。",
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. 3"
      ],
      answer: "A",
      analysis: "运算顺序：3**2=9；9*4=36；36//6=6；6%7=6。"
    },
    {
      id: 29,
      type: "single",
      title: "浮点除法5/2题：5/2的结果是()。",
      options: [
        "A. 2",
        "B. 2.5",
        "C. 3",
        "D. 2.0"
      ],
      answer: "B",
      analysis: "/是浮点除法，结果为浮点数，5/2=2.5。"
    },
    {
      id: 30,
      type: "single",
      title: "运算符优先级(and/+/*=/==)题：以下运算符优先级最高的是()。",
      options: [
        "A. and",
        "B. +",
        "C. *",
        "D. =="
      ],
      answer: "C",
      analysis: "运算符优先级：* > + > == > and。"
    },
    {
      id: 31,
      type: "single",
      title: "文件打开函数题：以下哪个是Python文件打开函数？()",
      options: [
        "A. open()",
        "B. file()",
        "C. fopen()",
        "D. openfile()"
      ],
      answer: "A",
      analysis: "Python使用open()函数打开文件，fopen()是C语言的文件打开函数。"
    },
    {
      id: 32,
      type: "single",
      title: "int(3.14)类型转换题：int(3.14)的结果是()。",
      options: [
        "A. 3",
        "B. 3.0",
        "C. 4",
        "D. '3'"
      ],
      answer: "A",
      analysis: "int()转换浮点数时会截断小数部分，保留整数部分。"
    },
    {
      id: 33,
      type: "single",
      title: "bool('a')布尔转换题：bool('a')的结果是()。",
      options: [
        "A. True",
        "B. False",
        "C. 'a'",
        "D. 1"
      ],
      answer: "A",
      analysis: "非空字符串转换为布尔值为True，空字符串为False。"
    },
    {
      id: 34,
      type: "single",
      title: "代码块分隔语法题：Python中使用()分隔代码块。",
      options: [
        "A. 大括号{}",
        "B. 缩进",
        "C. 分号;",
        "D. 圆括号()"
      ],
      answer: "B",
      analysis: "Python使用缩进表示代码块，其他语言常用大括号。"
    },
    {
      id: 35,
      type: "single",
      title: "编译/解释型语言概念题：以下关于编译型和解释型语言的说法正确的是()。",
      options: [
        "A. 编译型语言执行速度快，开发效率高",
        "B. 解释型语言执行速度慢，开发效率高",
        "C. Python是编译型语言",
        "D. C语言是解释型语言"
      ],
      answer: "B",
      analysis: "编译型语言执行速度快，开发效率低；解释型语言执行速度慢，开发效率高；Python是解释型，C是编译型。"
    },
    {
      id: 36,
      type: "single",
      title: "float('1.38')类型转换题：float('1.38')的结果是()。",
      options: [
        "A. '1.38'",
        "B. 1.38",
        "C. 1",
        "D. 2"
      ],
      answer: "B",
      analysis: "float()将字符串转换为对应的浮点数。"
    },
    {
      id: 37,
      type: "single",
      title: "Python语言特点判断题：以下哪个不是Python的特点？()",
      options: [
        "A. 简洁易读",
        "B. 跨平台",
        "C. 执行速度快",
        "D. 面向对象"
      ],
      answer: "C",
      analysis: "Python执行速度较慢，这是解释型语言的特点。"
    },
    {
      id: 38,
      type: "single",
      title: "complex(a)复数转换题：complex(3)的结果是()。",
      options: [
        "A. 3",
        "B. 3+0j",
        "C. 0+3j",
        "D. 3j"
      ],
      answer: "B",
      analysis: "complex(real)创建实部为real、虚部为0的复数。"
    },
    {
      id: 39,
      type: "single",
      title: "type(1+0xf*3.14)类型判断题：type(1+0xf*3.14)的结果是()。",
      options: [
        "A. <class 'int'>",
        "B. <class 'float'>",
        "C. <class 'complex'>",
        "D. <class 'str'>"
      ],
      answer: "B",
      analysis: "0xf是十六进制15，15*3.14=47.1，1+47.1=48.1，是浮点数。"
    }
  ],

  // 填空题：共20道
  fillBlank: [
    {
      id: 1,
      type: "fill",
      title: "开展基本的科学计算一般分为两个步骤:【1】和【2】。",
      blankCount: 2,
      answer: [
        "建立数学模型或定义问题",
        "利用计算机及数学软件进行数值计算和结果分析"
      ],
      analysis: "科学计算首先要梳理问题、建立数学模型，再借助工具完成计算与结果分析。"
    },
    {
      id: 2,
      type: "fill",
      title: "在Python中,列表的元素都是【1】(有序/无序)存放的。每个元素都对应一个位置编号, 这个位置编号称为元素的【2】,其值从【3】开始,向右依次【4】进行编号的。 Python可以通过它来访问列表元素,具体格式为【5】。",
      blankCount: 5,
      answer: [
        "有序",
        "索引",
        "0",
        "递增(依次加1)",
        "列表名[索引]"
      ],
      analysis: "Python列表是有序序列，索引从0开始，通过 列表名[索引] 访问对应元素。"
    },
    {
      id: 3,
      type: "fill",
      title: "在字典dic1中修改指定键所对应的值或者新增键值对,都可以通过表达式【1】完成。",
      blankCount: 1,
      answer: [
        "dic1[键] = 值"
      ],
      analysis: "字典通过 字典名[键] = 值 既可修改已有键的值，也可新增键值对。"
    },
    {
      id: 4,
      type: "fill",
      title: "在Python中,字符串可以使用一对【1】,【2】,或者【3】来表示。",
      blankCount: 3,
      answer: [
        "单引号('')",
        "双引号(\"\")",
        "三个单引号(''' ''')"
      ],
      analysis: "Python字符串支持单引号、双引号和三引号，三引号可用于多行字符串。"
    },
    {
      id: 5,
      type: "fill",
      title: "创建空字典的方法有两种:字典名=【1】和字典名=【2】。",
      blankCount: 2,
      answer: [
        "{}",
        "dict()"
      ],
      analysis: "Python创建空字典可直接使用大括号{}，或调用dict()构造函数。"
    },
    {
      id: 6,
      type: "fill",
      title: "在字典中修改指定键所对应的值或者新增键值对,都可以通过表达式【1】完成。",
      blankCount: 1,
      answer: [
        "字典名[键] = 值"
      ],
      analysis: "字典增改键值对统一使用 字典名[键] = 值 语法。"
    },
    {
      id: 7,
      type: "fill",
      title: "假设数组arr = np.array([[1, 2, 3], [4,5, 6]], dtype = np.int64),那么 arr.ndim的值为【1】,arr.shape的值为【2】,arr.size的值为【3】,arr.dtype的值为【4】，arr.itemsize的值为【5】。",
      blankCount: 5,
      answer: [
        "2",
        "(2, 3)",
        "6",
        "numpy.int64",
        "8"
      ],
      analysis: "ndim表示数组维度，shape表示各维度大小，size表示元素总数，dtype表示数据类型，itemsize表示每个元素的字节数。"
    },
    {
      id: 8,
      type: "fill",
      title: "列表的【1】方法用于对列表元素进行排序,参数【2】的值决定了排序方式,其为True表示【3】,为False表示【4】;参数缺省时默认值为【5】。列表 a=[4,2,1,3,5] 执行表达式a.sort(reverse=True)后,列表a的值为【6】。",
      blankCount: 6,
      answer: [
        "sort()",
        "reverse",
        "降序排序",
        "升序排序",
        "False",
        "[5, 4, 3, 2, 1]"
      ],
      analysis: "list.sort()原地排序，reverse=True降序，reverse=False升序（默认）。"
    },
    {
      id: 9,
      type: "fill",
      title: "字典的键具有【1】性。同一个字典中【2】(允许/不允许)出现相同的键,不同的键【3】(允许/不允许)出现相同的值。",
      blankCount: 3,
      answer: [
        "唯一",
        "不允许",
        "允许"
      ],
      analysis: "字典的键必须唯一不可重复，但不同键可以对应相同的值。"
    },
    {
      id: 10,
      type: "fill",
      title: "DataFrame对象从整体上看包含行索引、列索引和元素值,分别可以用DataFrame对象的【1】、【2】和【3】属性来获得其内容。",
      blankCount: 3,
      answer: [
        "index",
        "columns",
        "values"
      ],
      analysis: "pandas中，index获取行索引，columns获取列索引，values获取元素值的二维数组。"
    },
    {
      id: 11,
      type: "fill",
      title: "当成员运算符\"in\"和\"not in\"作用于字典时,判断的是【1】是否在字典中。",
      blankCount: 1,
      answer: [
        "键(key)"
      ],
      analysis: "in/not in作用于字典时，只检查键是否存在，不检查值。"
    },
    {
      id: 12,
      type: "fill",
      title: "Python中的字符串本质上是一个类,字符串类中提供了大量的方法。例如,【1】方法可以把原字符串中的大写字母全部转换为小写 字母,并生成一个新的字符串;【2】方法可以把字符串按某种标准分割成若干个子串,并生成一个由这些子串构成的列表。",
      blankCount: 2,
      answer: [
        "lower()",
        "split()"
      ],
      analysis: "lower()将大写转小写，split()按分隔符分割字符串为列表，两个方法都不修改原字符串。"
    },
    {
      id: 13,
      type: "fill",
      title: "除列表本身的sort()方法以外,Python还提供了内置函数【1】对指定的列表进行排序并返回 一个新的列表,其reverse参数与sort方法的用法相同。与sort方法不同的是,该函数【2】(改变/不改变)列表本身。",
      blankCount: 2,
      answer: [
        "sorted()",
        "不改变"
      ],
      analysis: "sorted()返回新的排序后的列表，原列表保持不变；list.sort()原地修改原列表。"
    },
    {
      id: 14,
      type: "fill",
      title: "列表属于可迭代类型,可通过for循环对列表元素进行遍历。设已有列表a=[1,2,3, 4,5], 变量n=len(a),则可以使用以下两种方式对列表a中的所有元素进行遍历输出。\n(1)使用range函数生成索引序列,然后通过索引进行遍历,代码如下:\n【1】\nprint(a[i])\n(2)直接通过元素进行遍历,代码如下:\n【2】\nprint(element)",
      blankCount: 2,
      answer: [
        "for i in range(n):",
        "for element in a:"
      ],
      analysis: "列表遍历的两种常用方式：索引遍历和元素直接遍历。"
    },
    {
      id: 15,
      type: "fill",
      title: "numpy库是第三方库,安装好以后,一般采用如下方式引用numpy库:【1】",
      blankCount: 1,
      answer: [
        "import numpy as np"
      ],
      analysis: "numpy的标准导入方式是import numpy as np，np是行业通用别名。"
    },
    {
      id: 16,
      type: "fill",
      title: "数值列表可使用Python提供的内置函数进行简单的统计。求和可使用sum函数，计算最大值可使用max函数，计算最小值可使用min()函数。设已有列表a=[1,2,3,4,5]，则表达式sum(a)的值为【1】，表达式max(a)的值为【2】，表达式min(a)的值为【3】。",
      blankCount: 3,
      answer: ["15", "5", "1"],
      analysis: "sum()计算列表元素和，max()返回最大值，min()返回最小值。"
    },
    {
      id: 17,
      type: "fill",
      title: "字典中的键一旦增加就【1】(能/不能)修改，只能【2】。",
      blankCount: 2,
      answer: ["不能", "重新赋值或删除后重新插入"],
      analysis: "字典的键具有不可变性，不能直接修改，只能通过重新赋值或删除后重新添加的方式更新。"
    },
    {
      id: 18,
      type: "fill",
      title: "列表与字符串一样，也支持\"+\"和\"*\"两种运算，结果为一个新的列表。假设已有列表myList=['a','b','c']，则myList*3的结果为【1】，myList+['d','e']的结果为【2】。这两种运算均【3】(改变/不改变)列表本身。如需将列表['d','e']中的所有元素一次性添加至列表myList中，可使用列表的【4】方法。",
      blankCount: 4,
      answer: [
        "['a','b','c','a','b','c','a','b','c']",
        "['a','b','c','d','e']",
        "不改变",
        "extend()"
      ],
      analysis: "列表*n重复n次，+拼接两个列表，均返回新列表；extend()方法在原列表末尾添加多个元素。"
    },
    {
      id: 19,
      type: "fill",
      title: "由于Series对象的索引和值有着一一对应的关系，而且索引和值经常一起出现，而这个特点和字典非常像，所以在创建Series对象时，经常利用【1】来创建Series对象，但是要清楚地知道，字典是【2】(无序/有序)的，而Series对象是【3】(无序/有序)的。",
      blankCount: 3,
      answer: ["字典", "无序", "有序"],
      analysis: "pandas中可通过字典创建Series，字典本身无序，Series会保留索引的有序性。"
    },
    {
      id: 20,
      type: "fill",
      title: "pyplot模块提供很多绘制不同种类图形的函数。例如，【1】函数可以绘制箱形图，【2】函数可以绘制条形图，【3】函数可以绘制直方图，【4】函数可以绘制饼图，【5】函数可以绘制极坐标图，【6】函数可以绘制散点图。",
      blankCount: 6,
      answer: ["boxplot", "bar", "hist", "pie", "polar", "scatter"],
      analysis: "matplotlib.pyplot常用绘图函数对应不同图表类型。"
    }
  ],

  // 程序填空题：共16道
  programFill: [
    {
      id: 1,
      type: "programFill",
      title: "获得用户输入的英文逗号','分隔三个数，为a、b、c，以a为起始数，b为公差，c为项数的等差数列，将这个数列以列表格式输出。",
      blankCount: 1,
      codeTemplate: `# --coding:cp936--
a,b,c = map(int, input().split(','))
ls = []
for i in range(c):
    ls.append(【?】)
print(ls)`,
      answer: [
        "a + i * b"
      ],
      analysis: "等差数列第i项公式：首项 + 索引 × 公差。"
    },
    {
      id: 2,
      type: "programFill",
      title: "获得用户输入的一个字符串，输出字符串长度。同时输出字符串的反转。",
      blankCount: 1,
      codeTemplate: `s = input()
print(len(s))
print(【?】, end='')`,
      answer: [
        "s[::-1]"
      ],
      analysis: "s[::-1] 是Python字符串切片反转的标准写法。"
    },
    {
      id: 3,
      type: "programFill",
      title: "定义好的学生姓名和成绩，按照指定格式输出成绩通知。",
      blankCount: 1,
      codeTemplate: `std = [['张三',90,87,95],['李四',83,80,87],['王五',73,57,55]]
model = "亲爱的{},你的考试成绩是:英语{},数学{},Python语言{},总成绩{}.特此通知。"
for st in std:
    cnt = 0
    for i in range(1,4):
        cnt += st[i]
    print(model.format(【?】, st[1], st[2], st[3], cnt))`,
      answer: [
        "st[0]"
      ],
      analysis: "st[0] 是学生姓名，作为格式化字符串的第一个参数。"
    },
    {
      id: 4,
      type: "programFill",
      title: "获得用户输入的一个长度小于20的英文单词，以20字符居中输出这个单词。第一行输出20个'='号，第二行左右两边输出'|'，单词居中，其他位置用'*'填充。",
      blankCount: 1,
      codeTemplate: `f = input("请输入一个单词:")
print("{}".format(【?】))
print("|{:*18}|".format(f))`,
      answer: [
        "=" * 20
      ],
      analysis: "第一行打印20个等号作为分隔线，第二行用*填充，居中显示单词。"
    },
    {
      id: 5,
      type: "programFill",
      title: "用户按照列表格式输入数据，将用户输入的列表中属于字符串类型的元素拼接成一个字符串，并打印输出。",
      blankCount: 1,
      codeTemplate: `ls = eval(input())
s = ""
for item in ls:
    if type(item) == type("香山"):
        s += 【?】
print(s)`,
      answer: [
        "item"
      ],
      analysis: "判断元素类型为字符串后，将其拼接到结果字符串s中。"
    },
    {
      id: 6,
      type: "programFill",
      title: "list_fruits列表是顾客从超市购买水果的列表，现在顾客把'apple'也加入列表中，然后按照单词长度排序并输出['fig','apple','orange','strawberry']。",
      blankCount: 2,
      codeTemplate: `list_fruits = ['strawberry','fig','orange']
list_fruits.【?】
ls = sorted(list_fruits, key=【?】)
print(ls)`,
      answer: [
        "append('apple')",
        "len"
      ],
      analysis: "append()添加元素到列表末尾；sorted()的key参数指定按元素长度排序。"
    },
    {
      id: 7,
      type: "programFill",
      title: "用列表推导式生成100以内的偶数平方根。",
      blankCount: 2,
      codeTemplate: `import 【?】
ls = [math.sqrt(x) for x in range(100) if 【?】]
print(ls)`,
      answer: [
        "math",
        "x % 2 == 0"
      ],
      analysis: "导入math库使用sqrt()求平方根；条件判断筛选偶数。"
    },
    {
      id: 8,
      type: "programFill",
      title: "输入一个正整数，返回该数的所有因子组成的列表。",
      blankCount: 2,
      codeTemplate: `def allFactor(n):
    if n <= 1:
        return [n]
    if n <= 3:
        return [1,n]
    i = 1
    【?】
    while i <= n:
        if n % i == 0:
            rlist.append(i)
        【?】
    return rlist
try:
    n = eval(input("请输入一个正整数:"))
    print("整数{}的因子是:{}".format(n, allFactor(n)))
except:
    print("输入错误!")`,
      answer: [
        "rlist = []",
        "i += 1"
      ],
      analysis: "初始化空列表存储因子；循环中i自增遍历所有可能的因子。"
    },
    {
      id: 9,
      type: "programFill",
      title: "输入一个字符串，返回反转后的字符串。",
      blankCount: 2,
      codeTemplate: `def str_change(str):
    return 【?】
str = input("【输入字符串:】")
print(【?】)`,
      answer: [
        "str[::-1]",
        "str_change(str)"
      ],
      analysis: "定义反转函数，调用函数并打印结果。"
    },
    {
      id: 10,
      type: "programFill",
      title: "生成斐波那契数列前10项，存入列表并输出。",
      blankCount: 2,
      codeTemplate: `arr = [1,1]
for i in range(2, 【?】):
    n = arr[i-1] + arr[i-2]
    arr.【?】
print(arr)`,
      answer: [
        "10",
        "append(n)"
      ],
      analysis: "range(2,10)生成2到9的索引，共8项，加上初始两项正好10项。"
    },
    {
      id: 11,
      type: "programFill",
      title: "输入一个小数，计算小数部分各位数字的和，以10为宽度右对齐输出。",
      blankCount: 3,
      codeTemplate: `s = input("请输入一个小数:")
s = s[::-1]
【?】
for c in s:
    if c == '.':
        【?】
    cs += eval(c)
print('{【?】}'.format(cs))`,
      answer: [
        "cs = 0",
        "break",
        ":*>"
      ],
      analysis: "反转字符串后从左到右遍历，遇到小数点停止；格式化字符串右对齐，用*填充。"
    },
    {
      id: 12,
      type: "programFill",
      title: "从品牌列表中随机选择一个品牌并输出。",
      blankCount: 2,
      codeTemplate: `import 【?】
brandlist = ['三星','苹果','vivo','OPPO','魅族']
random.seed(0)
name = 【?】
print(name)`,
      answer: [
        "random",
        "random.choice(brandlist)"
      ],
      analysis: "导入random库；random.choice()从列表中随机选择一个元素。"
    },
    {
      id: 13,
      type: "programFill",
      title: "输入一个正整数，计算其各位数字之和，并将结果以25字符居中显示，用=填充。",
      blankCount: 3,
      codeTemplate: `s=input("请输入一个正整数:")
【?】
for c in s:
    cs+=【?】
print('{【?】}'.format(cs))`,
      answer: ["cs=0", "int(c)", ":=^25"],
      analysis: "初始化cs存储和，将字符转为整数累加，格式化字符串居中显示。"
    },
    {
      id: 14,
      type: "programFill",
      title: "输入一个水果名称，判断其是否在指定水果列表中，并输出对应结果。",
      blankCount: 3,
      codeTemplate: `fruit=input('输入水果:')
lis=['苹果','哈密瓜','橘子','猕猴桃','杨梅','西瓜']
if【?】:
    【?】
else:
    【?】`,
      answer: [
        "fruit in lis",
        "print(fruit+'在列表lis中')",
        "print(fruit+'不在列表lis中')"
      ],
      analysis: "使用in运算符判断元素是否在列表中，根据结果输出不同信息。"
    },
    {
      id: 15,
      type: "programFill",
      title: "输入一个十进制数，将其转换为二进制数并输出（不含0b前缀）。",
      blankCount: 2,
      codeTemplate: `s=input("请输入一个十进制数:")
num=【?】
print("转换成二进制数是:"+【?】)`,
      answer: ["int(s)", "bin(num)[2:]"],
      analysis: "bin()函数返回带0b前缀的二进制字符串，[2:]切片去除前缀。"
    },
    {
      id: 16,
      type: "programFill",
      title: "输入一个正整数，将其以15字符宽度右对齐显示，用*填充。",
      blankCount: 1,
      codeTemplate: `n=eval(input("【请输入正整数:】"))
print("{【?】}".format(n))`,
      answer: [":*>15"],
      analysis: "格式化字符串:*>15表示右对齐，宽度15，用*填充。"
    }
  ],

  // 程序改错题：共21道
  programFix: [
    {
      id: 1,
      type: "programFix",
      title: "输入n，当n为偶数时计算1/2+1/4+...+1/n；当n为奇数时计算1/1+1/3+...+1/n。",
      errorCount: 2,
      codeTemplate: `# --coding:cp936--
def peven(n):
    s = 0
    #**********FOUND**********
    for i in range(2,n+1):
        s += 1/i
    return s

def podd(n):
    s = 0
    for i in range(1,n+1,2):
        s += 1/i
    return s

def dcall(fp,n):
    #**********FOUND**********
    s = peven(n)
    return s

n = int(input('input a number:\n'))
if n%2 == 0:
    sum = dcall(peven,n)
else:
    sum = dcall(podd,n)
print(sum)`,
      answer: [
        "for i in range(2,n+1,2):",
        "s = fp(n)"
      ],
      analysis: [
        "错误1：偶数求和循环步长应为2，否则会遍历所有数",
        "错误2：dcall是通用调用函数，应使用传入的函数指针fp调用，而非固定调用peven"
      ]
    },
    {
      id: 2,
      type: "programFix",
      title: "根据输入m计算公式：y = 1 - 1/(2²) - 1/(3²) - ... - 1/(m²)，保留6位小数输出。",
      errorCount: 3,
      codeTemplate: `# --coding:cp936--
def fun(n):
    y = 1.0
    #**********FOUND**********
    for i in range(2,m+1):
        #**********FOUND**********
        y -= 1.0/(1*1)
    return y

def main():
    m = int(input("请输入整型m的值:"))
    #**********FOUND**********
    print('结果为:%.6f' % fun(n))

if __name__ == '__main__':
    main()`,
      answer: [
        "for i in range(2,n+1):",
        "y -= 1.0/(i*i)",
        "print('结果为:%.6f' % fun(m))"
      ],
      analysis: [
        "错误1：函数参数为n，循环应使用n而非m",
        "错误2：分母应为i的平方，原代码写死为1*1",
        "错误3：调用fun函数时应传入变量m，而非未定义的n"
      ]
    },
    {
      id: 3,
      type: "programFix",
      title: "二分查找算法：在有序数组中查找指定整数m，返回其索引，未找到返回-1。",
      errorCount: 2,
      codeTemplate: `# --coding:cp936--
def fun(a,m):
    low = 0
    high = len(a)-1
    while(low <= high):
        #**********FOUND**********
        mid = (low+high)/2
        if(m < a[mid]):
            high = mid-1
        #**********FOUND**********
        elif(m < a[mid]):
            low = mid+1
        else:
            return mid
    return -1

def main():
    a = [-3,4,7,9,13,45,67,89,100,180]
    print("a数组中的数据如下:")
    for i in range(len(a)):
        print("%d" % a[i], end=' ')
    m = int(input("\\n请输入要查找的整数m,并按回车继续:"))
    k = fun(a,m)
    if(k >= 0):
        print("m={},index={}".format(m,k))
    else:
        print("没有找到!")

if __name__ == '__main__':
    main()`,
      answer: [
        "mid = (low+high)//2",
        "elif(m > a[mid]):"
      ],
      analysis: [
        "错误1：mid必须为整数索引，应使用整数除法//",
        "错误2：第二个条件判断写反了，应为m大于中间值时调整low指针"
      ]
    },
    {
      id: 4,
      type: "programFix",
      title: "递归计算年龄：第1个人10岁，第5个人比第4个人大2岁，以此类推，求第5个人的年龄。",
      errorCount: 3,
      codeTemplate: `# --coding:cp936--
def age(n):
    #**********FOUND**********
    if n == 1
        c = 10
    else:
        #**********FOUND**********
        c = age(n)+2
    return c

def main():
    #**********FOUND**********
    print(age)

if __name__ == '__main__':
    main()`,
      answer: [
        "if n == 1:",
        "c = age(n-1)+2",
        "print(age(5))"
      ],
      analysis: [
        "错误1：Python条件语句后必须加冒号",
        "错误2：递归调用应传入n-1，求前一个人的年龄",
        "错误3：函数调用必须加括号并传入参数5"
      ]
    },
    {
      id: 5,
      type: "programFix",
      title: "从k开始向前找，求能被13或17整除的前10个数的和。",
      errorCount: 3,
      codeTemplate: `# --coding:cp936--
def fun(k):
    m = 0
    mc = 0
    #**********FOUND**********
    while ((k>=2)&&(mc<10)):
        #**********FOUND**********
        if((k%13==0)||(k%17==0)):
            m += k
            mc += 1
        #**********FOUND**********
        k++
    return m

def main():
    print("%d\\n" % fun(500))

if __name__ == '__main__':
    main()`,
      answer: [
        "while (k>=2 and mc<10):",
        "if(k%13==0 or k%17==0):",
        "k -= 1"
      ],
      analysis: [
        "错误1：Python没有&&运算符，逻辑与使用and",
        "错误2：Python没有||运算符，逻辑或使用or",
        "错误3：Python没有++自增运算符，且题目要求向前找，k应递减"
      ]
    },
    {
      id: 6,
      type: "programFix",
      title: "青蛙跳台阶：一次可以跳1级或2级，求跳上n级台阶共有多少种跳法。",
      errorCount: 2,
      codeTemplate: `# --coding:cp936--
def frog(step):
    #**********FOUND**********
    if step==1 and step==2:
        return step
    a = 1
    b = 2
    c = 0
    #**********FOUND**********
    for i in range(3,step):
        c = a + b
        a = b
        b = c
    return c

step = eval(input())
print(frog(step))`,
      answer: [
        "if step==1 or step==2:",
        "for i in range(3, step + 1):"
      ],
      analysis: [
        "错误1：条件逻辑错误，step为1或2时都返回step，应使用or",
        "错误2：循环范围应包含step，否则最后一级台阶没有计算"
      ]
    },
    {
      id: 7,
      type: "programFix",
      title: "判断一个整数是否为完数（完数：所有真因子之和等于自身）。",
      errorCount: 2,
      codeTemplate: `# --coding:cp936--
def fun(n):
    #**********FOUND**********
    s = []
    for i in range(1,n):
        if n%i == 0:
            s += i
    if n == s:
        #**********FOUND**********
        return
    else:
        return False

n = eval(input())
if fun(n):
    print(n,'是完数')
else:
    print(n,'不是完数')`,
      answer: [
        "s = 0",
        "return True"
      ],
      analysis: [
        "错误1：完数需要计算因子的和，s应初始化为数值0而非空列表",
        "错误2：判断为完数时应返回布尔值True"
      ]
    },
    {
      id: 8,
      type: "programFix",
      title: "分段函数计算：根据输入x的值计算对应的f(x)。",
      errorCount: 3,
      codeTemplate: `# --coding:cp936--
def fun(x):
    #**********FOUND**********
    if(x<0 && x!=-3.0):
        y = x*x + x
    #**********FOUND**********
    elif(x>=0 && x<10.0 && x!=2.0 || x!=3.0):
        y = x*x + 5*x
    else:
        y = x*x + x - 1
    #**********FOUND**********
    return x

def main():
    x = int(input("请输入x的值,并按回车继续:"))
    f = fun(x)
    print("x={},f(x)={}".format(x,f))

if __name__ == '__main__':
    main()`,
      answer: [
        "if (x<0 and x != -3.0):",
        "elif(x>=0 and x<10.0 and x!=2.0 and x!=3.0):",
        "return y"
      ],
      analysis: [
        "错误1：Python逻辑与使用and而非&&",
        "错误2：多个条件同时满足应使用and连接，原代码逻辑错误",
        "错误3：应返回计算结果y，而非输入值x"
      ]
    },
    {
      id: 9,
      type: "programFix",
      title: "输入7个1-50之间的整数，每个数打印对应数量的*号。",
      errorCount: 3,
      codeTemplate: `# --coding:cp936--
def main():
    n = 1
    #**********FOUND**********
    while n < 7:
        a = int(input('请输入一个整数值,并按回车继续:'))
        #**********FOUND**********
        while a <= 1 or a >= 50:
            a = int(input('范围是1-50,请重新输入:'))
        #**********FOUND**********
        print(a,'*')
        n += 1

if __name__ == '__main__':
    main()`,
      answer: [
        "while n <= 7:",
        "while a < 1 or a > 50:",
        "print(a * '*')"
      ],
      analysis: [
        "错误1：需要输入7个数，循环条件应为n<=7",
        "错误2：输入范围判断错误，应排除小于1和大于50的数",
        "错误3：打印a个*号，应使用字符串乘法a * '*'"
      ]
    },
    {
      id: 10,
      type: "programFix",
      title: "判断一个数是否为同构数（同构数是指其平方的尾数等于该数本身）。",
      errorCount: 3,
      codeTemplate: `def fun(x):
    #**********FOUND**********
    k=x
    #**********FOUND**********
    if((k%10=x) or (k%100==x) or (k%1000==x)):
        return 1
    else:
        return 0

def main():
    x=int(input("请输入一个整型数值x,并按回车继续:"))
    if(x>1000):
        print("输入值不能大于1000!")
        exit(0)
    y=fun(x)
    #**********FOUND**********
    if y=0:
        print("%d是同构数" % x)
    else:
        print("%d不是同构数" % x)

if__name__=='__main__':
    main()`,
      answer: [
        "k=x*x",
        "if((k%10==x) or (k%100==x) or (k%1000==x)):",
        "if y:"
      ],
      analysis: [
        "错误1：同构数需要计算x的平方，k应赋值为x*x",
        "错误2：相等判断使用==，原代码写为=",
        "错误3：fun返回1表示是同构数，y为真时输出是同构数"
      ]
    },
    {
      id: 11,
      type: "programFix",
      title: "打印杨辉三角前t行。",
      errorCount: 2,
      codeTemplate: `def demo(t):
    print([1])
    print([1,1])
    line=[1,1]
    #**********FOUND**********
    for i in range(1,t+1):
        r=[]
        for j in range(0,len(line)-1):
            #**********FOUND**********
            r.insert(line[j]+line[j+1])
        line=[1]+r+[1]
        print(line)

demo(10)`,
      answer: [
        "for i in range(2,t):",
        "r.append(line[j]+line[j+1])"
      ],
      analysis: [
        "错误1：已打印前2行，循环从第3行开始到第t行",
        "错误2：向列表添加元素使用append()方法，不是insert()"
      ]
    },
    {
      id: 12,
      type: "programFix",
      title: "计算数列前n项的平方根之和，数列规则：第1项1，第2项1，第3项1，从第4项开始每项为前三项之和。",
      errorCount: 3,
      codeTemplate: `import math
def fun(n):
    #**********FOUND**********
    sum==1.0
    if(n<=2):
        sum=0.0
    s0=0.0
    s1=0.0
    s2=1.0
    #**********FOUND**********
    for k in range(4,n):
        s=s0+s1+s2
        sum+=math.sqrt(s)
        s0=s1
        s1=s2
        s2=s
    #**********FOUND**********
    return s

def main():
    n=int(input("请输入该数列的项数n:"))
    print('该数列的前%d项的平方根之和sum为%.6f' % fun(n))

if__name__=='__main__':
    main()`,
      answer: [
        "sum=1.0",
        "for k in range(4,n+1):",
        "return sum"
      ],
      analysis: [
        "错误1：赋值使用=，==是相等判断",
        "错误2：循环需要包含第n项，range结束值为n+1",
        "错误3：函数应返回累加和sum，不是s"
      ]
    },
    {
      id: 13,
      type: "programFix",
      title: "使用冒泡排序对整数数组进行升序排序。",
      errorCount: 3,
      codeTemplate: `def Sort(date):
    length=len(date)
    for i in range(length-1):
        #**********FOUND**********
        for j in range(0,length-i):
            #**********FOUND**********
            if(date[j]<date[j+1]):
                t=date[j]
                date[j]=date[j+1]
                #**********FOUND**********
                date[j]=t
    return date

def main():
    n=int(input("请输入n个整数的个数n:"))
    a=[]
    for i in range(n):
        a.append(int(input("请分别输入整数元素,并按回车继续:")))
    print('排序前的数组为:',a)
    print('排序后的数组为:',Sort(a))

if __name__=='__main__':
    main()`,
      answer: [
        "for j in range(0,length-i-1):",
        "if(date[j]>date[j+1]):",
        "date[j+1]=t"
      ],
      analysis: [
        "错误1：每轮排序后末尾i个元素已有序，内层循环到length-i-1",
        "错误2：升序排序需要前一个元素大于后一个时交换",
        "错误3：交换赋值错误，应将t赋值给date[j+1]"
      ]
    },
    {
      id: 14,
      type: "programFix",
      title: "根据输入m计算公式：y = 1 - 1/(2²) - 1/(3²) - ... - 1/(m²)，保留6位小数输出。",
      errorCount: 2,
      codeTemplate: `def fun(m):
    y=1.0
    #**********FOUND**********
    for i in range(2,m):
        y-=1.0/(i*i)
    return y

def main():
    m=int(input("请输入整型形参n的值:"))
    #**********FOUND**********
    print('结果为:.6f',fun(m))

if __name__=='__main__':
    main()`,
      answer: [
        "for i in range(2,m+1):",
        "print('结果为:%.6f' % fun(m))"
      ],
      analysis: [
        "错误1：循环需要包含第m项，range结束值为m+1",
        "错误2：格式化字符串缺少%运算符"
      ]
    },
    {
      id: 15,
      type: "programFix",
      title: "二分查找算法：在有序数组中查找指定整数m，返回其索引，未找到返回-1。",
      errorCount: 2,
      codeTemplate: `def fun(a,m):
    low=0
    high=len(a)-1
    while(low<=high):
        #**********FOUND**********
        mid=(low+high)/2
        if(m<a[mid]):
            high=mid-1
        #**********FOUND**********
        elif(m<a[mid]):
            low=mid+1
        else:
            return mid
    return -1

def main():
    a=[-3,4,7,9,13,45,67,89,100,180]
    print("a数组中的数据如下:")
    for i in range(len(a)):
        print("%d" % a[i], end=' ')
    m=int(input("\\n请输入要查找的整数m,并按回车继续:"))
    k=fun(a,m)
    if(k>=0):
        print("m={},index={}".format(m,k))
    else:
        print("没有找到!")

if __name__=='__main__':
    main()`,
      answer: [
        "mid=(low+high)//2",
        "elif(m > a[mid]):"
      ],
      analysis: [
        "错误1：mid必须为整数索引，应使用整数除法//",
        "错误2：第二个条件判断写反了，应为m大于中间值时调整low指针"
      ]
    },
    {
      id: 16,
      type: "programFix",
      title: "递归计算年龄：第1个人10岁，第5个人比第4个人大2岁，以此类推，求第5个人的年龄。",
      errorCount: 3,
      codeTemplate: `def age(n):
    #**********FOUND**********
    if n == 1
        c=10
    else:
        #**********FOUND**********
        c=age(n)+2
    return c

def main():
    #**********FOUND**********
    print(age)

if __name__=='__main__':
    main()`,
      answer: [
        "if n == 1:",
        "c=age(n-1)+2",
        "print(age(5))"
      ],
      analysis: [
        "错误1：Python条件语句后必须加冒号",
        "错误2：递归调用应传入n-1，求前一个人的年龄",
        "错误3：函数调用必须加括号并传入参数5"
      ]
    },
    {
      id: 17,
      type: "programFix",
      title: "输入一个正整数，计算其各位数字的乘积。",
      errorCount: 3,
      codeTemplate: `def fun(num):
    #**********FOUND**********
    k==1
    while(num):
        k*=num%10
        #**********FOUND**********
        num/=10
    #**********FOUND**********
    return k

def main():
    num=int(input("请输入一个正整数,并按回车继续:"))
    print("这个数字的各位上的数字之积为:",fun(num));

if __name__=='__main__':
    main()`,
      answer: [
        "k=1",
        "num//=10",
        "else:"
      ],
      analysis: [
        "错误1：赋值使用=，==是相等判断",
        "错误2：整数除法使用//，/会得到浮点数",
        "错误3：原代码缺少else分支，需补充完整结构"
      ]
    },
    {
      id: 18,
      type: "programFix",
      title: "判断一个数是否为质数（素数）。",
      errorCount: 3,
      codeTemplate: `#**********FOUND**********
def isPrime():
    m=1
    for i in range(2,n):
        #**********FOUND**********
        if(not(n//i)):
            m=0
            break
    #**********FOUND**********
    return

def main():
    k=int(input("请输入一个2到10000之间的正整数,并按回车继续:"))
    print("这个数字的所有质因子分别为:")
    for j in range(2,k+1):
        if((not(k%j)) and (isPrime(j))):
            print("%d" % j,end="、")

if__name__=='__main__':
    main()`,
      answer: [
        "def isPrime(n):",
        "if(not(n%i)):",
        "return m"
      ],
      analysis: [
        "错误1：函数缺少参数n",
        "错误2：判断整除使用%运算符，//是整数除法",
        "错误3：函数应返回标志变量m"
      ]
    },
    {
      id: 19,
      type: "programFix",
      title: "统计字符串中大写字母和小写字母的个数。",
      errorCount: 2,
      codeTemplate: `def Upper(s):
    a=0
    for i in range(len(s)):
        if(s[i]>='A' and s[i]<='Z'):
            #**********FOUND**********
            return a
    a+=1

def Lower(s):
    b=0
    for i in range(len(s)):
        #**********FOUND**********
        if(s[i]>'a' and s[i]<'z'):
            b+=1
    return b

def main():
    s=input("请输入一个字符串,并按回车继续:")
    upper=Upper(s)
    lower=Lower(s)
    print("upper={},lower={}".format(upper,lower));

if __name__=='__main__':
    main()`,
      answer: [
        "a+=1",
        "if(s[i]>='a' and s[i]<='z'):"
      ],
      analysis: [
        "错误1：统计大写字母时应累加a，而不是直接返回",
        "错误2：小写字母范围应包含'a'和'z'，使用>=和<="
      ]
    },
    {
      id: 20,
      type: "programFix",
      title: "用户注册和登录功能，注册时将用户名和密码写入文件，登录时验证。",
      errorCount: 2,
      codeTemplate: `def zc_func():
    username=input('请输入您注册的用户名:').strip()
    password=input('请输入您注册的密码:').strip()
    #**********FOUND**********
    with open('user_pwd','r',encoding='utf-8')as f:
        f.write(f'{username},{password}\\n')
    return'恭喜您注册成功!'

def logo_func():
    i=0
    while i<3:
        uname=input('请输入您的用户名:').strip()
        passwd=input('请输入密码:').strip()
        found=False
        with open('user_pwd','r',encoding='utf-8')as f:
            #**********FOUND**********
            for line in lis:
                user,pwd=line.strip().split(',')
                if uname==user and passwd==pwd:
                    print('登录成功!')
                    found=True
                    break
        if not found:
            print('您输入的账号或密码错误,请重新输入!')
        i+=1
        if i==3:
            print('三次机会已用完,登录失败!')
            break

zc_func()
logo_func()`,
      answer: [
        "with open('user_pwd', 'w', encoding='utf-8') as f:",
        "for line in f:"
      ],
      analysis: [
        "错误1：写入文件应使用'w'模式，'r'是只读模式",
        "错误2：应遍历文件对象f，而不是未定义的lis"
      ]
    },
    {
      id: 21,
      type: "programFix",
      title: "判断一个整数是否为完数（完数：所有真因子之和等于自身）。",
      errorCount: 2,
      codeTemplate: `def fun(n):
    #**********FOUND**********
    s=[]
    for i in range(1,n):
        if n%i==0:
            s+=i
    if n==s:
        #**********FOUND**********
        return
    else:
        return False

n=eval(input())
if fun(n):
    print(n,'是完数')
else:
    print(n,'不是完数')`,
      answer: [
        "s=0",
        "return True"
      ],
      analysis: [
        "错误1：完数需要计算因子的和，s应初始化为数值0而非空列表",
        "错误2：判断为完数时应返回布尔值True"
      ]
    }
  ],

  // 程序设计题：共17道
  programDesign: [
    {
      id: 1,
      type: "programDesign",
      title: "打印4行金字塔图案，每行星号居中，其余位置用空格填充。",
      codeTemplate: `# --coding:cp936--
def main():
    **********Program**********
    
    **********End**********

if __name__ == '__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,5):
        for j in range(4-i):
            print(" ",end=" ")
        for j in range(1,2*i):
            print("*",end="")
        print("\\n")
    **********End**********

if __name__ == '__main__':
    main()`,
      analysis: "外层循环控制行数，内层第一个循环打印左侧空格，第二个循环打印星号，每行星号数量为2i-1。"
    },
    {
      id: 2,
      type: "programDesign",
      title: "使用for循环打印5行直角等腰三角形星号图案。",
      codeTemplate: `# --coding:cp936--
def main():
    **********Program**********
    
    **********End**********

if __name__ == '__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,6):
        for j in range(1,2*i):
            print("*",end="")
        print("\\n")
    **********End**********

if __name__ == '__main__':
    main()`,
      analysis: "外层循环控制5行，内层循环控制每行打印2i-1个星号，每行结束后换行。"
    },
    {
      id: 3,
      type: "programDesign",
      title: "使用for循环生成1到10的平方数列表，格式为[1,4,9,...,100]并输出。",
      codeTemplate: `# --coding:cp936--
def main():
    squares = []
    **********Program**********
    
    **********End**********
    print(squares)

if __name__ == '__main__':
    main()`,
      answer: `def main():
    squares = []
    **********Program**********
    for x in range(1,11):
        squares.append(x**2)
    **********End**********
    print(squares)

if __name__ == '__main__':
    main()`,
      analysis: "遍历1到10的整数，计算每个数的平方并添加到列表中，最后打印列表。"
    },
    {
      id: 4,
      type: "programDesign",
      title: "生成斐波那契数列的前20项，每行输出4个数，每个数占8个字符宽度，右对齐。",
      codeTemplate: `# --coding:cp936--
def main():
    **********Program**********
    
    **********End**********

if __name__ == '__main__':
    main()`,
      answer: `def main():
    **********Program**********
    x1 = 1
    x2 = 1
    count = 2
    print("{:>8}{:>8}".format(x1,x2), end="")
    for i in range(3, 21):
        x3 = x1 + x2
        print("{:>8}".format(x3), end="")
        count += 1
        if count%4 == 0:
            print()
        x1 = x2
        x2 = x3
    **********End**********

if __name__ == '__main__':
    main()`,
      analysis: "初始化前两项为1，循环计算后续项，每输出4个数换行一次，使用格式化字符串右对齐。"
    },
    {
      id: 5,
      type: "programDesign",
      title: "打印九九乘法表，格式为\"i*j=乘积\"，每行输出i个式子。",
      codeTemplate: `# --coding:cp936--
def main():
    **********Program**********
    
    **********End**********

if __name__ == '__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,10):
        for j in range(1,i+1):
            print("{}*{}={}".format(i,j,i*j), end=' ')
        print()
    **********End**********

if __name__ == '__main__':
    main()`,
      analysis: "外层循环控制行数（1-9），内层循环控制每行的式子数量（1-i），格式化输出乘法式子。"
    },
    {
      id: 6,
      type: "programDesign",
      title: "编写函数计算a+aa+aaa+...+n个a的和，其中0<a<10。例如a=2,n=3时，结果为2+22+222=246。",
      codeTemplate: `# --coding:cp936--
def fun(a,n):
    result = 0
    ts = 0
    **********Program**********
    
    **********End**********
    return result

def main():
    a = int(input("请输入a的值(0<a<10):"))
    n = int(input("请输入n的值:"))
    print(fun(a,n))

if __name__ == '__main__':
    main()`,
      answer: `def fun(a,n):
    result = 0
    ts = 0
    **********Program**********
    if 0<a<10:
        for i in range(n):
            ts = ts*10 + a
            result = result + ts
    **********End**********
    return result

def main():
    a = int(input("请输入a的值(0<a<10):"))
    n = int(input("请输入n的值:"))
    print(fun(a,n))

if __name__ == '__main__':
    main()`,
      analysis: "ts变量逐次构造a,aa,aaa...，每次构造后累加到result中，循环n次得到最终和。"
    },
    {
      id: 7,
      type: "programDesign",
      title: "统计列表中每个元素出现的次数，并计算所有元素的和。",
      codeTemplate: `def main():
    s=[1,2,3,3,3,5,1,2,8,4,5,6,7,8]
    sum=0
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    s=[1,2,3,3,3,5,1,2,8,4,5,6,7,8]
    sum=0
    **********Program**********
    for i in s:
        print(i,"出现的次数是:",s.count(i))
        sum=sum+i
    print("sum is:",sum)
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "使用count()方法统计每个元素出现次数，遍历累加计算总和。"
    },
    {
      id: 8,
      type: "programDesign",
      title: "输入10个整数，分别计算所有奇数之和、所有偶数之和以及10个数的平均值。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    sum1=sum2=0
    for i in range(10):
        num=eval(input("【请输入一个整数】"))
        if num%2==1:
            sum1=sum1+num
        else:
            sum2=sum2+num
    avg=(sum1+sum2)/10
    print("所有奇数之和{},所有偶数之和{},平均值{}".format(sum1,sum2,avg))
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "循环输入10个数，通过取模判断奇偶分别累加，最后计算平均值。"
    },
    {
      id: 9,
      type: "programDesign",
      title: "猜数字游戏：系统随机生成一个0~9之间的整数，用户输入数字猜测，系统提示太大或太小，直到猜中为止，输出猜测次数。",
      codeTemplate: `import random
random.seed(27)
def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `import random
random.seed(27)
def main():
    **********Program**********
    rnd=random.randint(0,9)
    print("系统刚随机产生了一个0~9之间的一个整数")
    user=int(input("【请输入你猜的数】"))
    k=0
    while 1:
        k=k+1
        if user>rnd:
            print("遗憾,太大了")
            user=int(input("【请继续输入你猜的数】"))
        elif user<rnd:
            print("遗憾,太小了")
            user=int(input("【请继续输入你猜的数】"))
        else:
            print("预测{}次,你猜中了".format(k))
            break
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "使用random.randint()生成随机数，while循环实现多次猜测，根据比较结果给出提示。"
    },
    {
      id: 10,
      type: "programDesign",
      title: "打印4行金字塔图案，每行星号居中，其余位置用空格填充。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,5):
        for j in range(4-i):
            print(" ",end=" ")
        for j in range(1,2*i):
            print("*",end="")
        print("\\n")
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "外层循环控制行数，内层第一个循环打印左侧空格，第二个循环打印星号，每行星号数量为2i-1。"
    },
    {
      id: 11,
      type: "programDesign",
      title: "使用for循环打印5行直角等腰三角形星号图案。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,6):
        for j in range(1,2*i):
            print("*",end="")
        print("\\n")
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "外层循环控制5行，内层循环控制每行打印2i-1个星号，每行结束后换行。"
    },
    {
      id: 12,
      type: "programDesign",
      title: "使用for循环生成1到10的平方数列表，格式为[1,4,9,...,100]并输出。",
      codeTemplate: `def main():
    squares=[]
    **********Program**********
    
    **********End**********
    print(squares)

if __name__=='__main__':
    main()`,
      answer: `def main():
    squares=[]
    **********Program**********
    for x in range(1,11):
        squares.append(x**2)
    **********End**********
    print(squares)

if __name__=='__main__':
    main()`,
      analysis: "遍历1到10的整数，计算每个数的平方并添加到列表中，最后打印列表。"
    },
    {
      id: 13,
      type: "programDesign",
      title: "计算1*2*3 + 3*4*5 + 5*6*7 + ... + 99*100*101的和。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    sum=0
    for i in range(1,100,2):
        sum+=i*(i+1)*(i+2)
    print("结果为",sum)
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "使用步长为2的range生成奇数序列，计算每三个连续数的乘积并累加。"
    },
    {
      id: 14,
      type: "programDesign",
      title: "模拟投掷硬币n次，统计正面和反面出现的次数。",
      codeTemplate: `import random
random.seed(26)
def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `import random
random.seed(26)
def main():
    **********Program**********
    num0=0
    n=eval(input("【请输入你要模拟投掷硬币的次数】"))
    for i in range(n):
        rnd=random.randint(0,1)
        if rnd==0:
            num0=num0+1
    num1=n-num0
    print("硬币在反面{}次硬币正面面{}次".format(num0,num1))
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "使用random.randint(0,1)模拟正反面，0表示反面，1表示正面，统计次数并输出。"
    },
    {
      id: 15,
      type: "programDesign",
      title: "编写递归函数计算数列fun(n)，其中fun(1)=1/3，fun(n)=fun(n-1)+n/(2*n+1)，并输出fun(1)、fun(2)、fun(10)、fun(100)、fun(500)的值。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********
    print(fun(1))
    print(fun(2))
    print(fun(10))
    print(fun(100))
    print(fun(500))

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    def fun(n):
        if n==1:
            return 1/3
        else:
            return fun(n-1)+n/(2*n+1)
    **********End**********
    print(fun(1))
    print(fun(2))
    print(fun(10))
    print(fun(100))
    print(fun(500))

if __name__=='__main__':
    main()`,
      analysis: "定义递归函数，根据递推公式计算数列值，递归终止条件为n=1。"
    },
    {
      id: 16,
      type: "programDesign",
      title: "编写函数计算a+aa+aaa+...+n个a的和，其中0<a<10。例如a=2,n=3时，结果为2+22+222=246。",
      codeTemplate: `def fun(a,n):
    result,ts=0,0
    **********Program**********
    
    **********End**********
    return result

def main():
    a=int(input("【请输入一个整数(1--9):】"))
    n=int(input("【请输入表达式求和的项数:】"))
    print(fun(a,n))

if __name__=='__main__':
    main()`,
      answer: `def fun(a,n):
    result,ts=0,0
    **********Program**********
    if 0<a<10:
        for i in range(n):
            ts=ts*10+a
            result=result+ts
    **********End**********
    return result

def main():
    a=int(input("【请输入一个整数(1--9):】"))
    n=int(input("【请输入表达式求和的项数:】"))
    print(fun(a,n))

if __name__=='__main__':
    main()`,
      analysis: "ts变量逐次构造a,aa,aaa...，每次构造后累加到result中，循环n次得到最终和。"
    },
    {
      id: 17,
      type: "programDesign",
      title: "打印九九乘法表，格式为\"i*j=乘积\"，每行输出i个式子。",
      codeTemplate: `def main():
    **********Program**********
    
    **********End**********

if __name__=='__main__':
    main()`,
      answer: `def main():
    **********Program**********
    for i in range(1,10):
        for j in range(1,i+1):
            print('{}*{}={}'.format(i,j,i*j),end=' ')
        print()
    **********End**********

if __name__=='__main__':
    main()`,
      analysis: "外层循环控制行数（1-9），内层循环控制每行的式子数量（1-i），格式化输出乘法式子。"
    }
  ]
};

// 导出完整题库
export default pythonExamBank;