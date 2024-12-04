import React from 'react';
import LegalCenterSubRouteTemplate from '../_local-components/LegalCenterSubRouteTemplate';
import { Metadata } from 'next';
import getPageDefaultMetadata from '@/utils/metadataChunks/getPageDefaultMetadata';



function page() {


    return (
        <LegalCenterSubRouteTemplate
            heading='Community guidelines'
            pageComponent='CommunityGuidelines'
        >
            <>
                <div>
                    <h2>Site Terms of Service</h2>
                    <p>This Site Terms of Service Agreement (“Terms”) governs your use of the STARZFI® marketplace platform offered by Baron App, Inc., doing business as StarzFi (“we”, “us”, or “StarzFi”), including our website (StarzFi.com), mobile application (“App”), and services we provide through them (collectively, the website, App, and services referred to as our “Site”). “You” refers to you as a user of the Site.</p>

                    <p>These Terms apply to users of, including visitors to, our Site. Use of our Site is also subject to our current Acceptable Use Policy and Community Guidelines. Your use of our Site as a Talent User (defined below) is governed by the Talent Terms of Service. (“Talent Terms”).
                        PLEASE READ THESE TERMS CAREFULLY. By using our Site or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by these Terms. If you do not agree, do not access or use our Site.</p>
                    <p>ARBITRATION NOTICE: Section 17 of these Terms contains provisions governing how claims that you and StarzFi have against each other are resolved, including any claims that arose or were asserted prior to the “Last Updated” date at the top of these Terms. It contains an arbitration agreement that will, with limited exceptions, require disputes between you and StarzFi to be submitted to binding and final arbitration. Unless you opt out of the arbitration agreement as described in Section 17: (1) you may pursue claims and seek relief against us only on an individual basis, not as a plaintiff or class member in any class or representative action or proceeding; and (2) you waive your right to seek relief in a court of law and to have a jury trial on your claims.</p>
                </div>
                <div>
                    <h2>StarzFi Marketplace</h2>
                    <p>This Site Terms of Service Agreement (“Terms”) governs your use of the STARZFI® marketplace platform offered by Baron App, Inc., doing business as StarzFi (“we”, “us”, or “StarzFi”), including our website (StarzFi.com), mobile application (“App”), and services we provide through them (collectively, the website, App, and services referred to as our “Site”). “You” refers to you as a user of the Site.</p>

                    <p>These Terms apply to users of, including visitors to, our Site. Use of our Site is also subject to our current Acceptable Use Policy and Community Guidelines. Your use of our Site as a Talent User (defined below) is governed by the Talent Terms of Service. (“Talent Terms”).
                        PLEASE READ THESE TERMS CAREFULLY. By using our Site or otherwise indicating your acceptance (for example, by agreeing when creating or logging into your account, clicking “I Agree,” etc.), you represent and warrant that you have read, understand, and agree to be bound by these Terms. If you do not agree, do not access or use our Site.</p>

                    <p>ARBITRATION NOTICE: Section 17 of these Terms contains provisions governing how claims that you and StarzFi have against each other are resolved, including any claims that arose or were asserted prior to the “Last Updated” date at the top of these Terms. It contains an arbitration agreement that will, with limited exceptions, require disputes between you and StarzFi to be submitted to binding and final arbitration. Unless you opt out of the arbitration agreement as described in Section 17: (1) you may pursue claims and seek relief against us only on an individual basis, not as a plaintiff or class member in any class or representative action or proceeding; and (2) you waive your right to seek relief in a court of law and to have a jury trial on your claims.</p>
                </div>
            </>
        </LegalCenterSubRouteTemplate>
    )
}

export default page;

const title = 'Legal Center | Community Guidelines';
const description = `Read up on StarzFi Community Guidelines`;

export const metadata: Metadata = getPageDefaultMetadata(title, description, '/legal-center/community-guidelines');