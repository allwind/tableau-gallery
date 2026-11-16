// 學生作品資料
// 可以用 admin.html 編輯後下載新的 data.js，再上傳到 GitHub 取代這個檔案；
// 也可以直接在 GitHub 上編輯這個檔案。
// 欄位：name（姓名，必填）、url（Tableau Public 網址，必填）、
//       title（作品名稱，選填）、image（自訂截圖網址，選填，留空則自動抓 Tableau 縮圖）

window.SITE_TITLE = "學生 Tableau 作品集";
window.SITE_SUBTITLE = "點擊作品即可開啟 Tableau Public 互動頁面";

// 管理頁密碼（只存雜湊值，不是密碼本身；請用管理頁的「更改密碼」功能修改）
window.ADMIN_PASSWORD = null;

window.STUDENTS = [
  {
    "name": "範例學生",
    "title": "範例作品",
    "url": "https://public.tableau.com/app/profile/tableau.docs.team/viz/Superstore_24/Overview"
  }
];
