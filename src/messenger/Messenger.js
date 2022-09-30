import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const PAGE_ID = '110313691825912';
const APP_ID = '1016672749008005';
export default function Messenger() {
    return (
        <MessengerCustomerChat
            pageId={PAGE_ID}
            appId={APP_ID}
        />
    )
}