// Content Scriptからのメッセージをリッスン
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "badgeCount") {
        // アイコンのバッジを更新
        chrome.action.setBadgeText({ text: message.payload.toString() });
        chrome.action.setBadgeBackgroundColor({ color: "red" });
    }
});

// ポップアップ表示時にContent Scriptへ再カウントのメッセージを送信
// chrome.action.onPopupOpening.addListener(async (info) => {
//     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.tabs.sendMessage(tab.id, { type: "recountAssignments" });
// });

export {};
