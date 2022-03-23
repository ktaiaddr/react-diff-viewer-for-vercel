import logo from './logo.svg';
import './App.css';
import React, {PureComponent, useState} from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import { TextareaAutosize } from '@material-ui/core';

const _oldCode = `
ウクライナのゼレンスキー大統領のオンライン演説が日本の国会で午後6時から行われ、ゼレンスキー大統領は「アジアで初めてロシアに対する圧力をかけ始めたのが日本です。引き続き継続をお願いします」と語った。

【画像】国会でのオンライン演説の様子を見る

細田衆院議長のあいさつの後、ゼレンスキー大統領は、岸田総理大臣や衆参両院の議長をはじめとする国会議員に対し、ウクライナ語で語りかけ同時通訳された。

「本日は私がウクライナの大統領として初めて外国国家元首としてお話しできることを光栄に思います。」と述べた後、「日本が援助の手を差し伸べて下さいました。心から感謝致します。日本の皆さまが苦しい大変な戦争停止のために努力しはじめた。ウクライナの平和の復活に動き始めました。ウクライナだけでなくヨーロッパ・世界にとって重要です。この戦争が終わらない限り安全に感じる人はいないでしょう。
アジアで初めてロシアに対する圧力をかけ始めたのが日本です。引き続き継続をお願いします」と支援に感謝するとともに、引き続きの支援を要請した。

国会で外国首脳がオンライン演説を行うのは初めてで、設備の関係から、本会議場ではなく、議員会館の2つの会議室が使用された。
`;
const _newCode = `
ウクライナのゼレンスキー大統領のオンライン演説が日本の国会で午後7時から行われ、ゼレンスキー大統領は「アジアで初めてロシアに対する圧力をかけ始めたのが日本です。引き続き継続をお願いします」と語った。

【画像】国会でのオンライン演説の様子を見る

細田衆院議長のあいさつの後、ゼレンスキー大統領は、岸田総理大臣や衆参両院の議長をはじめとする国会議員に対し、ウクライナ語で語りかけ同時通訳された。

「本日は私がウクライナの大統領として初めて外国国家元首としてお話しできることを光栄に思います。」と述べた後、「日本が援助の手を差し伸べて下さいました。心から感謝致します。日本の皆さまが苦しい大変な戦争停止のために努力しはじめた。ウクライナの平和の復活に動き始めました。ウクライナだけでなくヨーロッパ・世界にとって重要です。この戦争が終わらない限り安全に感じる人はいないでしょう。
アジアで初めてロシアに対する圧力をかけ始めたのが日本です。引き続き継続をお願いします」と支援に感謝するとともに、引き続きの支援を要請した。

国会で外国首脳がオンライン演説を行うのは初めてで、設備の関係から、本会議場ではなく、議員会館の3つの会議室が使用された。
`;


function App() {
    const [oldCode,setOldCode] = useState(_oldCode)
    const [newCode,setNewCode] = useState(_oldCode)

    const changeOld = (e)=>{
        setOldCode(e.target.value)
    }
    const changeNew = (e)=>{
        setNewCode(e.target.value)
    }
    return (
        <div className="App">

            <TextareaAutosize aria-label="minimum height" minRows={20} placeholder={oldCode} value={oldCode} style={{width:700}} onChange={changeOld}/>
            <TextareaAutosize aria-label="minimum height" minRows={20} placeholder={newCode} value={newCode} style={{width:700}} onChange={changeNew}/>
            <ReactDiffViewer
                oldValue={oldCode}
                newValue={newCode}
                splitView={true}
                disableWordDiff={false}
                hideLineNumbers={true}
                showDiffOnly={false}
                leftTitle={`変更前`}
                rightTitle={`変更前`}
            />

        </div>
    );
}

export default App;
