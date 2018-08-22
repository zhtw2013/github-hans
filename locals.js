var I18N = {};

I18N.conf = {
    /**
     * 要翻譯的頁面正則
     */
    rePageClass: /\b(vis-public|page-(dashboard|profile|account|new-repo|create-org)|homepage|signup|session-authentication|oauth)\b/,

    /**
     * 比對 pathname 頁面的正則
     *
     * 通知頁面 /notifications
     * 關注頁面 /watching
     * 按讚頁面 /stars
     * 問題頁面 /issues
     * 拉取請求 /pulls
     * 搜尋頁面 /search
     * 趨勢頁面 /trending
     * 展示頁面 /showcases
     * 匯入倉庫 /new/import
     *
     * 未登入首頁 /
     */
    rePagePath: /\/(notifications|watching|stars|issues|search|pulls|trending|showcases|$|new\/import)/,

    /**
     * 比對 url 頁面的正則
     *
     * 代碼片段頁面 gist
     */
    rePageUrl: /(gist)\.github.com/,

    /**
     * 忽略區域的 class 正則
     *
     * 麵包屑 breadcrumb
     * 檔案清單 files js-navigation-container js-active-navigation-container
     * 代碼高亮 highlight tab-size js-file-line-container
     * 代碼差異 data highlight blob-wrapper
     * wiki內容 markdown-body
     */
    reIgnore: /(breadcrumb|files js-navigation-container|highlight tab-size|highlight blob-wrapper|markdown-body)/,
};

