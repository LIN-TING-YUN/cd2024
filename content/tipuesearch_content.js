var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://lin-ting-yun.github.io/cd2024/ \n 網誌:\xa0 https://lin-ting-yun.github.io/cd2024/blog \n 簡報:\xa0 https://lin-ting-yun.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/LIN-TING-YUN/cd2024 \xa0 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w1', 'text': '2024 Spring 協同產品設計實習的教學主要介紹 OnShape、Coppeliasim 與 Odoo PLM 在機械設計流程中的應用. \n 照著以下影片中的步驟創建個人的cd2024倉儲與網站與如何與Replit連結Github，並更新上推至倉儲去做更新 \n 1.建個人課程倉儲: \n 建立個人課程 cd2024 倉儲與網站的操作影片 \xa0 \n 2.下載可攜套件檔案: \n \xa0 portable_2024.7z \xa0\xa0 miktex-portable.7z \n 3.將個人倉儲 import 至 Replit: \n 設定 Replit 與 Github 應用授權的說明影片 \n 在 Replit Editor(編輯器中) 使用 Ctrl + z 執行 undo \n 在 Replit Editor(編輯器中) 使用 Ctrl + y 執行 redo \n 4.設定 Github 帳號的雙重認證: \n 說明如何設定 Github 雙重認證 , 手機必須先安裝 \xa0 Github Mobile , 也可以使用 \xa0 Authy App \xa0 作為認證套件 \n 5.如何 import 倉儲至 Replit 進行改版: \n 說明如何利用 Replit 對 cd2024 改版 \n \n 6.設定網誌: \n \xa0 如何設定個人倉儲中的 Pelican 網誌 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. \n \xa0 \n 1.利用 Github Classroom 指定分組倉儲 \n 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. \n 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版 權限 , 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. \n 說明 甲班第一組組長如何建立 midag1 Team , 並利用 Codespaces 維護 2a-midag1 分組倉儲 \n 說明如何 利用 Replit 管理從 Classroom 取得的分組倉儲 \n \n 2.利用 Codespaces 維護倉儲與網站 \n 說明 如何利用 Github Codespaces 維護網站內容 \n \n 3.在近端執行動態網站: \n 說明 如何利用近端可攜系統維護分組網站 \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. \n \n 1.列出期中分組倉儲與網站 \n cd2024 期中分組倉儲與網站 \n \n 2.期中協同分組報告 \n 根據下列教學範例: \n 說明 如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 \n 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 \n 說明 如何在 Replit 維護分組倉儲 \n \n 3.使用 Gitpod 維護倉儲與網站 \n Gitpod \xa0 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. \n 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 \xa0 https://gitpod.io \xa0 進入. \n 說明 使用 Gitpod 維護個人網站 \n 說明 使用 Gitpod 維護分組網站 \n 4.將組員的個人倉儲設為分組倉儲子模組 \n 將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: \n git submodule add 組員的個人倉儲網址 組員的學號 \n \n 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲 \n \n 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: \n git clone --recurse-submodules 加上各組的倉儲 URL \n \n 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. \n \xa0 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 另外 Git Branch 的應用, 也可減少各學員階段性改版內容完成之前, 推向 Github 分組倉儲過程的合併次數. \n', 'tags': '', 'url': 'w4.html'}, {'title': '教學影片整理', 'text': 'wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組-2 \n \n 影片敘述 \n \xa0 \xa0 \xa0 如何使用git submodule add將團隊成員的個人倉庫添加為子模組，並強調了子模組版本控制的重要性。此外，強調了在專案開發過程中版本管理的必要性，包括開發新功能、修復問題和進行產品回溯等方面。 \n 逐字稿 \n \n cd2024 2b w3 使用 gitpod 與 localhost 維護個人倉儲 \n \n \n \n \n \n 影片敘述: \n 介紹如何使用Gitpod設定網誌以及相關步驟。首先，透過gitpod.io進入Gitpod並使用GitHub帳號登入。接著，安裝必要的模組，然後執行程式。在Gitpod中可以打開多個終端機進行多個操作，速度也比較快。此外，Gitpod提供了類似codespaces和replit的功能，可以編輯和維護網誌，管理子模組。最後，介紹了如何在GitHub設置token和SSH以便更安全地管理倉儲。 \n 逐字稿 \n', 'tags': '', 'url': '教學影片整理.html'}, {'title': 'w5', 'text': '先前影片整理、分組網誌的統整與 NX 零組件繪圖. \n 利用 NX1872 協同繪製零組件 \n 下載 NX2027_lite \xa0', 'tags': '', 'url': 'w5.html'}]};