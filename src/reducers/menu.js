const defState = {
  hide: true,
  top: 80,
  left: 360,
  opts: "desk",
  attr: null,
  dataset: null,
  data: {
    desk: {
      width: "310px",
      secwid: "200px",
    },
    task: {
      width: "220px",
      secwid: "120px",
      ispace: false, // show the space for icons in menu
    },
    app: {
      width: "310px",
      secwid: "200px",
    },
  },
  menus: {
    desk: [
      {
        name: "檢視(V)",
        icon: "view",
        type: "svg",
        opts: [
          {
            name: "大圖示(R)",
            action: "changeIconSize",
            payload: "large",
          },
          {
            name: "中圖示(R)",
            action: "changeIconSize",
            payload: "medium",
          },
          {
            name: "小圖示(N)",
            action: "changeIconSize",
            payload: "small",
            dot: true,
          },
          {
            type: "hr",
          },
          {
            name: "顯示桌面圖示",
            action: "deskHide",
            check: true,
          },
        ],
      },
      {
        name: "排序方式(O)",
        icon: "sort",
        type: "svg",
        opts: [
          {
            name: "名稱",
            action: "changeSort",
            payload: "name",
          },
          {
            name: "大小",
            action: "changeSort",
            payload: "size",
          },
          {
            name: "修改日期",
            action: "changeSort",
            payload: "date",
          },
        ],
      },
      {
        name: "重新整理(E)",
        action: "refresh",
        type: "svg",
        icon: "refresh",
      },
      {
        type: "hr",
      },
      {
        name: "新增(W)",
        icon: "New",
        type: "svg",
        opts: [
          {
            name: "資料夾",
          },
          {
            name: "捷徑",
          },
          {
            name: "文字文件",
          },
          {
            name: "WinRAR ZIP 壓縮檔",
          },
        ],
      },
      {
        type: "hr",
      },
      {
        name: "顯示設定(D)",
        icon: "display",
        type: "svg",
        action: "SETTINGS",
        payload: "full",
      },
      {
        name: "個人化(R)",
        icon: "personalize",
        type: "svg",
        action: "SETTINGS",
        payload: "full",
      },
      {
        type: "hr",
      },
      {
        name: "替換桌面背景",
        action: "WALLNEXT",
      },
      {
        name: "在終端中開啟(T)",
        icon: "terminal",
        action: "OPENTERM",
        payload: "C:\\Users\\Blue\\Desktop",
      },
      {
        name: "關於",
        action: "DESKABOUT",
        icon: "win/info",
        payload: true,
      },
    ],
    task: [
      {
        name: "排序圖標",
        opts: [
          {
            name: "居左",
            action: "changeTaskAlign",
            payload: "left",
          },
          {
            name: "居中",
            action: "changeTaskAlign",
            payload: "center",
            dot: true,
          },
        ],
      },
      {
        type: "hr",
      },
      {
        name: "搜尋",
        opts: [
          {
            name: "顯示",
            action: "TASKSRCH",
            payload: true,
          },
          {
            name: "隱藏",
            action: "TASKSRCH",
            payload: false,
          },
        ],
      },
      {
        name: "開始",
        opts: [
          {
            name: "顯示",
            action: "TASKWIDG",
            payload: true,
          },
          {
            name: "隱藏",
            action: "TASKWIDG",
            payload: false,
          },
        ],
      },
      {
        type: "hr",
      },
      {
        name: "顯示桌面",
        action: "SHOWDSK",
      },
    ],
    app: [
      {
        name: "開啟",
        action: "performApp",
        payload: "open",
      },
      {
        name: "以系統管理員身分執行(A)",
        action: "performApp",
        payload: "open",
        icon: "win/shield",
      },
      {
        name: "開啟檔案所在位置",
        dsb: true,
      },
      {
        name: "釘選到開始畫面",
        dsb: true,
      },
      {
        name: "壓縮成zip檔",
        dsb: true,
      },
      {
        name: "複製到檔案位置",
        dsb: true,
      },
      {
        name: "內容",
        dsb: true,
      },
      {
        type: "hr",
      },
      {
        name: "刪除捷徑",
        action: "performApp",
        payload: "delshort",
      },
      {
        name: "刪除",
        action: "delApp",
        payload: "delete",
      },
    ],
  },
};

const menusReducer = (state = defState, action) => {
  var tmpState = {
    ...state,
  };
  if (action.type == "MENUHIDE") {
    tmpState.hide = true;
  } else if (action.type == "MENUSHOW") {
    tmpState.hide = false;
    tmpState.top = (action.payload && action.payload.top) || 272;
    tmpState.left = (action.payload && action.payload.left) || 430;
    tmpState.opts = (action.payload && action.payload.menu) || "desk";
    tmpState.attr = action.payload && action.payload.attr;
    tmpState.dataset = action.payload && action.payload.dataset;
  } else if (action.type == "MENUCHNG") {
    tmpState = {
      ...action.payload,
    };
  }

  return tmpState;
};

export default menusReducer;
