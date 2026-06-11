const questions = [
  // ===== 单选题 =====
  {
    type: '单选',
    id: 1,
    score: 2.0,
    question: '文件“exam.txt”与以下代码在同一目录下，其内容是一段文本:bigBen。以下代码的输出结果是()。\nf= open("exam.txt")\nprint(f)\nf.close()',
    options: ['A.bigBen', 'B.exam.txt', 'C.< io. TextIOWrapper...>', 'D.exam'],
    answer: 'C',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\95'
  },
  {
    type: '单选',
    id: 2,
    score: 2.0,
    question: '文件“family.txt”在当前代码所在目录内,其内容是一段文本:We are family。以下代码的输出结果是()。\ntxi= open("family.txt","r")\nprint(txt)\ntxt.close()',
    options: ['A.txt', 'B.family.txt', 'C.其他答案', 'D.We are family'],
    answer: 'C',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...' // 原路径替换后
  },
  {
    type: '单选',
    id: 3,
    score: 2.0,
    question: '数学关系表达式-1<x<1,表示成 Python表达式应该是()。',
    options: ['A.-1<X<1', 'B.-1<x and<1', 'C.-1<x and x>1', 'D.-1<x or x<1'],
    answer: 'A',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 4,
    score: 2.0,
    question: '5.0%2.0结果为()。',
    options: ['A.1.0', 'B.1', 'C.2.5', 'D.2.0'],
    answer: 'A',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 5,
    score: 2.0,
    question: 'Python语言属于()。',
    options: ['A.机器语言', 'B.汇编语言', 'C.高级语言', 'D.科学计算语言'],
    answer: 'C',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 6,
    score: 2.0,
    question: '表达式3**2 * 4//6%7的计算结果是()。',
    options: ['A.3', 'B.5', 'C.4', 'D.6'],
    answer: 'D',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 7,
    score: 2.0,
    question: '以下关于 Python的描述中,正确的是()。',
    options: ['A.条件4<=5<=6是合法的,输出 False', 'B.条件4<=5<=6是不合法的', 'C.条件4<=5<=6是合法的,输出True', 'D.条件4<=5<=6是不合法的，抛出异常'],
    answer: 'C',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 9,
    score: 2.0,
    question: '下面运算符优先级最低的是()。',
    options: ['A.and', 'B.+', 'C.*=', 'D.=='],
    answer: 'A',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '单选',
    id: 10,
    score: 2.0,
    question: '5/2结果为()。',
    options: ['A.2', 'B.2.5', 'C.3', 'D.2.0'],
    answer: 'B',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },

  // ===== 填空题 =====
  {
    type: '填空',
    id: 1,
    score: 2.0,
    question: '在字典中修改指定键所对应的值或者新增键值对,都可以通过表达式____完成。',
    answer: '字典名[键]=值',
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '填空',
    id: 2,
    score: 2.0,
    question: '列表的____方法可用于对列表元素进行排序，参数____的值决定了排序方式，其值为True表示____，为False表示____；参数缺省时默认值为____。假设已有列表a=[4,2,1,3,5],执行表达式a.sort(reverse=True)后,列表a的值为____。',
    answer: ['sort()', 'reverse', '降序排序', '升序排序', 'False', '[5,4,3,2,1]'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '填空',
    id: 3,
    score: 2.0,
    question: '假设数组 arr=np.array([[1, 2, 3],[4, 5, 6]], dtype=np.int64),那么 arr.ndim 的值为____, arr.shape 的值为____, arr.size 的值为____, arr.dtype 的值为____，arr.itemsize 的值为____。',
    answer: ['2', '(2, 3)', '6', 'numpy.int64', '8'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '填空',
    id: 4,
    score: 2.0,
    question: 'DataFrame对象从整体上看包含行索引、列索引和元素值,分别可以用DataFrame对象的____、____和____属性来获得其内容。',
    answer: ['index', 'columns', 'values'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },
  {
    type: '填空',
    id: 5,
    score: 2.0,
    question: '字典的键具有____性。同一个字典中____(允许/不允许)出现相同的键，不同的键____(允许/不允许)出现相同的值。',
    answer: ['唯一', '不允许', '允许'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\...'
  },

  // ===== 程序填空题 =====
  {
    type: '程序填空',
    id: 1,
    score: 5.0,
    question: '用户按照列表格式输入数据，将用户输入的列表中属于字符串类型的元素连接成一个整字符串，并打印输出。\n样例：[123,"Python",98,"等级考试"] → Python等级考试\n代码：\nls= eval(input())\ns=""\nfor item in ls:\n#**********SPACE**********\nif [?] == type("香山"):\n#**********SPACE**********\ns += [?]\nprint(s)',
    answer: ['type(item)', 'item'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\95'
  },
  {
    type: '程序填空',
    id: 2,
    score: 5.0,
    question: 'list_fruits列表是顾客从超市购买水果的列表,现在顾客想把\'apple\'也加入列表中，然后按照单词长度排序并输出[\'fig\',\'apple\',\'orange\',\'strawberry\']。\n代码：\nlist_fruits=[\'strawberry\',\'fig\',\'orange\']\n#**********SPACE**********\nlist_fruits.[?]\n#**********SPACE**********\nls=sorted(list_fruits, key=[?])\nprint(ls)',
    answer: ['append(\'apple\')', 'len'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\267'
  },
  {
    type: '程序填空',
    id: 3,
    score: 5.0,
    question: '用列表推导式生成100以内偶数的平方根。\n代码：\n#**********SPACE**********\nimport [?]\n#**********SPACE**********\nls=[ math.sqrt(x) for x in range(100) if [?] ]\nprint(ls)',
    answer: ['math', 'x%2==0'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\269'
  },
  {
    type: '程序填空',
    id: 4,
    score: 5.0,
    question: '定义因子函数，求整数的所有因子列表，用户输入一个整数，输出因子列表；输入非法字符则输出“输入错误!”。\n代码：\ndef allFactor(n):\n    if n<=1:\n        return[n]\n    if n<=3:\n        return[1,n]\n    i=1\n    #**********SPACE**********\n    [?]\n    while i<= n:\n        if n% i== 0:\n            rlist.append(i)\n        #***********SPACE**********\n        [?]\n    return rlist\ntry:\n    n=eval(input("请输入一个正整数:"))\n    print("整数{}的因子是:{}".format(n,allFactor(n)))\nexcept:\n    print("输入错误!")',
    answer: ['rlist=[]', 'i+=1'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\CK\\135'
  },

  // ===== 程序改错题 =====
  {
    type: '程序改错',
    id: 1,
    score: 5.0,
    question: '计算并输出k以内最大的10个能被13或17整除的自然数之和。\n代码：\ndef fun(k):\n    m=0\n    mc=0\n    #**********FOUND**********\n    while((k>=2)&&(mc<10)):\n    #***********FOUND**********\n    if((k%13==0)||(k%17==0)):\n        m=m+k\n        mc+=1\n    #***********FOUND**********\n    k++\n    return m',
    answer: ['while((k>=2)and(mc<10)):', 'if((k%13==0)or(k%17==0)):', 'k-=1'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\GC\\128'
  },
  {
    type: '程序改错',
    id: 2,
    score: 5.0,
    question: '修正斐波那契数列计算逻辑。\n代码：\n#**********FOUND**********\nif step==1 && step==2:\n#**********FOUND**********\nfor i in range(3, step):',
    answer: ['if step==1 or step==2:', 'for i in range(3, step+1):'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\GC\\82'
  },
  {
    type: '程序改错',
    id: 3,
    score: 5.0,
    question: '修正分段函数计算逻辑：\n$f(x)=\\begin{cases}x*x+5x & x<0且x≠-3\\\\0≤x<10且x≠2及x≠3\\\\x*x+x-1 & 其他\\end{cases}$\n代码：\n#***********FOUND**********\nif(x<0 || x!=-3.0):\n#***********FOUND**********\nelif(x>=0 && x<10.0 && x!=2.0 || x!=3.0):\n#***********FOUND**********\nreturn x',
    answer: ['if(x<0 and x!=-3.0):', 'elif(x>=0 and x<10.0 and x!=2.0 and x!=3.0):', 'return y'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\GC\\102'
  },
  {
    type: '程序改错',
    id: 4,
    score: 5.0,
    question: '修正完数判断函数：\ndef fun(n):\n    #***********FOUND**********\n    s=[]\n    for i in range(1,n):\n        if n%i==0:\n            s+=i\n    if n==s:\n        #***********FOUND**********\n        return 0\n    else:\n        return False',
    answer: ['s=0', 'return True'],
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\GC\\151'
  },

  // ===== 程序设计题 =====
  {
    type: '程序设计',
    id: 1,
    score: 10.0,
    question: '编写程序输出斐波那契(Fibonacci)数列的前20项，要求每行输出5项。\n输出样例：\n1       1       2       3       5\n8       13      21      34      55\n...',
    answer: `x1=1
x2=1
count=2
print("{:>8}{:>8}".format(x1,x2), end="")
for i in range(3, 21):
    x3=x1+x2
    print("{:>8}".format(x3), end="")
    count+=1
    if count%5==0: print()
    x1=x2
    x2=x3`,
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\BC\\1140'
  },
  {
    type: '程序设计',
    id: 2,
    score: 10.0,
    question: '打印九九乘法表（使用for循环）：\n1 * 1=1\n2 * 1=2 2 * 2=4\n...\n9 * 1=9 ... 9 * 9=81',
    answer: `for i in range(1,10):
    for j in range(1,i+1):
        print('{0}*{1}={2}'.format(i,j,i*j), end=' ')
    print()`,
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\BC\\98'
  },
  {
    type: '程序设计',
    id: 3,
    score: 10.0,
    question: '计算表达式 sum=a+aa+aaaa+...+aaa..aaaa 的值（a为1-9自然数，n为项数）。\n示例：a=2,n=4 → sum=2+22+222+2222=2468',
    answer: `def fun(a,n):
    result,ts=0,0
    for i in range(n):
        ts=ts*10+a
        result+=ts
    return result`,
    path: 'C:\\Users\\Administrator\\Desktop\\新建文件夹\\Exam\\15000059\\BC\\109'
  }
];

// 导出（如果需要模块化使用）
// export default questions;