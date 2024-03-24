import React, { useEffect, useState } from "react";

const Popup: React.FC = () => {
    const [unfinishedAssignmentsCount, setUnfinishedAssignmentsCount] = useState<number>(0);

    useEffect(() => {
        // バックグラウンドスクリプトから未提出の課題の数を取得
        chrome.runtime.sendMessage({ type: "getUnfinishedAssignmentsCount" }, (response) => {
            if (response) {
                setUnfinishedAssignmentsCount(response.count);
            }
        });
    }, []);

    return (
        <div>
            <h1>未提出の課題: {unfinishedAssignmentsCount}</h1>
        </div>
    );
};

export default Popup;
