import logo from './logo.svg';
import './App.css';
import React, {PureComponent, useState} from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import {Grid, TextareaAutosize} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const _oldCode = `
サイトエンジン株式会社は2008年に設立されたデジタルマーケティング支援会社です。「改善のタネを広める」を企業理念に、よりよい方法を広めるために日々研究しています。
創業から一貫してデジタルに特化してコンテンツの企画や制作を行っています。データに基づいた科学的アプローチで集客や売上upにつながるデジタルマーケティング戦略を立案し、Webサイト修正からコンテンツの制作まで実行します。作って終わりではなく、アクセス解析や売上データなどを活用した改善施策の提案まで行い、PDCAサイクルを回すのをお手伝いいたします。

あなたの会社独自のノウハウが蓄積されていくよう、ともに試行錯誤していきます。デジタルマーケティングを理解したパートナーとしてご活用ください。

経営理念
改善のタネを広める

うまくいかずに悩んでいる人には解決法を
うまくいっている人にもより良くするための方法を提供できる会社になる。
だれもが幸せになれるようにサイトエンジンが見つけた「改善のネタ」をさまざまな人と共有する。

ビジョン
「もっといい」をすべての人に

情報化されていないものをデータにしたり、再編集して、より良い体験を提供する。
サイトエンジンが得たその手法をさらに別の誰かに提供することで、
世界中により良い体験を共有していく。
`;
const _newCode = `
サイトエンジン株式会社は2009年に設立されたデジタルマーケティング支援会社です。「改善のタネを広める」を企業理念に、よりよい方法を広めるために日々研究しています。
創業から一貫してデジタルに特化してコンテンツの企画や制作を行っています。データに基づいた科学的アプローチで集客や売上アップにつながるデジタルマーケティング戦略を立案し、Webサイト修正からコンテンツの制作まで実行します。作って終わりではなく、アクセス解析や売上データなどを活用した改善施策の提案まで行い、PDCAサイクルを回すのをお手伝いいたします。

あなたの会社独自のノウハウが蓄積されていくよう、ともに試行錯誤していきます。デジタルマーケティングを理解したパートナーとしてご活用下さい。

経営理念
改善のタネを広める

うまくいかずに悩んでいる人には解決法を
うまくいっている人にもより良くするための方法を提供できる会社になる。
だれもが幸せになれるようにサイトエンジンが見つけた「改善のタネ」をさまざまな人と共有する。

ビジョン
「もっと良い」をすべての人に

情報化されていないものをデータにしたり、再編集して、より良い体験を提供する。
サイトエンジンが得たその手法をさらに別の誰かに提供することで、
世界中により良い体験を共有していく。
`;


function App() {
    const [oldCode,setOldCode] = useState(_oldCode)
    const [newCode,setNewCode] = useState(_newCode)

    const changeOld = (e)=>{
        setOldCode(e.target.value)
    }
    const changeNew = (e)=>{
        setNewCode(e.target.value)
    }
    return (
        <div className="App" style={{textAlign:"left"}}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                    <TextareaAutosize aria-label="minimum height" minRows={20} placeholder={oldCode} value={oldCode} style={{width:600}} onChange={changeOld}/>
                    <TextareaAutosize aria-label="minimum height" minRows={20} placeholder={newCode} value={newCode} style={{width:600}} onChange={changeNew}/>
                    </Grid>
                    {/*https://github.com/praneshr/react-diff-viewer#props*/}
                    <ReactDiffViewer
                        oldValue={oldCode}
                        newValue={newCode}
                        splitView={true}
                        disableWordDiff={false}
                        hideLineNumbers={true}
                        showDiffOnly={false}
                        leftTitle={`変更前`}
                        rightTitle={`変更前`}
                        useDarkTheme={false}
                    />
                </Container>
            </React.Fragment>

        </div>
    );
}

export default App;
