import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import DbnSfp from '../model/dbnSfp/DbnSfp';
import DefaultDbnSfpService from '@service/DefaultDbnSfpService';

const Item = styled.div.attrs({
    className: 'font-bold text-xl text-red-200',
})``;

const Field = styled.li.attrs({
    className: 'text-blue-300',
})``;

const IndexPage: NextPage = () => {
    const [dbnSfpData, setDbnSfpData] = useState<DbnSfp>();

    /*
        실제 구현 시에는 axios의 configuration 완료된 인스턴스를 store 에 보관하여 singleton 으로 사용.
     */
    const dbnSfpService = new DefaultDbnSfpService();

    useEffect(() => {
        dbnSfpService.getSample().then((data) => setDbnSfpData(data));
    }, []);

    return (
        <div>
            <Item>aminoAcid</Item>
            <ul>
                <Field>alt : {dbnSfpData?.aminoAcid.alt}</Field>
                <Field>ref : {dbnSfpData?.aminoAcid.ref}</Field>
            </ul>
            <hr />

            <Item>frequency</Item>
            <ul>
                <Field>alspac : {dbnSfpData?.frequency?.alspac}</Field>
                <Field>ul10k : {dbnSfpData?.frequency?.uk10k}</Field>
                <Field>twinsuk : {dbnSfpData?.frequency?.twinsuk}</Field>
            </ul>
            <hr />

            <Item>metaScores</Item>
            <ul>
                <li>
                    <div>metaLR (json string)</div>
                    <pre>{JSON.stringify(dbnSfpData?.metaScores?.metaLR)}</pre>
                </li>
            </ul>
            <hr />

            <Item>transcriptList</Item>
            <ul>
                {dbnSfpData?.transcriptList?.map((item) => (
                    <Field key={item.transcriptId}>{item.transcriptId}</Field>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
