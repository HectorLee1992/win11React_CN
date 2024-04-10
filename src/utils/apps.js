export const gene_name = () =>
  Math.random().toString(36).substring(2, 10).toUpperCase();

let installed = JSON.parse(localStorage.getItem("installed") || "[]");

const apps = [
  {
    name: "Start",
    icon: "home",
    type: "action",
    action: "STARTMENU",
  },
  {
    name: "Search",
    icon: "search",
    type: "action",
    action: "SEARCHMENU",
  },
  {
    name: "Widget",
    icon: "widget",
    type: "action",
    action: "WIDGETS",
  },
  {
    name: "設定",
    icon: "settings",
    type: "app",
    action: "SETTINGS",
  },
  {
    name: "工作管理員",
    icon: "taskmanager",
    type: "app",
    action: "TASKMANAGER",
  },
  {
    name: "檔案總管",
    icon: "explorer",
    type: "app",
    action: "EXPLORER",
  },
  {
    name: "Microsoft Edge",
    icon: "edge",
    type: "app",
    action: "MSEDGE",
  },
  {
    name: "Store",
    icon: "store",
    type: "app",
    action: "WNSTORE",
  },
  {
    name: "資源回收桶",
    icon: "bin0",
    type: "app",
  },
  {
    name: "本機",
    icon: "win/user",
    type: "app",
    action: "EXPLORER",
  },
  {
    name: "鬧鐘和時鐘",
    icon: "alarm",
    type: "app",
  },
  {
    name: "計算機",
    icon: "calculator",
    type: "app",
    action: "CALCUAPP",
  },
  {
    name: "日歷",
    icon: "calendar",
    type: "app",
  },
  {
    name: "相機",
    icon: "camera",
    type: "app",
    action: "CAMERA",
  },
  {
    name: "手機連接",
    icon: "yphone",
    type: "app",
  },
  {
    name: "反饋中心",
    icon: "feedback",
    type: "app",
  },
  {
    name: "入門",
    icon: "getstarted",
    type: "app",
    action: "OOBE",
  },
  {
    name: "獲取幫助",
    icon: "help",
    type: "app",
    action: "EXTERNAL",
    payload: "https://win11react-docs.andrewstech.me/",
  },
  {
    name: "Yammer",
    icon: "yammer",
    type: "app",
  },
  {
    name: "郵件",
    icon: "mail",
    type: "app",
    action: "EXTERNAL",
    payload: "mailto:inwinter04@163.com",
  },
  {
    name: "電影和電視",
    icon: "movies",
    type: "app",
  },
  {
    name: "Xbox",
    icon: "xbox",
    type: "app",
  },
  {
    name: "Office",
    icon: "msoffice",
    type: "app",
  },
  {
    name: "朗讀程式",
    icon: "narrator",
    type: "app",
  },
  {
    name: "新聞",
    icon: "news",
    type: "app",
  },
  {
    name: "記事本",
    icon: "notepad",
    type: "app",
    action: "NOTEPAD",
  },
  {
    name: "便籤",
    icon: "notes",
    type: "app",
  },
  {
    name: "OneDrive",
    icon: "oneDrive",
    type: "app",
  },
  {
    name: "OneNote",
    icon: "onenote",
    type: "app",
  },
  {
    name: "Outlook",
    icon: "outlook",
    type: "app",
  },
  {
    name: "照片",
    icon: "photos",
    type: "app",
  },
  {
    name: "Windows 安全中心",
    icon: "security",
    type: "app",
  },
  {
    name: "Spotify",
    icon: "spotify",
    type: "app",
    action: "SPOTIFY",
  },
  {
    name: "Sharepoint",
    icon: "share",
    type: "app",
  },
  {
    name: "Skype",
    icon: "skype",
    type: "app",
  },
  {
    name: "截圖工具",
    icon: "snip",
    type: "app",
  },
  {
    name: "Teams",
    icon: "teams",
    type: "app",
  },
  {
    name: "命令提示字元",
    icon: "terminal",
    type: "app",
    action: "TERMINAL",
  },
  {
    name: "提示",
    icon: "tips",
    type: "app",
  },
  {
    name: "To Do",
    icon: "todo",
    type: "app",
  },
  {
    name: "地圖",
    icon: "maps",
    type: "app",
  },
  {
    name: "錄音機",
    icon: "voice",
    type: "app",
  },
  {
    name: "天氣",
    icon: "weather",
    type: "app",
  },
  {
    name: "Whiteboard",
    icon: "board",
    type: "app",
    action: "WHITEBOARD",
  },
  {
    name: "Cortana",
    icon: "cortana",
    type: "app",
  },
  {
    name: "原著Github",
    icon: "github",
    type: "app",
    action: "EXTERNAL",
    payload: "https://github.com/inwinter04/win11React_CN",
  },
];

for (let i = 0; i < installed.length; i++) {
  installed[i].action = gene_name();
  apps.push(installed[i]);
}

export default apps;
