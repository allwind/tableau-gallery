# 學生 Tableau 作品集

純靜態網頁，可直接放在 GitHub Pages，不需要資料庫。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 作品展示頁（首頁） |
| `admin.html` | 管理頁：新增／編輯／排序作品，產生新的 `data.js` |
| `data.js` | 學生資料（姓名、網址） |
| `common.js` | 共用程式（解析網址、抓 Tableau 縮圖） |

## 架設到 GitHub Pages

1. 在 GitHub 建立新的 repository（例如 `tableau-gallery`，設為 Public）。
2. **Add file → Upload files**，把這 4 個檔案上傳，按 **Commit changes**。
3. 進入 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)`，按 **Save**。
4. 等 1～2 分鐘，網址會是：`https://你的帳號.github.io/tableau-gallery/`

## 新增學生作品

1. 打開 `https://你的帳號.github.io/tableau-gallery/admin.html`
2. 輸入姓名和 Tableau Public 網址（可一筆一筆加，或從 Excel 批次貼上）。
3. 按「下載 data.js」，回到 GitHub 上傳取代舊的 `data.js`。

也可以直接在 GitHub 點 `data.js` → 鉛筆圖示編輯，照格式加一筆：

```js
{
  "name": "王小明",
  "title": "台灣人口分析",
  "url": "https://public.tableau.com/app/profile/xxx/viz/Workbook/Sheet1"
},
```

## 截圖說明

截圖是自動從 Tableau Public 抓的縮圖，網址需要包含**活頁簿與工作表名稱**，例如：

- `https://public.tableau.com/app/profile/帳號/viz/活頁簿名稱/工作表名稱` ✅
- `https://public.tableau.com/views/活頁簿名稱/工作表名稱` ✅
- `https://public.tableau.com/app/profile/帳號/viz/活頁簿名稱` ⚠️ 缺工作表，抓不到截圖

若某位學生的截圖抓不到，可以在 `image` 欄位填入自訂圖片網址（例如把截圖上傳到 repo 的 `images/` 資料夾，填 `images/wang.png`）。

## 注意

`admin.html` 是公開的，但它無法直接修改網站——只有能登入你 GitHub 的人才能上傳新的 `data.js`，所以別人打開也改不了內容。