I18N.zh = {
    "title": { // 標題翻譯
        "static": { // 靜態翻譯
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "pubilc": { // 公共區域翻譯
        "static": { // 靜態翻譯
            // 未登入部分
            "Personal": "個人",
            "Open source": "開源",
            "Business": "商業",
            "Pricing": "定價",
            "Support": "支援",
            "Sign in": "登入",
            "Sign up": "註冊",

            "Search GitHub": "GitHub 一下，您就知道",
            "This repository": "當前倉庫",
            "Search": "搜尋",

            "Pull Requests": "拉取請求",
            "Pull requests": "拉取請求",
            "Issues": "問題",
            "Marketplace": "廣場",
            "Gist": "代碼片段",
            "Your dashboard": "返回首頁",

            "You have no unread notifications": "您沒有未讀通知",
            "You have unread notifications": "您有未讀通知",
            "Create new…": "新增…",
            "View profile and more": "檢視更多訊息",

            "New repository": "新增倉庫",
            "New organization": "新增組織",
            "Import repository": "匯入倉庫",
            "New gist": "新增代碼片段",
            "New issue": "新增問題",

            "Signed in as": "您好",
            "Your profile": "您的首頁",
            "Your stars": "按讚的項目",
            "Your gists": "您的代碼片段",
            "Explore": "探索",
            "Integrations": "整合",
            "Help": "說明",
            "Settings": "設定",
            "Sign out": "離開",

            "Showcases": "展櫃",
            "Trending": "趨勢",
            "Stars": "已讚",


            "Previous": "上一頁",
            "Next": "下一頁",

            "Period:": "最近:",
            "Filter activity": "選擇時間",
            "1 day": "一天",
            "3 days": "三天",
            "1 week": "一週",
            "1 month": "一個月",

            "Confirm password to continue": "確認密碼後才能繼續操作",
            "Password": "密碼",
            "(Forgot password)": "(忘記密碼)",
            "Confirm password": "繼續",

            "Updated": "更新",
            "Terms": "條款",
            "Privacy": "隱私",
            "Security": "安全",
            "Contact": "聯繫",
            "Status": "狀態",
            "Training": "培訓",
            "Shop": "商店",
            "Blog": "部落格",
            "About": "關於",

            // 評論編輯器翻譯
            "Write": "編輯",
            "Preview": "預覽",

            "Add header text": "標題",
            "Add bold text <cmd+b>": "加粗 <cmd+b>",
            "Add italic text <cmd+i>": "斜體 <cmd+i>",
            "Insert a quote": "插入引用",
            "Insert code": "插入代碼",
            "Add a link <cmd+k>": "連接 <cmd+k>",
            "Add a bulleted list": "加入無序清單",
            "Add a numbered list": "加入有序清單",
            "Add a task list": "加入任務清單",
            "Directly mention a user or team": "直接提到使用者或團隊",
            "Reference an issue or pull request": "參考問題或拉取請求",
            "Leave a comment": "留下評論",

            "Attach files by dragging & dropping,": "拖曳加入附件，",
            "selecting them": "或選擇檔案",
            ", or pasting from the clipboard.": "，或複製貼上內容。",
            "Styling with Markdown is supported": "支援 Markdown 功能哦。",

            "Close issue": "關閉問題",
            "Comment": "提交",
            "Submit new issue": "提交新問題",
            "Comment on this commit": "提交",
            "Close and comment": "提交並關閉",
            "Reopen and comment": "提交並重新打開",
            "Reopen issue": "重新打開問題",

            // 公共動作詞
            "Followers": "粉絲",
            "Follow": "關注",
            "Unfollow": "取消關注",
            "Watch": "關注",
            "Unwatch": "取消關注",
            "Star": "按讚",
            "Unstar": "取消按讚",
            "Fork": "派生",

            // 信箱驗證提示
            "Please verify your email address to access all of GitHub's features.": "請驗證您的電子郵件地址以便開啟所有 GitHub 功能。",
            "Configure email settings": "修改電子郵件設定",
            "Your email was verified.": "您的郵件地址驗證成功！",
        },
        "regexp": [ // 正則翻譯 (公共區域正則會二次調用翻譯，為了彌補部分翻譯的情況)
            /**
             * 比對時間格式
             *
             * Mar 19, 2015 – Mar 19, 2016
             * January 26 – March 19
             * March 26
             *
             * 不知道是否穩定, 暫時先試用著. 2016-03-19 20:46:45
             */
            [/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) (\d+)(?:, (\d+)|)/g, function (all, month, date, year) {
                var monthKey = {
                    "Jan": "1月",
                    "Feb": "2月",
                    "Mar": "3月",
                    "Apr": "4月",
                    "May": "5月",
                    "Jun": "6月",
                    "Jul": "7月",
                    "Aug": "8月",
                    "Sep": "9月",
                    "Oct": "10月",
                    "Nov": "11月",
                    "Dec": "12月"
                };
                return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + date + '日';
            }],
            /**
             * 相對時間格式處理
             */
            [/just now|(an?|\d+) (second|minute|hour|day|month|year)s? ago/, function (m, d, t) {
                if (m === 'just now') {
                    return '剛剛';
                }

                if (d[0] === 'a') {
                    d = '1';
                } // a, an 修改為 1

                var dt = {second: '秒', minute: '分鐘', hour: '小時', day: '天', month: '個月', year: '年'};

                return d + ' ' + dt[t] + '之前';
            }],

            // 倉庫刪除提示
            [/Your repository "([^"]+)"was successfully deleted\./, "您的 \"$1\"倉庫已被成功刪除。"],
            // 信箱驗證提示
            [/An email containing verification instructions was sent to (.+)\./, "驗證郵件已發送到 $1。"],
            // 頭像下面的註冊訊息
            [/Joined on/, "註冊於"],
        ],
    },

    "page-dashboard": { // 已登入的首頁
        "static": { // 靜態翻譯
            // 新手說明
            "Learn Git and GitHub without any code!": "了解 Git 和 GitHub 無需任何代碼！",
            "Using the Hello World guide, you’ll create a repository, start a branch,": "使用 Hello World 指南，您將建立一個倉庫，開始一個分支，",
            "write comments, and open a pull request.": "寫評論，並建立一個拉取請求。(教學內容就不翻譯了...)",
            "Let's get started!": "讓我們開始吧！",
            "Hide this notice forever": "永久的隱藏該訊息",

            "Welcome to GitHub! What’s next?": "歡迎來到 GitHub！下一步幹什麼？",
            "Create a repository": "建立一個倉庫",
            "Tell us about yourself": "介紹一下您自己",
            "Browse interesting repositories": "瀏覽有趣資料庫",
            "on Twitter": "在 Twitter 上",

            "You don’t have any repositories yet!": "您目前還沒有任何倉庫！",
            "Create your first repository": "建立您的第一個倉庫",
            "or": "或者",
            "learn more about Git and GitHub": "學習更多關於 Git 和 GitHub 知識",

            // 已有倉庫的項目
            "Repositories you contribute to": "您貢獻過的倉庫",
            "Your repositories": "您的倉庫",
            "Find a repository…": "搜尋倉庫…",
            "All": "全部",
            "Public": "公共",
            "Private": "私有",
            "Sources": "原始碼",
            "Forks": "派生",

            "View": "檢視",
            "new broadcast": "條新公告",
            "new broadcasts": "條新公告",

            // 動態 狀態詞
            "starred": "讚了",
            "forked": "派生了",
            "forked from": "派生至",
            "created repository": "建立了倉庫",
            "opened pull request": "發起了拉取請求",
            "commented on pull request": "評論了拉取請求",
            "opened issue": "新增問題",
            "close issue": "關閉問題",
            "added": "加入了",
            "to": "到",
            "pushed to": "推送了",
            "closed issue": "關閉了問題",
            "merged pull request": "合併了拉取請求",
            "commented on issue": "提交了評論",

            "More": "更多",


            "Switch dashboard context": "切換預設身份",
            "Manage organizations": "管理組織",
            "Create organization": "建立組織",

            // 首次加入組織通知
            "You’ve been added to the": "您已經被加入至",
            "organization!": "組織！",
            "Here are some quick tips for a first-time organization member.": "以下是首次加入組織的一些提示。",
            "Use the switch context button in the upper left corner of this page to switch between your personal context (": "使用頁面左上角的切換身份按鈕，您可以在(",
            ") and organizations you are a member of.": ")和組織身份之間進行切換。",
            "After you switch contexts you’ll see an organization-focused dashboard that lists out organization repositories and activities.": "當您切換身份，您會看到一個組織為中心的頁面，其中列出了組織庫和活動。",
        },
        "regexp": [ // 正則翻譯
            [/Show (\d+) more repositories…/, "顯示 $1 個更多的倉庫…"],
        ],
    },

    "page-profile": { // 個人首頁
        "static": { // 靜態翻譯
            "Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.": "更新您的資料訊息包括姓名，地址，頭像等資料，讓其他使用者更容易的了解您。",

            "Joined on": "註冊於",
            "Change your avatar": "修改頭像",
            "Starred": "讚了",
            "Following": "關注",
            "Organizations": "組織",
            "Contributions": "貢獻",
            "Public contributions": "貢獻",
            "Overview": "概述",
            "Repositories": "倉庫",
            "Public activity": "動態",
            "Edit profile": "修改設定",
            "Popular repositories": "流行的倉庫",
            "Pinned repositories": "固定的倉庫",
            "Customize your pinned repositories": "自訂您的固定倉庫",
            "Repositories contributed to": "貢獻過的倉庫",
            "Contribution activity": "貢獻訊息",

            "You can now pin up to 6 repositories.": "您現在可以設定6個固定倉庫。",
            "Select up to five public repositories you'd like to show.": "最多可選擇五個要顯示的公共倉庫。",
            "Show:": "顯示:",
            "Your repositories": "您的倉庫",
            "Repositories you contribute to": "您貢獻過的倉庫",
            "Save pinned repositories": "儲存固定倉庫",

            "Jan": "1月",
            "Feb": "2月",
            "Mar": "3月",
            "Apr": "4月",
            "May": "5月",
            "Jun": "6月",
            "Jul": "7月",
            "Aug": "8月",
            "Sep": "9月",
            "Oct": "10月",
            "Nov": "11月",
            "Dec": "12月",

            "January": "一月",
            "February": "二月",
            "March": "三月",
            "April": "四月",
            "May": "五月",
            "June": "六月",
            "July": "七月",
            "August": "八月",
            "September": "九月",
            "October": "十月",
            "November": "十一月",
            "December": "十二月",

            "Mon": "週一",
            "Wed": "週三",
            "Fri": "週五",

            "Includes contributions from private repositories you can access.": "您可以造訪包括私人倉庫。",
            "Summary of pull requests, issues opened, and commits.": "包括 拉取請求, 提問, 提交.",
            "Learn how we count contributions": "您想知道如何計算貢獻的嗎",
            "Less": "少",
            "More": "多",

            // "Contributions in the last year": "過去一年的貢獻",
            // "Longest streak": "最長連續貢獻天數",
            // "Current streak": "當前連續貢獻天數",
            // "No recent contributions": "最近沒有貢獻",

            // 2016-05-20 更新貢獻日曆部分
            "Contribution settings": "貢獻設定",
            "Select which contributions to show": "選擇要顯示哪​​些貢獻",
            "Public contributions only": "僅公共的貢獻",
            "Visitors to your profile will only see your contributions to public repositories.": "訪客到您的個人資料只會看到公共倉庫部分的貢獻。",
            "Public and private contributions": "公共和私人貢獻",
            "Visitors to your profile will see your public and anonymized private contributions.": "訪客到您的個人資料將會看到您的公共和匿名的私人貢獻。",
            "Visitors will now see only your public contributions.": "訪客只會看到您公共倉庫部分的貢獻。",
            "Visitors will now see your public and anonymized private contributions.": "訪客將看到您的公共和匿名的私人貢獻。",

            "commits": "次提交",
            "Pull Request": "拉取請求",
            "Pull Requests": "拉取請求",
            "Issue reported": "問題報告",
            "Issues reported": "問題報告",

            // 動態 狀態詞
            "starred": "讚了",
            "forked": "收藏了",
            "forked from": "收藏至",
            "created repository": "建立了倉庫",
            "opened pull request": "發起了拉取請求",
            "commented on pull request": "評論了拉取請求",
            "opened issue": "新增問題",
            "close issue": "關閉問題",
            "added": "加入了",
            "to": "到",
            "pushed to": "推送了",
            "closed issue": "關閉了問題",
            "merged pull request": "合併了拉取請求",
            "commented on issue": "提交了評論",

            // 倉庫 tab
            "Find a repository…": "搜尋倉庫…",
            "All": "全部",
            "Public": "公共",
            "Private": "私有",
            "Sources": "原始碼",
            "Forks": "派生",
            "Mirrors": "鏡像",
            "New": "新增",

            "Block or report": "阻止或檢舉",
            "Learn more about blocking a user.": "檢視詳細的阻止使用者訊息。",
            "Block or report this user": "阻止或檢舉該使用者",
            "Block user": "阻止該使用者",
            "Hide content and notifications from this user.": "屏蔽所有來自該使用者的通知消息。",
            "Report abuse": "檢舉該使用者",
            "Contact Support about this user's behavior.": "將該使用者行為上報。",

            "Search repositories…": "搜尋這些查庫…",
            "Search starred repositories…": "搜尋按讚的倉庫…",
            "Type:": "類型:",
            "Select type:": "選擇類型:",
            "Language:": "語言:",
            "Select language:": "選擇語言:",
            "All languages": "所有語言",

            "Sort:": "排序:",
            "Sort options": "排序選項",
            "Recently starred": "最近關注的",
            "Recently active": "最近活動的",
            "Most stars": "最多讚的",
            "Unstar": "取消按讚",

            "Jump to": "跳轉到",
            "First pull request": "第一次拉取請求",
            "First issue": "第一次提問",
            "First repository": "第一個倉庫",
            "Joined GitHub": "剛註冊 GitHub",
            "Show more activity": "顯示更多",
        },
        "regexp": [ // 正則翻譯
            [/Created (\d+)[\s\r\n]+commits? in[\s\r\n]+(\d+)[\s\r\n]+repositor(y|ies)/, "在 $2 個庫中建立了 $1 次提交"],
            [/Created (\d+)[\s\r\n]+repositor(y|ies)/, "建立了 $1 個倉庫"],
            [/Opened (\d+)[\s\r\n]+other[\s\r\n]+pull requests?/, "發起了 $1 個拉取請求"],
            [/Opened (\d+)[\s\r\n]+other[\s\r\n]+issues/, "開了 $1 個其他問題"],
            [/(\d+) commits?/, "$1 次提交"],
            [/Pushed (\d+) commits? to/, "推送了 $1 次提交到"],
            [/Follow ([^’]+)’s activity feed/, "關注 $1 的 feed"],
            [/([^ ]+) has no activity during this period\./, "$1 近期沒有任何活動。"],
            [/([\s\S]+?) has no activity yet for this period\./, "$1 近期沒有任何活動。"],
            [/(\d+) total/, "$1 次"],
            [/(\d+) days?/, "$1 天"],
            [/([\d,]+) contributions in the last year/, "$1 次貢獻在過去的一年中"],
        ],
    },

    "page-account": { // 個人設定
        "static": { // 靜態翻譯
            // 選單
            "Personal settings": "個人設定",
            "Profile": "基本訊息",
            "Account": "帳戶設定",
            "Emails": "信箱設定",
            "Notifications": "通知設定",
            "Billing": "財務訊息",
            "SSH and GPG keys": "SSH 和 GPG keys",
            "Security": "安全訊息",
            "OAuth applications": "授權應用",
            "Personal access tokens": "造訪令牌",
            "Repositories": "倉庫管理",
            "Organizations": "組織管理",
            "Saved replies": "快捷回復",

            // Profile 選單
            "Public profile": "基本資料",
            "Profile picture": "我的頭像",
            "Upload new picture": "上傳新圖片",
            "You can also drag and drop a picture from your computer.": "您也可以直接拖曳照片鏡像上傳.",
            "Name": "暱稱",
            "Public email": "公共信箱",
            "Don’t show my email address": "不顯示我的信箱",
            "You can add or remove verified email addresses in your": "您可以加入或刪除郵件地址在您的",
            "personal email settings": "信箱設定",
            "URL": "網站",
            "Company": "公司",
            "You can": "您可以",
            "other users and organizations to link to them.": "其他使用者和組織連結到他們。",
            "Location": "地址",
            "your company's GitHub organization to link it.": "貴公司和GitHub的組織聯繫起來。",
            "Update profile": "更新資料",
            "Profile updated successfully": "資料更新成功。",

            "Contributions": "貢獻",
            "Include private contributions on my profile": "在我的首頁顯示私人貢獻",
            "Get credit for all your work by showing the number of contributions to private repositories on your profile without any repository or organization information.": "顯示所有包括私人倉庫的貢獻到您的個人資料頁面，不包括組織倉庫訊息。",
            "Learn how we count contributions": "檢視如統計貢獻",
            "Update contributions": "更新貢獻",

            "GitHub Developer Program": "GitHub 開發者計劃",
            "Building an application, service, or tool that integrates with GitHub?": "構建應用程式、服務或工具,整合了GitHub嗎？",
            "Join the GitHub Developer Program": "加入 GitHub 開發者計劃",
            ", or read more about it at our": "或了解更多訊息在我們的",
            "Developer site": "開發者站點",

            "Jobs profile": "就業狀態",
            "Available for hire": "求HR帶走",
            "Save jobs profile": "儲存狀態",


            // Account settings 選單
            "Change password": "修改密碼",
            "Old password": "舊的密碼",
            "New password": "新的密碼",
            "Confirm new password": "再次輸入新的密碼",
            "Update password": "更新",
            "I forgot my password": "我忘記我的密碼了",
            "Looking for two-factor authentication? You can find it in": "使用雙重認證？您可以去",
            "Change username": "修改使用者名稱",
            "Changing your username can have": "修改您的使用者名稱會導致",
            "unintended side effects": "意想不到的副作用",
            "Delete account": "刪除帳戶",
            "Once you delete your account, there is no going back. Please be certain.": "一旦您刪除了帳戶，就沒辦法恢復，請三思而行。",
            "Delete your account": "確認刪除",

            // Emails 選單
            "Your": "您的",
            "primary GitHub email address": "GitHub Email 主帳戶",
            "will be used for account-related notifications (e.g. account changes and billing receipts) as well as any web-based GitHub operations (e.g. edits and merges).": "將被用於接收相關通知 (例如：帳單訊息)，以及任何基於 web 的 GitHub 操作 (例如：編輯或合併操作)。",
            "Primary": "主帳戶",
            "Private": "私有",
            "Public": "公開",
            "This email will be used as the 'from' address for web-based GitHub operations.": "該信箱將被用作 \"發件人\"位地址",
            "Your primary email address is now public.": "主郵件地址現在是公開的。",
            "Your primary email address is now private.": "主郵件地址現在是保密的。",
            "Set as primary": "設為主帳戶",
            "Add email address": "加入 Email 地址",
            "Add": "加入",
            "Keep my email address private": "將我的郵件地址保密",
            "We will use": "我們將使用",
            "when performing web-based Git operations and sending email on your behalf. If you want command line Git operations to use your private email you must": "作為預設\"發件人\"地址以您的名義發送電子郵件。如果您想在命令行 Git 的操作中使用您的私人郵件地址，您必須在",
            "set your email in Git": "Git 中設定您的電子郵件地址",
            "Email preferences": "Email 偏好設定",
            "Receive all emails, except those I unsubscribe from.": "接收所有郵件，除了那些我退訂的訊息。",
            "We'll occasionally contact you with the latest news and happenings from the GitHub Universe.": "我們將會把 GitHub Universe 的最新消息和事件發送給您。",
            "Learn more": "檢視更多",
            "Only receive account related emails, and those I subscribe to.": "只接收帳戶相關的電子郵件，以及我的訂閱的訊息。",
            "We'll only send you legal or administrative emails, and any emails you’ve specifically subscribed to.": "我們只向您發送法律或行政郵件以及您訂閱訊息。",
            "Save email preferences": "儲存偏好",
            "Successfully updated your email preferences.": "Email 偏好設定修改成功。",
            "Looking for activity notification controls? Check the": "想要了解更詳細的通知設定，請前往",

            // Notification center 選單
            "How you receive notifications": "通知設定",
            "Automatic watching": "自動關注",
            "When you’re given push access to a repository, automatically receive notifications for it.": "當您給一個倉庫推送權限時，自動接收相關通知。",
            "Automatically watch repositories": "自動關注倉庫",
            "Participating": "參與話題",
            "When you participate in a conversation or someone brings you in with an": "當有人",
            "@mention": "@使用者名稱",
            "Watching": "關注倉庫",
            "Updates to any repositories or threads you’re watching.": "當您關注的倉庫更新時。",
            "Your notification settings apply to the": "通知設定將套用至",
            "repositories you’re watching": "您關注的倉庫",
            "Notification email": "接收通知的信箱",
            "Primary email address": "主信箱地址",
            "Save": "儲存",
            "Custom routing": "自訂",
            "You can send notifications to different": "您可以發送通知不同的",
            "verified": "驗證",
            "email addresses depending on the organization that owns the repository.": "電子郵件地址取決於組織擁有倉庫。",

            // Billing 選單
            "Billing overview": "財務訊息",
            "Plan": "方案",
            "Free": "免費",
            "Change plan": "修改方案",
            "per month for": "每月 -",
            "Learn more about Git LFS": "什麼是 Git LFS (大檔案存儲)？",
            "Purchase more": "購買更多",
            "Billing cycle": "結算週期",
            "Bandwidth": "頻寬",
            "Bandwidth quota resets every billing cycle": "頻寬配額每個週期重設",
            "Storage": "存儲",
            "Payment": "支付方式",
            "No payment method on file.": "沒有設定支付方式",
            "Add payment method": "加入支付方式",
            "Coupon": "優惠券",
            "You don’t have an active coupon.": "沒有可用的優惠券",
            "Redeem a coupon": "兌換優惠券",
            "Payment history": "支付記錄",
            "Amounts shown in USD": "以美元顯示",
            "You have not made any payments.": "沒有支付記錄",

            // Security 選單
            "Two-factor authentication": "雙重認證",
            "Status:": "狀態:",
            "Off": "未開啟",
            "Set up two-factor authentication": "設定雙重認證",
            "provides another layer of security to your account.": "為您的帳戶提供了另一層安全保障。",
            "Sessions": "工作階段訊息",
            "This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.": "這是您登陸的設備工作階段清單，如果不是您本人操作，可以關閉該工作階段。",
            "Your current session": "您當前的工作階段",
            "Location:": "地址",
            "Signed in:": "登陸於",
            "Last accessed on": "最後造訪時間",
            "Revoke": "註銷",
            "Security history": "操作記錄",
            "This is a security log of important events involving your account.": "這是您帳戶的操作日誌",

            // Applications 選單
            "Authorized applications": "已授權的應用",
            "Developer applications": "開發者應用",
            "Revoke all": "註銷全部",
            "You have granted the following applications access to your account. Read more about connecting with third-party applications at": "您已授權下來應用造訪您的帳戶訊息，如需了解更多請閱讀",
            "Sort": "排序",
            "Sort by": "排序方式",
            "Alphabetical": "字母排序",
            "Recently used": "最近使用",
            "Least recently used": "最少使用",
            "No Developer Applications": "暫無開發者的應用",
            "Developer applications are used to access the": "開發者應用是用於造訪",
            ". To get started you should": "。首先您應該",
            "register an application": "註冊一個應用",
            "Register new application": "註冊應用",
            "Register a new OAuth application": "註冊一個 OAuth 應用",
            "Application name": "應用名稱",
            "Something users will recognize and trust": "讓使用者識別和信任",
            "Homepage URL": "首頁位址",
            "The full URL to your application homepage": "您的應用首頁位址",
            "Application description": "應用描述",
            "Application description is optional": "應用描述 (可選)",
            "This is displayed to all potential users of your application": "給您的目標使用者最直接的訊息",
            "Authorization callback URL": "認證回調位址",
            "Your application’s callback URL. Read our": "您的應用授權回調位址。詳情請閱讀",
            "OAuth documentation": "OAuth 檔案",
            "for more information": "。",
            "Register application": "註冊應用",
            "Drag & drop": "拖曳上傳",
            "or": "或者",
            "choose an image": "選擇圖片",

            // Personal access tokens 頁面
            "Generate new token": "建立新的密令",
            "Tokens you have generated that can be used to access the": "密令可以用來造訪",
            "Full control of private repositories": "完全控制私有倉庫",
            "Edit": "編輯",
            "Delete": "刪除",
            "Personal access tokens function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to": "造訪令牌功能類似於OAuth，他可以代替密碼給 Git Https 造訪，",
            "authenticate to the API over Basic Authentication": "或用來進行 API 調用的驗證",

            // Organizations 頁面
            "You are not a member of any organizations.": "您暫無任何組織。",
            "Transform account": "帳戶變更",
            "Account transformation warning": "帳戶變更警告",
            "What you are about to do is an irreversible and destructive process. Please be aware:": "這將是一個不可逆轉的過程，請確認：",
            "Any user-specific information (OAuth tokens, SSH keys, Job Profile, etc) will be erased": "任何使用者特定的訊息（OAuth tokens, SSH keys, Job Profile, 等）將被刪除。",
            "create a new personal account": "建立一個新的個人帳戶",
        },
        "regexp": [ // 正則翻譯
            [/This email will not be used as the 'from' address for web-based GitHub operations - we will instead use ([^@]+@users.noreply.github.com)./, "該信箱不會被用作 \"發件人\"地址，我們會改用 ($1) 作為預設 \"發件人\"地址。"],
            [/Your primary email was changed to ([^@]+@[^\n]+)\./, "您的 Email 主帳戶已經更改為 $1"],
            [/(\d+) private repositories?\./, "$1 個私有倉庫."],
            [/(\d+) data packs?/, "$1 資料包"],
            [/(\d+) days? left,\n\s+billed monthly/, "$1天, 按月"],
            [/Using\n\s+([\d.]+) of\n\s+(\d+) GB\/month/, "＄$1, $2GB/月"],
            [/Using\n\s+([\d.]+) of\n\s+(\d+) GB/, "＄$1, $2GB"],
            [/(\d+) Authorized applications?/, "$1 個授權應用"],
            [/Turn (\w+) into an organization/, "變更 $1 為一個組織"],
            [/You will no longer be able to sign into (\w+) \(all administrative privileges will be bestowed upon the owners you choose\)/, "您將不能作為帳戶登入到 $1。（所有管理權限將賦予您選擇的所有者）"],
            [/Any commits credited to (\w+) will no longer be linked to this GitHub account/, "任何提交歸功於 $1 將不再連結到這個 GitHub 帳戶"],
            [/If you are using (\w+) as a personal account, you should/, "如果您正在使用 $1 作為個人帳戶，您應"],
            [/before transforming (\w+) into an organization./, "在轉化 $1 組織之前。"],
        ],
    },

    "page-new-repo": { // 新增倉庫
        "static": { // 靜態翻譯
            "Create a new repository": "建立一個新的倉庫",
            "A repository contains all the files for your project, including the revision history.": "倉庫包含項目中的所有檔案，包括修訂歷史記錄。",
            "Owner": "建立者",
            "Repository name": "倉庫名稱",
            "Great repository names are short and memorable. Need inspiration? How about": "一個好的倉庫名應該是簡單容易被記住的，需要來點靈感嗎？這個名字怎麼樣",
            "Description": "描述",
            "(optional)": "(可選)",
            "Public": "公共 (免費)",
            "Anyone can see this repository. You choose who can commit.": "任何人都可以看到這個倉庫，您可以選擇誰能提交。",
            "Private": "私有 (收費)",
            "You choose who can see and commit to this repository.": "您可以選擇誰可以看和提交到該倉庫。",
            "Initialize this repository with a README": "使用 README.md 初始化倉庫",
            "This will let you immediately clone the repository to your computer. Skip this step if you’re importing an existing repository.": "這將讓您可以立刻複製該倉庫到您的電腦。如果您要提交已有的倉庫，請忽略這個選項。",
            "Add .gitignore:": "加入 .gitignore 檔案",
            "Filter ignores…": "篩選忽略檔案…",
            "Add a license:": "加入發布許可",
            "Filter licenses…": "篩選許可…",
            "None": "無",
            "Need help picking a license? We’ve built a site just for you.": "需要幫您挑選一個許可嗎？我們為您供了參考頁面。",
            "Create repository": "建立倉庫",
            "Creating repository…": "建立倉庫中…",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "new/import": { // 匯入倉庫
        "static": { // 靜態翻譯
            // 第一頁
            "Import your project to GitHub": "匯入您的項目到 GitHub",
            "Import all the files, including the revision history, from another version control system.": "匯入的所有檔案，包括修訂歷史記錄，從另一個版本控制系統。",
            "Your old repository’s clone URL": "您的老倉庫 URL 位址",
            "Learn more about the types of": "倉庫更多類型的說明",
            "supported VCS": "支援 VCS",
            "Your new repository details": "新倉庫描述",
            "Owner": "所有者",
            "Name": "倉庫名稱",
            "Your new repository will be": "新倉庫將會",
            "public": "公開",
            ". In order to make this repository private, you’ll need to": "如果想使這個倉庫轉為私有的，您需要",
            "upgrade your account": "升級帳戶",
            "Cancel": "取消",
            "Begin import": "開始匯入",
            "Preparing import…": "準備匯入…",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "page-create-org": { // 新增組織
        "static": { // 靜態翻譯
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "vis-public": { // 倉庫頁
        "static": { // 靜態翻譯
            // 匯入倉庫 第二頁
            "Preparing your new repository": "準備新的存儲庫",
            "There is no need to keep this window open, we’ll email you when the import is done.": "沒有必要在這個窗口傻等，當匯入完成時，我們會向您發送電子郵件。",
            "Detecting your project’s version control system…": "檢測項目的版本控制系統…",
            "Importing  commits and revision history…": "匯入提交和歷史版本…",
            "Importing complete! Your new repository": "匯入完成，您的新倉庫",
            "is ready.": "已經就緒。",

            // 倉庫頁面
            "Where should we fork this repository?": "您想把該倉庫派生到哪個角色下？",

            "Code": "代碼",
            "Pulse": "統計",
            "Graphs": "圖表",
            "Projects": "項目",

            // 倉庫描述編輯
            "No description or website provided.": "沒有提供說明和網站訊息.",
            "Edit": "編輯",
            "Description": "描述",
            "Short description of this repository": "簡短的描述下您的倉庫",
            "Website": "網址",
            "Website for this repository (optional)": "這個倉庫的網址 (可選)",
            "Save": "儲存",
            "or": "或",
            "Cancel": "取消",

            // 關注通知設定
            "Notifications": "通知類型",
            "Not watching": "取消關注",
            "Watching": "關注",
            "Ignoring": "忽略",
            "Be notified when participating or @mentioned.": "僅參與交談或@我時通知我.",
            "Be notified of all conversations.": "所有交談都通知我.",
            "Never be notified.": "忽略任何通知.",

            "commit": "次提交",
            "commits": "次提交",
            "branch": "分支",
            "branches": "分支",
            "release": "次發布",
            "releases": "次發布",
            "contributor": "個貢獻者",
            "contributors": "個貢獻者",
            "Copy to clipboard": "複製到剪貼簿",
            "Copied!": "複製成功!",

            "Your recently pushed branches:": "您最近推送的分支:",
            "(less than a minute ago)": "不到一分鐘前",
            "Compare & pull request": "比較 & 拉取請求",

            "New pull request": "發起拉取請求",
            "Create new file": "新增檔案",
            "Upload files": "上傳檔案",
            "Find file": "查找檔案",
            "Copy path": "複製路徑",
            "Clone or download": "複製或下載",
            "Download ZIP": "下載 ZIP",
            "History": "歷史記錄",

            "Use SSH": "使用 SSH",
            "Use HTTPS": "使用 HTTPS",
            "Open in Desktop": "從桌面版打開",

            "Clone with SSH": "通過 SSH 複製",
            "Clone with HTTPS": "通過 HTTPS 複製",
            "Use an SSH key and passphrase from account.": "使用 SSH 金鑰和密碼造訪。",
            "Use Git or checkout with SVN using the web URL.": "使用 git 或 svn 檢出該倉庫。",

            "Branch:": "分支:",
            "Switch branches/tags": "選擇分支或標籤",
            "Branches": "分支",
            "Tags": "標籤",
            "Nothing to show": "暫無",

            "File uploading is now available": "現在可以上傳檔案了",
            "You can now drag and drop files into your repositories.": "您可以直接拖曳檔案到該倉庫介面進行上傳。",
            "Learn more": "檢視詳情",
            "Dismiss": "我知道了",

            // 關注者頁面
            "Watchers": "關注者",

            // 按讚者頁面
            "Stargazers": "按讚的人",
            "All": "全部",
            "You know": "您關注的",

            // issues 頁面
            "opened this": "打開這個",
            "Issue": "問題",
            "added a commit that closed this issue": "在提交時關閉了這個問題",
            "closed this in": "關閉於",
            "added the": "加入了",
            "added": "加入",
            "and removed": "並移除了",
            "label": "標籤",
            "labels": "標籤",
            "self-assigned this": "自己受理了該問題",
            "edited": "編輯的",
            "added this to the": "加入至",
            "milestone": "里程碑",
            "closed this": "關閉了",
            "reopened this": "重新打開了",
            "This was referenced": "這是引用",

            "No description provided.": "沒有具體描述。",
            "Add your reaction": "加入您的表情",
            "Pick your reaction": "選擇您的表情",
            "Leave a comment": "發表評論",
            "Milestone": "里程碑",
            "Unsubscribe": "取消訂閱",
            "Attach files by dragging & dropping,": "拖曳加入附件，",
            "selecting them": "或選擇檔案，",
            ", or pasting from the clipboard.": "或複製貼上內容。",
            "Styling with Markdown is supported": "支援 Markdown 功能。",
            "Close issue": "關閉問題",
            "Comment": "提交",

            "Filters": "篩選",
            "Open issues and pull requests": "開放的問題或拉取請求",
            "Your issues": "您提出的問題",
            "Your pull requests": "您的拉取請求",
            "Everything assigned to you": "任何關於您的",
            "Everything mentioning you": "提及您的",
            "View advanced search syntax": "檢視進階搜尋語法",

            "Labels": "標籤",
            "None yet": "暫無",
            "Milestones": "里程碑",
            "No milestone": "無里程碑",
            "Author": "作者",
            "Assignee": "受理人",
            "Assignees": "受理人",
            "No one—": "無人 - ",
            "assign yourself": " 受理自己",
            "No one assigned": "無人受理",
            "Sort": "排序",

            "Filter by author": "篩選使用者",
            "Filter users": "篩選使用者名稱",
            "Filter by label": "篩選標籤",
            "Filter labels": "篩選標籤",
            "Unlabeled": "無標籤",
            "Filter by milestone": "篩選里程碑",
            "Filter milestones": "篩選里程碑",
            "Issues with no milestone": "無里程碑",
            "Filter by who’s assigned": "篩選代理人",
            "Assigned to nobody": "無代理人",
            "Sort by": "排序",
            "Newest": "最新的",
            "Oldest": "最老的",
            "Most commented": "最多評論",
            "Least commented": "最少評論",
            "Recently updated": "最近更新",
            "Least recently updated": "最早更新",
            "View all issues in this milestone": "檢視這個里程碑的所有問題",

            // New collaborator 頁面
            "New collaborator": "加入合作者",
            "Collaborators": "合作者",
            "Push access to the repository": "當前倉庫的推送權限",
            "This repository doesn’t have any collaborators yet. Use the form below to add a collaborator.": "當前倉庫沒有合作者，您可以在下面輸入框加入合作者。",
            "Search by username, full name or email address": "搜尋使用者名稱, 全名, 信箱地址：",
            "Add collaborator": "加入合作者",

            // Upload files 頁面
            "Drag files here to add them to your repository": "拖曳檔案加入至當前倉庫",
            "Drag additional files here to add them to your repository": "拖曳其他檔案加入至當前倉庫",
            "Drop to upload your files": "拖曳上傳您的檔案",
            "Or": "或",
            "choose your files": "選擇檔案",
            "Yowza, that’s a big file. Try again with a file smaller than 25MB.": "我勒個擦，這麼大的檔案，單檔案不得超過25MB",
            "Yowza, that’s a lot of files. Try again with fewer than 100 files.": "我勒個擦，這麼多檔案，一次不能超過100個",
            "This file is empty.": "這個檔案是空的",
            "Something went really wrong, and we can’t process that file.": "遇到錯誤，我們處理不了這個檔案。",
            "Uploading": "檔案上傳中",
            "of": "",
            "files": "",
            "Commit changes": "提交變更",
            "Add files via upload": "通過加入檔案上傳",
            "Optional extended description": "可選的描述",
            "Add an optional extended description…": "加入描述... (可選)",
            "Commit directly to the": "提交到",
            "Create a": "建立",
            "new branch": "新分支",
            "for this commit and start a pull request.": "為這個提交，並且發起一個拉取請求。",
            "Learn more about pull requests.": "了解更多拉取請求。",

            // Find file 頁面
            "You’ve activated the": "您已啟動",
            "file finder": "檔案搜尋模式",
            ". Start typing to filter the file list. Use": "。輸入關鍵字查找您的檔案。使用",
            "and": "和",
            "to navigate,": "選擇檔案",
            "to view files,": "檢視檔案",
            "to exit.": "返回。",

            // 拉取請求訊息提示
            "Your recently pushed branches:": "您最近推送的分支:",
            "Compare & pull request": "比較 & 拉取請求",

            // Pull Requests 頁面
            "There aren’t any open pull requests.": "暫無拉取請求。",
            "There aren’t any open issues.": "暫無開放的問題。",
            "Use the links above to find what you’re looking for, or try": "使用上面的連結來找到您要找的，或者嘗試",
            "a new search query": "新的搜尋查詢",
            ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。搜尋列也是快速找到問題最相關的您超級有幫助的。",

            "Conversation": "交談",
            "Files changed": "變更的檔案",
            "commented": "評論",
            "merged commit": "已合併提交",
            "into": "到",
            "from": "來自",

            "Revert": "還原",

            "Avoid bugs by automatically running your tests.": "通過持續整合測試來避免BUG。",
            "Continuous integration can help catch bugs by running your tests automatically.": "持續整合可以通過自動運行您的測試有助於捕獲錯誤。",
            "Merge your code with confidence using one of our continuous integration providers.": "合併您的代碼使用我們信任的持續整合供應商。",

            "Add more commits by pushing to the": "加入更多來至於",
            "branch on": "分支的提交推送到",

            "This branch has no conflicts with the base branch": "該分支與base支沒有衝突",
            "Merging can be performed automatically.": "可以自動地執行合併。",
            "You can also": "您也可以在",
            "open this in GitHub Desktop": "GitHub桌面版本",
            "or view": "打開，或通過",
            "command line instructions": "命令行檢視",

            //// 直接提交拉取請求
            "Open a pull request": "新增一個拉取請求",
            "Create a new pull request by comparing changes across two branches. If you need to, you can also": "通過比較兩個分支的更改來建立一個新的拉請求。如果需要，還可以",
            "Able to merge.": "可被合併。",
            "These branches can be automatically merged.": "該分支可被自動合併。",
            "file changed": "個檔案變更",
            "files changed": "個檔案變更",
            "commit comment": "次提交",
            "commit comments": "次提交",
            "No commit comments for this range": "該範圍變更沒有提交注釋",

            "Comparing changes": "比較變更",
            "Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also": "選擇兩個分支，看看發生了什麼改變，或發起一個新的拉請求。如果您需要，您也可以",
            "base fork:": "基派生:",
            "There isn’t anything to compare.": "沒有任何東西可比較。",
            "is up to date with all commits from": "已是最新，提交於",
            ". Try": "。嘗試",
            "switching the base": "切換基礎庫",
            "for your comparison.": "來進行比較。",

            // projects 頁面
            "This repository doesn't have any projects yet": "該倉庫目前沒有任何項目",
            "Create a project": "建立一個項目",

            // wiki 頁面
            "Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.": "wiki 為您的倉庫提供了一個更好的檔案資料。",
            "Create the first page": "建立第一個頁面",

            "Create new page": "建立新頁面",
            "Write": "編輯",
            "Preview": "預覽",
            "Edit mode:": "編輯模式:",
            "Edit Message": "提交訊息",
            "Save Page": "儲存頁面",

            // settings 頁面
            "Webhooks & services": "Web鉤子 & 服務",
            "Deploy keys": "部署金鑰",

            "Options": "基本選項",
            "Repository name": "倉庫名",
            "Rename": "重命名",
            "Features": "特性",
            "GitHub Wikis is a simple way to let others contribute content. Any GitHub user can create and edit pages to use for documentation, examples, support, or anything you wish.": "GitHub Wikis 是一個簡單的方法讓別人貢獻內容。GitHub 的任何使用者都可以建立和編輯頁面中使用的檔案，範例，支援或任何您想。",
            "Restrict editing to collaborators only": "編輯限制只有合作者可以",
            "Public wikis will still be readable by everyone.": "公共 wikis 仍然會受到大家的可讀性",
            "GitHub Issues adds lightweight issue tracking tightly integrated with your repository. Add issues to milestones, label issues, and close & reference issues from commit messages.": "GitHub 與您的存儲庫加入輕量級問題跟蹤緊密整合的問題。加入里程碑的問題，標籤問題，並密切與參考問題提交消息。",

            "Merge button": "合併按鈕",
            "When merging pull requests, you can allow merge commits, squashing, or both.": "當合併拉取請求時，您可以允許合併提交，壓縮。",
            "Allow merge commits": "允許合併提交",
            "Add all commits from the head branch to the base branch with a merge commit.": "從head分支的所有提交合併提交到base分支。",
            "Allow squash merging": "允許壓縮合併",
            "Combine all commits from the head branch into a single commit in the base branch.": "從head分支的所有提交壓縮提交到base分支。",
            "You must select at least one option": "您至少要選擇一個選項。",

            "GitHub Pages": "GitHub 項目示範頁面",
            "Your site is published at": "您的示範位址為:",
            "Your site is ready to be published at": "您的示範位址為:",
            "is designed to host your personal, organization, or project pages from a GitHub repository.": "為您私人，組織或倉庫項目提供靜態web頁面。",
            "Source": "源",
            "Your GitHub Pages site is currently being built from the": "您的 GitHub Pages 網站目前正在建立在",
            "branch.": "分支。",
            "Select source": "選擇源",
            "Use the": "使用",
            "branch for GitHub Pages.": "分支作為 GitHub Pages",
            "Disable GitHub Pages.": "禁用 GitHub Pages",
            "Custom domain": "自訂域名",
            "Custom domains allow you to serve your site from a domain other than": "自訂域名也許您用其他域名造訪",
            "Update your site": "更新您的站點",
            "To update your site, push your HTML or": "更新您的站點，可以直接推送 html 或者使用",
            "updates to your": "更新到",
            "branch. Read the": "分支。詳情請閱讀",
            "Pages help article": "示範頁面說明",
            "for more information.": "獲取更多訊息",
            "Overwrite site": "覆蓋現有站點",
            "Replace your existing site by using our automatic page generator. Author your content in our Markdown editor, select a theme, then publish.": "透過使用我們的自動頁面生成器替換現有的網站。您可以在我們的 Markdown 編輯器，選擇一個主題，然後發布。",
            "Launch automatic page generator": "啟動自動生成器",
            "Enforce HTTPS": "強制 HTTPS",
            "— Unavailable for your site because you have a custom domain configured (": "- 無法為您的網站開啟，因為您配置了一個自訂域名 (",
            "HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site.": "HTTPS 提供了一層加密，防止他人偷窺或篡改的交通到您的網站。",
            "When HTTPS is enforced, your site will only be served over HTTPS.": "當開啟強制 HTTPS 後，您的網站將只能通過 HTTPS 造訪。",

            "Danger Zone": "危險區",
            "Make this repository private": "將該倉庫設為私有倉庫",
            "Public forks can’t be made private. Please": "派生的的倉庫，無法轉為私有，請",
            "duplicate the repository": "複製一份該倉庫。",
            "Make private": "轉為私有",
            "Please": "請",
            "upgrade your plan": "更新您的私有倉庫計劃",
            "to make this repository private.": "讓這個倉庫轉為私有。",
            "Transfer ownership": "轉讓所有權",
            "Transfer": "轉讓",
            "Transfer this repository to another user or to an organization where you have admin rights.": "此存儲庫轉移到其他使用者或組織，在這裡您具有管理員權限。",
            "Delete this repository": "刪除此倉庫",
            "Once you delete a repository, there is no going back. Please be certain.": "一旦刪除您的倉庫，將無法找回。請您三思。",

            "Default branch": "預設分支",
            "The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.": "預設分支被認為是“基地”分支在您的資料庫，對所有拉取請求和代碼的提交是自動進行的，除非您指定一個不同的分支。",
            "Update": "更新",
            "Switch default branch": "選擇預設分支",
            "Filter branches": "搜尋分支",
            "Protected branches": "受保護的分支",
            "Protect branches to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging. New to protected branches?": "受保護分支禁用強制推送，避免刪除分支機構，合併可選要求前狀態檢查。建立新的受保護的分支機構？",
            "Learn more.": "檢視更多訊息",
            "No protected branches yet.": "暫無受保護分支",

            "Are you ABSOLUTELY sure?": "您確定一定以及肯定？",
            "Unexpected bad things will happen if you don’t read this!": "請仔細閱讀以下提示訊息！！！",
            "This action": "該操作是",
            "CANNOT": "不可逆的",
            "be undone. This will permanently delete the": "，您將永久刪除",
            "repository, wiki, issues, and comments, and remove all collaborator associations.": "倉庫，wiki，問題和提交內容，並且移除所有合作者。",
            "Please type in the name of the repository to confirm.": "請您輸入該倉庫名以確認刪除它。",
            "I understand the consequences, delete this repository": "我確定一定以及肯定刪除它",

            // Compare changes 頁面
            "Compare changes": "變更比較",
            "Compare changes across branches, commits, tags, and more below. If you need to, you can also": "比較跨分支，提交，標籤，和更多的變更。如果您需要，也可以",
            "compare across forks": "比較派生庫和源倉庫",
            "base:": "基礎庫:",
            "compare:": "比較庫:",
            "Create pull request": "建立拉取請求",
            "Choose different branches or forks above to discuss and review changes.": "選擇不同的分支或派生來討論和檢視變化。",
            "Compare and review just about anything": "比較和審查任何檔案",
            "Branches, tags, commit ranges, and time ranges. In the same repository and across forks.": "分支，標籤，提交範圍和時間範圍。在同一倉庫和派生的倉庫。",
            "Example comparisons": "比較例子",

            // 新增空倉庫
            "Quick setup": "快速安裝",
            "— if you’ve done this kind of thing before": "- 如果您以前做過這樣的事",
            "Set up in Desktop": "安裝到桌面",
            "We recommend every repository include a": "我們推薦每個倉庫都包括",
            ", and": "，和",
            "…or create a new repository on the command line": "…或在命令行上建立一個新的倉庫",
            "…or push an existing repository from the command line": "…或從命令行中推送現有的倉庫",
            "…or import code from another repository": "…或從另一個倉庫庫匯入代碼",
            "You can initialize this repository with code from a Subversion, Mercurial, or TFS project.": "您可以初始化此倉庫從一個 Subversion，Mercurial 或 TFS 項目。",
            "Import code": "匯入代碼",

            // commits 頁面
            "committed": "提交於",
            "Merge pull request": "合併拉取請求",
            "Confirm merge": "確認合併",
            "Close pull request": "關閉拉取請求",

            "Copy the full SHA": "複製完整的 SHA",
            "Browse the repository at this point in the history": "瀏覽該階段的歷史倉庫內容",

            "Newer": "新的",
            "Older": "舊的",

            // branches 頁面
            "Overview": "概述",
            "Yours": "您的",
            "Active": "活躍的",
            "Stale": "陳舊的",
            "All branches": "所有分支",
            "Search branches…": "搜尋分支…",

            "Your branches": "您的分支",
            "You haven’t pushed any branches to this repository.": "您沒有推送任何分支到該倉庫。",
            "Active branches": "活躍的分支",
            "There aren’t any active branches.": "沒有任何活躍的分支。",
            "Stale branches": "陳舊的分支",
            "There aren’t any stale branches.": "沒有任何陳舊的分支。",
            "View more active branches": "檢視更多活躍的分支",
            "View more stale branches": "檢視更多陳舊的分支",
            "Compare": "比較",
            "Change default branch": "更改預設分支",

            // Releases 頁面
            "Releases": "發布",
            "Pre-release": "預發布",
            "Downloads": "下載",
            "Notes": "說明",
            "There aren’t any releases here": "沒有任何發布內容",
            "Create a new release": "建立一個發布",
            "Releases are powered by": "發布是通過在倉庫中標記",
            "tagging specific points of history": "特定歷史版本",
            "in a repository. They’re great for marking release points like": "，用於發布的版本類似",

            "Latest release": "最新髮布",
            "Read release notes": "閱讀發布說明",
            "released this": "發布它",
            "tagged this": "標註",

            "Draft a new release": "起草新版本發布",
            "Add release notes": "加入發布說明",
            "Edit release notes": "編輯發布說明",
            "(No release notes)": "(沒有發布說明)",
            "Release notes": "發布說明",

            "Edit tag": "修改標籤",
            "Edit release": "修改發布",
            "Delete": "刪除",
            "Are you sure?": "您確定一定以及肯定嗎？",
            "This will delete the information for this tag.": "將刪除該標籤的所有訊息。",
            "Delete this tag": "刪除此標籤",
            "Your tag was removed": "標籤刪除成功！",

            "Existing tag": "已存在的標籤",
            "Markdown supported": "Markdown 語法支援",
            "Attach binaries by dropping them here or": "拖曳檔案到這來加入附件",
            "This is a pre-release": "這是一個預發布版本",
            "We’ll point out that this release is identified as non-production ready.": "我們會指定該版本為未正式發布。",
            "Update release": "更新髮布",
            "Publish release": "發布版本",
            "Save draft": "儲存草稿",
            "Saved!": "已儲存",
            "Saving draft failed. Try again?": "儲存失敗，再試一次？",

            // 圖表頁面
            "Contributors": "貢獻者",
            "Traffic": "流量",
            "Commits": "提交",
            "Code frequency": "頻率",
            "Punch card": "時刻",
            "Network": "網路",
            "Members": "成員",

            "Contributions to master, excluding merge commits": "對主分支的貢獻，不包括合併提交",
            "Contributions:": "貢獻者:",
            "Filter contributions": "篩選貢獻者",
            "Additions": "加入數量",
            "Deletions": "刪除數量",

        },
        "regexp": [ // 正則翻譯
            [/HTTPS\s+(recommended)/, "HTTPS (推薦)"],
            [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub 桌面版，儲存 $1 到您的電腦。"],
            [/([\d,]+) Open/, "$1 個開放的"],
            [/([\d,]+) Closed/, "$1 個關閉的"],
            [/View all issues opened by (.+)/, "檢視所有 $1 的問題"],
            [/Welcome to the ([^ ]+) wiki!/, "歡迎造訪 $1 的 wiki"],
            [/([\d,]+) participants?/, "$1 參與者"],
            [/Commits on (.+)/, "提交於 $1"],
            // bug [/from (.+)/, "從 $1"],
            [/wants to merge ([\d,]+) commits? into/, "需要合併 $1 次提交到"],
            [/([\d,]+) commits?/, "$1 次提交"],
            [/to ([^\n]+)[\n\s]+since this release/, "到 $1 分支在此發布中。"],
            [/· ([\d,]+) comments?/, "$1 次提交"]
        ],
    },

    "homepage": { // 未登入首頁
        "static": { // 靜態翻譯
            "Pick a username": "選擇一個使用者名稱",
            "Your email address": "您的郵件地址",
            "Create a password": "建立一個密碼",
            "Sign up for GitHub": "註冊 GitHub",

            "Use at least one letter, one numeral, and seven characters.": "密碼需要字母和數字組成的 7 位以上字串。",
            "By clicking \"Sign up for GitHub\", you agree to our": "點擊 “註冊 GitHub”，表示您同意我們的",
            "terms of service": "服務條款",
            "and": "和",
            "privacy policy": "隱私政策條款",
            "We'll occasionally send you account related emails.": "我們會偶爾發送您的帳戶相關的電子郵件。",

            "How people build software": "人們如何構建軟體",
            "Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.": "數以百萬計的開發人員使用 GitHub 建立個人項目，支援他們的企業，共同在開放原始碼技術。",

            "Introducing unlimited": "引入無限制的",
            "private repositories": "私人倉庫",
            "All of our paid plans on GitHub.com now include unlimited private repositories.": "所有在我們 GitHub.com 上的付費使用者，我們將提供無限制的私人倉庫。",
            "Sign up": "註冊",
            "to get started or": "開始使用或",
            "read more about this change on our blog": "閱讀更多訊息在我們的部落格上",

            "Welcome home, developers": "歡迎回來，開發者們",
            "GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.": "GitHub 提供了一個快速，靈活和協作開發過程，讓您對自己或與他人合作。",

            "For everything you build": "為您打造",
            "Host and manage your code on GitHub. You can keep your work private or share it with the world.": "主機和管理您的代碼在 GitHub 上。您可以把您的工作或私人與世界分享。",
            "A better way to work": "一個更好的工作方式",
            "From hobbyists to professionals, GitHub helps developers simplify the way they build software.": "從業餘愛好者到專業人士，GitHub 幫助開發人員簡化的方式構建軟體。",
            "Millions of projects": "數以百萬計的項目",
            "GitHub is home to millions of open source projects. Try one out or get inspired to create your own.": "GitHub 是數百萬開源項目的家園。嘗試一個或獲得靈感來創造您自己的項目。",
            "One platform, from start to finish": "一個平台，從始至終",
            "With hundreds of integrations, GitHub is flexible enough to be at the center of your development process.": "成百上千的整合，GitHub 是足夠靈活的，能夠在您的發展過程的中心。",

            "Who uses GitHub?": "誰在使用 GitHub ?",
            "Individuals": "個人",
            "Use GitHub to create a personal project, whether you want to experiment with a new programming language or host your life’s work.": "使用 GitHub 來建立一個個人項目，不管您想要嘗試一個新的程式語言或主機在您生活及工作。",
            "Communities": "社區",
            "GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.": "GitHub 主機是最大的開放原始碼軟體的集合之一。建立，管理，以及在一些當今最具影響力的技術工作。",
            "Businesses": "企業",
            "Businesses of all sizes use GitHub to support their development process and securely build software.": "各種規模的企業使用的 GitHub 支援其發展過程中，安全地構建軟體。",

            "GitHub is proud to host projects and organizations like": "GitHub 是自豪地舉辦項目和組織，如",
            "Public projects are always free. Work together across unlimited private repositories for $7 / month.": "公共項目是免費的。私人項目需要支付 7 美元一個月的費用。",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "session-authentication": { // 登入頁
        "static": { // 靜態翻譯
            "Sign in to GitHub": "登入 GitHub 帳戶",
            "Username or email address": "使用者名稱/信箱",
            "Password": "密碼",
            "Forgot password?": "忘記密碼",
            "Sign in": "登入",
            "New to GitHub?": "第一次來 GitHub?",
            "Create an account": "那就註冊個帳戶吧",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "signup": { // 註冊頁
        "static": { // 靜態翻譯
            "Join GitHub": "加入 GitHub",
            "The best way to design, build, and ship software.": "最優的方式來設計、構建和存儲軟體",

            "Step 1:": "第一步:",
            "Set up a personal account": "建立個人帳戶",
            "Step 2:": "第二步:",
            "Choose your plan": "選擇您的方案",
            "Step 3:": "第三步:",
            "Go to your dashboard": "去到您的首頁",

            // Step 1:
            "Create your personal account": "建立您的個人帳戶",
            "Username": "使用者名稱 (也是您個人首頁的二級地址)",
            "This will be your username — you can enter your organization’s username next.": "這將是您的使用者名稱 - 也可以是您組織或公司的名稱。",
            "Email Address": "Email 地址",
            "You will occasionally receive account related emails. We promise not to share your email with anyone.": "該信箱用於接收相關的通知郵件。我們承諾不公開您的電子郵件給任何人。",
            "Password": "密碼",
            "Use at least one lowercase letter, one numeral, and seven characters.": "密碼需要字母和數字組成的 7 位以上字串。",
            "By clicking on \"Create an account\" below, you are agreeing to the": "點擊下面的“建立帳戶”，表示您同意我們的",
            "Terms of Service": "服務條款",
            "and the": "和",
            "Privacy Policy": "隱私政策",
            "Create an account": "建立帳戶",

            "You’ll love GitHub": "您將會愛上 GitHub",
            "Unlimited": "無限多的",
            "collaborators": "合作者",
            "public repositories": "公共倉庫",
            "Great communication": "良好的溝通",
            "Friction-less development": "無摩擦開發",
            "Open source community": "開源社區",

            // Step 2:
            "Welcome to GitHub": "歡迎來到 GitHub",
            "You’ve taken your first step into a larger world,": "您已經邁出了第一步進入到更大的世界，",
            "Choose your personal plan": "選擇您的個人方案",
            "Unlimited public repositories for free.": "無限的公共倉庫免費使用",
            "Unlimited private repositories": "無限的私人倉庫",
            "for": "需",
            "$7/month.": "$7/月",
            "¥46.06/month.": "¥46.06/月.",
            "(view in CNY)": "(顯示人民幣價格)",
            "(view in USD)": "(顯示美元價格)",
            "Don’t worry, you can cancel or upgrade at any time.": "別擔心，您可以隨時升級或取消這個方案。",
            "Charges to your account will be made in ": "匯率問題說明，不翻譯了...",
            "Secure": "安全",
            "Enter your billing details": "輸入您的帳單明細",
            "Pay with": "支付方式",
            "Credit card": "信用卡",
            "PayPal account": "PayPal 帳戶",
            "Credit card number": "信用卡號",
            "Accepted cards": "支援的卡",
            "Help me set up an organization next": "幫我建立一個組織",
            "Organizations are separate from personal accounts and are best suited for businesses who need to manage permissions for many employees.": "組織是獨立於個人帳戶，是最適合需要管理權限對許多員工的企業。",
            "Learn more about organizations.": "閱讀更多關於組織的訊息。",
            "Finish sign up": "完成註冊",

            "Both plans include:": "這兩種方案包括：",
            "Collaborative code review": "協作代碼審查",
            "Issue tracking": "問題跟蹤",
            "Unlimited public repositories": "無限制的公共倉庫",
            "Join any organization": "加入任何組織",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "notifications": { // 通知頁面
        "static": { // 靜態翻譯
            "Mark all as read": "全部標為已讀",
            "Are you sure?": "您確定嗎？",
            "Are you sure you want to mark all unread notifications as read?": "您確定要將所有的未讀通知標記為已讀？",
            "Mark all notifications as read": "全部標為已讀",

            "Notifications": "通知",
            "Watching": "關注的倉庫",
            "Unread": "未讀",
            "Participating": "參與話題",
            "All notifications": "所有通知",

            "No new notifications.": "沒有新的通知。",
            "Depending on": "根據",
            "your notification settings": "您的通知設定",
            ", you’ll see updates here for your conversations in watched repositories.": "，您將看到您關注倉庫的更新訊息。",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "watching": { // 關注的倉庫頁面
        "static": { // 靜態翻譯
            "Notifications": "通知",
            "Watching": "關注的倉庫",

            "Watched repositories": "關注的倉庫",
            "Sorted by most recently watched.": "按最近關注排序",
            "Unwatch all": "取消所有關注",
            "Notification settings": "通知設定",
            "You can change how you receive notifications from your account settings.": "您可以修改接收通知的方式。",
            "Change notification settings": "修改通知設定",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "stars": { // 按讚頁面
        "static": { // 靜態翻譯
            "All stars": "所有倉庫",
            "Your repositories": "您的倉庫",
            "Others' repositories": "其他倉庫",

            "Filter by languages": "篩選語言",
            "Jump to a friend": "去好基友那",
        },
        "regexp": [ // 正則翻譯
        ],
    },

    "trending": { // 趨勢頁面
        "static": { // 靜態翻譯
            "Trending in open source": "開源趨勢",
            "See what the GitHub community is most excited about today.": "看看 GitHub 社區今天最受關注的項目。",
            "See what the GitHub community is most excited about this week.": "看看 GitHub 社區本週最受關注的項目。",
            "See what the GitHub community is most excited about this month.": "看看 GitHub 社區本月最受關注的項目。",

            "Trending developers": "開發者趨勢",
            "These are the organizations and developers building the hot tools today.": "這是今天建立熱門項目的組織和開發人員。",
            "These are the organizations and developers building the hot tools this week.": "這是本週建立熱門項目的組織和開發人員。",
            "These are the organizations and developers building the hot tools this month.": "這是本月建立熱門項目的組織和開發人員。",

            "Repositories": "倉庫",
            "Developers": "開發者",

            "Trending:": "趨勢:",
            "Adjust time span": "調整的時間跨度",
            "today": "今天",
            "this week": "本週",
            "this month": "本月",

            "All languages": "所有語言",
            "Unknown languages": "未知語言",

            "Other:": "其他:",
            "Languages": "語言",
            "Other Languages": "其他語言",
            "Filter Languages": "篩選語言",
        },
        "regexp": [ // 正則翻譯
            [/([\d,]+) stars today([^B]+)[\w ]+/, "今天 $1 讚$2建立者"],
            [/([\d,]+) stars this week([^B]+)[\w ]+/, "本週 $1 讚$2建立者"],
            [/([\d,]+) stars this month([^B]+)[\w ]+/, "本月 $1 讚$2建立者"],
        ],
    },

    "showcases": { // 展示頁面
        "static": { // 靜態翻譯
            "Open source showcases": "開源展示",
            "Browse popular repositories based on the topic that interests you most.": "瀏覽熱門倉庫基於您最感興趣的話題。",
            "Search showcases": "搜尋展示",
        },
    },


    "issues": { // 問題頁面
        "static": { // 靜態翻譯
            "Created": "已建立",
            "Assigned": "已分配",
            "Mentioned": "提到的",

            "Visibility": "可見性",
            "Repository visibility": "倉庫可見性",
            "Private repositories only": "只有私有倉庫",
            "Public repositories only": "只有公共庫",

            "Organization": "組織",
            "Filter by organization or owner": "通過組織或所有者篩選",
            "Filter organizations": "篩選組織",

            "Sort": "排序",
            "Sort by": "排序方式",
            "Newest": "最新的",
            "Oldest": "最老的",
            "Most commented": "最多評論",
            "Least commented": "最少評論",
            "Recently updated": "最近更新",
            "Least recently updated": "最早更新",
            "Most reactions": "最多回應",

            "No results matched your search.": "沒有符合您的搜尋結果。",
            "Use the links above to find what you’re looking for, or try": "使用上面的連結找到您要找的內容，或嘗試",
            "a new search query": "新的搜尋查詢",
            ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。過濾選單也是快速找到問題最相關的您超級有幫助的。",
            "ProTip!": "專業提示！",
            "Updated in the last three days": "更新了最後三天：",
        },
        "regexp": [ // 正則翻譯
            [/(\d+) Open/, "$1 未處理"],
            [/(\d+) Closed/, "$1 已處理"],
        ],
    },


    "search": { // 搜尋頁面
        "static": { // 靜態翻譯
            "Search more than": "這裡有超過",
            "repositories": "的倉庫供您搜尋",

            "Repositories": "倉庫",
            "Code": "代碼",
            "Users": "使用者",

            "Languages": "語言",

            "Advanced search": "進階搜尋",
            "Cheat sheet": "搜尋技巧",
            "You could try an": "您可以試一試",
            "advanced search": "進階搜尋",

            "Sort:": "排序:",
            "Sort options": "排序選項",
            "Best match": "最佳比對",
            "Most stars": "最多讚",
            "Fewest stars": "最少讚",
            "Most forks": "最多派生",
            "Fewest forks": "最少派生",
            "Recently updated": "最近更新",
            "Least recently updated": "最早更新",

            // 進階搜尋
            "Advanced options": "進階選項",
            "From these owners": "指定作者",
            "In these repositories": "指定倉庫",
            "Created on the dates": "建立日期",
            "Written in this language": "使用語言",
            "Any Language": "任何語言",
            "Popular": "流行的",
            "Everything else": "其他語言",

            "Repositories options": "倉庫選項",
            "With this many stars": "指定被讚數",
            "With this many forks": "指定派生數",
            "Of this size": "倉庫大小",
            "Pushed to": "推送於",
            "Return repositories": "搜尋結果",
            "not": "不",
            "and": "要",
            "only": "只",
            "including forks.": "包括被派生的倉庫。",

            "Code options": "代碼選項",
            "With this extension": "檔案後綴",
            "Of this file size": "檔案大小",
            "In this path": "檔案路徑",
            "Return code from forked repositories": "搜尋結果包括被派生的倉庫。",

            "Issues options": "問題選項",
            "In the state": "問題狀態",
            "With this many comments": "評論數量",
            "With the labels": "問題標籤",
            "Opened by the author": "提問人",
            "Mentioning the users": "提到誰",
            "Assigned to the users": "分配給誰",
            "Updated before the date": "更新於",

            "Users options": "使用者選項",
            "With this full name": "使用者全稱",
            "From this location": "來自哪裡",
            "With this many followers": "有多少粉絲",
            "With this many public repositories": "有多少公共倉庫",
            "Working in this language": "擅長什麼語言",

        },
        "regexp": [ // 正則翻譯
            [/We’ve found ([\d,]+) repository results/, "我們為您找到 $1 個相關結果"],
            [/We couldn’t find any repositories matching '(.+)'/, "我們沒有找到任何與 '$1' 相關的結果"],
        ],
    },


    "gist": { // 代碼片段頁面
        "static": { // 靜態翻譯
            "Search…": "搜尋代碼片段…",
            "All gists": "所有片段",
            "New gist": "新增片段",
            "Your gists": "您的片段",
            "Starred gists": "已讚片段",
            "Your GitHub profile": "設定",

            "View profile and more": "檢視更多訊息",
            "See all of your gists": "檢視您的所有片段",
            "Instantly share code, notes, and snippets.": "即時分享您的代碼，筆記，片段，以及靈感。",
            "Gist description…": "片段描述",

            "Filename including extension…": "檔案名 (包括副檔名)",
            "Indent mode": "縮進模式",
            "Spaces": "空格",
            "Tabs": "TAB",
            "Indent size": "縮進大小",
            "Line wrap mode": "換行模式",
            "No wrap": "無換行",
            "Soft wrap": "軟換行",
            "Add file": "加入檔案",
            "Create secret gist": "建立私有片段",
            "Secret gists are hidden from search engines but visible to anyone you give the URL.": "私有片段搜尋引擎是搜不到的，但是您可以分享您的 url 給他們。",
            "Create public gist": "建立公共片段",

            // All gists 頁面
            "Sort:": "排序:",
            "Sort options": "排序選項",
            "Recently created": "最近建立的",
            "Least recently created": "最早建立的",
            "Recently updated": "最近更新的",
            "Least recently updated": "最早更新的",
            "Filter:": "篩選:",
            "Filter options": "篩選選項",
            "Public & Secret": "公共 & 私有",
            "Public only": "僅公共",
            "Secret only": "僅私有",
            "forked from": "派生自",
            "Created": "建立於",
            "View": "檢視",
            "Newer": "新的",
            "Older": "舊的",

            // View 代碼 頁面
            "Edit": "編輯",
            "Delete": "刪除",
            "Star": "按讚",
            "Unstar": "取消按讚",
            "User actions": "使用者操作",
            "Report abuse": "檢舉該使用者",

            "Code": "代碼",
            "Revisions": "修訂",
            "Stars": "被讚",
            "Forks": "派生",

            // 代碼頁面
            "What would you like to do?": "您想做什麼？",
            "Embed this gist in your website.": "Embed 可嵌入到您的網頁中。",
            "Copy sharable URL for this gist.": "複製 URL 共享這個片段。",
            "Clone with Git or checkout with SVN using the repository's web address.": "Git 複製或 SVN 檢出該倉庫所使用的 web 位址。",
            "Clone with an SSH key and passphrase from your GitHub settings.": "使用 SSH 金鑰複製",
            "Learn more about clone URLs": "更多的複製方法",

            "Copy to clipboard": "複製到剪貼簿",
            "Copied!": "複製成功!",
            "Download ZIP": "下載 ZIP",
            "Permalink": "永久連結",
            "Raw": "原始碼",

            // 修訂頁面
            "Unified": "整合",
            "Split": "分割",
            "created": "建立",
            "this gist": "該片段於",

            // 編輯代碼頁面
            "Editing": "編輯",
            "Make secret": "轉為私有",
            "Cancel": "取消",
            "Update public gist": "更新片段",

            // 已讚頁面
            "Starred": "讚了",
            "You don’t have any starred gists yet.": "您還沒有讚過任何片段。",
        },
        "regexp": [ // 正則翻譯
            [/View ([^ ]+) on GitHub/, "檢視 $1 的 GitHub"],
            [/(\d+) files?/, "$1 檔案"],
            [/(\d+) forks?/, "$1 派生"],
            [/(\d+) comments?/, "$1 評論"],
            [/(\d+) stars?/, "$1 讚"],
            [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub 桌面版，儲存 $1 到您的電腦。"],
        ],
    },

    "oauth": { // 應用授權
        "static": { // 靜態翻譯
            "Authorize application": "應用授權",
            "by": "的",
            "would like permission to access your account": "想造訪您的帳戶",
            "Review permissions": "檢視權限",
            "Public data only": "僅公共資料",
            "Limited access to your public data": "僅限造訪您的公共資料",
            "This application will be able to identify you and read public information.": "此應用程式將能識別您的身份和讀取您的公共訊息。",
            "Learn more": "更多",

            "Visit application’s website": "造訪應用官網",
            "Learn more about OAuth": "檢視更多授權訊息",
        },
        "regexp": [ // 正則翻譯
        ],
    },
};


// 公共複用翻譯部分
I18N.zh.pulls = I18N.zh.issues;
