$files = @(
    "c:\Users\Administrator\Desktop\新建文件夹\Exam\新建文件夹\yuanbao_javascript_20260611_5inp82.js",
    "c:\Users\Administrator\Desktop\新建文件夹\Exam\新建文件夹\yuanbao_javascript_20260611_8jicZf.js",
    "c:\Users\Administrator\Desktop\新建文件夹\Exam\新建文件夹\yuanbao_javascript_20260611_HXNSAj.js",
    "c:\Users\Administrator\Desktop\新建文件夹\Exam\新建文件夹\yuanbao_javascript_20260611_QSzK8M.js",
    "c:\Users\Administrator\Desktop\新建文件夹\Exam\新建文件夹\yuanbao_javascript_20260611_mtR7Ac.js"
)

$allQuestions = @()
$seenKeys = @{}

foreach($file in $files) {
    Write-Host "Processing $file"
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    
    # 使用正则表达式提取questions数组内容
    if($content -match 'const questions = (\[.*?\]);' -s) {
        $jsonStr = $matches[1]
        try {
            $questions = ConvertFrom-Json $jsonStr
            foreach($q in $questions) {
                $key = ($q.title + $q.question + $q.codeTemplate) -replace '\s+', ''
                if(-not $seenKeys.ContainsKey($key)) {
                    $seenKeys[$key] = $true
                    $allQuestions += $q
                }
            }
        } catch {
            Write-Warning "Failed to parse $file"
        }
    }
}

Write-Host "Found $($allQuestions.Count) unique legacy questions"

# 保存legacy题库
$legacyJson = $allQuestions | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("c:\Users\Administrator\Desktop\新建文件夹\Exam\legacy_data.js", "window.legacyQuestions = " + $legacyJson + ";", [System.Text.Encoding]::UTF8)
Write-Host "Saved legacy_data.js"
