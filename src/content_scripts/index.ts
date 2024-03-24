// 未提出の課題を表すセレクターを定義

// TODO:: 未提出の課題を表すセレクターを正確に特定する
const UNSUBMITTED_ASSIGNMENT_SELECTOR = ".noSubmissionData";
const ASSIGNMENT_LIST_URL = "https://utol.ecc.u-tokyo.ac.jp/lms/task";

// Background Scriptからのメッセージをリッスン
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "getUnfinishedAssignmentsCount") {
        if (window.location.href === ASSIGNMENT_LIST_URL) {
            countAssignments();
        } else {
            // 課題一覧ページに遷移する処理を実装
            window.location.href = ASSIGNMENT_LIST_URL;
        }
    }
});

// 未提出の課題数を数える関数
function countAssignments() {
    const assignments = document.querySelectorAll(UNSUBMITTED_ASSIGNMENT_SELECTOR);
    const count = assignments.length;

    // 課題数をBackground Scriptに送信
    chrome.runtime.sendMessage({ type: "badgeCount", payload: count });

    console.log("未提出の課題数: ", count);
}

// ページ読み込み時に初期カウントを実行
window.onload = () => {
    if (window.location.href === ASSIGNMENT_LIST_URL) {
        countAssignments();
    }
};

export {};
