// Python考试题库（合并版 - 共130道题）
const pythonExamBank = {
  // 单选题：共52道
  singleChoice: [
    {
      id: 1,
      type: "single",
      title: "在Python中,使用open()打开Windows操作系统D盘下的一个文件,路径名错误的是()。",
      options: ["A. D:\\PythonTest\\a.txt", "B. D:\\\\PythonTest\\\\a.txt", "C. D:/PythonTest/a.txt", "D. D://PythonTest//a.txt"],
      answer: "A",
      analysis: "Windows路径中反斜杠需要转义为\\\\，或使用正斜杠/，选项A未转义会被识别为转义字符。"
    },
    {
      id: 2,
      type: "single",
      title: "以下关于Python文件打开模式的描述中,错误的是()。",
      options: ["A. 只读模式是r", "B. 覆盖写模式是w", "C. 追加写模式是a", "D. 创建写模式是n"],
      answer: "D",
      analysis: "Python没有'n'文件打开模式，创建写模式使用'x'，文件不存在则创建，存在则报错。"
    },
    {
      id: 3,
      type: "single",
      title: "5.0//2.0结果为()。",
      options: ["A. 2", "B. 2.5", "C. 3", "D. 2.0"],
      answer: "D",
      analysis: "//是整数除法，但操作数为浮点数时结果仍为浮点数，5.0//2.0=2.0。"
    },
    {
      id: 4,
      type: "single",
      title: "len('a\\nb\\tc')打印在屏幕上为()。",
      options: ["A. 4", "B. 3", "C. 5", "D. 7"],
      answer: "C",
      analysis: "转义字符'\\n'和'\\t'各算1个字符，总长度为a(1)+\\n(1)+b(1)+\\t(1)+c(1)=5。"
    },
    {
      id: 5,
      type: "single",
      title: "x=0;x=1.5;x=True;x='abc',则x值为()。",
      options: ["A. 0", "B. 1.5", "C. True", "D. 'abc'"],
      answer: "D",
      analysis: "Python中变量可以被重复赋值，最后一次赋值的值为变量当前值。"
    },
    {
      id: 6,
      type: "single",
      title: "下列选项中合法的标识符是()。",
      options: ["A. 7a_b", "B. Break", "C. _a$b", "D. 7ab"],
      answer: "B",
      analysis: "Python标识符只能包含字母、数字和下划线，且不能以数字开头，不能包含$等特殊字符；Break不是关键字，是合法标识符。"
    },
    {
      id: 7,
      type: "single",
      title: "表达式3*(2+12%3)**3/5的结果是()。",
      options: ["A. 129.6", "B. 4", "C. 43.2", "D. 4.8"],
      answer: "D",
      analysis: "运算顺序：先算括号内12%3=0，2+0=2；再算2**3=8；3*8=24；24/5=4.8。"
    },
    {
      id: 8,
      type: "single",
      title: "Python语句print(0xA+0xB)的输出结果是()。",
      options: ["A. 0xA+0xB", "B. A+B", "C. 0xA0xB", "D. 21"],
      answer: "D",
      analysis: "0xA是十六进制10，0xB是十六进制11，10+11=21。"
    },
    {
      id: 9,
      type: "single",
      title: "拟在屏幕上输出Hello World,使用的Python语句是()。",
      options: ["A. printf('Hello World')", "B. print(Hello World)", "C. print('Hello World')", "D. printf('Hello World')"],
      answer: "C",
      analysis: "Python使用print()函数输出，字符串需要用引号包裹；printf是C语言的输出函数。"
    },
    {
      id: 10,
      type: "single",
      title: "换行的转义符为()。",
      options: ["A. \\b", "B. \\n", "C. \\t", "D. \\f"],
      answer: "B",
      analysis: "\\n表示换行，\\b表示退格，\\t表示制表符，\\f表示换页。"
    },
    {
      id: 11,
      type: "single",
      title: "文件描述题：以下不属于Python文件操作方法的是()。",
      options: ["A. read()", "B. write()", "C. join()", "D. readline()"],
      answer: "C",
      analysis: "join()是字符串方法，用于连接序列元素；read()、write()、readline()均为文件对象的操作方法。"
    },
    {
      id: 12,
      type: "single",
      title: "读取单行文件题：以下关于readline()方法的描述正确的是()。",
      options: ["A. 读取文件全部内容", "B. 读取文件的一行内容", "C. 读取文件的所有行并返回列表", "D. 向文件写入一行内容"],
      answer: "B",
      analysis: "readline()读取一行，read()读取全部，readlines()读取所有行返回列表。"
    },
    {
      id: 13,
      type: "single",
      title: "str(int(3.14))运算题：str(int(3.14))的结果是()。",
      options: ["A. '3.14'", "B. '3'", "C. 3", "D. 3.14"],
      answer: "B",
      analysis: "int(3.14)转换为整数3，str(3)转换为字符串'3'。"
    },
    {
      id: 14,
      type: "single",
      title: "4//3整除题：4//3的结果是()。",
      options: ["A. 1", "B. 1.333", "C. 2", "D. 1.0"],
      answer: "A",
      analysis: "//是整数除法，向下取整，4//3=1。"
    },
    {
      id: 15,
      type: "single",
      title: "Python缩进描述题：以下关于Python缩进的说法正确的是()。",
      options: ["A. 缩进可以用任意数量的空格", "B. 缩进只能用4个空格", "C. 缩进是Python语法的一部分，必须严格一致", "D. 缩进只是为了代码美观，不影响运行"],
      answer: "C",
      analysis: "Python使用缩进表示代码块，必须严格一致，通常使用4个空格。"
    },
    {
      id: 16,
      type: "single",
      title: "数学表达式转Python语法题：数学表达式a²+b²对应的Python语法是()。",
      options: ["A. a^2 + b^2", "B. a**2 + b**2", "C. a*2 + b*2", "D. a² + b²"],
      answer: "B",
      analysis: "Python中幂运算使用**运算符，^是按位异或运算符。"
    },
    {
      id: 17,
      type: "single",
      title: "+运算符用法题：以下关于+运算符的说法错误的是()。",
      options: ["A. 可以用于数字加法", "B. 可以用于字符串拼接", "C. 可以用于列表拼接", "D. 可以用于字典拼接"],
      answer: "D",
      analysis: "+运算符支持数字加法、字符串和列表拼接，不支持字典拼接。"
    },
    {
      id: 18,
      type: "single",
      title: "5%2取余题：5%2的结果是()。",
      options: ["A. 0", "B. 1", "C. 2", "D. 2.5"],
      answer: "B",
      analysis: "%是取余运算符，5除以2余1。"
    },
    {
      id: 19,
      type: "single",
      title: "合法变量名判断题：以下哪个是合法的Python变量名？()",
      options: ["A. 123abc", "B. abc-123", "C. _abc123", "D. if"],
      answer: "C",
      analysis: "变量名不能以数字开头，不能包含-等特殊字符，不能使用关键字if。"
    },
    {
      id: 20,
      type: "single",
      title: "Python数据类型判断题：以下不属于Python基本数据类型的是()。",
      options: ["A. int", "B. float", "C. array", "D. str"],
      answer: "C",
      analysis: "array是numpy库中的数组类型，不是Python基本数据类型。"
    },
    {
      id: 21,
      type: "single",
      title: "打印文件对象(exam.txt)题：print(open('exam.txt'))的输出是()。",
      options: ["A. 文件的全部内容", "B. 文件的第一行内容", "C. 文件对象的内存地址", "D. 文件名"],
      answer: "C",
      analysis: "直接打印文件对象会输出其内存地址，需要使用read()等方法读取内容。"
    },
    {
      id: 22,
      type: "single",
      title: "打印文件对象(family.txt)题：以下哪个方法可以读取文件的所有行并返回列表？()",
      options: ["A. read()", "B. readline()", "C. readlines()", "D. write()"],
      answer: "C",
      analysis: "readlines()读取所有行并返回列表，每行作为列表的一个元素。"
    },
    {
      id: 23,
      type: "single",
      title: "连续比较表达式-1<x<1题：以下关于Python连续比较的说法正确的是()。",
      options: ["A. -1<x<1等价于-1<x and x<1", "B. -1<x<1等价于-1<x or x<1", "C. Python不支持连续比较", "D. -1<x<1等价于x>-1 and x>1"],
      answer: "A",
      analysis: "Python支持连续比较，-1<x<1等价于-1<x and x<1。"
    },
    {
      id: 24,
      type: "single",
      title: "浮点数取余5.0%2.0题：5.0%2.0的结果是()。",
      options: ["A. 1", "B. 1.0", "C. 2", "D. 2.0"],
      answer: "B",
      analysis: "浮点数取余结果仍为浮点数，5.0%2.0=1.0。"
    },
    {
      id: 25,
      type: "single",
      title: "Python语言类型题：Python是一种()语言。",
      options: ["A. 编译型", "B. 解释型", "C. 机器语言", "D. 汇编语言"],
      answer: "B",
      analysis: "Python是解释型语言，代码逐行解释执行。"
    },
    {
      id: 26,
      type: "single",
      title: "八进制数字判断题：以下哪个是合法的八进制数字？()",
      options: ["A. 0o12", "B. 0x12", "C. 0b12", "D. 12"],
      answer: "A",
      analysis: "八进制以0o开头，十六进制以0x开头，二进制以0b开头。"
    },
    {
      id: 27,
      type: "single",
      title: "连续比较4<=5<=6逻辑题：4<=5<=6的结果是()。",
      options: ["A. True", "B. False", "C. 4", "D. 6"],
      answer: "A",
      analysis: "4<=5为True，5<=6为True，所以整体结果为True。"
    },
    {
      id: 28,
      type: "single",
      title: "混合运算符3**2*4//6%7计算题：3**2*4//6%7的结果是()。",
      options: ["A. 0", "B. 1", "C. 2", "D. 6"],
      answer: "D",
      analysis: "运算顺序：3**2=9；9*4=36；36//6=6；6%7=6。"
    },
    {
      id: 29,
      type: "single",
      title: "浮点除法5/2题：5/2的结果是()。",
      options: ["A. 2", "B. 2.5", "C. 3", "D. 2.0"],
      answer: "B",
      analysis: "/是浮点除法，结果为浮点数，5/2=2.5。"
    },
    {
      id: 30,
      type: "single",
      title: "运算符优先级(and/+/*=/==)题：以下运算符优先级最高的是()。",
      options: ["A. and", "B. +", "C. *", "D. =="],
      answer: "C",
      analysis: "运算符优先级：* > + > == > and。"
    },
    {
      id: 31,
      type: "single",
      title: "文件打开函数题：以下哪个是Python文件打开函数？()",
      options: ["A. open()", "B. file()", "C. fopen()", "D. openfile()"],
      answer: "A",
      analysis: "Python使用open()函数打开文件，fopen()是C语言的文件打开函数。"
    },
    {
      id: 32,
      type: "single",
      title: "int(3.14)类型转换题：int(3.14)的结果是()。",
      options: ["A. 3", "B. 3.0", "C. 4", "D. '3'"],
      answer: "A",
      analysis: "int()转换浮点数时会截断小数部分，保留整数部分。"
    },
    {
      id: 33,
      type: "single",
      title: "bool('a')布尔转换题：bool('a')的结果是()。",
      options: ["A. True", "B. False", "C. 'a'", "D. 1"],
      answer: "A",
      analysis: "非空字符串转换为布尔值为True，空字符串为False。"
    },
    {
      id: 34,
      type: "single",
      title: "代码块分隔语法题：Python中使用()分隔代码块。",
      options: ["A. 大括号{}", "B. 缩进", "C. 分号;", "D. 圆括号()"],
      answer: "B",
      analysis: "Python使用缩进表示代码块，其他语言常用大括号。"
    },
    {
      id: 35,
      type: "single",
      title: "编译/解释型语言概念题：以下关于编译型和解释型语言的说法正确的是()。",
      options: ["A. 编译型语言执行速度快，开发效率高", "B. 解释型语言执行速度慢，开发效率高", "C. Python是编译型语言", "D. C语言是解释型语言"],
      answer: "B",
      analysis: "编译型语言执行速度快，开发效率低；解释型语言执行速度慢，开发效率高；Python是解释型，C是编译型。"
    },
    {
      id: 36,
      type: "single",
      title: "float('1.38')类型转换题：float('1.38')的结果是()。",
      options: ["A. '1.38'", "B. 1.38", "C. 1", "D. 2"],
      answer: "B",
      analysis: "float()将字符串转换为对应的浮点数。"
    },
    {
      id: 37,
      type: "single",
      title: "Python语言特点判断题：以下哪个不是Python的特点？()",
      options: ["A. 简洁易读", "B. 跨平台", "C. 执行速度快", "D. 面向对象"],
      answer: "C",
      analysis: "Python执行速度较慢，这是解释型语言的特点。"
    },
    {
      id: 38,
      type: "single",
      title: "complex(a)复数转换题：complex(3)的结果是()。",
      options: ["A. 3", "B. 3+0j", "C. 0+3j", "D. 3j"],
      answer: "B",
      analysis: "complex(real)创建实部为real、虚部为0的复数。"
    },
    {
      id: 39,
      type: "single",
      title: "type(1+0xf*3.14)类型判断题：type(1+0xf*3.14)的结果是()。",
      options: ["A. <class 'int'>", "B. <class 'float'>", "C. <class 'complex'>", "D. <class 'str'>"],
      answer: "B",
      analysis: "0xf是十六进制15，15*3.14=47.1，1+47.1=48.1，是浮点数。"
    },
    {
      id: 40,
      type: "single",
      title: "以下关于文件的描述中，正确的是()。",
      options: ["A. 使用 open() 打开文件时，必须要用 r 或 w 指定打开方式，不能省略", "B. 采用 readlines() 可以读入文件的全部内容，返回一个列表", "C. 文件打开后，可以用 write() 控制对文件内容的读写位置", "D. 如果没有采用 close() 关闭文件，Python 程序退出时文件将不会自动关闭"],
      answer: "B",
      analysis: "A错误：默认模式为r，可省略；C错误：write()仅写入，seek()控制读写位置；D错误：Python退出时会自动关闭未关闭的文件。"
    },
    {
      id: 41,
      type: "single",
      title: "Python 读取文件中一行内容的操作是()。",
      options: ["A. readtext", "B. readline", "C. readall", "D. read"],
      answer: "B",
      analysis: "readline()读取单行；read()读取全部；readlines()读取全部并返回列表。"
    },
    {
      id: 42,
      type: "single",
      title: "以下关于 Python 缩进的描述中，错误的是()。",
      options: ["A. 缩进表达了所属关系和代码块的所属范围", "B. 缩进是可以嵌套的，从而形成多层缩进", "C. 判断、循环、函数等都能够通过缩进包含一批代码", "D. Python 用严格的缩进表示程序的格式框架，所有代码都需要在行前至少加一个空格"],
      answer: "D",
      analysis: "D错误：顶级代码无需缩进；缩进量通常为4个空格，但并非强制\"至少一个空格\"。"
    },
    {
      id: 43,
      type: "single",
      title: "以下选项中，Python语言中表示注释的符号是()。",
      options: ["A. //", "B. /* */", "C. #", "D. --"],
      answer: "C",
      analysis: "Python使用#表示单行注释，//和/* */是C/C++的注释符号，--是SQL的注释符号。"
    },
    {
      id: 44,
      type: "single",
      title: "表达式 10 % 3 的结果是()。",
      options: ["A. 1", "B. 3", "C. 0", "D. 3.33"],
      answer: "A",
      analysis: "10除以3商3余1，所以10%3=1。"
    },
    {
      id: 45,
      type: "single",
      title: "下列选项中，不是Python关键字的是()。",
      options: ["A. if", "B. elif", "C. else", "D. Else"],
      answer: "D",
      analysis: "Python关键字区分大小写，Else不是关键字，else是关键字。"
    },
    {
      id: 46,
      type: "single",
      title: "关于Python的变量，以下选项中描述错误的是()。",
      options: ["A. 变量无须声明即可直接赋值", "B. 变量赋值以后可以改变其值", "C. 变量必须先声明后使用", "D. 变量可以多次赋值"],
      answer: "C",
      analysis: "Python是动态语言，变量无须声明即可直接赋值使用。"
    },
    {
      id: 47,
      type: "single",
      title: "表达式 'abc' + '123' 的结果是()。",
      options: ["A. 'abc123'", "B. 'abc+123'", "C. '123abc'", "D. 报错"],
      answer: "A",
      analysis: "+运算符可以用于字符串拼接，'abc' + '123' = 'abc123'。"
    },
    {
      id: 48,
      type: "single",
      title: "下列选项中，合法的Python表达式是()。",
      options: ["A. 1++", "B. 1 = 2", "C. 1 == 2", "D. 1 / 0"],
      answer: "C",
      analysis: "A错误：Python没有++运算符；B错误：赋值语句不能作为表达式；D错误：除零错误。"
    },
    {
      id: 49,
      type: "single",
      title: "print(2**3)的输出结果是()。",
      options: ["A. 6", "B. 8", "C. 9", "D. 5"],
      answer: "B",
      analysis: "**是幂运算符，2**3表示2的3次方，等于8。"
    },
    {
      id: 50,
      type: "single",
      title: "Python中，以下哪个不是合法的标识符？()",
      options: ["A. _name", "B. name_1", "C. 1_name", "D. Name"],
      answer: "C",
      analysis: "标识符不能以数字开头，1_name以数字开头，不是合法标识符。"
    },
    {
      id: 51,
      type: "single",
      title: "表达式 3 and 0 的结果是()。",
      options: ["A. True", "B. False", "C. 3", "D. 0"],
      answer: "D",
      analysis: "and运算符返回第一个假值，如果所有值都为真则返回最后一个值。0是假值，所以返回0。"
    },
    {
      id: 52,
      type: "single",
      title: "表达式 not True 的结果是()。",
      options: ["A. True", "B. False", "C. 1", "D. 0"],
      answer: "B",
      analysis: "not运算符取反，not True = False。"
    }
  ],

  // 填空题：共28道
  fillBlank: [
    {
      id: 1,
      type: "fill",
      title: "开展基本的科学计算一般分为两个步骤:【1】和【2】。",
      blankCount: 2,
      answer: ["理论分析", "数值计算"]
    },
    {
      id: 2,
      type: "fill",
      title: "Python中使用【1】符号来表示单行注释。",
      answer: ["#"]
    },
    {
      id: 3,
      type: "fill",
      title: "表达式 5 // 2 的结果是【1】。",
      answer: ["2"]
    },
    {
      id: 4,
      type: "fill",
      title: "Python中，使用【1】函数获取用户输入。",
      answer: ["input()"]
    },
    {
      id: 5,
      type: "fill",
      title: "表达式 len('hello') 的结果是【1】。",
      answer: ["5"]
    },
    {
      id: 6,
      type: "fill",
      title: "Python中，字符串可以用【1】或【2】括起来。",
      blankCount: 2,
      answer: ["单引号", "双引号"]
    },
    {
      id: 7,
      type: "fill",
      title: "表达式 10 % 4 的结果是【1】。",
      answer: ["2"]
    },
    {
      id: 8,
      type: "fill",
      title: "Python中，使用【1】关键字定义函数。",
      answer: ["def"]
    },
    {
      id: 9,
      type: "fill",
      title: "表达式 3 ** 2 的结果是【1】。",
      answer: ["9"]
    },
    {
      id: 10,
      type: "fill",
      title: "Python中，【1】循环用于遍历序列中的每个元素。",
      answer: ["for"]
    },
    {
      id: 11,
      type: "fill",
      title: "表达式 'a' * 3 的结果是【1】。",
      answer: ["'aaa'"]
    },
    {
      id: 12,
      type: "fill",
      title: "Python中，使用【1】语句跳出循环。",
      answer: ["break"]
    },
    {
      id: 13,
      type: "fill",
      title: "表达式 2 == 2 的结果是【1】。",
      answer: ["True"]
    },
    {
      id: 14,
      type: "fill",
      title: "Python中，【1】语句用于跳过当前循环的剩余语句。",
      answer: ["continue"]
    },
    {
      id: 15,
      type: "fill",
      title: "表达式 bool(0) 的结果是【1】。",
      answer: ["False"]
    },
    {
      id: 16,
      type: "fill",
      title: "Python中，使用【1】关键字定义类。",
      answer: ["class"]
    },
    {
      id: 17,
      type: "fill",
      title: "表达式 int('123') 的结果是【1】。",
      answer: ["123"]
    },
    {
      id: 18,
      type: "fill",
      title: "Python中，列表用【1】括起来。",
      answer: ["方括号[]"]
    },
    {
      id: 19,
      type: "fill",
      title: "表达式 float(3) 的结果是【1】。",
      answer: ["3.0"]
    },
    {
      id: 20,
      type: "fill",
      title: "Python中，字典用【1】括起来。",
      answer: ["大括号{}"]
    },
    {
      id: 21,
      type: "fill",
      title: "表达式 str(123) 的结果是【1】。",
      answer: ["'123'"]
    },
    {
      id: 22,
      type: "fill",
      title: "Python中，元组用【1】括起来。",
      answer: ["圆括号()"]
    },
    {
      id: 23,
      type: "fill",
      title: "表达式 abs(-5) 的结果是【1】。",
      answer: ["5"]
    },
    {
      id: 24,
      type: "fill",
      title: "Python中，使用【1】关键字导入模块。",
      answer: ["import"]
    },
    {
      id: 25,
      type: "fill",
      title: "表达式 max(1, 2, 3) 的结果是【1】。",
      answer: ["3"]
    },
    {
      id: 26,
      type: "fill",
      title: "Python中，使用【1】关键字抛出异常。",
      answer: ["raise"]
    },
    {
      id: 27,
      type: "fill",
      title: "表达式 min(1, 2, 3) 的结果是【1】。",
      answer: ["1"]
    },
    {
      id: 28,
      type: "fill",
      title: "Python中，使用【1】语句处理异常。",
      answer: ["try-except"]
    }
  ],

  // 程序填空题：共20道
  programFill: [
    {
      id: 1,
      type: "programFill",
      title: "计算1到100的累加和",
      codeTemplate: "sum = 0\nfor i in range(【1】):\n    sum += i\nprint(sum)",
      answer: ["1, 101"],
      analysis: "range(1, 101)生成1到100的整数序列。"
    },
    {
      id: 2,
      type: "programFill",
      title: "求列表中的最大值",
      codeTemplate: "nums = [3, 1, 4, 1, 5, 9]\nmax_num = nums[【1】]\nfor num in nums:\n    if num > max_num:\n        max_num = num\nprint(max_num)",
      answer: ["0"],
      analysis: "初始化max_num为列表第一个元素。"
    },
    {
      id: 3,
      type: "programFill",
      title: "判断质数",
      codeTemplate: "n = 17\nis_prime = 【1】\nfor i in range(2, int(n**0.5)+1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint(is_prime)",
      answer: ["True"],
      analysis: "假设一开始是质数，找到因子则设为False。"
    },
    {
      id: 4,
      type: "programFill",
      title: "斐波那契数列",
      codeTemplate: "a, b = 0, 1\nfor i in range(10):\n    print(a)\n    a, b = 【1】",
      answer: ["b, a+b"],
      analysis: "同时更新a和b，a变为原来的b，b变为原来的a+b。"
    },
    {
      id: 5,
      type: "programFill",
      title: "字符串反转",
      codeTemplate: "s = 'hello'\nrev = s[【1】]\nprint(rev)",
      answer: ["::-1"],
      analysis: "[::-1]表示从后向前切片，步长为-1。"
    },
    {
      id: 6,
      type: "programFill",
      title: "列表去重",
      codeTemplate: "lst = [1, 2, 2, 3, 3, 3]\nunique = list(【1】(lst))\nprint(unique)",
      answer: ["set"],
      analysis: "set()会自动去重，然后转换回列表。"
    },
    {
      id: 7,
      type: "programFill",
      title: "计算阶乘",
      codeTemplate: "n = 5\nresult = 【1】\nfor i in range(1, n+1):\n    result *= i\nprint(result)",
      answer: ["1"],
      analysis: "阶乘初始值为1，累乘从1到n的所有数。"
    },
    {
      id: 8,
      type: "programFill",
      title: "打印九九乘法表",
      codeTemplate: "for i in range(【1】):\n    for j in range(1, i+1):\n        print(f'{i}*{j}={i*j}', end=' ')\n    print()",
      answer: ["1, 10"],
      analysis: "外层循环控制行数，从1到9。"
    },
    {
      id: 9,
      type: "programFill",
      title: "统计字符出现次数",
      codeTemplate: "s = 'abracadabra'\ncount = 【1】\nfor char in s:\n    if char not in count:\n        count[char] = 0\n    count[char] += 1\nprint(count)",
      answer: ["{}"],
      analysis: "使用字典来统计每个字符出现的次数。"
    },
    {
      id: 10,
      type: "programFill",
      title: "判断回文字符串",
      codeTemplate: "s = 'racecar'\nif s == s[【1】]:\n    print('是回文')\nelse:\n    print('不是回文')",
      answer: ["::-1"],
      analysis: "比较字符串与其反转是否相等。"
    },
    {
      id: 11,
      type: "programFill",
      title: "列表排序",
      codeTemplate: "lst = [3, 1, 4, 1, 5]\nlst.【1】()\nprint(lst)",
      answer: ["sort"],
      analysis: "sort()方法对列表进行原地排序。"
    },
    {
      id: 12,
      type: "programFill",
      title: "生成随机数",
      codeTemplate: "【1】 random\nprint(random.randint(1, 10))",
      answer: ["import"],
      analysis: "需要先导入random模块。"
    },
    {
      id: 13,
      type: "programFill",
      title: "文件读写",
      codeTemplate: "with open('test.txt', '【1】') as f:\n    f.write('hello')",
      answer: ["w"],
      analysis: "'w'表示写入模式，会覆盖原有内容。"
    },
    {
      id: 14,
      type: "programFill",
      title: "列表推导式",
      codeTemplate: "squares = [【1】 for i in range(1, 11)]\nprint(squares)",
      answer: ["i**2"],
      analysis: "列表推导式生成1到10的平方列表。"
    },
    {
      id: 15,
      type: "programFill",
      title: "函数定义",
      codeTemplate: "【1】 add(a, b):\n    return a + b\nprint(add(3, 5))",
      answer: ["def"],
      analysis: "使用def关键字定义函数。"
    },
    {
      id: 16,
      type: "programFill",
      title: "类定义",
      codeTemplate: "【1】 Person:\n    def __init__(self, name):\n        self.name = name\np = Person('Alice')\nprint(p.name)",
      answer: ["class"],
      analysis: "使用class关键字定义类。"
    },
    {
      id: 17,
      type: "programFill",
      title: "异常处理",
      codeTemplate: "try:\n    x = 1 / 0\n【1】 ZeroDivisionError:\n    print('除零错误')",
      answer: ["except"],
      analysis: "except用于捕获特定类型的异常。"
    },
    {
      id: 18,
      type: "programFill",
      title: "lambda函数",
      codeTemplate: "add = 【1】 a, b: a + b\nprint(add(2, 3))",
      answer: ["lambda"],
      analysis: "lambda用于创建匿名函数。"
    },
    {
      id: 19,
      type: "programFill",
      title: "map函数",
      codeTemplate: "nums = [1, 2, 3]\nresult = list(【1】(lambda x: x*2, nums))\nprint(result)",
      answer: ["map"],
      analysis: "map将函数应用于序列的每个元素。"
    },
    {
      id: 20,
      type: "programFill",
      title: "filter函数",
      codeTemplate: "nums = [1, 2, 3, 4, 5]\nevens = list(【1】(lambda x: x % 2 == 0, nums))\nprint(evens)",
      answer: ["filter"],
      analysis: "filter过滤出满足条件的元素。"
    }
  ],

  // 程序改错题：共20道
  programFix: [
    {
      id: 1,
      type: "programFix",
      title: "修复语法错误",
      codeTemplate: "print('hello'",
      answer: ["添加右括号：print('hello')"],
      analysis: "缺少右括号"
    },
    {
      id: 2,
      type: "programFix",
      title: "修复缩进错误",
      codeTemplate: "for i in range(5):\nprint(i)",
      answer: ["print(i)需要缩进"],
      analysis: "Python使用缩进来表示代码块"
    },
    {
      id: 3,
      type: "programFix",
      title: "修复变量未定义错误",
      codeTemplate: "print(x)",
      answer: ["先定义x：x = 1\nprint(x)"],
      analysis: "变量x未定义"
    },
    {
      id: 4,
      type: "programFix",
      title: "修复除零错误",
      codeTemplate: "x = 1 / 0\nprint(x)",
      answer: ["避免除零：x = 1 / 1\nprint(x)"],
      analysis: "不能除以零"
    },
    {
      id: 5,
      type: "programFix",
      title: "修复字符串拼接错误",
      codeTemplate: "print('Hello' + World)",
      answer: ["World需要加引号：print('Hello' + 'World')"],
      analysis: "字符串只能与字符串拼接"
    },
    {
      id: 6,
      type: "programFix",
      title: "修复列表索引错误",
      codeTemplate: "lst = [1, 2, 3]\nprint(lst[3])",
      answer: ["索引越界，改为lst[2]"],
      analysis: "列表索引从0开始"
    },
    {
      id: 7,
      type: "programFix",
      title: "修复条件表达式错误",
      codeTemplate: "if x = 5:\n    print('x is 5')",
      answer: ["=改为==：if x == 5:"],
      analysis: "条件判断需要使用==而不是="
    },
    {
      id: 8,
      type: "programFix",
      title: "修复循环语法错误",
      codeTemplate: "for i in range(5)\n    print(i)",
      answer: ["添加冒号：for i in range(5):"],
      analysis: "循环语句末尾需要冒号"
    },
    {
      id: 9,
      type: "programFix",
      title: "修复函数返回错误",
      codeTemplate: "def add(a, b):\n    a + b\nprint(add(1, 2))",
      answer: ["添加return：return a + b"],
      analysis: "函数需要return语句返回值"
    },
    {
      id: 10,
      type: "programFix",
      title: "修复文件读取错误",
      codeTemplate: "f = open('nonexistent.txt')\nprint(f.read())",
      answer: ["添加错误处理或确保文件存在"],
      analysis: "文件不存在会报错"
    },
    {
      id: 11,
      type: "programFix",
      title: "修复类型错误",
      codeTemplate: "nums = [1, 2, 3]\nprint(nums + 4)",
      answer: ["nums只能与列表相加：nums + [4]"],
      analysis: "列表不能直接与整数相加"
    },
    {
      id: 12,
      type: "programFix",
      title: "修复关键字错误",
      codeTemplate: "def 1add(a, b):\n    return a + b",
      answer: ["函数名不能以数字开头：def add1(a, b):"],
      analysis: "标识符不能以数字开头"
    },
    {
      id: 13,
      type: "programFix",
      title: "修复比较运算符错误",
      codeTemplate: "if 1 < x < 3:\n    print('x在1和3之间')",
      answer: ["x未定义，需要先赋值"],
      analysis: "变量x需要先定义"
    },
    {
      id: 14,
      type: "programFix",
      title: "修复逻辑运算符错误",
      codeTemplate: "if x > 0 & x < 10:\n    print('x在0和10之间')",
      answer: ["&改为and：if x > 0 and x < 10:"],
      analysis: "逻辑与需要使用and"
    },
    {
      id: 15,
      type: "programFix",
      title: "修复字典键错误",
      codeTemplate: "d = {'name': 'Alice'}\nprint(d['age'])",
      answer: ["键'age'不存在，使用d.get('age')或添加该键"],
      analysis: "访问不存在的字典键会报错"
    },
    {
      id: 16,
      type: "programFix",
      title: "修复导入错误",
      codeTemplate: "import nonexistent_module",
      answer: ["确保模块存在或正确安装"],
      analysis: "模块不存在"
    },
    {
      id: 17,
      type: "programFix",
      title: "修复缩进不一致错误",
      codeTemplate: "for i in range(3):\n    print(i)\n        print('done')",
      answer: ["print('done')缩进不一致"],
      analysis: "缩进必须一致"
    },
    {
      id: 18,
      type: "programFix",
      title: "修复try-except语法错误",
      codeTemplate: "try\n    print('hello')\nexcept:\n    pass",
      answer: ["try后需要冒号：try:"],
      analysis: "try语句后需要冒号"
    },
    {
      id: 19,
      type: "programFix",
      title: "修复return位置错误",
      codeTemplate: "def func():\n    for i in range(3):\n        return i\nprint(func())",
      answer: ["return位置导致只返回第一个值"],
      analysis: "return在循环内会立即返回"
    },
    {
      id: 20,
      type: "programFix",
      title: "修复全局变量错误",
      codeTemplate: "x = 1\ndef func():\n    x += 1\nfunc()",
      answer: ["使用global声明：global x"],
      analysis: "在函数内修改全局变量需要global声明"
    }
  ],

  // 程序设计题：共10道
  programDesign: [
    {
      id: 1,
      type: "programDesign",
      title: "计算1到n的累加和",
      answer: "def sum_n(n):\n    return sum(range(1, n+1))\n\nprint(sum_n(100))",
      analysis: "使用sum函数和range生成序列"
    },
    {
      id: 2,
      type: "programDesign",
      title: "判断一个数是否为质数",
      answer: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(is_prime(17))",
      analysis: "检查从2到sqrt(n)的所有数是否能整除n"
    },
    {
      id: 3,
      type: "programDesign",
      title: "生成斐波那契数列前n项",
      answer: "def fibonacci(n):\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nprint(fibonacci(10))",
      analysis: "使用迭代方式生成斐波那契数列"
    },
    {
      id: 4,
      type: "programDesign",
      title: "反转字符串",
      answer: "def reverse_string(s):\n    return s[::-1]\n\nprint(reverse_string('hello'))",
      analysis: "使用切片[::-1]反转字符串"
    },
    {
      id: 5,
      type: "programDesign",
      title: "统计字符串中每个字符出现的次数",
      answer: "def count_chars(s):\n    count = {}\n    for char in s:\n        count[char] = count.get(char, 0) + 1\n    return count\n\nprint(count_chars('abracadabra'))",
      analysis: "使用字典统计字符出现次数"
    },
    {
      id: 6,
      type: "programDesign",
      title: "求列表中的最大值和最小值",
      answer: "def get_min_max(lst):\n    return min(lst), max(lst)\n\nnums = [3, 1, 4, 1, 5, 9]\nprint(get_min_max(nums))",
      analysis: "使用内置函数min和max"
    },
    {
      id: 7,
      type: "programDesign",
      title: "判断回文字符串",
      answer: "def is_palindrome(s):\n    return s == s[::-1]\n\nprint(is_palindrome('racecar'))",
      analysis: "比较字符串与其反转是否相等"
    },
    {
      id: 8,
      type: "programDesign",
      title: "计算阶乘",
      answer: "def factorial(n):\n    result = 1\n    for i in range(1, n+1):\n        result *= i\n    return result\n\nprint(factorial(5))",
      analysis: "使用循环累乘"
    },
    {
      id: 9,
      type: "programDesign",
      title: "打印九九乘法表",
      answer: "for i in range(1, 10):\n    for j in range(1, i+1):\n        print(f'{i}*{j}={i*j}', end=' ')\n    print()",
      analysis: "使用双重循环打印乘法表"
    },
    {
      id: 10,
      type: "programDesign",
      title: "列表去重",
      answer: "def remove_duplicates(lst):\n    return list(set(lst))\n\nprint(remove_duplicates([1, 2, 2, 3, 3, 3]))",
      analysis: "利用集合自动去重特性"
    }
  ]
};