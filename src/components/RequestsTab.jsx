import { useState } from "react";
import {InboxIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

function RequestsTab() {
    const[activeTab, setActiveTab] = useState('received');
    const tabs = [
        {
            key: 'received',
            label: 'Received',
            count: 3,
            icon: <InboxIcon className="w-5 h-5 mr-2" />,
        },
        {
            key: 'sent',
            lablel: 'Sent',
            count: 3,
            icon: <PaperAirplaneIcon className="w-5 h-5 mr-2" />,
        },
    ];
    

    return (
        <>
        </>
    )
}

export default RequestsTab
