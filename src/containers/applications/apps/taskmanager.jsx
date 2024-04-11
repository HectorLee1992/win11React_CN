import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";
import { Icon } from "../../../utils/general";
import "./assets/taskmanager.scss";

import apps from "../../../utils/apps";

let appList = [];

apps.map((e) => {
  appList.push(e.name);
});

export const Taskmanager = () => {
  const wnapp = useSelector((state) => state.apps.taskmanager);

  const [tab, setTab] = useState("處理程序");
  const [nav, setNav] = useState("open");

  const tabNames = [
    { title: "處理程序", icon: "faTableCellsLarge" },
    { title: "效能", icon: "faWaveSquare" },
    { title: "應用程式歷程記錄", icon: "faClockRotateLeft" },
    { title: "開機", icon: "faGaugeHigh" },
    { title: "使用者", icon: "faUser" },
    { title: "詳細資料", icon: "faList" },
    { title: "服務", icon: "faPuzzlePiece" },
  ];

  const powerUsage = ["非常低", "低", "中", "高", "非常高"];

  return (
    <div
      className="taskmanagerApp floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name="工作管理員"
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col">
          <nav className={nav}>
            {tabNames.map((t, i) => {
              return (
                <div
                  key={i}
                  className={`navLink ${t.title === tab ? "selected" : ""}`}
                  onClick={() => setTab(t.title)}
                >
                  <Icon className="mx-2" fafa={t.icon} />
                  <span className="tabName">{t.title}</span>
                </div>
              );
            })}
            <div className="marker"></div>
          </nav>
          <main className="win11Scroll">
            <h3>{tab}</h3>
            {(() => {
              switch (tab) {
                case "處理程序":
                  return (
                    <div className="處理程序">
                      <table>
                        <thead>
                          <tr>
                            <th>名稱</th>
                            <th>CPU</th>
                            <th>記憶體</th>
                            <th>磁碟</th>
                            <th>網路</th>
                            <th>GPU</th>
                            <th>電源用量</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appList.map((e, i) => {
                            return (
                              <tr key={i}>
                                <td className="name">{e}</td>
                                <td>{(Math.random() * 10).toFixed(2)}%</td>
                                <td>{(Math.random() * 100).toFixed(2)} MB</td>
                                <td>{(Math.random() * 50).toFixed(2)} MB/s</td>
                                <td>{(Math.random() * 50).toFixed(2)} MBps</td>
                                <td>{(Math.random() * 10).toFixed(2)}%</td>
                                <td>
                                  {
                                    powerUsage[
                                      Math.floor(
                                        Math.random() * powerUsage.length,
                                      )
                                    ]
                                  }
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                default:
                  return;
              }
            })()}
          </main>
          <div className="navMenuBtn" onClick={() => setNav(nav ? "" : "open")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 48 48"
              width={24}
              height={24}
            >
              <path d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
