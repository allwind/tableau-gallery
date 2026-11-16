// 共用工具：解析 Tableau Public 網址、產生縮圖網址

function parseTableauUrl(url) {
  if (!url) return null;
  let u = String(url).trim();
  try { u = decodeURIComponent(u); } catch (e) {}
  // 支援：
  //  https://public.tableau.com/app/profile/xxx/viz/Workbook/View
  //  https://public.tableau.com/views/Workbook/View?...
  //  https://public.tableau.com/profile/xxx#!/vizhome/Workbook/View
  const m = u.match(/\/(?:viz|views|vizhome)\/([^\/?#]+)(?:\/([^\/?#]+))?/i);
  if (!m) return null;
  return { workbook: m[1], view: m[2] || null };
}

// 依序嘗試的縮圖網址
function thumbnailCandidates(student) {
  const list = [];
  if (student.image) list.push(student.image);
  const p = parseTableauUrl(student.url);
  if (p && p.view) {
    const wb = encodeURIComponent(p.workbook);
    const v = encodeURIComponent(p.view);
    const prefix = encodeURIComponent(p.workbook.slice(0, 2));
    list.push(`https://public.tableau.com/static/images/${prefix}/${wb}/${v}/1.png`);
    list.push(`https://public.tableau.com/thumb/views/${wb}/${v}`);
  }
  return list;
}

function placeholderImage(name) {
  const ch = (name || "?").trim().charAt(0) || "?";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400">
    <rect width="100%" height="100%" fill="#e8eef5"/>
    <text x="50%" y="50%" font-size="140" font-family="sans-serif" fill="#9fb3c8"
      text-anchor="middle" dominant-baseline="central">${escapeHtml(ch)}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// 圖片載入失敗時自動換下一個候選網址
function attachThumbnail(img, student) {
  const candidates = thumbnailCandidates(student);
  let i = 0;
  const next = () => {
    if (i < candidates.length) img.src = candidates[i++];
    else { img.onerror = null; img.src = placeholderImage(student.name); img.classList.add("placeholder"); }
  };
  img.onerror = next;
  next();
}

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
